<template>
  <div class="music-controls" @click="toggleMusic" :title="isPlaying ? 'Выключить музыку' : 'Включить музыку'">
    <svg v-if="isPlaying" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c5a059" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="speaker-icon">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
    </svg>
    <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6d6d6d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="speaker-icon muted">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
      <line x1="23" y1="9" x2="17" y2="15"></line>
      <line x1="17" y1="9" x2="23" y2="15"></line>
    </svg>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const isPlaying = ref(false);
let audio = null;

const playAudio = async () => {
  if (!audio) return;
  try {
    await audio.play();
    isPlaying.value = true;
  } catch (err) {
    console.log("Autoplay blocked, waiting for user interaction");
  }
};

onMounted(() => {
  audio = new Audio('/audio/luxury-ambient.mp3');
  audio.loop = true;
  audio.volume = 0.3;

  // 1. Пытаемся запустить сразу
  playAudio();

  // 2. Слушаем любой клик по сайту, чтобы принудительно запустить музыку, если автоплей заблокирован
  const unlockAudio = () => {
    playAudio();
    document.removeEventListener('click', unlockAudio);
  };
  
  document.addEventListener('click', unlockAudio);
});

const toggleMusic = () => {
  if (isPlaying.value) {
    audio.pause();
    isPlaying.value = false;
  } else {
    audio.play();
    isPlaying.value = true;
  }
};
</script>

<style scoped>
/* Стили оставляем прежними из прошлого сообщения */
.music-controls {
  position: fixed; bottom: 25px; right: 25px; z-index: 1000; cursor: pointer;
  background: rgba(10, 10, 10, 0.5); padding: 10px; border: 1px solid rgba(197, 160, 89, 0.2);
  border-radius: 50%; backdrop-filter: blur(15px);
  transition: all 0.4s; display: flex; align-items: center; justify-content: center;
  width: 44px; height: 44px;
}
.music-controls:hover { border-color: #c5a059; background: rgba(10, 10, 10, 0.8); }
.speaker-icon { transition: all 0.3s; }
.speaker-icon.muted { filter: saturate(0); opacity: 0.7; }

@media (max-width: 768px) {
  .music-controls {
    bottom: 35px; /* Поднимаем повыше */
    right: 20px;
    width: 38px;  /* Делаем чуть меньше */
    height: 38px;
    padding: 8px;
  }
}
</style>