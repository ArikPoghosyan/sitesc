<template>
  <div class="profile-container">
    <div v-if="isLoading" class="loader-container">
      <div class="gold-spinner"></div>
    </div>

    <div v-else-if="model" class="profile-wrapper">
      <div class="top-actions">
        <button class="back-btn" @click="router.push('/masters')">← Вернуться в каталог</button>
      </div>

      <div :class="['profile-content', { 'exclusive-border': model.is_exclusive }]">
        
        <div class="visual-section">
          <div class="main-photo-wrapper">
            <img :src="activePhoto || model.photos[0]" class="big-profile-img" alt="Main" />
          </div>
          
          <div v-if="model.photos && model.photos.length > 1" class="gallery-thumbs">
            <div 
              v-for="(photo, index) in model.photos" 
              :key="index"
              :class="['thumb-box', { 'active-thumb': activePhoto === photo || (!activePhoto && index === 0) }]"
              @click="activePhoto = photo"
            >
              <img :src="photo" class="thumb-img" />
            </div>
          </div>
        </div>
        
        <div class="info-section">
          <div class="title-row">
            <h1 class="profile-title">{{ model.name }}</h1>
            <span v-if="model.is_exclusive" class="exclusive-tag">EXCLUSIVE</span>
          </div>
          <p class="location-text">{{ model.country }}, {{ model.city }}</p>
          <div class="divider"></div>
          
          <div class="parameters-grid">
            <div class="param-item"><span class="p-label">Возраст</span><span class="p-value">{{ model.age }} лет</span></div>
            <div class="param-item"><span class="p-label">Рост</span><span class="p-value">{{ model.height }} см</span></div>
            <div class="param-item"><span class="p-label">Вес</span><span class="p-value">{{ model.weight }} кг</span></div>
          </div>

          <div v-if="model.video" class="video-section">
            <h3 class="video-title">Приватное видео</h3>
            <video class="profile-video" controls playsinline preload="metadata">
              <source :src="model.video" type="video/mp4" />
              Ваш браузер не поддерживает видео.
            </video>
          </div>

          <button class="book-btn">Запросить контакты</button>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { supabase } from '../supabase';

const route = useRoute();
const router = useRouter();
const model = ref(null);
const activePhoto = ref(''); // Хранит ссылку на выбранное в данный момент фото
const isLoading = ref(true);

const fetchModelDetail = async () => {
  try {
    isLoading.value = true;
    const { data, error } = await supabase
      .from('models')
      .select('*')
      .eq('id', route.params.id)
      .single();
    
    if (error) throw error;
    model.value = data;
  } catch (error) {
    console.error(error.message);
    router.push('/masters');
  } finally {
    isLoading.value = false;
  }
};

onMounted(fetchModelDetail);
</script>

<style scoped>
.profile-container { padding: 40px 7%; min-height: calc(100vh - 95px); }
.top-actions { margin-bottom: 30px; }
.back-btn { background: transparent; border: none; color: #c5a059; font-size: 13px; letter-spacing: 2px; cursor: pointer; text-transform: uppercase; }

.profile-content { display: flex; gap: 50px; background: rgba(6, 6, 6, 0.85); border: 1px solid rgba(255, 255, 255, 0.05); padding: 45px; backdrop-filter: blur(20px); }
.profile-content.exclusive-border { border-color: rgba(197, 160, 89, 0.35); box-shadow: 0 0 30px rgba(197, 160, 89, 0.05); }

/* Левая секция медиа */
.visual-section { flex: 1.1; display: flex; flex-direction: column; gap: 15px; }
.main-photo-wrapper { width: 100%; height: 580px; background: #000; overflow: hidden; }
.big-profile-img { width: 100%; height: 100%; object-fit: cover; object-position: center top; }

/* Галерея миниатюр */
.gallery-thumbs { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
.thumb-box { height: 90px; background: #111; cursor: pointer; border: 1px solid transparent; overflow: hidden; transition: 0.3s; }
.thumb-box:hover, .thumb-box.active-thumb { border-color: #c5a059; opacity: 0.8; }
.thumb-img { width: 100%; height: 100%; object-fit: cover; }

/* Правая секция инфо */
.info-section { flex: 0.9; display: flex; flex-direction: column; }
.title-row { display: flex; align-items: center; gap: 20px; }
.profile-title { font-size: 2.5rem; color: #fff; letter-spacing: 1px; font-weight: 400; }
.exclusive-tag { background: #c5a059; color: #000; font-size: 9px; font-weight: 700; padding: 4px 10px; letter-spacing: 1px; }
.location-text { color: #c5a059; font-size: 1.05rem; margin-top: 5px; margin-bottom: 20px; }
.divider { width: 50px; height: 1px; background: rgba(197, 160, 89, 0.4); margin-bottom: 30px; }

.parameters-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; margin-bottom: 35px; }
.param-item { background: rgba(255,255,255,0.02); padding: 12px; border: 1px solid rgba(255,255,255,0.04); text-align: center; }
.p-label { display: block; color: #555; font-size: 0.75rem; text-transform: uppercase; margin-bottom: 5px; }
.p-value { color: #fff; font-size: 1rem; }

/* Стили Видеоплеера */
.video-section { margin-bottom: 35px; border-top: 1px solid rgba(255, 255, 255, 0.05); padding-top: 25px; }
.video-title { color: #fff; font-size: 1.1rem; letter-spacing: 1px; margin-bottom: 15px; text-transform: uppercase; }
.profile-video { width: 100%; max-height: 250px; background: #000; border: 1px solid rgba(197, 160, 89, 0.1); }

.book-btn { background: linear-gradient(135deg, #aa7c11, #c5a059); border: none; color: #000; padding: 16px 45px; font-size: 11px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; cursor: pointer; align-self: flex-start; margin-top: auto; transition: 0.3s; }
.book-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 25px rgba(197, 160, 89, 0.3); }

@media (max-width: 1024px) {
  .profile-content { flex-direction: column; padding: 25px; }
  .main-photo-wrapper { height: 450px; }
}
</style>