<template>
  <div class="profile-page">

    <div class="profile-navbar">
      <div class="logo">SKYLARK</div>
      <div class="nav-right">
        <i class="bi bi-house"></i>
        <span>{{ this.$store.state.user.username }}</span>
      </div>
    </div>

    <div class="profile-card">

      <div class="profile-header">
        <img :src="`${this.$store.state.user.dp}` || defaultDp" class="profile-dp" />
        <div>
          <h4>{{ this.$store.state.user.name }}</h4>
          <p class="username">@{{ this.$store.state.user.username }}</p>
        </div>

        <button class="btn-edit" @click="openModal">
          Edit Profile
        </button>
      </div>

      <div class="profile-info">
        <div><strong>User ID:</strong> {{ this.$store.state.user.id }}</div>
        <div><strong>Email:</strong> {{ this.$store.state.user.mail }}</div>
        <div><strong>Phone:</strong> {{ this.$store.state.user.phone }}</div>
        <div><strong>Role:</strong> {{ this.$store.state.user.role }}</div>
        <div><strong>Has Booking:</strong> {{ this.$store.state.user.hasbooking ? 'Yes' : 'No' }}</div>
      </div>
    </div>

    <div class="booking-section">
      <h5>My Bookings</h5>

      <table class="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Booking ID</th>
            <th>Car</th>
            <th>Pickup Date</th>
            <th>Return Date</th>
            <th>Total Days</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(b, index) in bookings" :key="b._id">
            <td>{{ index + 1 }}</td>
            <td>#{{ b.bookingId }}</td>
            <td>{{ carNames[b.carId] || "Loading..." }}</td>
            <td>{{ formatDate(b.pickupDate) }}</td>
            <td>{{ formatDate(b.returnDate) }}</td>
            <td>{{ b.totalDays }}</td>
            <td>₹{{ b.totalAmount }}</td>
            <td>
              <span class="status confirmed">Confirmed</span>
            </td>
          </tr>

          <tr v-if="bookings.length === 0">
            <td colspan="8" class="text-center">No bookings found</td>
          </tr>
        </tbody>
      </table>

    </div>
    <div v-if="showModal" class="modal-backdrop" @click.self="closeModal">
      <div class="modal-box">

        <h5>Edit Profile</h5>

        <div class="profile-pic-wrapper">
          <img :src="previewDp || $store.state.user.dp || defaultDp" class="profile-preview" />

          <label class="upload-btn">
            Change Photo
            <input type="file" accept="image/*" hidden @change="handleDpChange" />
          </label>
        </div>

        <div class="form-group">
          <label>Name</label>
          <input type="text" v-model="form.name" />
        </div>

        <div class="form-group">
          <label>Username</label>
          <input type="text" v-model="form.username" />
        </div>

        <div class="form-group">
          <label>Email</label>
          <input type="email" v-model="form.mail" />
        </div>

        <div class="form-group">
          <label>Phone</label>
          <input type="tel" v-model="form.phone" />
        </div>

        <div class="modal-actions">
          <button class="btn-cancel" @click="closeModal">Cancel</button>
          <button class="btn-save" @click="updateProfile">
            Save Changes
          </button>
        </div>

      </div>
    </div>



  </div>
</template>
<script>
import api from "@/services/api";

