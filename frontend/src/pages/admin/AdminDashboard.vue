<template>
  <div class="body">
    <main class="main">

      <div class="topbar">
      </div>

      <div class="row g-4 mb-4">
        <div class="col-lg-3 col-md-6">
          <div class="stat-card cars">
            <h6>Total Cars</h6>
            <h2>48</h2>
          </div>
        </div>

        <div class="col-lg-3 col-md-6">
          <div class="stat-card bookings">
            <h6>Bookings</h6>
            <h2>312</h2>
          </div>
        </div>

        <div class="col-lg-3 col-md-6">
          <div class="stat-card users">
            <h6>Users</h6>
            <h2>1,240</h2>
          </div>
        </div>

        <div class="col-lg-3 col-md-6">
          <div class="stat-card revenue">
            <h6>Revenue</h6>
            <h2>₹4.6L</h2>
          </div>
        </div>
      </div>

      <div class="row g-4 mt-4">
        <div class="col-lg-4">
          <div class="graph-card">
            <h6 class="text-center mb-3">Car Distribution</h6>
            <canvas id="carsChart"></canvas>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="graph-card">
            <h6 class="text-center mb-3">Monthly Bookings</h6>
            <canvas id="bookingChart"></canvas>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="graph-card">
            <h6 class="text-center mb-3">Revenue Growth</h6>
            <canvas id="revenueChart"></canvas>
          </div>
        </div>
      </div>

      <div class="row g-4 mt-4">
        <div class="col-lg-6">
          <div class="graph-card">
            <h6 class="text-center mb-3">Revenue Trend</h6>
            <canvas id="revenueTrend"></canvas>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="graph-card">
            <h6 class="text-center mb-3">User Growth</h6>
            <canvas id="usersChart"></canvas>
          </div>
        </div>
      </div>

    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Chart from 'chart.js/auto'

const lineChart = ref(null)
const barChart = ref(null)
const donutChart = ref(null)

onMounted(() => {

  const carsCtx = document.getElementById('carsChart');
  new Chart(carsCtx, {
    type: 'doughnut',
    data: {
      labels: ['SUV', 'Sedan', 'Hatchback', 'Luxury'],
      datasets: [{
        data: [18, 14, 10, 6],
        backgroundColor: ['#00bfff','#1ecbe1','#4fd1c5','#7fdbff'],
        borderWidth: 0
      }]
    }
  });

  const bookingCtx = document.getElementById('bookingChart');
  new Chart(bookingCtx, {
    type: 'bar',
    data: {
      labels: ['Jan','Feb','Mar','Apr','May','Jun'],
      datasets: [{
        label: 'Bookings',
        data: [45,60,52,80,95,120],
        backgroundColor: '#00bfff',
        borderRadius: 12
      }]
    }
  });

  const revenueCtx = document.getElementById('revenueChart');
  new Chart(revenueCtx, {
    type: 'line',
    data: {
      labels: ['Jan','Feb','Mar','Apr','May','Jun'],
      datasets: [{
        label: 'Revenue (₹)',
        data: [120000,150000,140000,180000,210000,260000],
        borderColor: '#6f42c1',
        backgroundColor: 'rgba(111,66,193,0.25)',
        fill: true,
        tension: 0.4
      }]
    }
  });

  new Chart(document.getElementById('revenueTrend'), {
    type: 'line',
    data: {
      labels: ['Jan','Feb','Mar','Apr','May','Jun'],
      datasets: [{
        label: 'Revenue',
        data: [120000,150000,140000,180000,210000,260000],
        borderColor: '#20c997',
        backgroundColor: 'rgba(32,201,151,0.25)',
        fill: true,
        tension: 0.4
      }]
    }
  });

  new Chart(document.getElementById('usersChart'), {
    type: 'bar',
    data: {
      labels: ['Jan','Feb','Mar','Apr','May','Jun'],
      datasets: [{
        label: 'New Users',
        data: [80,120,150,200,260,310],
        backgroundColor: '#fd7e14',
        borderRadius: 10
      }]
    }
  });

})
</script>


<style scoped>
          .body {
            font-family: 'Poppins', sans-serif;
            background: #f5f7fb;
            min-height: 100vh;
            overflow-x: hidden;
        }
      .main {
  padding: 30px;
  color: #0a2540;
}


     
        .stat-card {
            border-radius: 22px;
            padding: 25px;
            color: #ffffff;
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
            transition: 0.4s ease;
        }

        .stat-card.cars {
            background: linear-gradient(135deg, #00bfff, #007adf);
        }

        .stat-card.bookings {
            background: linear-gradient(135deg, #fd7e14, #ff9f43);
        }

        .stat-card.users {
            background: linear-gradient(135deg, #20c997, #38ef7d);
        }

        .stat-card.revenue {
            background: linear-gradient(135deg, #6f42c1, #9b59b6);
        }

        .stat-card h6 {
            font-size: 14px;
            opacity: 0.85;
            letter-spacing: 1px;
        }

        .stat-card h2 {
            font-weight: 700;
        }


        .glass-box {
            background: #fff;
            border-radius: 25px;
            padding: 25px;
            color: #0a2540;
            margin-top: 30px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
        }


        table {
            color: #0a2540;
        }

        table th {
            border-color: #e6e6e6;
        }

        table td {
            border-color: #f0f0f0;
        }


        .form-control {
            background: rgba(255, 255, 255, 0.2);
            border: none;
            color: #fff;
            border-radius: 14px;
        }

        .form-control::placeholder {
            color: #e0e0e0;
        }

        .btn-sky {
            background: #00bfff;
            color: #000000;
            border-radius: 30px;
            padding: 10px 28px;
            border: none;
        }

        .btn-sky:hover {
            background: #009fd6;
        }

        .chart-box {
            height: 360px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .chart-box canvas {
            max-height: 300px !important;
        }

        .graph-card {
            background: #ffffff;
            border-radius: 25px;
            padding: 20px;
            height: 380px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .graph-card canvas {
            max-height: 280px !important;
        }


        @media(max-width: 768px) {
            .sidebar {
                position: relative;
                width: 100%;
                height: auto;
            }

            .main {
                margin-left: 0;
            }
        }
</style>
