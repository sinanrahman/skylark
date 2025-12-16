<template>
  <div class="container-fluid px-4">


    <div class="page-header">
      <h4>Add New Car</h4>
      <p class="form-note mb-0">
        Fill the details below to add a car to Skylark inventory.
      </p>
    </div>

    <div class="form-box">
      <form>

        <div class="form-section">
          <h6 class="section-title">Basic Information</h6>

          <div class="row g-4">
            <div class="col-md-6">
              <label>Car Name</label>
              <input type="text" class="form-control" placeholder="BMW X5" required>
            </div>

            <div class="col-md-3">
              <label>Model Year</label>
              <input type="number" class="form-control" placeholder="2024" required>
            </div>

            <div class="col-md-3">
              <label>Seats</label>
              <input type="number" class="form-control" placeholder="5" required>
            </div>
          </div>
        </div>

        <div class="form-section">
          <h6 class="section-title">Specifications</h6>

          <div class="row g-4">
            <div class="col-md-4">
              <label>Category</label>
              <select class="form-select" required>
                <option disabled selected>Select category</option>
                <option>SUV</option>
                <option>Sedan</option>
                <option>Hatchback</option>
                <option>Luxury</option>
              </select>
            </div>

            <div class="col-md-4">
              <label>Fuel Type</label>
              <select class="form-select" required>
                <option disabled selected>Select fuel</option>
                <option>Petrol</option>
                <option>Diesel</option>
                <option>Electric</option>
                <option>Hybrid</option>
              </select>
            </div>

            <div class="col-md-4">
              <label>Status</label>
              <select class="form-select" required>
                <option disabled selected>Select status</option>
                <option>Available</option>
                <option>Booked</option>
                <option>Maintenance</option>
              </select>
            </div>

            <div class="col-md-4">
              <label>Price / Day (₹)</label>
              <input type="number" class="form-control" placeholder="4500" required>
            </div>

            <div class="col-md-4">
              <label>Safety Rating</label>
              <select class="form-select">
                <option disabled selected>Select rating</option>
                <option>★★★★★ (5)</option>
                <option>★★★★ (4)</option>
                <option>★★★ (3)</option>
                <option>★★ (2)</option>
                <option>★ (1)</option>
              </select>
            </div>
          </div>
        </div>

        <div class="form-section">
          <h6 class="section-title">Features & Transmission</h6>

          <div class="row g-4">
            <div class="col-md-6">
              <label>Features</label>
              <div class="row g-2 mt-2">
                <div class="col-6 form-check">
                  <input class="form-check-input" type="checkbox" id="ac">
                  <label class="form-check-label" for="ac">AC</label>
                </div>
                <div class="col-6 form-check">
                  <input class="form-check-input" type="checkbox" id="music">
                  <label class="form-check-label" for="music">Music System</label>
                </div>
                <div class="col-6 form-check">
                  <input class="form-check-input" type="checkbox" id="driver">
                  <label class="form-check-label" for="driver">Driver</label>
                </div>
                <div class="col-6 form-check">
                  <input class="form-check-input" type="checkbox" id="gps">
                  <label class="form-check-label" for="gps">GPS</label>
                </div>
                <div class="col-6 form-check">
                  <input class="form-check-input" type="checkbox" id="airbag">
                  <label class="form-check-label" for="airbag">Air Bags</label>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <label>Transmission</label>
              <div class="d-flex gap-4 mt-3">
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="transmission" checked>
                  <label class="form-check-label">Manual</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="transmission">
                  <label class="form-check-label">Automatic</label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="form-section">
          <h6 class="section-title">Media & Description</h6>

          <div class="row g-4">
            <div class="col-md-6">
              <label>Car Image</label>
              <input type="file" class="form-control" accept="image/*" multiple>
            </div>

            <div class="col-12">
              <label>Short Description</label>
              <textarea
                class="form-control"
                rows="4"
                placeholder="Luxury SUV with premium comfort and smooth driving experience..."
              ></textarea>
            </div>
          </div>
        </div>

        <div class="d-flex gap-3 justify-content-end mt-4">
          <button type="reset" class="btn btn-cancel">Cancel</button>
          <button type="submit" class="btn btn-sky">
            <i class="bi bi-check-circle"></i> Add Car
          </button>
        </div>

      </form>
    </div>

  </div>
</template>

<script setup>

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
}

.page-header h4 {
  font-weight: 700;
  color: #0a2540;
}

.form-box {
  background: #fff;
  border-radius: 22px;
  padding: 30px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
}

label {
  font-weight: 600;
  color: #0a2540;
  margin-bottom: 6px;
}

.form-control,
.form-select {
  border-radius: 14px;
  padding: 10px 14px;
  border: 1px solid #e0e0e0;
}

.form-control:focus,
.form-select:focus {
  box-shadow: none;
  border-color: #00bfff;
}

textarea {
  resize: none;
}

.btn-sky {
  background: linear-gradient(135deg, #00bfff, #007adf);
  color: #fff;
  border-radius: 30px;
  padding: 10px 30px;
  border: none;
  font-weight: 600;
}

.btn-cancel {
  background: #e0e0e0;
  color: #333;
  border-radius: 30px;
  padding: 10px 30px;
  border: none;
  font-weight: 600;
}

.form-note {
  font-size: 13px;
  color: #666;
}

.form-section {
  border-bottom: 1px solid #eaeaea;
  padding-bottom: 25px;
  margin-bottom: 30px;
}

.form-section:last-child {
  border-bottom: none;
}

.section-title {
  font-weight: 700;
  color: #0a2540;
  margin-bottom: 18px;
  letter-spacing: 0.5px;
}
</style>
