<template>
  <div :class="['profile-card', profile.type]" @click="$emit('open', profile.id)">

    <img :src="profile.image" />

    <div class="overlay">
      <div class="id">ID: {{ profile.id }}</div>

      <div class="name">{{ profile.name }}</div>

      <div class="city">{{ profile.city }}</div>

      <div class="status" :class="profile.status">
        {{ profile.status }}
      </div>
    </div>

  </div>
</template>

<script setup>
defineProps({ profile: Object });
defineEmits(["open"]);
</script>

<style scoped>
.profile-card {
  position: relative;
  width: 260px;
  height: 360px;
  cursor: pointer;
  overflow: hidden;
  border-radius: 10px;
  border: 1px solid rgba(255,255,255,0.08);
}

.profile-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.profile-card.vip {
  border: 1px solid #c5a059;
  box-shadow: 0 0 25px rgba(197,160,89,0.2);
}

.overlay {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 12px;
  background: linear-gradient(to top, rgba(0,0,0,0.9), transparent);
  color: white;
}

.id {
  font-size: 10px;
  color: #c5a059;
}

.name {
  font-size: 16px;
  font-weight: 500;
}

.city {
  font-size: 12px;
  opacity: 0.7;
}

.status.available {
  color: #5cff9a;
}

.status.busy {
  color: #ff5c5c;
}
</style>