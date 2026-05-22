<template>
  <div class="premium-layout-fluid">
    <div class="luxury-image-bg">
      <div class="dark-gradient-overlay"></div>
    </div>

    <TheHeader />

    <main class="content-viewport">
      <router-view />
    </main>

    <SecureLoader :isVisible="isFirstLoading" />
    <MusicPlayer />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

import MusicPlayer from './components/MusicPlayer.vue';
import TheHeader from './components/global/TheHeader.vue';
import SecureLoader from './components/global/SecureLoader.vue';

const isFirstLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    isFirstLoading.value = false;
  }, 3100);
});
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.premium-layout-fluid {
  position: relative;
  width: 100vw !important;
  min-height: 100vh;
  background-color: #020202;
  color: #ffffff;
  overflow-x: hidden;
}

.luxury-image-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-image: url('./assets/luxury-bg.jpg'); 
  background-size: cover;
  background-position: right center;
  background-repeat: no-repeat;
  z-index: 1;
}

.dark-gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, #020202 0%, rgba(2, 2, 2, 0.8) 35%, rgba(2, 2, 2, 0.2) 70%, rgba(2, 2, 2, 0.5) 100%);
}

.content-viewport {
  position: relative;
  z-index: 5;
  width: 100% !important;
  padding: 0;
}
</style>