<template>
  <div class="body">
    <main class="main">

      <div class="topbar">
      </div>

      <div class="row g-4">

<div class="col-md-3">
  <div class="summary-card bg-bookings d-flex justify-content-between align-items-center">
    <div>
      <h6>Total Bookings</h6>
      <h3>{{ totalBookings }}</h3>
    </div>
    <div class="summary-icon">
      <i class="bi bi-calendar-check"></i>
    </div>
  </div>
</div>

<div class="col-md-3">
  <div class="summary-card bg-revenue d-flex justify-content-between align-items-center">
    <div>
      <h6>Total Revenue</h6>
      <h3>{{ formattedRevenue }}</h3>
    </div>
    <div class="summary-icon">
      <i class="bi bi-currency-rupee"></i>
    </div>
  </div>
</div>

<div class="col-md-3">
  <div class="summary-card bg-users d-flex justify-content-between align-items-center">
    <div>
      <h6>Total Users</h6>
      <h3>{{ totalUsers }}</h3>
    </div>
    <div class="summary-icon">
      <i class="bi bi-people"></i>
    </div>
  </div>
</div>

<div class="col-md-3">
  <div class="summary-card bg-cars d-flex justify-content-between align-items-center">
    <div>
      <h6>Total Cars</h6>
      <h3>{{ totalCars }}</h3>
    </div>
    <div class="summary-icon">
      <i class="bi bi-car-front"></i>
    </div>
  </div>
</div>

</div>

      <div class="row g-4 mt-4">
        <div class="col-lg-6">
          <div class="graph-card">
            <h6 class="text-center mb-3">Car Distribution</h6>
            <canvas id="carsChart"></canvas>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="graph-card">
            <h6 class="text-center mb-3">Monthly Bookings</h6>
            <canvas id="bookingChart"></canvas>
          </div>
        </div>

      
      </div>

      <div class="row g-4 mt-4">
        <div class="col-lg-6">
          <div class="graph-card">
            <h6 class="text-center mb-3">User Growth</h6>
            <canvas id="usersChart"></canvas>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="graph-card">
            <h6 class="text-center mb-3">Revenue Trend</h6>
            <canvas id="revenueTrend"></canvas>
          </div>
        </div>

        
      </div>

    </main>
  </div>
</template>

