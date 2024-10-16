<template>
  <div class="layout">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
</script>

<style>
@font-face {
  font-family: "Inter";
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2JL7SUc.woff2)
    format("woff2");
}

.layout {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
