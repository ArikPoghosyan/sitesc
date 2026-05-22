<template>
  <header class="premium-header">
    <div class="header-glow"></div>
    
    <div class="logo-wrapper">
      <div class="logo" @click="router.push('/')">
        <span class="gold-text">ESCORT</span> 
        <span class="sub-logo">ЖЕСКИЙ</span>
        <div class="logo-underline"></div>
      </div>
    </div>
    
    <div class="header-divider"></div>
    
    <nav class="nav-menu">
      <button 
        v-for="item in menuItems" 
        :key="item.path"
        :class="['nav-btn', { active: isRouteActive(item.path) }]"
        @click="router.push(item.path)"
      >
        <span class="nav-text">{{ item.label }}</span>
        <span class="nav-shine"></span>
      </button>
    </nav>

    <div class="auth-action-zone">
      <div class="button-frame-decorator">
        <button class="btn-club-enter" @click="router.push('/login')">
          <span class="btn-bg"></span>
          <span class="btn-text">Private Access</span>
          <span class="btn-icon">→</span>
        </button>
      </div>
    </div>

    <button class="mobile-burger" @click="toggleMenu">
      <span :class="['burger-line', { 'open': isMobileMenuOpen }]"></span>
      <span :class="['burger-line', { 'open': isMobileMenuOpen }]"></span>
      <span :class="['burger-line', { 'open': isMobileMenuOpen }]"></span>
    </button>

    <div :class="['mobile-nav-overlay', { 'active': isMobileMenuOpen }]">
      <div class="mobile-nav-content">
        <button 
          v-for="item in menuItems" 
          :key="item.path"
          class="mobile-nav-link"
          @click="closeMenuAndNavigate(item.path)"
        >
          {{ item.label }}
        </button>
        <button class="btn-club-enter mobile-club-btn" @click="closeMenuAndNavigate('/login')">
          Private Access
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

const isMobileMenuOpen = ref(false);

const toggleMenu = () => { 
  isMobileMenuOpen.value = !isMobileMenuOpen.value; 
};

const closeMenuAndNavigate = (path) => {
  isMobileMenuOpen.value = false;
  router.push(path);
};

const menuItems = [
  { path: '/', label: 'Главная' },
  { path: '/masters', label: 'Модели' },
  { path: '/packages', label: 'Услуги и пакеты' } 
];

const isRouteActive = (path) => {
  if (path === '/') return route.path === '/';
  if (path === '/masters') return route.path.startsWith('/masters') || route.path.startsWith('/profile');
  return route.path.startsWith(path);
};
</script>

<style scoped>
.premium-header {
  display: flex;
  align-items: center;
  padding: 0 7%;
  height: 95px;
  background: rgba(6, 6, 6, 0.82); 
  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(25px);
  border-bottom: 1px solid rgba(197, 160, 89, 0.15);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.9), 0 4px 12px rgba(0, 0, 0, 0.5);
  position: sticky;
  top: 0;
  z-index: 100;
  transition: all 0.4s ease;
}

.premium-header::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; height: 1px;
  background: linear-gradient(90deg, transparent 0%, rgba(197, 160, 89, 0.3) 50%, transparent 100%);
}

.header-divider {
  width: 1px; height: 30px;
  background: linear-gradient(to bottom, transparent, rgba(197, 160, 89, 0.2), transparent);
  margin-left: 40px; margin-right: 40px;
}

.logo-wrapper { display: flex; align-items: center; height: 100%; }

.logo {
  display: flex; align-items: baseline; font-size: 24px; font-weight: 700;
  letter-spacing: 5px; cursor: pointer; user-select: none; position: relative;
  padding-bottom: 4px; transition: transform 0.3s ease;
}
.logo:hover { transform: translateY(-1px); }

