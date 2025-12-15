<template>
  <div class="container-fluid px-4">

    <div class="page-header">
      <h4>Reports</h4>
      <p class="mb-0 text-muted">View and analyze Skylark platform performance</p>
    </div>

    <!-- SUMMARY -->
    <div class="row g-4">

      <div class="col-md-3">
        <div class="summary-card bg-bookings d-flex justify-content-between align-items-center">
          <div>
            <h6>Total Bookings</h6>
            <h3>312</h3>
          </div>
          <div class="summary-icon">
            <i class="bi bi-calendar-check"></i>
          </div>
        </div>
      </div>

      <div class="col-md-3">
        <div class="summary-card bg-revenue d-flex justify-content-between align-items-center">
          <div>
            <h6>Total Revenue</h6>
            <h3>₹4.6L</h3>
          </div>
          <div class="summary-icon">
            <i class="bi bi-currency-rupee"></i>
          </div>
        </div>
      </div>

      <div class="col-md-3">
        <div class="summary-card bg-users d-flex justify-content-between align-items-center">
          <div>
            <h6>Total Users</h6>
            <h3>1,240</h3>
          </div>
          <div class="summary-icon">
            <i class="bi bi-people"></i>
          </div>
        </div>
      </div>

      <div class="col-md-3">
        <div class="summary-card bg-cars d-flex justify-content-between align-items-center">
          <div>
            <h6>Total Cars</h6>
            <h3>48</h3>
          </div>
          <div class="summary-icon">
            <i class="bi bi-car-front"></i>
          </div>
        </div>
      </div>

    </div>

    <!-- REPORT TABLE -->
    <div class="table-box">
      <h5 class="mb-3">Generated Reports</h5>

      <div class="table-responsive">
        <table class="table table-hover align-middle">
          <thead>
            <tr>
              <th>#</th>
              <th>Report ID</th>
              <th>Report Type</th>
              <th>Period</th>
              <th>Generated On</th>
              <th>Status</th>
              <th class="text-center">Action</th>
            </tr>
          </thead>
          <tbody>

            <tr>
              <td>1</td>
              <td>#R1001</td>
              <td><span class="report-type type-booking">Bookings</span></td>
              <td>Jan 2024</td>
              <td>01 Feb 2024</td>
              <td>Completed</td>
              <td class="text-center">
                <button class="action-btn" title="View">
                  <i class="bi bi-eye"></i>
                </button>
                <button class="action-btn" title="Download">
                  <i class="bi bi-download"></i>
                </button>
              </td>
            </tr>

            <tr>
              <td>2</td>
              <td>#R1002</td>
              <td><span class="report-type type-revenue">Revenue</span></td>
              <td>Q1 2024</td>
              <td>05 Apr 2024</td>
              <td>Completed</td>
              <td class="text-center">
                <button class="action-btn">
                  <i class="bi bi-eye"></i>
                </button>
                <button class="action-btn">
                  <i class="bi bi-download"></i>
                </button>
              </td>
            </tr>

            <tr>
              <td>3</td>
              <td>#R1003</td>
              <td><span class="report-type type-user">User Growth</span></td>
              <td>Mar 2024</td>
              <td>01 Apr 2024</td>
              <td>Completed</td>
              <td class="text-center">
                <button class="action-btn">
                  <i class="bi bi-eye"></i>
                </button>
                <button class="action-btn">
                  <i class="bi bi-download"></i>
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
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  margin-bottom: 25px;
}

.page-header h4 {
  font-weight: 700;
  color: #0a2540;
}

.summary-card {
  border-radius: 22px;
  padding: 22px;
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.15);
  color: #fff;
}

.summary-card h6 {
  font-size: 14px;
  opacity: 0.9;
  margin-bottom: 6px;
}

.summary-card h3 {
  font-weight: 800;
  margin-bottom: 0;
}

.bg-bookings {
  background: linear-gradient(135deg, #0d6efd, #00bfff);
}

.bg-revenue {
  background: linear-gradient(135deg, #6f42c1, #9b59b6);
}

.bg-users {
  background: linear-gradient(135deg, #20c997, #38ef7d);
}

.bg-cars {
  background: linear-gradient(135deg, #fd7e14, #ff9f43);
}

.summary-icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
}

.table-box {
  background: #fff;
  border-radius: 22px;
  padding: 25px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
  margin-top: 30px;
}

table th {
  background: #f1f4f9;
  font-size: 14px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #0a2540;
}

table td {
  font-weight: 500;
  color: #333;
  vertical-align: middle;
}

.report-type {
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
  display: inline-block;
}

.type-booking {
  background: rgba(13, 110, 253, 0.15);
  color: #0d6efd;
}

.type-revenue {
  background: rgba(111, 66, 193, 0.15);
  color: #6f42c1;
}

.type-user {
  background: rgba(32, 201, 151, 0.15);
  color: #20c997;
}

.type-car {
  background: rgba(253, 126, 20, 0.15);
  color: #fd7e14;
}

.action-btn {
  background: transparent;
  border: none;
  font-size: 18px;
  color: #0a2540;
  cursor: pointer;
}

.action-btn:hover {
  color: #00bfff;
}
</style>