<script>
  import Chart from 'chart.js/auto'
  import api from '@/services/api';
  
  export default {
    name: 'DashboardCharts',
  
    data() {
      return {
        // lineChart: null,
        // barChart: null,
        // donutChart: null,

        //total results
        totalBookings:0,
        totalUsers:0,
        totalRevenue:0,
        totalCars:0,

        //cars chart
        carsChart: null,
        carChartData: {
        labels: [],
        data: []
        },

        // booking chart 
        bookingChart: null,
        bookingChartData: {
        labels: [],
        data: []
        },

        // revenue trend
        revenueChart: null,
        revenueChartData: {
        labels: [],
        data: []
        },

        //user growth
        usersChart: null,
        usersChartData: {
        labels: [],
        data: []
        }
      }
    },
  
    mounted() {
      //Mounting Total Summary
      this.totalSummary()

      //Load Car Category Chart
      this.loadCarsChart()

      //Load Booking Category Chart
      this.loadBookingChart()

      //Load Rvenue Trend
      this.loadRevenueTrend()

      //Load User Growth
      this.loadUsersChart()

      //   // Users Bar Chart
      // new Chart(document.getElementById('usersChart'), {
      //   type: 'bar',
      //   data: {
      //     labels: ['Jan','Feb','Mar','Apr','May','Jun'],
      //     datasets: [{
      //       label: 'New Users',
      //       data: [80,120,150,200,260,310],
      //       backgroundColor: '#fd7e14',
      //       borderRadius: 10
      //     }]
      //   }
      // })
    },
    methods:{
      async totalSummary(){
        try{
          const res = await api.get('/totalsummary')
          // console.log(res)
          this.totalBookings = res.data.data.totalBooking
          this.totalCars = res.data.data.totalCars
          this.totalRevenue = res.data.data.totalRevenue
          this.totalUsers = res.data.data.totalUsers
        }catch(e){
          console.log("fetching summary failed:", e)
        }
      },
      async loadCarsChart() {
    try {
      const res = await api.get('/admin/car-category-stats')
      // console.log(res.data)
      this.carChartData.labels = res.data.data.labels
      this.carChartData.data = res.data.data.data

      this.renderCarsChart()
    } catch (e) {
      console.error('Cars chart error', e)
    }
  },

  renderCarsChart() {
    const ctx = document.getElementById('carsChart')

    if (this.carsChart) {
      this.carsChart.destroy()
    }

    this.carsChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: this.carChartData.labels,
        datasets: [{
          data: this.carChartData.data,
          backgroundColor: ['#00bffc','#1ecbec','#1fd1c5','#1cdbff'],
          borderWidth: 0
        }]
      }
    })
  },async loadBookingChart() {
    try {
      const res = await api.get('/admin/monthly-bookings')
      console.log(res.data)
      this.bookingChartData.labels = res.data.data.labels
      this.bookingChartData.data = res.data.data.data

      this.renderBookingChart()
    } catch (e) {
      console.error('Booking chart error', e)
    }
  },

  renderBookingChart() {
    const ctx = document.getElementById('bookingChart')

    if (this.bookingChart) {
      this.bookingChart.destroy()
    }

    this.bookingChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.bookingChartData.labels,
        datasets: [{
          label: 'Bookings',
          data: this.bookingChartData.data,
          backgroundColor: '#00bfff',
          borderRadius: 12
        }]
      }
    })
  },
  async loadRevenueTrend() {
    try {
      const res = await api.get('/admin/monthly-revenue')

      this.revenueChartData.labels = res.data.data.labels
      this.revenueChartData.data = res.data.data.data

      this.renderRevenueTrend()
    } catch (e) {
      console.error('Revenue chart error', e)
    }
  },

  renderRevenueTrend() {
    const ctx = document.getElementById('revenueTrend')

    if (this.revenueChart) {
      this.revenueChart.destroy()
    }

    this.revenueChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.revenueChartData.labels,
        datasets: [{
          label: 'Revenue',
          data: this.revenueChartData.data,
          borderColor: '#6f42c1',
          backgroundColor: 'rgba(111,66,193,0.25)',
          fill: true,
          tension: 0.4
        }]
      }
    })
  },
  async loadUsersChart() {
    const res = await api.get('/admin/monthly-users')

    this.usersChartData = res.data.data
    this.renderUsersChart()
  },

  renderUsersChart() {
    if (this.usersChart) this.usersChart.destroy()

    this.usersChart = new Chart(
      document.getElementById('usersChart'),
      {
        type: 'bar',
        data: {
          labels: this.usersChartData.labels,
          datasets: [{
            label: 'New Users',
            data: this.usersChartData.data,
            backgroundColor: '#fd7e14',
            borderRadius: 10
          }]
        }
      }
    )
  },
    },
    computed: {
  formattedRevenue() {
    const value = this.totalRevenue || 0

    if (value >= 10000000) {
      return '₹ ' + (value / 10000000).toFixed(1) + ' Cr'
    }

    if (value >= 100000) {
      return '₹ ' + (value / 100000).toFixed(1) + ' L'
    }

    if (value >= 1000) {
      return '₹ ' + (value / 1000).toFixed(1) + ' K'
    }

    return '₹ ' + value
  }
}


  }
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


     
.summary-card {
  border-radius: 22px;
  padding: 22px;
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.15);
  color: #fff;
}

.summary-card h6 {
  font-size: 14px;
  opacity: 0.9;
  margin-bottom: 6px;
}

.summary-card h3 {
  font-weight: 800;
  margin-bottom: 0;
}

.bg-bookings {
  background: linear-gradient(135deg, #0d6efd, #00bfff);
}

.bg-revenue {
  background: linear-gradient(135deg, #6f42c1, #9b59b6);
}

.bg-users {
  background: linear-gradient(135deg, #20c997, #38ef7d);
}

.bg-cars {
  background: linear-gradient(135deg, #fd7e14, #ff9f43);
}

.summary-icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
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
