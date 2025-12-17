<template>
  <div class="page-root" @click="closeFilters">
    <div class="container-fluid px-4">

      <!-- Header -->
      <div class="page-header">
        <h4>Available Cars</h4>

        <div class="search-actions" @click.stop>
          <!-- SEARCH -->
          <input
            type="text"
            class="search-input"
            placeholder="Search your car..."
            v-model="search"
          />

          <!-- FILTER -->
          <div class="filter-dropdown">
            <button class="filter-btn" @click="toggleFilters">
              <i class="bi bi-sliders"></i> Filters
            </button>

            <transition name="fade-slide">
              <div v-if="showFilters" class="filter-menu">

                <div class="filter-group">
                  <label>Category</label>
                  <select v-model="filters.category">
                    <option value="">All</option>
                    <option v-for="c in categories" :key="c" :value="c">
                      {{ c }}
                    </option>
                  </select>
                </div>

                <div class="filter-group">
                  <label>Transmission</label>
                  <select v-model="filters.transmission">
                    <option value="">All</option>
                    <option value="manual">Manual</option>
                    <option value="automatic">Automatic</option>
                  </select>
                </div>

                <div class="filter-group">
                  <label>Fuel</label>
                  <select v-model="filters.fuel">
                    <option value="">All</option>
                    <option>Petrol</option>
                    <option>Diesel</option>
                    <option>Electric</option>
                    <option>Hybrid</option>
                  </select>
                </div>

                <div class="filter-group">
                  <label>Seats</label>
                  <select v-model="filters.seats">
                    <option value="">All</option>
                    <option v-for="s in seatOptions" :key="s" :value="s">
                      {{ s }} Seats
                    </option>
                  </select>
                </div>

                <div class="filter-group">
                  <label>Status</label>
                  <select v-model="filters.status">
                    <option value="">All</option>
                    <option>Available</option>
                    <option>Booked</option>
                    <option>Maintenance</option>
                  </select>
                </div>

                <div class="filter-group">
                  <label>Max Price (₹)</label>
                  <input
                    type="range"
                    min="500"
                    max="10000"
                    step="500"
                    v-model.number="filters.price"
                  />
                  <div class="price-value">₹{{ filters.price }}</div>
                </div>

              </div>
            </transition>
          </div>
        </div>
      </div>

      <!-- CARS -->
      <div class="row g-4">
        <div
          v-for="car in filteredCars"
          :key="car._id"
          class="col-xl-3 col-lg-4 col-md-6"
        >
          <div class="car-card">
            <div class="car-image">
              <img :src="car.images?.[0]?.url || fallbackImage" />
            </div>

            <div class="car-body">
              <h5 class="car-title">{{ car.name }}</h5>
              <span class="car-type">
                {{ car.category }} • {{ car.transmission }}
              </span>

              <div class="car-info">
                <span class="price">₹{{ car.price }} / day</span>
                <span class="badge-status" :class="car.status.toLowerCase()">
                  {{ car.status }}
                </span>
              </div>

              <div class="car-actions">
                <RouterLink :to="`/car/${car._id}`" class="btn btn-view">
                  View
                </RouterLink>

                <RouterLink
                  v-if="car.status === 'Available'"
                  :to="`/car-booking/${car._id}`"
                  class="btn btn-book"
                >
                  Book
                </RouterLink>

                <button v-else class="btn btn-book" disabled>
                  Unavailable
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          v-if="!loading && filteredCars.length === 0"
          class="text-center text-white"
        >
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
      showFilters: false,
      fallbackImage: "/img/home/benz.jpg",

      filters: {
        category: "",
        transmission: "",
        fuel: "",
        seats: "",
        status: "",
        price: 10000
      }
    };
  },

  computed: {
    categories() {
      return [...new Set(this.cars.map(c => c.category).filter(Boolean))];
    },

    seatOptions() {
      return [...new Set(this.cars.map(c => c.seats).filter(Boolean))];
    },

    filteredCars() {
      return this.cars.filter(car => {
        return (
          (!this.search ||
            car.name.toLowerCase().includes(this.search.toLowerCase())) &&
          (!this.filters.category || car.category === this.filters.category) &&
          (!this.filters.transmission || car.transmission === this.filters.transmission) &&
          (!this.filters.fuel || car.fuel === this.filters.fuel) &&
          (!this.filters.seats || car.seats === Number(this.filters.seats)) &&
          (!this.filters.status || car.status === this.filters.status) &&
          car.price <= this.filters.price
        );
      });
    }
  },

  methods: {
    toggleFilters() {
      this.showFilters = !this.showFilters;
    },

    closeFilters() {
      this.showFilters = false;
    },

    async fetchCars() {
      try {
        this.loading = true;
        const res = await api.get("/cars");
        this.cars = res.data.data;
      } catch (err) {
        console.error("Failed to fetch cars", err);
      } finally {
        this.loading = false;
      }
    },

    // 🔥 APPLY ROUTE FILTER
    applyRouteFilters() {
  const { category, fuel } = this.$route.query;

  if (category) this.filters.category = category;
  if (fuel) this.filters.fuel = fuel;
  this.showFilters = false
}

  },

  watch: {
    // 🔁 React when route query changes
    "$route.query": {
      immediate: true,
      handler() {
        this.applyRouteFilters();
      }
    }
  },

  async mounted() {
    await this.fetchCars();
    this.applyRouteFilters();
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
.search-actions {
  display: flex;
  gap: 12px;
  align-items: center;
}

.search-input {
  border-radius: 30px;
  padding: 10px 18px;
  border: none;
  min-width: 220px;
}

.filter-dropdown {
  position: relative;
}

.filter-btn {
  background: #ffffff;
  color: #0d6efd;
  border: none;
  padding: 10px 18px;
  border-radius: 30px;
  font-weight: 600;
  cursor: pointer;
}

.filter-menu {
  position: absolute;
  right: 0;
  top: 115%;
  width: 280px;
  background: #fff;
  border-radius: 22px;
  padding: 18px;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.25);
  z-index: 1000;
}

.filter-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 14px;
}

.filter-group label {
  font-size: 13px;
  font-weight: 600;
  color: #495057;
}

.filter-group select,
.filter-group input[type="range"] {
  padding: 9px 14px;
  border-radius: 18px;
  border: 1px solid #ced4da;
  font-size: 14px;
}

.price-value {
  text-align: right;
  font-size: 13px;
  font-weight: 600;
  color: #0d6efd;
}

/* TRANSITION */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.25s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}



</style>