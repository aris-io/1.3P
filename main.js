import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  { path: '/about', component: () => import('./components/AboutMe.vue') },
  { path: '/skills', component: () => import('./components/SkillsAndAttributes.vue') },
  { path: '/previous-work', component: () => import('./components/PreviousWork.vue') },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');