.sub-logo {
  font-family: 'Cinzel', serif; font-size: 11px; font-weight: 300;
  letter-spacing: 4px; color: #555555; margin-left: 10px; transition: color 0.3s ease;
}
.logo:hover .sub-logo { color: #c5a059; }

.logo-underline {
  position: absolute; bottom: 0; left: 0; width: 0; height: 1px;
  background: linear-gradient(90deg, transparent 0%, #c5a059 50%, transparent 100%);
  transition: width 0.5s ease;
}
.logo:hover .logo-underline { width: 100%; }

.gold-text {
  background: linear-gradient(135deg, #aa7c11 0%, #f3e5ab 25%, #c5a059 50%, #f3e5ab 75%, #aa7c11 100%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: goldShimmer 4s linear infinite;
}
@keyframes goldShimmer { to { background-position: 200% center; } }

.nav-menu { display: flex; gap: 45px; align-items: center; flex-grow: 1; }

.nav-btn {
  background: none; border: none; color: #555555; font-size: 11px;
  font-weight: 400; letter-spacing: 2.5px; text-transform: uppercase;
  cursor: pointer; padding: 12px 0; position: relative; overflow: hidden;
  transition: color 0.4s ease;
}
.nav-text { position: relative; z-index: 2; }

.nav-shine {
  position: absolute; top: 0; left: -100%; width: 100%; height: 100%;
  background: linear-gradient(90deg, transparent 0%, rgba(197, 160, 89, 0.05) 50%, transparent 100%);
  transition: left 0.5s ease;
}
.nav-btn:hover .nav-shine { left: 100%; }
.nav-btn:hover, .nav-btn.active { color: #ffffff; }

.nav-btn::before {
  content: ''; position: absolute; bottom: 0; left: 50%; transform: translateX(-50%);
  width: 0; height: 1px; background: linear-gradient(90deg, transparent 0%, #c5a059 50%, transparent 100%);
  transition: width 0.4s ease;
}
.nav-btn:hover::before { width: 90%; }
.nav-btn.active::after {
  content: ''; position: absolute; bottom: 0; left: 50%; transform: translateX(-50%);
  width: 70%; height: 1px; background: #c5a059; box-shadow: 0 0 8px rgba(197, 160, 89, 0.5);
}

.auth-action-zone { display: flex; align-items: center; }

.button-frame-decorator { position: relative; padding: 6px; }
.button-frame-decorator::before {
  content: ''; position: absolute; top: 0; right: 0; width: 10px; height: 10px;
  border-top: 1px solid rgba(197, 160, 89, 0.3); border-right: 1px solid rgba(197, 160, 89, 0.3);
}
.button-frame-decorator::after {
  content: ''; position: absolute; bottom: 0; left: 0; width: 10px; height: 10px;
  border-bottom: 1px solid rgba(197, 160, 89, 0.3); border-left: 1px solid rgba(197, 160, 89, 0.3);
}

.btn-club-enter {
  background: transparent; border: 1px solid rgba(197, 160, 89, 0.5); color: #c5a059;
  padding: 12px 26px; font-size: 10px; font-weight: 500; letter-spacing: 2px;
  text-transform: uppercase; cursor: pointer; position: relative; overflow: hidden;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.btn-bg {
  position: absolute; top: 0; left: -100%; width: 100%; height: 100%;
  background: linear-gradient(135deg, #aa7c11 0%, #c5a059 100%);
  transition: left 0.5s cubic-bezier(0.4, 0, 0.2, 1); z-index: 1;
}
.btn-text, .btn-icon { position: relative; z-index: 2; transition: all 0.4s ease; }
.btn-icon { margin-left: 6px; opacity: 0; transform: translateX(-5px); display: inline-block; }

.btn-club-enter:hover .btn-bg { left: 0; }
.btn-club-enter:hover {
  color: #070707; border-color: #f3e5ab; box-shadow: 0 0 25px rgba(197, 160, 89, 0.3);
}
.btn-club-enter:hover .btn-icon { opacity: 1; transform: translateX(2px); }

.header-glow {
  position: absolute; top: -50%; left: 50%; transform: translateX(-50%);
  width: 500px; height: 120px;
  background: radial-gradient(ellipse at center, rgba(197, 160, 89, 0.05) 0%, transparent 75%);
  pointer-events: none;
}

/* --- Скрываем мобильные элементы на ПК --- */
.mobile-burger, .mobile-nav-overlay { display: none; }

@media (max-width: 768px) {
  /* Скрываем десктопные элементы */
  .nav-menu, .header-divider, .auth-action-zone { display: none !important; }
  
  .premium-header { padding: 0 5%; justify-content: space-between; height: 80px; }

  /* Кнопка бургера */
  .mobile-burger {
    display: flex; flex-direction: column; gap: 5px; background: none; border: none; z-index: 1001; cursor: pointer;
  }
  .burger-line {
    width: 25px; height: 2px; background-color: #c5a059; transition: all 0.3s ease;
  }
  
  /* Анимация бургера */
  .burger-line.open:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
  .burger-line.open:nth-child(2) { opacity: 0; }
  .burger-line.open:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); }

  /* Оверлей мобильного меню */
  .mobile-nav-overlay {
    display: flex; position: fixed; top: 0; left: 0; width: 100%; height: 100vh;
    background: rgba(5, 5, 5, 0.98); backdrop-filter: blur(10px);
    z-index: 1000; flex-direction: column; justify-content: center; align-items: center;
    opacity: 0; pointer-events: none; transition: opacity 0.4s ease;
  }
  .mobile-nav-overlay.active { opacity: 1; pointer-events: all; }

  .mobile-nav-content { display: flex; flex-direction: column; gap: 30px; align-items: center; }
  
  .mobile-nav-link {
    background: none; border: none; color: #fff; font-size: 1.5rem; font-family: 'Cinzel', serif;
    text-transform: uppercase; letter-spacing: 4px; padding: 10px; cursor: pointer;
  }
  .mobile-club-btn { margin-top: 20px; font-size: 1.2rem; padding: 15px 30px; display: block !important; }
}
</style>