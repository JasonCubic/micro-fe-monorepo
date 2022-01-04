import { createApp } from 'vue';
import './index.scss';

// eslint-disable-next-line import/no-unresolved
import router from 'home/router';
// eslint-disable-next-line import/no-unresolved
import MainLayout from 'home/MainLayout';

createApp({ components: { MainLayout }, template: '<MainLayout />' }).use(router).mount('#app');
