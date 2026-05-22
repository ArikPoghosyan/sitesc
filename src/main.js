import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Обязательно импортируем роутер

const app = createApp(App);

app.use(router); // Говорим приложению использовать роутер
app.mount('#app');