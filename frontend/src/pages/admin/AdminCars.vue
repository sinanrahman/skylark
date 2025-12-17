<template>
  <div class="container-fluid px-4">

    <div class="page-header">
      <h4>Cars Management</h4>

      <div class="d-flex gap-3">
        <input type="text" class="form-control" placeholder="Search cars..." style="max-width: 220px;"
          v-model="search" />
      </div>
    </div>

    <div class="table-box">
      <div class="table-responsive">
        <table class="table table-borderless align-middle">
          <thead>
            <tr>
              <th>#</th>
              <th>Car Name</th>
              <th>Type</th>
              <th>Transmission</th>
              <th>Fuel</th>
              <th>Price / Day</th>
              <th>Status</th>
              <th class="text-center">Actions</th>
            </tr>
          </thead>

          <tbody v-if="!loading">
            <tr v-for="(car, index) in filteredCars" :key="car._id">
              <td>{{ index + 1 }}</td>
              <td><strong>{{ car.name }}</strong></td>
              <td>{{ car.category }}</td>
              <td>{{ car.transmission }}</td>
              <td>{{ car.fuel }}</td>
              <td>₹{{ car.price }}</td>
              <td>
                <span class="badge-status" :class="car.status.toLowerCase()">
                  {{ car.status }}
                </span>
              </td>
              <td class="text-center action-btns">
                <button class="btn btn-view" @click="openViewCarModal(car)">
                  <i class="bi bi-eye"></i>
                </button>


                <button class="btn btn-edit" @click="openCarModal(car)">
                  <i class="bi bi-pencil"></i>
                </button>


                <button class="btn btn-delete" @click="deleteCar(car._id)">
                  <i class="bi bi-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>

          <tbody v-else>
            <tr>
              <td colspan="8" class="text-center">Loading cars...</td>
            </tr>
          </tbody>


        </table>
      </div>
      <!-- CAR MODAL -->
      <div class="modal fade" id="carModal" tabindex="-1">
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content">

            <div class="modal-header">
              <h5 class="modal-title">Car Details</h5>
              <button class="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <div class="modal-body">
              <div class="row g-3">
                <div class="col-md-6">
                  <label>Name</label>
                  <input v-model="selectedCar.name" class="form-control" />
                </div>

                <div class="col-md-6">
                  <label>Price / Day</label>
                  <input v-model="selectedCar.price" type="number" class="form-control" />
                </div>

                <div class="col-md-6">
                  <label>Fuel</label>
                  <input v-model="selectedCar.fuel" class="form-control" />
                </div>

                <div class="col-md-6">
                  <label>Status</label>
                  <select v-model="selectedCar.status" class="form-select">
                    <option>Available</option>
                    <option>Booked</option>
                    <option>Maintenance</option>
                  </select>
                </div>
              </div>

              <hr />

              <button class="btn btn-info w-100 mb-2" @click="openMaintenanceList">
                📋 View Maintenance
              </button>

              <button class="btn btn-warning w-100" @click="openMaintenanceModal">
                ➕ Add Maintenance
              </button>

            </div>

            <div class="modal-footer">
              <button class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button class="btn btn-primary" @click="updateCar">Update Car</button>
            </div>

          </div>
        </div>
      </div>

      <!-- MAINTENANCE MODAL -->
       <!-- ADD MAINTENANCE MODAL -->
<div class="modal fade" id="maintenanceModal" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">

      <div class="modal-header">
        <h5 class="modal-title">Add Maintenance</h5>
        <button class="btn-close" data-bs-dismiss="modal"></button>
      </div>

      <div class="modal-body">
        <input
          v-model="maintenance.Maintenencetype"
          class="form-control mb-2"
          placeholder="Maintenance Type"
        />

        <textarea
          v-model="maintenance.Maintenencedescription"
          class="form-control mb-2"
          placeholder="Description"
        ></textarea>

        <input
          v-model="maintenance.price"
          type="number"
          class="form-control"
          placeholder="Cost"
        />
      </div>

      <div class="modal-footer">
        <button class="btn btn-secondary" data-bs-dismiss="modal">
          Cancel
        </button>
        <button class="btn btn-success" @click="addMaintenance">
          Save
        </button>
      </div>

    </div>
  </div>
