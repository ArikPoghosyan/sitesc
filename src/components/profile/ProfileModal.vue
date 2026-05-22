<template>
  <div class="overlay" @click.self="$emit('close')">

    <div class="modal">

      <h2>SECURE ACCESS</h2>

      <p>Request ID: {{ id }}</p>

      <p>Contact manager via Telegram</p>

      <a href="https://t.me/yourlink">TELEGRAM</a>

      <button @click="$emit('close')">CLOSE</button>

    </div>

  </div>
</template>

<script setup>
defineProps({ id: String });
defineEmits(["close"]);
</script>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.8);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #111;
  padding: 30px;
  border: 1px solid #c5a059;
  color: white;
}
</style>