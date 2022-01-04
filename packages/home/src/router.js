import { createWebHistory, createRouter } from 'vue-router';

// only load the route components when they are needed (lazy load)
const HomeContent = () => import('home/HomeContent'); // eslint-disable-line import/no-unresolved
const ContactUs = () => import('contactUs/ContactUs'); // eslint-disable-line import/no-unresolved
const TeamContent = () => import('team/TeamContent'); // eslint-disable-line import/no-unresolved

// only load the route components when they are needed (AKA: lazy load)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeContent,
  },
  {
    path: '/contact-us',
    name: 'ContactUs',
    component: ContactUs,
  },
  {
    path: '/team',
    name: 'Team',
    component: TeamContent,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
