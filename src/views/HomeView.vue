<template>
  <div class="home-container">
    <div class="hero-section">
      <div class="accent-line"></div>
      
      <h1 class="hero-title">
        ЭКСКЛЮЗИВНЫЙ<br />ЭЛИМЕНТ
      </h1>
      
      <p class="hero-subtitle">
        Индивидуальный подход к каждому запросу.<br />
        Полная анонимность и исключительное качество.
      </p>
      
      <button class="gold-btn" @click="router.push('/masters')">
        <span class="btn-content">Перейти к коллекции</span>
        <span class="btn-shine"></span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
</script>

<style scoped>
.home-container {
  display: flex;
  align-items: center;
  justify-content: flex-start; /* Текст слева */
  min-height: calc(100vh - 95px);
  padding-left: 10%; /* Отступ слева для элитного вида */
}

.hero-section {
  max-width: 600px;
  text-align: left; /* Текст по левому краю */
}

.accent-line {
  width: 80px;
  height: 2px;
  background: #c5a059;
  margin-bottom: 30px;
  box-shadow: 0 0 10px rgba(197, 160, 89, 0.5);
}

.hero-title {
  font-family: 'Cinzel', serif; /* Если подключен этот шрифт */
  font-size: 4rem;
  line-height: 1.1;
  letter-spacing: 4px;
  margin-bottom: 25px;
  color: #fff;
  text-transform: uppercase;
}

.hero-subtitle {
  font-size: 1.1rem;
  color: #888;
  margin-bottom: 50px;
  letter-spacing: 1px;
  line-height: 1.6;
}

.gold-btn {
  position: relative;
  background: transparent;
  border: 1px solid #c5a059;
  color: #c5a059;
  padding: 18px 45px;
  font-size: 12px;
  letter-spacing: 4px;
  text-transform: uppercase;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.5s ease;
}

.gold-btn:hover {
  color: #000;
  background: #c5a059;
  box-shadow: 0 0 30px rgba(197, 160, 89, 0.3);
}

/* Эффект легкого "отблеска" на кнопке */
.btn-shine {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
  transition: 0.5s;
}

.gold-btn:hover .btn-shine {
  left: 100%;
}

@media (max-width: 768px) {
  .home-container {
    padding-left: 5%; /* Уменьшаем пустую зону слева */
    padding-right: 5%;
    align-items: center; /* Центрируем контент по вертикали */
    justify-content: center; /* Смещаем контент ближе к центру экрана */
  }
  
  .hero-section {
    display: flex;
    flex-direction: column;
    align-items: center; /* Центрируем элементы внутри блока */
    text-align: center;
  }

  .accent-line {
    margin: 0 auto 20px auto; /* Центрируем золотую линию */
  }

  .hero-title {
    font-size: 2.2rem; /* Уменьшаем заголовок */
    letter-spacing: 2px;
    margin-bottom: 15px;
  }

  .hero-subtitle {
    font-size: 0.95rem;
    margin-bottom: 35px;
    padding: 0 10px; /* Чтобы текст не прилипал к краям экрана */
  }

  .gold-btn {
    width: 100%; /* На телефоне широкая кнопка выглядит лучше и удобнее нажимается */
    max-width: 300px; /* Но ограничиваем максимальную ширину */
    padding: 16px 20px;
  }
}
</style>