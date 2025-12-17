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
              <th>Car Name</th>
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
              <td>{{ booking.userId?.name || booking.userId }}</td>
              <td>{{ carNames[booking.carId] || 'Loading...' }}</td>
              <td>{{ formatDate(booking.pickupDate) }}</td>
              <td>{{ formatDate(booking.returnDate) }}</td>
              <td>{{ booking.totalDays }}</td>
              <td>₹{{ booking.totalAmount }}</td>

              <td>
                <span class="status confirmed">Confirmed</span>
              </td>

              <td class="text-center">
                <button
                  class="action-btn"
                  title="View"
                  @click="openBookingModal(booking)"
                >
                  <i class="bi bi-eye"></i>
                </button>
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>

    <!-- BOOKING DETAILS MODAL -->
    <div class="modal fade" id="bookingModal" tabindex="-1">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">

          <div class="modal-header">
            <h5 class="modal-title">Booking Details</h5>
            <button class="btn-close" data-bs-dismiss="modal"></button>
          </div>

          <div class="modal-body" v-if="selectedBooking">
            <div class="row g-3">
              <div class="col-md-6">
                <strong>Booking ID</strong>
                <p>#{{ selectedBooking.bookingId }}</p>
              </div>

              <div class="col-md-6">
                <strong>User</strong>
                <p>{{ selectedBooking.userId?.name || selectedBooking.userId }}</p>
              </div>

              <div class="col-md-6">
                <strong>Car</strong>
                <p>{{ carNames[selectedBooking.carId] }}</p>
              </div>

              <div class="col-md-6">
                <strong>Total Amount</strong>
                <p>₹{{ selectedBooking.totalAmount }}</p>
              </div>

              <div class="col-md-6">
                <strong>Pickup Date</strong>
                <p>{{ formatDate(selectedBooking.pickupDate) }}</p>
              </div>

              <div class="col-md-6">
                <strong>Return Date</strong>
                <p>{{ formatDate(selectedBooking.returnDate) }}</p>
              </div>

              <div class="col-md-6">
                <strong>Total Days</strong>
                <p>{{ selectedBooking.totalDays }}</p>
              </div>

              <div class="col-md-6">
                <strong>Status</strong>
                <p class="text-success fw-semibold">Confirmed</p>
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
import api from "@/services/api";

export default {
  name: "BookingDetails",

  data() {
    return {
      bookings: [],
      carNames: {},      // ✅ cached car names
      selectedBooking: null,
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

        // Fetch all car names once
        this.bookings.forEach(b => {
          if (b.carId && !this.carNames[b.carId]) {
            this.fetchCarName(b.carId);
          }
        });

      } catch (err) {
        console.error("Error fetching bookings:", err);
      } finally {
        this.loading = false;
      }
    },

    async fetchCarName(carId) {
      try {
        const res = await api.get(`/getcar/${carId}`);
        this.carNames[carId] = res.data.data.name;
      } catch (err) {
        this.carNames[carId] = "Unknown";
      }
    },

    openBookingModal(booking) {
      this.selectedBooking = booking;
      window.bootstrap.Modal.getOrCreateInstance(
        document.getElementById("bookingModal")
      ).show();
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

.table-box {
  background: #fff;
  border-radius: 22px;
  padding: 25px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.12);
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