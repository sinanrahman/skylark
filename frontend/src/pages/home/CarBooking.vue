<template>
  <div class="page-wrapper">
    <div class="container">

      <div class="page-header">
        <h2>Book Your Ride</h2>
        <p class="text-muted">
          Choose your dates and enjoy a smooth drive with Skylark
        </p>
      </div>

      <div class="row booking-card">

        <div class="col-lg-5 p-0 slider-col">
          <div id="carSlider" class="carousel slide car-slider" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div v-for="(img, index) in car.images" :key="index" class="carousel-item"
                :class="{ active: index === 0 }">
                <img :src="img.url || img" />
              </div>
            </div>

            <div class="car-overlay">
              <h4>{{ car.name }}</h4>
              <div class="car-meta">
                {{ car.category }} • {{ car.transmission }} • {{ car.seat }} Seats
              </div>

              <div class="car-features">
                <span>{{ car.fuel }}</span>
                <span>{{ car.transmission }}</span>
                <span>AC</span>
                <span>Air Bags</span>
              </div>

              <div class="price-box">
                ₹{{ car.price }} / day
              </div>
            </div>

          </div>
        </div>

        <div class="col-lg-7 form-col">
          <div class="booking-form">

            <form>
              <div class="row g-4">

                <div class="col-md-6">
                  <label>Pickup Date</label>
                  <input type="date" class="form-control" v-model="booking.pickupDate" />
                </div>

                <div class="col-md-6">
                  <label>Return Date</label>
                  <input type="date" class="form-control" v-model="booking.returnDate" />
                </div>

                <div class="col-md-6">
                  <label>Pickup Location</label>
                  <input type="text" class="form-control" v-model="booking.pickupLocation" />
                </div>

                <div class="col-md-6">
                  <label>Drop Location</label>
                  <input type="text" class="form-control" v-model="booking.dropLocation" />
                </div>

                <div class="col-md-6">
                  <label>Driver Option</label>
                  <select class="form-select" v-model="booking.driverOption">
                    <option>No Driver</option>
                    <option>With Driver</option>
                  </select>
                </div>

                <div class="col-md-6">
                  <label>Payment Method</label>
                  <select class="form-select" v-model="booking.paymentMethod">
                    <option>Cash</option>
                    <option>Online Payment</option>

                  </select>
                </div>

              </div>

              <div class="summary-box mt-4">
                Duration <span>{{ totalDays }} Days</span><br />
                Driver Fee <span>₹{{ driverFee }}</span>
                <hr />
                Total Amount <span>₹{{ totalAmount }}</span>
              </div>

              <button type="button" class="btn-book" @click="openPaymentModal">
                <i class="bi bi-credit-card"></i> Proceed to Payment
              </button>

              <router-link type="button" to="/cars" class="btn-book">
                Back to Cars
              </router-link>

            </form>
            <div class="modal fade" id="paymentModal" tabindex="-1">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content payment-modal">

                  <div class="modal-header border-0">
                    <h5 class="modal-title fw-bold">Payment Summary</h5>
                    <button class="btn-close" data-bs-dismiss="modal"></button>
                  </div>

                  <div class="modal-body">

                    <div class="summary-row">
                      <span>Car</span>
                      <strong>{{ car.name }}</strong>
                    </div>

                    <div class="summary-row">
                      <span>Days</span>
                      <strong>{{ totalDays }}</strong>
                    </div>

                    <div class="summary-row">
                      <span>Driver</span>
                      <strong>{{ booking.driverOption }}</strong>
                    </div>

                    <hr />

                    <div class="total-box">
                      <span>Total Payable</span>
                      <h4>₹{{ totalAmount }}</h4>
                    </div>

                  </div>

                  <div class="modal-footer border-0">
                    <button class="btn pay-btn w-100" @click="payNow">
                      Pay Securely
                    </button>
                  </div>

                </div>
              </div>
            </div>



          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import api from '@/services/api'

