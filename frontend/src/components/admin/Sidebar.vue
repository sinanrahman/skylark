<template>
  <aside class="sidebar">
    <h2>SKYLARK</h2>

    <RouterLink to="/admin" class="nav-link" active-class="active">
      <i class="bi bi-speedometer2"></i>
      <span>Dashboard</span>
    </RouterLink>

    <RouterLink to="/admin/cars" class="nav-link" active-class="active">
      <i class="bi bi-car-front"></i>
      <span>Cars</span>
    </RouterLink>

    <RouterLink to="/admin/add-cars" class="nav-link" active-class="active">
      <i class="bi bi-plus-circle"></i>
      <span>Add Car</span>
    </RouterLink>

    <RouterLink to="/admin/bookings" class="nav-link" active-class="active">
      <i class="bi bi-calendar-check"></i>
      <span>Bookings</span>
    </RouterLink>

    <RouterLink to="/admin/users" class="nav-link" active-class="active">
      <i class="bi bi-people"></i>
      <span>Users</span>
    </RouterLink>

    <RouterLink to="/admin/issues" class="nav-link" active-class="active">
      <i class="bi bi-exclamation-triangle"></i>
      <span>Issues</span>
    </RouterLink>
  </aside>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.sidebar {
  width: 260px;
  height: 100vh;
  background: #000;
  padding: 25px 20px;
  box-shadow: 8px 0 30px rgba(0, 0, 0, 0.4);
  position: sticky;
  top: 0;
}

.sidebar h2 {
  color: #fff;
  text-align: center;
  font-size: 36px;
  letter-spacing: 2px;
  font-weight: 800;
  font-style: italic;
  margin-bottom: 40px;
}

.nav-link {
  color: #bfbfbf;
  padding: 14px 18px;
  border-radius: 14px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
}

.nav-link:hover {
  background: linear-gradient(135deg, #0179a0, #050e16);
  color: #fff;
  transform: translateX(6px);
}

.nav-link.active {
  background: linear-gradient(135deg, #00bfff, #007adf);
  color: #fff;
}

.nav-link i {
  font-size: 18px;
}
</style>
