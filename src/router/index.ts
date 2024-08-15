import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import Teams from '@/components/Teams.vue';
import Projects from '@/components/Projects.vue'
import Connections from '@/components/Connections.vue'
import Profile from '@/components/Profile.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/profile',
    component: Profile,
  },
  {
    path: '/teams',
    component: Teams,
  },
  {
    path: '/projects',
    component: Projects,
  },
  {
    path: '/connections',
    component: Connections,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
