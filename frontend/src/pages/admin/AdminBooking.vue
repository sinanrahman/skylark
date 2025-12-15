<template>
  <div class="container-fluid px-4">

    <!-- PAGE HEADER -->
    <div class="page-header d-flex justify-content-between align-items-center">
      <div>
        <h4>Booking Details</h4>
        <p class="mb-0 text-muted">View and manage all car bookings</p>
      </div>
    </div>

    <!-- BOOKINGS TABLE -->
    <div class="table-box">
      <div class="table-responsive">
        <table class="table table-hover align-middle">
          <thead>
            <tr>
              <th>#</th>
              <th>Booking ID</th>
              <th>User</th>
              <th>Car</th>
              <th>Pickup Date</th>
              <th>Return Date</th>
              <th>Total Days</th>
              <th>Amount</th>
              <th>Status</th>
              <th class="text-center">Action</th>
            </tr>
          </thead>
          <tbody>

            <tr>
              <td>1</td>
              <td>#BK1023</td>
              <td>Rahul Sharma</td>
              <td>BMW X5</td>
              <td>12 Jan 2025</td>
              <td>15 Jan 2025</td>
              <td>3</td>
              <td>₹18,000</td>
              <td><span class="status confirmed">Confirmed</span></td>
              <td class="text-center">
                <button class="action-btn" title="View">
                  <i class="bi bi-eye"></i>
                </button>
              </td>
            </tr>

            <tr>
              <td>2</td>
              <td>#BK1024</td>
              <td>Amit Verma</td>
              <td>Audi A4</td>
              <td>18 Jan 2025</td>
              <td>20 Jan 2025</td>
              <td>2</td>
              <td>₹10,000</td>
              <td><span class="status pending">Pending</span></td>
              <td class="text-center">
                <button class="action-btn" title="View">
                  <i class="bi bi-eye"></i>
                </button>
              </td>
            </tr>

            <tr>
              <td>3</td>
              <td>#BK1025</td>
              <td>Sneha Patel</td>
              <td>Mercedes C-Class</td>
              <td>05 Jan 2025</td>
              <td>08 Jan 2025</td>
              <td>3</td>
              <td>₹21,000</td>
              <td><span class="status completed">Completed</span></td>
              <td class="text-center">
                <button class="action-btn" title="View">
                  <i class="bi bi-eye"></i>
                </button>
              </td>
            </tr>

            <tr>
              <td>4</td>
              <td>#BK1026</td>
              <td>Karan Mehta</td>
              <td>Hyundai Creta</td>
              <td>10 Jan 2025</td>
              <td>12 Jan 2025</td>
              <td>2</td>
              <td>₹8,000</td>
              <td><span class="status cancelled">Cancelled</span></td>
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

.status {
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
  display: inline-block;
}

.status.pending {
  background: rgba(255,193,7,0.15);
  color: #ffc107;
}

.status.confirmed {
  background: rgba(32,201,151,0.15);
  color: #20c997;
}

.status.completed {
  background: rgba(13,110,253,0.15);
  color: #0d6efd;
}

.status.cancelled {
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
