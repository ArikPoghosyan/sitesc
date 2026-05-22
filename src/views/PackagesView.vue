<template>
  <div class="packages-container">
    <div class="header-section">
      <h2 class="section-title">VIP ПАКЕТЫ</h2>
      <p class="section-subtitle">Абсолютный комфорт и безопасность "под ключ"</p>
    </div>

    <div class="packages-grid">
      
      <div class="package-card platinum-card">
        <div class="card-glow"></div>
        <div class="card-inner">
          <div class="card-header">
            <h3 class="pkg-title">PLATINUM</h3>
            <div class="pkg-badge">Premium Experience</div>
          </div>
          
          <div class="pkg-divider"></div>
          
          <ul class="pkg-features">
            <li>
              <span class="feature-icon">🚘</span>
              <div class="feature-text">
                <strong>VIP Трансфер</strong>
                <span>Встреча и передвижение на авто класса Maybach / S-Class.</span>
              </div>
            </li>
            <li>
              <span class="feature-icon">🛡️</span>
              <div class="feature-text">
                <strong>Личная охрана</strong>
                <span>Профессиональный телохранитель на всё время пребывания.</span>
              </div>
            </li>
            <li>
              <span class="feature-icon">💎</span>
              <div class="feature-text">
                <strong>Сопровождение</strong>
                <span>Выбранная модель из каталога на весь период пакета.</span>
              </div>
            </li>
            <li>
              <span class="feature-icon">🥂</span>
              <div class="feature-text">
                <strong>Организация отдыха</strong>
                <span>Бронь лучших ресторанов и закрытых клубов.</span>
              </div>
            </li>
          </ul>

          <button class="pkg-btn">ОФОРМИТЬ PLATINUM</button>
        </div>
      </div>

      <div class="package-card diamond-card">
        <div class="diamond-shine"></div>
        <div class="card-glow"></div>
        
        <div class="card-inner">
          <div class="card-header">
            <h3 class="pkg-title">DIAMOND</h3>
            <div class="pkg-badge">Ultimate Exclusive</div>
          </div>
          
          <div class="pkg-divider"></div>
          
          <ul class="pkg-features">
            <li>
              <span class="feature-icon">🚁</span>
              <div class="feature-text">
                <strong>Президентский Трансфер</strong>
                <span>Кортеж из Rolls-Royce, бронированных авто или вертолет.</span>
              </div>
            </li>
            <li>
              <span class="feature-icon">💂‍♂️</span>
              <div class="feature-text">
                <strong>Усиленная безопасность</strong>
                <span>Команда вооруженной охраны 24/7 и скрытое сопровождение.</span>
              </div>
            </li>
            <li>
              <span class="feature-icon">👑</span>
              <div class="feature-text">
                <strong>Эксклюзивное сопровождение</strong>
                <span>Доступ к моделям категории "Exclusive" без ограничений.</span>
              </div>
            </li>
            <li>
              <span class="feature-icon">🛥️</span>
              <div class="feature-text">
                <strong>Закрытый отдых</strong>
                <span>Аренда частных вилл, яхт и полная приватность.</span>
              </div>
            </li>
          </ul>

          <button class="pkg-btn diamond-btn">ОФОРМИТЬ DIAMOND</button>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
// Здесь пока нет логики, чисто визуал
</script>

<style scoped>
.packages-container {
  padding: 60px 5%;
  min-height: calc(100vh - 95px);
  background-color: #020202;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.header-section {
  text-align: center;
  margin-bottom: 60px;
}

