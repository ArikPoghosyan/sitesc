<template>
  <div class="search-wrapper-fluid">
    <div class="search-container">
      <div class="search-input-block">
        <span class="icon">✨</span>
        <div class="input-field">
          <label>Локация / Город</label>
          <input 
            type="text" 
            placeholder="Дубай, Москва, Монако..." 
            :value="location"
            @input="$emit('update:location', $event.target.value)"
          />
        </div>
      </div>

      <div class="border-line"></div>

      <div class="search-input-block">
        <span class="icon">🔑</span>
        <div class="input-field">
          <label>Формат / Предпочтения</label>
          <input 
            type="text" 
            placeholder="Мероприятия, ужин, бизнес-сопровождение..." 
            :value="service"
            @input="$emit('update:service', $event.target.value)"
          />
        </div>
      </div>

      <button class="search-trigger-btn" @click="$emit('execute-search')">
        <span>Подобрать</span>
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  location: String,
  service: String
});
defineEmits(['update:location', 'update:service', 'execute-search']);
</script>

<style scoped>
.search-wrapper-fluid {
  width: 100%;
  max-width: 1100px; /* Поиск стал шире и солиднее */
  margin: 0 auto;
  padding: 0 20px;
}

.search-container {
  display: flex;
  align-items: center;
  background: rgba(12, 12, 12, 0.75);
  border: 1px solid rgba(197, 160, 89, 0.2);
  box-shadow: 0 40px 90px rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(40px);
  padding: 16px 24px;
}

.search-input-block {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 5px 20px;
}

.icon {
  font-size: 18px;
  opacity: 0.6;
}

.input-field {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.input-field label {
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #666;
  margin-bottom: 6px;
}

.input-field input {
  background: transparent;
  border: none;
  color: #fff;
  font-size: 15px;
  font-weight: 300;
  letter-spacing: 1px;
  outline: none;
  width: 100%;
}

.input-field input::placeholder {
  color: #444;
}

.border-line {
  width: 1px;
  height: 50px;
  background: rgba(197, 160, 89, 0.2);
}

.search-trigger-btn {
  background: linear-gradient(135deg, #aa7c11 0%, #c5a059 100%);
  border: none;
  color: #070707;
  padding: 20px 48px;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 2px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.search-trigger-btn:hover {
  box-shadow: 0 0 35px rgba(197, 160, 89, 0.4);
  opacity: 0.95;
}
</style>