export default {
  name: 'CarBooking',

  data() {
    return {
      carId: null,
      car: {
        images: []
      },
      booking: {
        pickupDate: '',
        returnDate: '',
        pickupLocation: '',
        dropLocation: '',
        driverOption: 'No Driver',
        paymentMethod: 'Online'
      }
    }
  },

  computed: {
    totalDays() {
      if (!this.booking.pickupDate || !this.booking.returnDate) return 0

      const start = new Date(this.booking.pickupDate)
      const end = new Date(this.booking.returnDate)
      const diff = (end - start) / (1000 * 60 * 60 * 24)

      return diff > 0 ? diff : 0
    },

    driverFee() {
      return this.booking.driverOption === 'With Driver' ? 1500 : 0
    },

    totalAmount() {
      return this.totalDays * (this.car.price || 0) + this.driverFee
    }
  },

  methods: {
    async fetchCar() {
      try {
        const res = await api.get(`/getcar/${this.carId}`)
        this.car = res.data.data
      } catch (err) {
        console.error('Failed to fetch car', err)
      }
    },

    openPaymentModal() {
      if (!this.totalDays) {
        alert('Please select valid pickup & return dates')
        return
      }

      const modal = new bootstrap.Modal(
        document.getElementById('paymentModal')
      )
      modal.show()
    },

    async payNow() {
      try {
        // 1️⃣ Create Razorpay order
        const res = await api.post('/create-order', {
          amount: this.totalAmount
        })

        const options = {
          key: 'rzp_test_RsrQeKYvUzCeYD',
          amount: res.data.order.amount,
          currency: 'INR',
          name: 'Skylark Cars',
          description: 'Car Booking Payment',
          order_id: res.data.order.id,

          handler: async (response) => {
            await this.saveBooking(response)

            const modalEl = document.getElementById('paymentModal')
            const modal = bootstrap.Modal.getInstance(modalEl)
            modal.hide()

            this.$router.push(`/car/${this.car._id}`)
          },

          prefill: {
            name: this.$store.state.user.name,
            email: this.$store.state.user.mail,
            contact: this.$store.state.user.phone
          },

          theme: {
            color: '#0a57a9'
          }
        }

        new Razorpay(options).open()
      } catch (err) {
        console.error(err)
        alert('Payment failed ❌')
      }
    },

    async saveBooking(paymentResponse) {
      const payload = {
        userId: this.$store.state.user.id,
        carId: this.carId,
        pickupDate: this.booking.pickupDate,
        returnDate: this.booking.returnDate,
        pickupLocation: this.booking.pickupLocation,
        dropLocation: this.booking.dropLocation,
        driverOption: this.booking.driverOption,
        paymentMethod: 'Online',
        totalDays: this.totalDays,
        totalAmount: this.totalAmount,
        pricePerDay: this.car.price,
        // 💳 Razorpay data
        paymentId: paymentResponse.razorpay_payment_id,
        orderId: paymentResponse.razorpay_order_id,
        paymentStatus: 'Paid'
      }

      await api.post('/bookings', payload)
    }
  },

  mounted() {
    this.carId = this.$route.params.id
    this.fetchCar()

    if (window.bootstrap) {
      new window.bootstrap.Carousel(
        document.getElementById('carSlider')
      )
    }
  }
}
</script>





<style scoped>
.page-wrapper {
  font-family: "Poppins", sans-serif;
  background: linear-gradient(180deg, #81939cf1, #0a57a9);
  min-height: 100vh;
  padding: 40px 0;
}

.page-header {
  text-align: center;
  margin-bottom: 30px;
}

.page-header h2 {
  font-weight: 800;
  color: #0a2540;
}


.booking-card {
  background: #fff;
  border-radius: 26px;
  box-shadow: 0 25px 55px rgba(0, 0, 0, 0.12);
  overflow: hidden;

  display: flex;
  align-items: stretch;
}


.slider-col,
.form-col {
  display: flex;
  flex-direction: column;
}


.car-slider {
  position: relative;
  flex: 1;
  min-height: 100%;
}

.carousel-inner,
.carousel-item {
  height: 100%;
}



.carousel-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  background: transparent;
}

.car-overlay {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;

  padding: 24px 30px;
  color: #fff;

  background: linear-gradient(to top,
      rgba(10, 37, 64, 0.9),
      rgba(10, 37, 64, 0.55),
      rgba(10, 37, 64, 0.2),
      transparent);

  backdrop-filter: blur(6px);
}

.car-overlay h4 {
  font-weight: 800;
}

.car-meta {
  font-size: 13px;
  margin-bottom: 8px;
}

.car-features span {
  font-size: 12px;
  margin-right: 10px;
}

.price-box {
  margin-top: 10px;
  font-size: 16px;
  font-weight: 700;
  background: rgba(255, 255, 255, 0.2);
  padding: 8px 14px;
  border-radius: 14px;
  display: inline-block;
}


.booking-form {
  padding: 35px;
}

.form-control,
.form-select {
  border-radius: 14px;
  padding: 12px;
}


.summary-box {
  background: #f1f7ff;
  border-radius: 18px;
  padding: 18px;
}

.summary-box span {
  float: right;
  font-weight: 700;
  color: #0d6efd;
}


.btn-book {
  background: linear-gradient(135deg, #0d6efd, #00bfff);
  color: #fff;
  border-radius: 35px;
  padding: 14px;
  border: none;
  font-weight: 700;
  width: 100%;
  margin-top: 25px;
  text-align: center;
  text-decoration: none;
}

.payment-modal {
  border-radius: 22px;
  padding: 10px;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 14px;
}

.total-box {
  text-align: center;
  background: linear-gradient(135deg, #0d6efd, #00bfff);
  color: #fff;
  padding: 15px;
  border-radius: 18px;
}

.pay-btn {
  background: linear-gradient(135deg, #0d6efd, #00bfff);
  border-radius: 30px;
  padding: 12px;
  font-weight: 700;
  color: #fff;
}


@media (max-width: 768px) {
  .booking-card {
    flex-direction: column;
  }

  .car-slider {
    height: 320px;
  }
}
</style>