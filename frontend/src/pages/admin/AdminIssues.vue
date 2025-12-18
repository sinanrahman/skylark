<script>
  import api from '@/services/api' // axios instance
  
  export default {
    data() {
      return {
        issues: [],
        selectedIssue: null
      }
    },
  
    mounted() {
      this.fetchIssues()
    },
  
    methods: {
      async fetchIssues() {
        const res = await api.get('/get-all-issues')
        this.issues = res.data
      },
  
      openModal(issue) {
        this.selectedIssue = { ...issue }
        const modal = new bootstrap.Modal(
          document.getElementById('issueModal')
        )
        modal.show()
      },
  
      async updateStatus() {
        await api.patch(`/issues/${this.selectedIssue._id}/status`, {
          status: this.selectedIssue.status
        })
        this.fetchIssues()
      },
  
      async markResolved(id) {
        await api.patch(`/issues/${id}/status`, {
          status: 'Resolved'
        })
        this.fetchIssues()
      },
  
      formatDate(date) {
        return new Date(date).toLocaleDateString('en-IN', {
          day: '2-digit',
          month: 'short',
          year: 'numeric'
        })
      },
  
      statusClass(status) {
        return {
          'badge-open': status === 'Open',
          'badge-progress': status === 'In Progress',
          'badge-resolved': status === 'Resolved'
        }
      }
    }
  }
  </script>
  
<template>
  <div class="container-fluid px-4">

    <div class="page-header">
      <h4>Reported Issues</h4>
      <p class="mb-0 text-muted">Manage and resolve issues reported by users.</p>
    </div>

    <div class="table-box table-responsive">
      <table class="table table-hover align-middle">
        <thead>
          <tr>
            <th>#</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Issue Type</th>
            <th>Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
  <tr v-for="(issue, index) in issues" :key="issue._id">
    <td>{{ index + 1 }}</td>
    <td>{{ issue.name }}</td>
    <td>{{ issue.email }}</td>
    <td>{{ issue.issueType }}</td>
    <td>{{ formatDate(issue.createdAt) }}</td>
    <td>
      <span
        class="badge"
        :class="statusClass(issue.status)"
      >
        {{ issue.status }}
      </span>
    </td>
    <td>
      <button class="btn btn-view me-1" @click="openModal(issue)">
        <i class="bi bi-eye"></i>
      </button>

      <button
        v-if="issue.status !== 'Resolved'"
        class="btn btn-resolve"
        @click="markResolved(issue._id)"
      >
        <i class="bi bi-check-circle"></i>
      </button>
    </td>
  </tr>
</tbody>

      </table>
      <div class="modal fade" id="issueModal" tabindex="-1">
  <div class="modal-dialog modal-lg modal-dialog-centered">
    <div class="modal-content">

      <div class="modal-header">
        <h5 class="modal-title">Issue Details</h5>
        <button class="btn-close" data-bs-dismiss="modal"></button>
      </div>

      <div class="modal-body" v-if="selectedIssue">
        <p><strong>User:</strong> {{ selectedIssue.name }}</p>
        <p><strong>Email:</strong> {{ selectedIssue.email }}</p>
        <p><strong>Issue Type:</strong> {{ selectedIssue.issueType }}</p>

        <p class="mt-3"><strong>Description:</strong></p>
        <p class="text-muted">{{ selectedIssue.description }}</p>

        <div class="mt-3">
          <label class="form-label">Status</label>
          <select
            v-model="selectedIssue.status"
            class="form-select"
          >
            <option>Open</option>
            <option>In Progress</option>
            <option>Resolved</option>
          </select>
        </div>
      </div>

      <div class="modal-footer">
        <button
          class="btn btn-primary"
          @click="updateStatus"
          data-bs-dismiss="modal"
        >
          Update Status
        </button>
      </div>

    </div>
  </div>
</div>

    </div>

  </div>
</template>

<style scoped>
body {
  background: #f5f7fb;
  font-family: 'Poppins', sans-serif;
}

.page-header {
  background: #fff;
  padding: 22px 30px;
  border-radius: 18px;
  box-shadow: 0 12px 30px rgba(0,0,0,0.1);
  margin-bottom: 25px;
}

.page-header h4 {
  font-weight: 700;
  color: #0a2540;
}

.table-box {
  background: #fff;
  border-radius: 20px;
  padding: 25px;
  box-shadow: 0 18px 40px rgba(0,0,0,0.12);
}

table thead {
  background: #0a2540;
  color: #fff;
}

table th,
table td {
  vertical-align: middle;
  text-align: center;
  font-size: 14px;
}

.badge-open {
  background: #dc3545;
}

.badge-progress {
  background: #ffc107;
  color: #000;
}

.badge-resolved {
  background: #198754;
}

.btn-view {
  background: #0d6efd;
  color: #fff;
  border-radius: 20px;
  padding: 5px 12px;
  font-size: 13px;
}

.btn-resolve {
  background: #198754;
  color: #fff;
  border-radius: 20px;
  padding: 5px 12px;
  font-size: 13px;
}

.btn-view:hover,
.btn-resolve:hover {
  opacity: 0.9;
  color: #fff;
}
</style>
