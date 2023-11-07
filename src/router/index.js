import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('../views/MainView.vue'),
      children: [
        {
          path: 'day/:day',
          component: () => import('../views/DayView.vue'),
          props: true,
        },
      ],
    },
  ],
});

export default router;
