<template>
  <div class="container-fluid px-4">

    <!-- Header -->
    <div class="page-header d-flex justify-content-between align-items-center">
      <div>
        <h4>Booking Details</h4>
        <p class="mb-0 text-muted">View and manage all car bookings</p>
      </div>
    </div>

    <!-- Table -->
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
            <!-- Loading -->
            <tr v-if="loading">
              <td colspan="10" class="text-center py-4">
                Loading bookings...
              </td>
            </tr>

            <!-- Empty -->
            <tr v-else-if="bookings.length === 0">
              <td colspan="10" class="text-center py-4">
                No bookings found
              </td>
            </tr>

            <!-- Data -->
            <tr v-else v-for="(booking, index) in bookings" :key="booking._id">
              <td>{{ index + 1 }}</td>
              <td>#{{ booking.bookingId }}</td>
              <td>{{ booking.userId }}</td>
              <td>{{ booking.carId }}</td>
              <td>{{ formatDate(booking.pickupDate) }}</td>
              <td>{{ formatDate(booking.returnDate) }}</td>
              <td>{{ booking.totalDays }}</td>
              <td>₹{{ booking.totalAmount }}</td>

              <td>
                <span class="status confirmed">Confirmed</span>
              </td>

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

<script>
import api from "@/services/api";

export default {
  name: "BookingDetails",

  data() {
    return {
      bookings: [],
      loading: false
    };
  },

  mounted() {
    this.fetchBookings();
  },

  methods: {
    async fetchBookings() {
      try {
        this.loading = true;
        const res = await api.get("/bookings");
        this.bookings = res.data.bookings || [];
      } catch (error) {
        console.error("Error fetching bookings:", error);
      } finally {
        this.loading = false;
      }
    },

    formatDate(date) {
      if (!date) return "-";
      return new Date(date).toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric"
      });
    }
  }
};
</script>

<style scoped>
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
}

.status.confirmed {
  background: rgba(32,201,151,0.15);
  color: #20c997;
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