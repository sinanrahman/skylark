<template>
  <div class="container-fluid px-4">

    <!-- PAGE HEADER -->
    <div class="page-header">
      <h4>Reported Issues</h4>
      <p class="mb-0 text-muted">Manage and resolve issues reported by users.</p>
    </div>

    <!-- ISSUES TABLE -->
    <div class="table-box table-responsive">
      <table class="table table-hover align-middle">
        <thead>
          <tr>
            <th>#</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Issue Type</th>
            <th>Description</th>
            <th>Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Rahul Kumar</td>
            <td>rahul@mail.com</td>
            <td>Booking Issue</td>
            <td>Booking confirmation not received</td>
            <td>12 Sep 2025</td>
            <td><span class="badge badge-open">Open</span></td>
            <td>
              <button class="btn btn-view me-1">
                <i class="bi bi-eye"></i>
              </button>
              <button class="btn btn-resolve">
                <i class="bi bi-check-circle"></i>
              </button>
            </td>
          </tr>

          <tr>
            <td>2</td>
            <td>Ayesha Khan</td>
            <td>ayesha@mail.com</td>
            <td>Payment Issue</td>
            <td>Amount deducted twice</td>
            <td>11 Sep 2025</td>
            <td><span class="badge badge-progress">In Progress</span></td>
            <td>
              <button class="btn btn-view me-1">
                <i class="bi bi-eye"></i>
              </button>
              <button class="btn btn-resolve">
                <i class="bi bi-check-circle"></i>
              </button>
            </td>
          </tr>

          <tr>
            <td>3</td>
            <td>John Mathew</td>
            <td>john@mail.com</td>
            <td>Car Issue</td>
            <td>AC not working in booked car</td>
            <td>10 Sep 2025</td>
            <td><span class="badge badge-resolved">Resolved</span></td>
            <td>
              <button class="btn btn-view">
                <i class="bi bi-eye"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
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
