<template>
  <div class="container-fluid px-4">

    <!-- PAGE HEADER -->
    <div class="page-header d-flex justify-content-between align-items-center">
      <div>
        <h4>Users</h4>
        <p class="mb-0 text-muted">Manage registered users of Skylark</p>
      </div>
    </div>

    <!-- USERS TABLE -->
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
              <th>Joined On</th>
              <th class="text-center">Action</th>
            </tr>
          </thead>
          <tbody>

            <tr>
              <td>1</td>
              <td>#U1021</td>
              <td>Rahul Sharma</td>
              <td>rahul@gmail.com</td>
              <td>+91 98765 43210</td>
              <td><span class="role user">User</span></td>
              <td><span class="status active">Active</span></td>
              <td>12 Jan 2024</td>
              <td class="text-center">
                <button class="action-btn" title="View">
                  <i class="bi bi-eye"></i>
                </button>
                <button class="action-btn" title="Block">
                  <i class="bi bi-slash-circle"></i>
                </button>
              </td>
            </tr>

            <tr>
              <td>2</td>
              <td>#U1022</td>
              <td>Amit Verma</td>
              <td>amit@gmail.com</td>
              <td>+91 91234 56789</td>
              <td><span class="role user">User</span></td>
              <td><span class="status blocked">Blocked</span></td>
              <td>20 Feb 2024</td>
              <td class="text-center">
                <button class="action-btn" title="View">
                  <i class="bi bi-eye"></i>
                </button>
                <button class="action-btn" title="Unblock">
                  <i class="bi bi-check-circle"></i>
                </button>
              </td>
            </tr>

            <tr>
              <td>3</td>
              <td>#U1001</td>
              <td>Admin</td>
              <td>admin@skylark.com</td>
              <td>+91 90000 00000</td>
              <td><span class="role admin">Admin</span></td>
              <td><span class="status active">Active</span></td>
              <td>01 Jan 2024</td>
              <td class="text-center">
                <button class="action-btn" title="View">
                  <i class="bi bi-eye"></i>
                </button>
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>

  </div>
</template>

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