.section-title {
  font-size: 2.5rem;
  letter-spacing: 8px;
  color: #fff;
  text-transform: uppercase;
  font-family: 'Cinzel', serif;
  margin-bottom: 10px;
  background: linear-gradient(135deg, #fff, #888);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.section-subtitle {
  color: #888;
  font-size: 1.1rem;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.packages-grid {
  display: flex;
  gap: 50px;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1200px;
  width: 100%;
}

/* ================= БАЗОВАЯ КАРТОЧКА ПАКЕТА ================= */
.package-card {
  position: relative;
  flex: 1;
  min-width: 340px;
  max-width: 500px;
  background: #050505;
  border-radius: 2px;
  padding: 3px; /* Место под градиентную рамку */
  transition: transform 0.5s cubic-bezier(0.25, 1, 0.3, 1);
  cursor: pointer;
}

.package-card:hover {
  transform: translateY(-10px);
}

.card-inner {
  background: #080808;
  height: 100%;
  padding: 40px 30px;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;
}

/* ================= СТИЛИ PLATINUM ================= */
.platinum-card {
  background: linear-gradient(180deg, #111 0%, #000 100%) padding-box,
              linear-gradient(135deg, #a0a0a0 0%, #ffffff 50%, #555555 100%) border-box;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.8), 0 0 20px rgba(255, 255, 255, 0.1);
}

.platinum-card:hover {
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.9), 0 0 30px rgba(255, 255, 255, 0.2);
}

.platinum-card .pkg-title {
  background: linear-gradient(135deg, #ccc, #fff, #999);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.platinum-card .pkg-badge {
  color: #aaa;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

/* ================= СТИЛИ DIAMOND ================= */
.diamond-card {
  background: linear-gradient(180deg, #050508 0%, #000 100%) padding-box,
              linear-gradient(135deg, #b9f2ff 0%, #ffffff 50%, #4dd0e1 100%) border-box;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.9), 0 0 25px rgba(185, 242, 255, 0.15);
  transform: scale(1.02); /* Бриллиант чуть крупнее изначально */
}

.diamond-card:hover {
  box-shadow: 0 20px 50px rgba(0, 0, 0, 1), 
              0 0 45px rgba(185, 242, 255, 0.4),
              inset 0 0 20px rgba(185, 242, 255, 0.1);
}

.diamond-card .pkg-title {
  background: linear-gradient(135deg, #ffffff, #b9f2ff, #ffffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 10px rgba(185, 242, 255, 0.3);
}

.diamond-card .pkg-badge {
  color: #b9f2ff;
  border: 1px solid rgba(185, 242, 255, 0.4);
  background: rgba(185, 242, 255, 0.05);
}

/* Блик по бриллиантовой карточке */
.diamond-shine {
  position: absolute;
  top: 0; left: -100%; width: 50%; height: 100%;
  background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.4), transparent);
  transform: skewX(-20deg);
  animation: diamond-sweep 4s infinite;
  z-index: 1;
  pointer-events: none;
}

@keyframes diamond-sweep {
  0% { left: -100%; }
  20% { left: 200%; }
  100% { left: 200%; }
}

/* ================= ЭЛЕМЕНТЫ ВНУТРИ КАРТОЧКИ ================= */
.card-header {
  text-align: center;
  margin-bottom: 25px;
}

.pkg-title {
  font-size: 2.2rem;
  letter-spacing: 5px;
  font-weight: 800;
  margin-bottom: 10px;
}

.pkg-badge {
  display: inline-block;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 5px 12px;
  border-radius: 20px;
}

.pkg-divider {
  height: 1px;
  width: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  margin-bottom: 30px;
}

.diamond-card .pkg-divider {
  background: linear-gradient(90deg, transparent, rgba(185, 242, 255, 0.4), transparent);
}

.pkg-features {
  list-style: none;
  padding: 0;
  margin: 0 0 40px 0;
  flex-grow: 1;
}

.pkg-features li {
  display: flex;
  align-items: flex-start;
  margin-bottom: 25px;
  gap: 15px;
}

.feature-icon {
  font-size: 1.5rem;
  filter: grayscale(100%) brightness(200%);
}

.diamond-card .feature-icon {
  filter: hue-rotate(180deg) brightness(150%);
}

.feature-text {
  display: flex;
  flex-direction: column;
}

.feature-text strong {
  color: #fff;
  font-size: 1.1rem;
  letter-spacing: 1px;
  margin-bottom: 5px;
}

.feature-text span {
  color: #888;
  font-size: 0.9rem;
  line-height: 1.4;
}

.diamond-card .feature-text span {
  color: #aaa;
}

/* ================= КНОПКИ ================= */
.pkg-btn {
  width: 100%;
  padding: 18px;
  background: transparent;
  border: 1px solid #aaa;
  color: #fff;
  font-size: 1rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
}

.pkg-btn:hover {
  background: #fff;
  color: #000;
}

.diamond-btn {
  border-color: #b9f2ff;
  color: #b9f2ff;
}

.diamond-btn:hover {
  background: #b9f2ff;
  color: #000;
  box-shadow: 0 0 20px rgba(185, 242, 255, 0.5);
}

@media (max-width: 768px) {
  .packages-container { 
    padding: 30px 4%; 
  }
  .section-title { 
    font-size: 1.8rem; 
    letter-spacing: 4px; 
  }
  .section-subtitle {
    font-size: 0.9rem;
    margin-bottom: 30px;
  }
  .packages-grid { 
    flex-direction: column; 
    gap: 30px; 
  }
  .package-card { 
    width: 100%; 
    max-width: 100%; 
    min-width: unset; 
  }
  .card-inner { 
    padding: 30px 20px; 
  }
  .diamond-card { 
    transform: scale(1); /* Убираем увеличение бриллианта, чтобы не вылезал за экран */
  }
  .pkg-title {
    font-size: 1.8rem;
  }
}

  

</style>