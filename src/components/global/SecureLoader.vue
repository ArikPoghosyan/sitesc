<template>
  <Transition name="fade">
    <div v-if="isVisible" class="loader-overlay">
      <div class="luxury-bg-grid"></div>
      <div class="ambient-glow-1"></div>
      <div class="ambient-glow-2"></div>

      <div class="secure-matrix-content">
        

        <div class="logo-area">
          <span class="gold-text">ESCORT</span> <span class="sub-logo">ЖЕСКИЙ</span>
        </div>
        
        <div class="confidential-badge">
          <span class="blink-dot"></span> CLASSIFIED • PRIVATE CLUB ACCESS
        </div>

        <div class="matrix-display">
          <div class="digital-grid">
            <span v-for="(num, index) in runningNumbers" :key="index" class="digital-num">
              {{ num }}
            </span>
          </div>
          
          <div class="secure-logs">
            <p v-for="(log, index) in activeLogs" :key="index" class="log-entry">
              <span class="log-time">[{{ getCurrentTime() }}]</span>
              <span class="status-tag" :class="log.status.toLowerCase()">{{ log.status }}</span>
              <span class="log-text">{{ log.text }}</span>
            </p>
          </div>
        </div>
        
        <div class="progress-section">
          <div class="progress-bar-container">
            <div class="progress-bar-fill" :style="{ width: displayProgress + '%' }"></div>
          </div>
          <div class="progress-meta">
            <span class="loading-text">ESTABLISHING SECURE CONNECTION</span>
            <span class="percentage-text">{{ displayProgress }}%</span>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';

const props = defineProps({
  isVisible: { type: Boolean, required: true }
});

const displayProgress = ref(0);
const runningNumbers = ref(Array(18).fill('0'));
const activeLogs = ref([]);

const generateNumbers = () => {
  const chars = '0123456789ABCDEF'; // Добавили HEX-детали
  runningNumbers.value = runningNumbers.value.map(() => chars[Math.floor(Math.random() * chars.length)]);
};

const logData = [
  { text: "STRICT_CONFIDENTIALITY_PROTOCOL_INIT", status: "CORE" },
  { text: "BYPASSING PUBLIC GATEWAYS (AES_256_GCM)", status: "EXEC" },
];

const getCurrentTime = () => {
  const now = new Date();
  return now.toTimeString().split(' ')[0] + '.' + String(now.getMilliseconds()).padStart(3, '0');
};

let matrixInterval = null;
let progressInterval = null;

watch(() => props.isVisible, (newValue) => {
  if (newValue) {
    displayProgress.value = 0;
    activeLogs.value = [];
    
    matrixInterval = setInterval(generateNumbers, 60);

    // Плавный и четкий бег процентов от 0 до 100
    progressInterval = setInterval(() => {
      if (displayProgress.value < 100) {
        displayProgress.value += 1;
        
        // Постепенно выбрасываем логи в зависимости от процентов
        const logTriggerIndex = Math.floor(displayProgress.value / 20);
        if (logData[logTriggerIndex] && activeLogs.value.length <= logTriggerIndex) {
          activeLogs.value.push(logData[logTriggerIndex]);
        }
      } else {
        clearInterval(progressInterval);
        clearInterval(matrixInterval);
      }
    }, 18); // 100 шагов по 30мс = ровно 3 секунды красивой загрузки
  } else {
    clearInterval(matrixInterval);
    clearInterval(progressInterval);
  }
}, { immediate: true });
</script>

<style scoped>
.loader-overlay {
  position: fixed;
  top: 0; left: 0; width: 100%; height: 100%;
  background-color: #030303;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  overflow: hidden;
}

/* ДЕТАЛЬ 1: Люксовая фоновая сетка */
.luxury-bg-grid {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.01) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.01) 1px, transparent 1px);
  background-size: 40px 40px;
  background-position: center;
  z-index: 1;
}

/* ДЕТАЛЬ 2: Студийные глубокие блики света */
.ambient-glow-1 {
  position: absolute;
  top: -20%; left: -10%; width: 60%; height: 60%;
  background: radial-gradient(circle, rgba(138, 43, 226, 0.08) 0%, transparent 70%);
  filter: blur(80px);
  z-index: 2;
}
.ambient-glow-2 {
  position: absolute;
  bottom: -20%; right: -10%; width: 60%; height: 60%;
  background: radial-gradient(circle, rgba(197, 160, 89, 0.05) 0%, transparent 70%);
  filter: blur(80px);
  z-index: 2;
}