export default {
  name: "UserProfile",

  data() {
    return {
      user: {},
      bookings: [],
      carNames: {},

      showModal: false,
      previewDp: null,
      selectedDp: null,
      defaultDp: "/img/user/default.png",
      form: {
        name: "",
        username: "",
        mail: "",
        phone: ""
      }
    };
  },

  methods: {
    handleDpChange(e) {
      const file = e.target.files[0];
      if (!file) return;

      this.selectedDp = file;
      this.previewDp = URL.createObjectURL(file);
    },
    async fetchProfile() {
      try {
        const res = await api.get("/users/me");
        this.user = res.data.data;

        const u = this.$store.state.user;
        this.form = {
          name: u.name || "",
          username: u.username || "",
          mail: u.mail || "",
          phone: u.phone || ""
        };
      } catch (err) {
        console.error("Failed to fetch profile:", err);
      }
    },

    async fetchBookings() {
      try {
        const userId = this.$store.state.user.id;
        const res = await api.get(`/bookings/${userId}`);

        this.bookings = res.data.data || [];

        this.bookings.forEach(b => {
          if (b.carId && !this.carNames[b.carId]) {
            this.fetchCarName(b.carId);
          }
        });
      } catch (err) {
        console.error("Error fetching bookings:", err);
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

    openModal() {
      const user = this.$store.state.user;

      this.form = {
        name: user.name || "",
        username: user.username || "",
        mail: user.mail || "",
        phone: user.phone || ""
      };

      this.previewDp = null;
      this.selectedDp = null;
      this.showModal = true;
    },

    closeModal() {
      this.showModal = false;
    },

    async updateProfile() {
      try {
        const formData = new FormData();

        formData.append("name", this.form.name);
        formData.append("username", this.form.username);
        formData.append("mail", this.form.mail);
        formData.append("phone", this.form.phone);
        if (this.selectedDp) {
          formData.append("photo", this.selectedDp);
        }


        await api.put(
          `/users/${this.$store.state.user.id}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          }
        );

        await this.fetchProfile();
        this.closeModal();
      } catch (err) {
        console.error("Profile update failed:", err);
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
  },

  mounted() {
    this.fetchProfile();
    this.fetchBookings();
  }
};
</script>


<style scoped>
.profile-page {
  padding: 30px;
  background: #f4f7fb;
  min-height: 100vh;
}

.profile-navbar {
  display: flex;
  justify-content: space-between;
  padding: 14px 24px;
  background: #0d6efd;
  color: #fff;
  border-radius: 14px;
}

.profile-card {
  background: #fff;
  margin-top: 25px;
  border-radius: 18px;
  padding: 25px;
}

.profile-header {
  display: flex;
  align-items: center;
  gap: 18px;
}

.profile-dp {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  object-fit: cover;
}

.btn-edit {
  margin-left: auto;
  padding: 8px 16px;
  border-radius: 20px;
  background: #0d6efd;
  color: #fff;
  border: none;
}

.profile-info {
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.booking-section {
  margin-top: 30px;
  background: #fff;
  padding: 25px;
  border-radius: 18px;
}

.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, .4);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-box {
  background: #fff;
  padding: 25px;
  border-radius: 18px;
  width: 400px;
}

.form-group {
  margin-bottom: 14px;
}

.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

.btn-save {
  background: #0d6efd;
  color: #fff;
  border: none;
  padding: 8px 18px;
}

.btn-cancel {
  background: #dee2e6;
  border: none;
  padding: 8px 18px;
}

.status.active {
  color: green;
}

.status.completed {
  color: gray;
}

.status.cancelled {
  color: red;
}

.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 110px;
  padding-bottom: 40px;
  z-index: 999;
  overflow-y: auto;
}

.modal-box {
  background: #ffffff;
  width: 420px;
  border-radius: 20px;
  padding: 26px 28px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  animation: modalFade 0.3s ease;
}

.modal-box h5 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 18px;
  text-align: center;
  color: #212529;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 14px;
}

.form-group label {
  font-size: 13px;
  margin-bottom: 6px;
  color: #6c757d;
}

.form-group input {
  padding: 10px 14px;
  border-radius: 12px;
  border: 1px solid #dee2e6;
  font-size: 14px;
  outline: none;
  transition: all 0.2s ease;
}

.form-group input:focus {
  border-color: #0d6efd;
  box-shadow: 0 0 0 3px rgba(13, 110, 253, 0.15);
}

.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 20px;
}

.btn-cancel {
  padding: 9px 18px;
  border-radius: 20px;
  border: none;
  background: #e9ecef;
  color: #495057;
  font-size: 14px;
  cursor: pointer;
  transition: 0.2s;
}

.btn-cancel:hover {
  background: #dee2e6;
}

.btn-save {
  padding: 9px 20px;
  border-radius: 20px;
  border: none;
  background: #0d6efd;
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: 0.2s;
}

.btn-save:hover {
  background: #0b5ed7;
}

/* ANIMATION */
@keyframes modalFade {
  from {
    opacity: 0;
    transform: translateY(10px) scale(0.98);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.profile-pic-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 18px;
}

.profile-preview {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #0d6efd;
  margin-bottom: 10px;
}

.upload-btn {
  font-size: 13px;
  color: #0d6efd;
  cursor: pointer;
  font-weight: 500;
}

@media (max-width: 768px) {
  .booking-section {
    padding: 18px;
  }

  table {
    display: block;
    width: 100%;
    overflow-x: auto;
    white-space: nowrap;
  }

  thead {
    display: none;
  }

  tbody tr {
    display: block;
    margin-bottom: 16px;
    border: 1px solid #dee2e6;
    border-radius: 14px;
    padding: 30px;
    background: #fff;
  }

  tbody td {
    display: flex;
    justify-content: space-between;
    padding: 6px 60px;
    font-size: 14px;
  }

  tbody td::before {
    content: attr(data-label);
    font-weight: 600;
    color: #6c757d;
  }
}

@media (max-width: 768px) {
  .profile-header {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .btn-edit {
    margin-left: 0;
    margin-top: 12px;
  }

  .profile-info {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 576px) {
  .profile-navbar {
    flex-direction: column;
    gap: 8px;
    text-align: center;
  }

  .nav-right {
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: center;
  }
}

@media (max-width: 576px) {
  .profile-page {
    padding: 16px;
  }
}

@media (max-width: 480px) {
  .modal-box {
    width: 92%;
    padding: 20px;
  }

  .modal-actions {
    flex-direction: column;
  }

  .btn-save,
  .btn-cancel {
    width: 100%;
  }
}

@media (max-width: 480px) {

  .profile-dp,
  .profile-preview {
    width: 72px;
    height: 72px;
  }
}
</style>