</div>

      <!-- MAINTENANCE LIST MODAL -->
      <div class="modal fade" id="maintenanceListModal" tabindex="-1">
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content">

            <div class="modal-header">
              <h5 class="modal-title">
                Maintenance History – {{ selectedCar.name }}
              </h5>
              <button class="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <div class="modal-body">
              <table class="table table-striped" v-if="maintenanceList.length">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Type</th>
                    <th>Description</th>
                    <th>Cost</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(m, i) in maintenanceList" :key="m._id">
                    <td>{{ i + 1 }}</td>
                    <td>{{ m.Maintenencetype }}</td>
                    <td>{{ m.Maintenencedescription }}</td>
                    <td>₹{{ m.price }}</td>
                    <td>{{ new Date(m.createdAt).toLocaleDateString() }}</td>
                  </tr>
                </tbody>
              </table>

              <div v-else class="text-center text-muted">
                No maintenance records found
              </div>
            </div>

          </div>
        </div>
      </div>


    </div>

  </div>
</template>

<script>
import api from '@/services/api';

export default {
  name: "CarsManagement",

  data() {
    return {
      cars: [],
      search: "",
      loading: false,
      selectedCar: {},
      maintenanceList: [],
      maintenance: {
        Maintenencetype: "",
        Maintenencedescription: "",
        price: ""
      }
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
        console.error("Failed to fetch cars", error);
      } finally {
        this.loading = false;
      }
    },

    async deleteCar(id) {
      if (!confirm("Are you sure you want to delete this car?")) return;

      try {
        await api.delete(`/cars/${id}`);
        this.cars = this.cars.filter(car => car._id !== id);
      } catch (error) {
        console.error("Delete failed", error);
      }
    },
    openCarModal(car) {
      this.selectedCar = { ...car };
      new bootstrap.Modal(document.getElementById("carModal")).show();
    },

    async updateCar() {
      await api.put(`/cars/${this.selectedCar._id}`, this.selectedCar);
      this.fetchCars();
      alert("Car Updated ✅");
    },

    openMaintenanceModal() {
      new bootstrap.Modal(
        document.getElementById("maintenanceModal")
      ).show();
    },

    async addMaintenance() {
      const res = await api.post("/maintenance", {
        ...this.maintenance,
        carid: this.selectedCar._id
      });
      console.log(res.data)
      alert("Maintenance Added ✅");
    },
    openViewCarModal(car) {
      this.selectedCar = { ...car };
      new bootstrap.Modal(document.getElementById("carModal")).show();
    },

    async openMaintenanceList() {
      try {
        const res = await api.get(`/maintenance/${this.selectedCar._id}`);
        this.maintenanceList = res.data.data;

        new bootstrap.Modal(
          document.getElementById("maintenanceListModal")
        ).show();

      } catch (err) {
        console.error("Failed to load maintenance", err);
      }
    },

  },

  mounted() {
    this.fetchCars();
  }
};


</script>


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
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.page-header h4 {
  font-weight: 700;
  color: #0a2540;
}

.table-box {
  background: #fff;
  border-radius: 20px;
  padding: 25px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
}

table th {
  color: #0a2540;
  font-weight: 600;
  border-bottom: 2px solid #e6e6e6;
}

table td {
  vertical-align: middle;
  color: #333;
}

.badge-status {
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
}

.available {
  background: rgba(32, 201, 151, 0.15);
  color: #20c997;
}

.booked {
  background: rgba(253, 126, 20, 0.15);
  color: #fd7e14;
}

.maintenance {
  background: rgba(220, 53, 69, 0.15);
  color: #dc3545;
}

.action-btns .btn {
  border-radius: 20px;
  padding: 5px 12px;
  font-size: 13px;
}

.btn-view {
  background: #e9f5ff;
  color: #007adf;
}

.btn-edit {
  background: #fff3cd;
  color: #fd7e14;
}

.btn-delete {
  background: #fdecea;
  color: #dc3545;
}

@media (max-width: 768px) {
  .page-header {
    flex-direction: column;
    gap: 15px;
    align-items: flex-start;
  }
}
</style>
