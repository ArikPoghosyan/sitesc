<template>
  <div class="concierge-page">
    <div class="concierge-hero">
      <h1>PREMIUM CONCIERGE</h1>
      <p>Организация отдыха под ключ. Абсолютная приватность.</p>
    </div>

    <div class="services-grid">
      <div class="service-card">
        <i class="fa-solid fa-car-side icon"></i>
        <h3>VIP ТРАНСФЕР</h3>
        <p>Встреча в аэропорту, автомобили премиум-класса (Maybach, Rolls-Royce), полная анонимность маршрута.</p>
      </div>

      <div class="service-card">
        <i class="fa-solid fa-user-shield icon"></i>
        <h3>ЛИЧНАЯ ОХРАНА</h3>
        <p>Профессиональное сопровождение 24/7. Невидимый контроль безопасности на время всего пребывания.</p>
      </div>

      <div class="service-card">
        <i class="fa-solid fa-champagne-glasses icon"></i>
        <h3>ЗАКРЫТЫЕ МЕРОПРИЯТИЯ</h3>
        <p>Аренда вилл, яхт, бронирование лучших отелей и ресторанов. Организация досуга высшего уровня.</p>
      </div>
    </div>

    <div class="contact-concierge">
      <button class="btn-gold">СВЯЗАТЬСЯ С КОНСЬЕРЖЕМ</button>
    </div>
  </div>
</template>

<style scoped>
.concierge-page { padding: 120px 7%; min-height: 100vh; position: relative; z-index: 10; text-align: center; }
.concierge-hero h1 { font-family: 'Cinzel', serif; font-size: 48px; color: #c5a059; letter-spacing: 5px; margin-bottom: 10px; }
.concierge-hero p { color: #888; font-size: 14px; letter-spacing: 2px; margin-bottom: 60px; text-transform: uppercase; }

.services-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px; margin-bottom: 60px; }
.service-card { background: rgba(10,10,10,0.6); border: 1px solid rgba(197, 160, 89, 0.2); padding: 50px 30px; transition: 0.3s; backdrop-filter: blur(5px); }
.service-card:hover { border-color: #c5a059; transform: translateY(-5px); background: rgba(20,20,20,0.9); }
.icon { font-size: 40px; color: #c5a059; margin-bottom: 20px; }
.service-card h3 { font-family: 'Cinzel', serif; color: #fff; letter-spacing: 2px; margin-bottom: 15px; }
.service-card p { color: #aaa; font-size: 12px; line-height: 1.8; letter-spacing: 0.5px; }

.btn-gold { background: transparent; border: 1px solid #c5a059; color: #c5a059; padding: 20px 50px; font-size: 12px; letter-spacing: 4px; text-transform: uppercase; cursor: pointer; transition: 0.4s; }
.btn-gold:hover { background: #c5a059; color: #000; box-shadow: 0 0 30px rgba(197, 160, 89, 0.3); }
</style>