.secure-matrix-content {
  position: relative;
  z-index: 3;
  text-align: center;
  width: 90%;
  max-width: 650px;
}

/* Мета данные сверху */
.system-meta {
  display: flex;
  justify-content: space-between;
  font-family: monospace;
  font-size: 10px;
  color: #444;
  letter-spacing: 1.5px;
  margin-bottom: 40px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.02);
  padding-bottom: 10px;
}

.logo-area {
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 8px;
  margin-bottom: 15px;
}

.sub-logo {
  font-size: 14px;
  font-weight: 300;
  letter-spacing: 10px;
  color: #666;
}

.gold-text {
  background: linear-gradient(135deg, #c5a059 0%, #f3e5ab 50%, #aa7c11 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.confidential-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 16px;
  background: rgba(197, 160, 89, 0.02);
  border: 1px solid rgba(197, 160, 89, 0.15);
  color: #c5a059;
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-bottom: 40px;
}

.blink-dot {
  width: 4px;
  height: 4px;
  background-color: #2ecc71;
  border-radius: 50%;
  animation: blink 1s infinite;
}

/* Сетка бегущих HEX кодов */
.digital-grid {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 30px;
}

.digital-num {
  font-family: monospace;
  font-size: 20px;
  font-weight: 300;
  color: rgba(197, 160, 89, 0.8);
}

/* Детализированные логи */
.secure-logs {
  text-align: left;
  font-family: monospace;
  font-size: 11px;
  line-height: 2;
  letter-spacing: 1px;
  color: #666;
  background: rgba(0, 0, 0, 0.4);
  padding: 20px;
  border: 1px solid rgba(255, 255, 255, 0.02);
  min-height: 140px;
}

.log-entry {
  display: flex;
  gap: 12px;
  margin: 0;
}

.log-time { color: #333; }

.status-tag {
  color: #c5a059;
  font-weight: 700;
}
.status-tag.done { color: #2ecc71; }

.log-text { color: #aaa; }

/* Золотая Линия Прогресса */
.progress-section {
  margin-top: 40px;
}

.progress-bar-container {
  width: 100%;
  height: 2px;
  background: rgba(255, 255, 255, 0.05);
  position: relative;
  margin-bottom: 12px;
}

.progress-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, #aa7c11, #f3e5ab);
  box-shadow: 0 0 10px rgba(197, 160, 89, 0.5);
  transition: width 0.03s linear;
}

.progress-meta {
  display: flex;
  justify-content: space-between;
  font-family: monospace;
  font-size: 10px;
  letter-spacing: 1px;
}

.loading-text { color: #444; }
.percentage-text { color: #c5a059; font-weight: 700; }

@keyframes blink {
  0%, 100% { opacity: 0.2; }
  50% { opacity: 1; }
}

.fade-leave-active {
  transition: opacity 0.6s cubic-bezier(0.25, 1, 0.5, 1);
}
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  /* Уменьшаем логотип, чтобы он влез в одну строку */
  .logo-area {
    font-size: 22px;
    letter-spacing: 4px;
    margin-bottom: 10px;
  }
  .sub-logo {
    font-size: 10px;
    letter-spacing: 4px;
  }

  /* Делаем плашку компактнее */
  .confidential-badge {
    font-size: 8px;
    padding: 5px 10px;
    margin-bottom: 25px;
  }

  /* Спасаем бегущие цифры: уменьшаем шрифт и разрешаем им переноситься на новую строку */
  .digital-grid {
    gap: 6px;
    flex-wrap: wrap; 
    margin-bottom: 20px;
    padding: 0 10px;
  }
  .digital-num {
    font-size: 14px;
  }

  /* Адаптируем терминал с логами */
  .secure-logs {
    padding: 15px 10px;
    font-size: 9px; /* Делаем шрифт как в настоящем мини-терминале */
    min-height: 110px;
  }
  
  .log-entry {
    flex-wrap: wrap; /* Позволяем длинным логам переноситься */
    gap: 6px;
    margin-bottom: 8px;
  }

  /* Прогресс-бар */
  .progress-section {
    margin-top: 30px;
  }
  .progress-meta {
    font-size: 9px;
    flex-direction: column; /* Ставим проценты под текстом */
    align-items: center;
    gap: 5px;
  }
}
</style>