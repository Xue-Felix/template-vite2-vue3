import {
  createRouter,
  createWebHashHistory,
  RouteRecordRaw,
} from 'vue-router';
import Home from '@/views/home/index.vue';
import Detail from '@/views/detail/index.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/',
    name: 'Detail',
    component: Detail,
  },
  {
    path: '/lazy',
    name: 'Lazy',
    component: () => import('@/views/lazy/index.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
