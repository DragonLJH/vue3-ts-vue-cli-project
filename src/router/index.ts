import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/components/Home/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/queryPage',
    component: Home,
    children: [{
      name: 'QueryPage',
      path: '/queryPage/:path',
      meta: { title: 'QueryPage', icon: 'el-icon-s-home' },  
      component: () => import('@/components/CommomPage/QueryPage/index.vue'),
    }]
  },
  {
    path: '/uploadPage',
    component: Home,
    children: [{
      name: 'UploadPage',
      path: '/uploadPage/:path',
      meta: { title: 'Upload', icon: 'el-icon-s-home' },  
      component: () => import('@/components/CommomPage/UploadPage/index.vue'),
    }]
  },
  {
    path: '/',
    component: Home
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
