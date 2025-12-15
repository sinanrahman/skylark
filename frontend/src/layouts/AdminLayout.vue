<template>
  <div class="layout">
    <!-- SIDEBAR -->
    <aside class="sidebar">
      <Sidebar />
    </aside>

    <!-- CONTENT AREA -->
    <div class="content">
      <!-- NAVBAR -->
      <header class="navbar">
        <Navbar />
      </header>

      <!-- MAIN -->
      <main class="main">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>
import Sidebar from '@/components/admin/Sidebar.vue'
import Navbar from '@/components/admin/Navbar.vue'
</script>

<style>
:root{
  --bg:#f5f7fb;
  --border:#e5e7eb;
  --text:#111827;
}

*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family:Inter,Segoe UI,sans-serif;
}

html, body {
  height:100%;
}

body{
  background:var(--bg);
  color:var(--text);
}

/* ROOT */
.layout{
  display:flex;
  height:100vh;
  width:100%;
}

/* SIDEBAR */
.sidebar{
  width:260px;
  height:100vh;
}

/* CONTENT */
.content{
  flex:1;
  display:flex;
  flex-direction:column;
}

/* NAVBAR */
.navbar{
  height:72px;
  flex-shrink:0;
  padding:0;
}

/* MAIN */
.main{
  flex:1;
  padding:32px;
  overflow-y:auto;
}
</style>
