import { createWebHistory, createRouter } from "vue-router";
import mn from './components/cnt01.vue';
import cnt01 from './components/cnt02.vue'
import cnt02 from './components/cnt03.vue'
import cnt03 from './components/cnt04.vue'
import cnt04 from './components/cnt05.vue'

const routes = [
  {
    path: "/newtrip",
    component: mn,
    name:'main',
  },
  {
    path:'/newtrip/cnt01',
    component: cnt01,
    name:'content01',
  },
  {
    path:'/newtrip/cnt02',
    component: cnt02,
    name:'content02',
  },
  {
    path:'/newtrip/cnt03',
    component: cnt03,
    name:'content03',
  },
  {
    path:'/newtrip/cnt04',
    component: cnt04,
    name:'content04',
    props:true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 