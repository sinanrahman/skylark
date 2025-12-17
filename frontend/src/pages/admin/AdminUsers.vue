<template>
  <div class="container-fluid px-4">

    <!-- Header -->
    <div class="page-header d-flex justify-content-between align-items-center">
      <div>
        <h4>Users</h4>
        <p class="mb-0 text-muted">Manage registered users of Skylark</p>
      </div>
    </div>

    <!-- Table -->
    <div class="table-box">
      <div class="table-responsive">
        <table class="table table-hover align-middle">
          <thead>
            <tr>
              <th>#</th>
              <th>User ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Role</th>
              <th>Status</th>
              <!-- <th>Joined On</th> -->
              <th class="text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="(user, index) in users" :key="user._id">
              <td>{{ index + 1 }}</td>
              <td>#{{ user.id || user._id.slice(-6) }}</td>
              <td>{{ user.name || '-' }}</td>
              <td>{{ user.mail }}</td>
              <td>{{ user.phone || '-' }}</td>

              <td>
                <span :class="['role', user.role]">
                  {{ user.role }}
                </span>
              </td>

              <td>
                <span class="status active">Active</span>
              </td>

              <!-- <td>
                {{ user.createdAt ? formatDate(user.createdAt) : '—' }}
              </td> -->

              <td class="text-center">
                <button
                  class="action-btn"
                  @click="openUserModal(user)"
                >
                  <i class="bi bi-eye"></i>
                </button>
              </td>
            </tr>

            <tr v-if="users.length === 0">
              <td colspan="9" class="text-center text-muted py-4">
                No users found
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- USER DETAILS MODAL -->
    <div class="modal fade" id="userDetailsModal" tabindex="-1">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">

          <div class="modal-header">
            <h5 class="modal-title">User Details</h5>
            <button class="btn-close" data-bs-dismiss="modal"></button>
          </div>

          <div class="modal-body" v-if="selectedUser">
            <div class="row g-3">
               <div class="col-md-6">
      <strong>User ID</strong>
      <p>
        #{{ selectedUser.id || selectedUser._id.slice(-6) }}
      </p>
    </div>


              <div class="col-md-6">
                <strong>Name</strong>
                <p>{{ selectedUser.name }}</p>
              </div>

              <div class="col-md-6">
                <strong>Email</strong>
                <p>{{ selectedUser.mail }}</p>
              </div>

              <div class="col-md-6">
                <strong>Phone</strong>
                <p>{{ selectedUser.phone || '—' }}</p>
              </div>

              <div class="col-md-6">
                <strong>Role</strong>
                <p class="text-capitalize">{{ selectedUser.role }}</p>
              </div>

              <div class="col-md-6">
                <strong>Joined On</strong>
                <p>{{ formatDate(selectedUser.createdAt) }}</p>
              </div>
            </div>
          </div>

          <div class="modal-footer">
            <button class="btn btn-secondary" data-bs-dismiss="modal">
              Close
            </button>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
import api from '@/services/api'

export default {
  name: 'Users',

  data() {
    return {
      users: [],
      selectedUser: null
    }
  },

  methods: {
    async fetchAllUsers() {
      const res = await api.get('/users')
      this.users = res.data.users
    },

    formatDate(date) {
      return new Date(date).toLocaleDateString('en-IN')
    },

    openUserModal(user) {
      this.selectedUser = user

      const modalEl = document.getElementById('userDetailsModal')
      const modal = window.bootstrap.Modal.getOrCreateInstance(modalEl)
      modal.show()
    }
  },

  mounted() {
    this.fetchAllUsers()
  }
}
</script>



<style scoped>
body {
  font-family: 'Poppins', sans-serif;
  background: #f5f7fb;
}

.page-header {
  background: #fff;
  padding: 25px 30px;
  border-radius: 18px;
  box-shadow: 0 15px 35px rgba(0,0,0,0.1);
  margin-bottom: 25px;
}

.page-header h4 {
  font-weight: 700;
  color: #0a2540;
}

.table-box {
  background: #fff;
  border-radius: 22px;
  padding: 25px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.12);
}


.table-responsive {
  overflow-x: auto;
  width: 100%;
}
/* 
table {
  width: 100%;
  table-layout: fixed;
} */

table th {
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #0a2540;
  background: #f1f4f9;
}

table td {
  vertical-align: middle;
  font-weight: 500;
  color: #333;
}

.role {
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
  display: inline-block;
}

.role.user {
  background: rgba(13,110,253,0.15);
  color: #0d6efd;
}

.role.admin {
  background: rgba(32,201,151,0.15);
  color: #20c997;
}

.status {
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
  display: inline-block;
}

.status.active {
  background: rgba(32,201,151,0.15);
  color: #20c997;
}

.status.blocked {
  background: rgba(220,53,69,0.15);
  color: #dc3545;
}

.action-btn {
  border: none;
  background: transparent;
  font-size: 18px;
  color: #0a2540;
  cursor: pointer;
}

.action-btn:hover {
  color: #00bfff;
}
</style>
