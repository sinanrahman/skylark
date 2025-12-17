<template>
  <div class="page-root">
    <div class="container-fluid px-4">

      <div class="page-header">
        <h4>Available Cars</h4>

        <div class="search-box">
          <input
            type="text"
            placeholder="Search your car..."
            v-model="search"
          />
        </div>
      </div>

      <div class="row g-4">
        <div
          v-for="car in filteredCars"
          :key="car._id"
          class="col-xl-3 col-lg-4 col-md-6"
        >
          <div class="car-card">
            <div class="car-image">
              <img
                :src="car.images?.[0]?.url || fallbackImage"
                :alt="car.name"
              />
            </div>

            <div class="car-body">
              <h5 class="car-title">{{ car.name }}</h5>
              <span class="car-type">
                {{ car.category }} • {{ car.transmission }}
              </span>

              <div class="car-info">
                <span class="price">₹{{ car.price }} / day</span>
                <span
                  class="badge-status"
                  :class="car.status.toLowerCase()"
                >
                  {{ car.status }}
                </span>
              </div>

              <div class="car-actions">
                <RouterLink
                  :to="`/car/${car._id}`"
                  class="btn btn-view"
                >
                  <i class="bi bi-eye"></i> View
                </RouterLink>

                <RouterLink
                  v-if="car.status === 'Available'"
                  :to="`/car-booking/${car._id}`"
                  class="btn btn-book"
                >
                  <i class="bi bi-calendar-check"></i> Book
                </RouterLink>

                <button
                  v-else
                  class="btn btn-book"
                  disabled
                >
                  <i class="bi bi-lock"></i> Unavailable
                </button>
              </div>
            </div>
          </div>
        </div>

        <div v-if="!loading && filteredCars.length === 0" class="text-center text-white">
          No cars found
        </div>

      </div>
    </div>
  </div>
</template>
<script>
import api from "@/services/api";

export default {
  name: "Cars",

  data() {
    return {
      cars: [],
      search: "",
      loading: false,
      fallbackImage: "/img/home/benz.jpg"
    };
  },

  computed: {
    filteredCars() {
      if (!this.search) return this.cars;

      return this.cars.filter(car =>
        car.name.toLowerCase().includes(this.search.toLowerCase())
      );
    }
  },

  methods: {
    async fetchCars() {
      try {
        this.loading = true;
        const res = await api.get("/cars");
        this.cars = res.data.data;
      } catch (error) {
        console.error("Failed to load cars", error);
      } finally {
        this.loading = false;
      }
    }
  },

  mounted() {
    this.fetchCars();
  }
};
</script>


<style scoped>
.page-root {
  padding-top: 10px;
  font-family: 'Poppins', sans-serif;
  background: repeating-linear-gradient(#81939cf1, #0a57a9);
  min-height: 100vh;
}

.page-header {
  padding: 30px;
  border-radius: 22px;
  background: repeating-linear-gradient(#2b96cbf1, #468edb);
  box-shadow: 0 18px 45px rgba(13, 110, 253, 0.35);
  margin: 0px 0 35px;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.page-header h4 {
  font-weight: 800;
  margin-bottom: 0;
  letter-spacing: 0.5px;
}

.search-box input {
  border-radius: 30px;
  padding: 10px 18px;
  border: none;
  min-width: 220px;
}

.car-card {
  background: #fff;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.12);
  transition: all 0.35s ease;
  height: 100%;
}

.car-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 25px 55px rgba(0, 123, 255, 0.35);
}

.car-image img {
  width: 100%;
  height: 190px;
  object-fit: cover;
}

.car-body {
  padding: 22px;
}

.car-title {
  font-weight: 700;
  color: #0a2540;
  margin-bottom: 3px;
}

.car-type {
  font-size: 14px;
  color: #6c757d;
}

.car-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  font-size: 15px;
  font-weight: 600;
}

.price {
  color: #0d6efd;
}

/* STATUS */
.badge-status {
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
}

.available {
  background: rgba(13, 110, 253, 0.15);
  color: #0d6efd;
}

.booked {
  background: rgba(253, 126, 20, 0.15);
  color: #fd7e14;
}

.car-actions {
  margin-top: 18px;
  display: flex;
  gap: 10px;
}

.car-actions .btn {
  flex: 1;
  border-radius: 30px;
  font-size: 14px;
  padding: 8px 0;
  font-weight: 600;
}

.btn-view {
  background: linear-gradient(135deg, #0d6efd, #00bfff);
  color: #fff;
  border: none;
}

.btn-book {
  background: #eaf4ff;
  color: #0d6efd;
  border: 1px solid #0d6efd;
}

.btn-view:hover,
.btn-book:hover {
  opacity: 0.9;
}

@media (max-width: 768px) {
  .page-header {
    flex-direction: column;
    gap: 18px;
    align-items: flex-start;
  }
}
</style>
