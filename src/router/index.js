import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ProfilesView from '../views/ProfilesView.vue'; 
import ProfileDetailView from '../views/ProfileDetailView.vue'; 
import ConciergeView from '../views/ConciergeView.vue'; 
// ДОБАВЬ ЭТУ СТРОКУ (убедись, что путь к файлу верный):
import PackagesView from '../views/PackagesView.vue'; 

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/masters', name: 'masters', component: ProfilesView },
  { path: '/profile/:id', name: 'profile-detail', component: ProfileDetailView },
  { path: '/concierge', name: 'concierge', component: ConciergeView },
  {
      path: '/packages',
      name: 'packages',
      component: PackagesView
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;