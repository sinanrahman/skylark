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

              <!-- <td>
                <span
                  class="status"
                  :class="user.isBlocked ? 'blocked' : 'active'"
                >
                  {{ user.isBlocked ? 'Blocked' : 'Active' }}
                </span>
              </td> -->

              <td class="text-center">
                <button class="action-btn view" @click="openUserModal(user)">
                  <i class="bi bi-eye"></i>
                </button>

                <button class="action-btn edit" @click="openEditModal(user)">
                  <i class="bi bi-pencil"></i>
                </button>

                <button class="action-btn delete" @click="openDeleteModal(user)">
                  <i class="bi bi-trash"></i>
                </button>
              </td>
            </tr>

            <tr v-if="users.length === 0">
              <td colspan="8" class="text-center text-muted py-4">
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
                <p>#{{ selectedUser.id || selectedUser._id.slice(-6) }}</p>
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

    <!-- EDIT USER MODAL -->
    <div class="modal fade" id="editUserModal" tabindex="-1">
      <div class="modal-dialog modal-md modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Update User</h5>
            <button class="btn-close" data-bs-dismiss="modal"></button>
          </div>

          <div class="modal-body" v-if="selectedUser">
            <div class="mb-3">
              <label class="form-label">Name</label>
              <input class="form-control" v-model="selectedUser.name" />
            </div>

            <div class="mb-3">
              <label class="form-label">Email</label>
              <input class="form-control" disabled v-model="selectedUser.mail" />
            </div>

            <div class="mb-3">
              <label class="form-label">Role</label>
              <select class="form-select" v-model="selectedUser.role">
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </div>

          </div>

          <div class="modal-footer">
            <button class="btn btn-secondary" data-bs-dismiss="modal">
              Cancel
            </button>
            <button class="btn btn-primary" @click="updateUser">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- DELETE CONFIRM MODAL -->
    <div class="modal fade" id="deleteUserModal" tabindex="-1">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content delete-modal">

          <div class="modal-header border-0">
            <h5 class="modal-title text-danger">Delete User</h5>
            <button class="btn-close" data-bs-dismiss="modal"></button>
          </div>

          <div class="modal-body text-center">
            <p class="mb-1">
              Are you sure you want to delete
              <strong>{{ selectedUser?.name }}</strong>?
            </p>
            <small class="text-muted">This action cannot be undone.</small>
          </div>

          <div class="modal-footer border-0 justify-content-center">
            <button class="btn btn-secondary" data-bs-dismiss="modal">
              Cancel
            </button>
            <button class="btn btn-danger" @click="confirmDelete">
              Delete
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

  mounted() {
    this.fetchAllUsers()
  },

  methods: {
    async fetchAllUsers() {
      const res = await api.get('/users')
      this.users = res.data.users
    },

    openUserModal(user) {
      this.selectedUser = user
      window.bootstrap.Modal.getOrCreateInstance(
        document.getElementById('userDetailsModal')
      ).show()
    },

    openEditModal(user) {
      this.selectedUser = { ...user }
      new window.bootstrap.Modal(
        document.getElementById('editUserModal')
      ).show()
    },

    openDeleteModal(user) {
      this.selectedUser = user
      new window.bootstrap.Modal(
        document.getElementById('deleteUserModal')
      ).show()
    },

    async updateUser() {
      await api.put(`/users/${this.selectedUser._id}`, this.selectedUser)
      this.fetchAllUsers()
      window.bootstrap.Modal.getInstance(
        document.getElementById('editUserModal')
      ).hide()
    },


    async confirmDelete() {
      await api.delete(`/users/${this.selectedUser._id}`)
      this.fetchAllUsers()
      window.bootstrap.Modal.getInstance(
        document.getElementById('deleteUserModal')
      ).hide()
    },

    formatDate(date) {
      return new Date(date).toLocaleDateString('en-IN')
    }
  }
}
</script>

<style scoped>
.page-header {
  background: #fff;
  padding: 25px 30px;
  border-radius: 18px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  margin-bottom: 25px;
}

.table-box {
  background: #fff;
  border-radius: 22px;
  padding: 25px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
}

.role {
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
}

.role.user {
  background: rgba(13, 110, 253, 0.15);
  color: #0d6efd;
}

.role.admin {
  background: rgba(32, 201, 151, 0.15);
  color: #20c997;
}

.status {
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
}

.status.active {
  background: rgba(32, 201, 151, 0.15);
  color: #20c997;
}

.status.blocked {
  background: rgba(220, 53, 69, 0.15);
  color: #dc3545;
}

.action-btn {
  border: none;
  background: transparent;
  font-size: 18px;
  margin: 0 6px;
  cursor: pointer;
}

.action-btn.view { color: #0d6efd; }
.action-btn.edit { color: #20c997; }
.action-btn.block { color: #ffc107; }
.action-btn.delete { color: #dc3545; }

.action-btn:hover {
  transform: scale(1.1);
}

.modal-content {
  border-radius: 20px;
}

.delete-modal {
  padding: 10px;
}

.form-label {
  font-weight: 600;
}
</style>
