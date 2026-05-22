<template>
  <Transition name="fade">
    <div v-if="isVisible" class="loader-overlay">
      <div class="ambient-glow"></div>

      <div class="minimal-loader-content">
        <div class="logo-area">
          <span class="gold-text">ESCORT</span> 
          <span class="sub-logo">ЖЕСКИЙ</span>
        </div>
        
        <div class="progress-section">
          <div class="progress-bar-container">
            <div class="progress-bar-fill" :style="{ width: displayProgress + '%' }"></div>
          </div>
          <div class="progress-meta">
            <span class="loading-text">LOADING ACCESS</span>
            <span class="percentage-text">{{ displayProgress }}%</span>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  isVisible: { type: Boolean, required: true }
});

const displayProgress = ref(0);
let progressInterval = null;

watch(() => props.isVisible, (newValue) => {
  if (newValue) {
    displayProgress.value = 0;
    
    // Плавное заполнение полосы за 2.5 секунды
    progressInterval = setInterval(() => {
      if (displayProgress.value < 100) {
        displayProgress.value += 1;
      } else {
        clearInterval(progressInterval);
      }
    }, 25);
  } else {
    clearInterval(progressInterval);
  }
}, { immediate: true });
</script>

<style scoped>
/* Главный экран загрузки */
.loader-overlay {
  position: fixed;
  top: 0; left: 0; width: 100%; height: 100%;
  background-color: #050505; /* Чистый глубокий темный цвет */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  overflow: hidden;
}

/* Мягкий центральный блик, чтобы экран не выглядел плоским */
.ambient-glow {
  position: absolute;
  top: 50%; left: 50%; transform: translate(-50%, -50%);
  width: 400px; height: 400px;
  background: radial-gradient(circle, rgba(197, 160, 89, 0.03) 0%, transparent 70%);
  filter: blur(50px);
  pointer-events: none;
}

.minimal-loader-content {
  position: relative;
  width: 80%;
  max-width: 380px; /* Сделали контейнер уже, для аккуратного вида */
  text-align: center;
}

/* Стилизация логотипа */
.logo-area {
  font-size: 28px;
  font-weight: 700;
  letter-spacing: 10px;
  margin-bottom: 35px;
}

.sub-logo {
  font-size: 12px;
  font-weight: 300;
  letter-spacing: 8px;
  color: #555;
  margin-left: 4px;
}

.gold-text {
  background: linear-gradient(135deg, #c5a059 0%, #f3e5ab 50%, #aa7c11 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Секция прогресс-бара */
.progress-section {
  width: 100%;
}

.progress-bar-container {
  width: 100%;
  height: 1px; /* Сделали линию нитевидной (1px вместо 2px) */
  background: rgba(255, 255, 255, 0.04);
  position: relative;
  margin-bottom: 14px;
}

.progress-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, #aa7c11, #f3e5ab, #aa7c11);
  box-shadow: 0 0 8px rgba(197, 160, 89, 0.4);
  transition: width 0.02s linear;
}

/* Текстовые метки под полосой */
.progress-meta {
  display: flex;
  justify-content: space-between;
  font-family: monospace;
  font-size: 9px;
  letter-spacing: 2px;
}

.loading-text { 
  color: #444; 
}

.percentage-text { 
  color: #c5a059; 
  font-weight: 500; 
}

/* Плавное исчезновение всего лоадера */
.fade-leave-active {
  transition: opacity 0.5s cubic-bezier(0.25, 1, 0.5, 1);
}
.fade-leave-to {
  opacity: 0;
}

/* Полный адаптив для мобилок — всё сразу встанет идеально */
@media (max-width: 480px) {
  .minimal-loader-content {
    width: 85%;
  }
  .logo-area {
    font-size: 22px;
    letter-spacing: 7px;
    margin-bottom: 25px;
  }
  .sub-logo {
    font-size: 10px;
    letter-spacing: 5px;
  }
}
</style>