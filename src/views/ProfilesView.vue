Держи финальный и полный код для файла **`src/views/ProfilesView.vue`**, в котором собраны все стили: и новая 3-пиксельная градиентная рамка для обычных карточек, и мощный 5-пиксельный ювелирный дизайн с белым золотом, пульсирующим неоном и уголками для эксклюзивов.

Просто скопируй этот код целиком и замени им всё содержимое файла `ProfilesView.vue`:

```html
<template>
  <div class="catalog-container">
    <h2 class="section-title">VIP КАТАЛОГ</h2>
    
    <div v-if="isLoading" class="loader-container">
      <div class="gold-spinner"></div>
    </div>

    <div v-else class="models-grid">
      <div 
        v-for="model in models" 
        :key="model.id" 
        :class="['model-card', { 'exclusive-card': model.is_exclusive }]"
        @click="goToProfile(model.id)"
      >
        <div v-if="model.is_exclusive" class="exclusive-badge">
          <span class="badge-shine"></span>
          EXCLUSIVE
        </div>

        <div class="image-wrapper">
          <img 
            v-if="model.photos && model.photos.length" 
            :src="model.photos[0]" 
            :alt="model.name" 
            class="model-img" 
          />
          <div class="card-overlay"></div>
        </div>
        
        <div class="card-info">
          <h3 class="model-name">{{ model.name }}</h3>
          <div class="model-details">
            <span>{{ model.age }} лет</span>
            <span class="dot">•</span>
            <span>{{ model.city }}</span>
          </div>
          <div class="model-params">
            <span>Рост: {{ model.height }}</span>
            <span class="pipe">|</span>
            <span>Вес: {{ model.weight }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { supabase } from '../supabase';

const router = useRouter();
const models = ref([]);
const isLoading = ref(true);

const fetchModels = async () => {
  try {
    isLoading.value = true;
    const { data, error } = await supabase
      .from('models')
      .select('*')
      .order('is_exclusive', { ascending: false });
    
    if (error) throw error;
    models.value = data;
  } catch (error) {
    console.error(error.message);
  } finally {
    isLoading.value = false;
  }
};

const goToProfile = (id) => { router.push(`/profile/${id}`); };
onMounted(fetchModels);
</script>

<style scoped>
.catalog-container { padding: 40px 7%; min-height: calc(100vh - 95px); background-color: #030303; }
.section-title { text-align: center; font-size: 2rem; letter-spacing: 6px; margin-bottom: 40px; color: #c5a059; text-transform: uppercase; font-family: 'Cinzel', serif; }
.models-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 35px; }


/* ==========================================================================
   1. ОБЫЧНАЯ КАРТОЧКА (Градиентная рамка, толщина 3px)
   ========================================================================== */
.model-card { 
  position: relative;
  border: 2px solid transparent; 
  background: linear-gradient(180deg, rgba(20, 16, 10, 0.95) 0%, rgba(5, 5, 5, 0.98) 100%) padding-box,
              linear-gradient(135deg, #8a5a00 0%, #ffeaa7 30%, #8a5a00 60%, #aa7c11 100%) border-box;
  cursor: pointer; 
  transition: all 0.5s cubic-bezier(0.25, 1, 0.3, 1); 
  overflow: hidden; 
  box-shadow: inset 0 0 15px rgba(197, 160, 89, 0.3), 0 5px 15px rgba(0,0,0,0.8);
}

.model-card:hover { 
  transform: translateY(-7px);
  box-shadow: inset 0 0 25px rgba(197, 160, 89, 0.5), 
              0 20px 40px rgba(0, 0, 0, 0.9), 
              0 0 20px rgba(197, 160, 89, 0.3);
}


/* ==========================================================================
   2. ЭКСКЛЮЗИВНАЯ КАРТОЧКА (Усиленный Люкс с ювелирными углами)
   ========================================================================== */
.model-card.exclusive-card {
  border: 5px solid transparent; 
  background: linear-gradient(180deg, rgba(20, 16, 10, 0.99) 0%, rgba(5, 5, 5, 1) 100%) padding-box,
              linear-gradient(135deg, #8a5a00 0%, #ffeaa7 20%, #8a5a00 40%, #fff 60%, #ffeaa7 80%, #aa7c11 100%) border-box;
  border-radius: 0; 
  box-shadow: 
    inset 0 0 25px rgba(197, 160, 89, 0.4), 
    0 0 35px rgba(197, 160, 89, 0.25),
    0 0 10px rgba(255, 255, 255, 0.1); 
}

/* Внутреннее светящееся паспарту */
.model-card.exclusive-card::before {
  content: '';
  position: absolute;
  top: 12px; left: 12px; right: 12px; bottom: 12px;
  border: 1px solid rgba(255, 234, 167, 0.3);
  pointer-events: none;
  z-index: 5;
  transition: all 0.5s ease;
}

/* Ювелирные золотые уголки поверх рамки */
.model-card.exclusive-card::after {
  content: '';
  position: absolute;
  top: 8px; left: 8px; right: 8px; bottom: 8px;
  background:
    linear-gradient(#fff, #ffeaa7) top left / 25px 3px no-repeat,
    linear-gradient(#fff, #ffeaa7) top left / 3px 25px no-repeat,
    linear-gradient(#fff, #ffeaa7) top right / 25px 3px no-repeat,
    linear-gradient(#fff, #ffeaa7) top right / 3px 25px no-repeat,
    linear-gradient(#ffeaa7, #c5a059) bottom left / 25px 3px no-repeat,
    linear-gradient(#ffeaa7, #c5a059) bottom left / 3px 25px no-repeat,
    linear-gradient(#ffeaa7, #c5a059) bottom right / 25px 3px no-repeat,
    linear-gradient(#ffeaa7, #c5a059) bottom right / 3px 25px no-repeat;
  pointer-events: none;
  z-index: 6;
  transition: all 0.5s cubic-bezier(0.25, 1, 0.3, 1);
}

/* Сверхмощный пульсирующий ховер для эксклюзива */
.model-card.exclusive-card:hover {
  transform: translateY(-9px);
  background: linear-gradient(180deg, rgba(30, 25, 15, 0.95) 0%, rgba(10, 10, 10, 1) 100%) padding-box,
              linear-gradient(135deg, #ffeaa7 0%, #aa7c11 25%, #ffeaa7 50%, #aa7c11 75%, #ffeaa7 100%) border-box;
  box-shadow: 
    0 25px 60px rgba(0, 0, 0, 1), 
    0 0 60px rgba(197, 160, 89, 0.7), 
    0 0 20px rgba(255, 255, 255, 0.6), 
    inset 0 0 45px rgba(255, 234, 167, 0.5); 
}

.model-card.exclusive-card:hover::before {
  border-color: rgba(255, 255, 255, 0.9);
  top: 10px; left: 10px; right: 10px; bottom: 10px;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.6);
}

.model-card.exclusive-card:hover::after {
  top: 5px; left: 5px; right: 5px; bottom: 5px;
  background-size: 35px 4px, 4px 35px; 
}


/* ==========================================================================
   3. ЭЛЕМЕНТЫ КОНТЕНТА
   ========================================================================== */
/* Анимированная плашка EXCLUSIVE */
.exclusive-badge { 
  position: absolute; 
  top: 20px; 
  left: 20px; 
  background: linear-gradient(135deg, #aa7c11, #ffeaa7 50%, #aa7c11); 
  color: #000; 
  font-size: 10px; 
  font-weight: 900; 
  letter-spacing: 3px; 
  padding: 6px 16px; 
  z-index: 12; 
  text-transform: uppercase;
  box-shadow: 0 4px 15px rgba(0,0,0,0.8);
  border: 1px solid rgba(255, 255, 255, 0.5);
  overflow: hidden; 
}

/* Пробегающий световой блик */
.badge-shine {
  position: absolute;
  top: 0;
  left: -150%;
  width: 50%;
  height: 100%;
  background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0) 100%);
  transform: skewX(-25deg);
  animation: shine 3.5s infinite;
}
@keyframes shine {
  0% { left: -150%; }
  20% { left: 200%; }
  100% { left: 200%; }
}

@media (max-width: 768px) {
  .catalog-container { 
    padding: 20px 4%; /* Уменьшаем боковые отступы */
  }
  .section-title { 
    font-size: 1.5rem; 
    letter-spacing: 4px; 
    margin-bottom: 25px; 
  }
  .models-grid { 
    grid-template-columns: 1fr; /* Одна карточка в ряд */
    gap: 25px; 
  }
  .image-wrapper { 
    height: 380px; /* Чуть уменьшаем высоту фото */
  }
  .model-card:hover { 
    transform: none; /* Убираем прыжок карточки при тапе (на мобилках нет мыши) */
  }
  .model-card.exclusive-card:hover {
    transform: none;
  }
}

/* Фотографии */
.image-wrapper { width: 100%; height: 420px; background: #010101; overflow: hidden; position: relative; }
.model-img { width: 100%; height: 100%; object-fit: cover; object-position: center top; transition: transform 0.8s cubic-bezier(0.25, 1, 0.3, 1); }
.model-card:hover .model-img { transform: scale(1.06); }

/* Затемнение низа фото */
.card-overlay {
  position: absolute;
  bottom: 0; left: 0; width: 100%; height: 40%;
  background: linear-gradient(to top, rgba(5, 5, 5, 0.95) 0%, transparent 100%);
  pointer-events: none;
}
.exclusive-card .card-overlay { background: linear-gradient(to top, rgba(2, 2, 2, 0.98) 0%, transparent 100%); }

/* Инфо-блок */
.card-info { padding: 22px; text-align: center; position: relative; z-index: 10; }
.model-name { font-size: 1.3rem; color: #fff; letter-spacing: 2px; margin-bottom: 8px; font-weight: 500; transition: color 0.3s; }

/* У эксклюзивов имя сверкает платиной и золотом */
.exclusive-card .model-name { 
  background: linear-gradient(135deg, #ffffff 0%, #ffeaa7 50%, #c5a059 100%); 
  -webkit-background-clip: text; 
  -webkit-text-fill-color: transparent; 
  font-weight: 800;
  letter-spacing: 3px;
}

.model-details { color: #8a8a8a; font-size: 0.9rem; margin-bottom: 12px; }
.exclusive-card .model-details { color: #aaa8a0; }
.dot { margin: 0 8px; color: #c5a059; }

.model-params { font-size: 0.8rem; color: #444; letter-spacing: 1px; text-transform: uppercase; }
.exclusive-card .model-params { color: #6d614b; }
.pipe { margin: 0 6px; color: rgba(197, 160, 89, 0.3); }

/* Лоадер */
.loader-container { display: flex; justify-content: center; align-items: center; min-height: 300px; }
.gold-spinner { width: 40px; height: 40px; border: 2px solid rgba(197, 160, 89, 0.1); border-top-color: #c5a059; border-radius: 50%; animation: spin 1s linear infinite; }
@keyframes spin { to { transform: rotate(360deg); } }
</style>
