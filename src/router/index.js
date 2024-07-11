import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import Jobs from '@/views/Jobs.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import JobView from '@/views/JobView.vue'
import AddJobView from '@/components/AddJobView.vue'
import JobEditView from '@/views/JobEditView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: Jobs
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundView
    },
    {
      path: '/job/:id',
      name: 'job',
      component: JobView
    },
    {
      path: '/add-job',
      name: 'add-job',
      component: AddJobView
    },
    {
      path: '/edit-job/:id',
      name: 'edit-job',
      component: JobEditView
    }
  ]
})

export default router
