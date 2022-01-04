import { createApp } from 'vue';
import './index.scss';

import ModalContent from './components/ModalContent.vue';

createApp({ components: { ModalContent }, template: '<ModalContent />' }).mount('#app');
