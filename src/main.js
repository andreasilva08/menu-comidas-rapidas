import { createApp } from 'vue';
import { Quasar, Notify, Dialog, ClosePopup, Ripple } from 'quasar';
import * as allQuasar from 'quasar';

// Estilos Quasar
import 'quasar/dist/quasar.css';
import '@quasar/extras/material-icons/material-icons.css';

// Estilos globales de la aplicación
import './index.css';

import App from './App.vue';
import router from './router/index.js';

// Registrar todos los componentes de Quasar nativos (q-layout, q-header, q-page, q-card, q-btn, etc.)
const components = {};
for (const key in allQuasar) {
  if (key.startsWith('Q')) {
    components[key] = allQuasar[key];
  }
}

const app = createApp(App);

app.use(router);

app.use(Quasar, {
  components,
  directives: {
    ClosePopup,
    Ripple,
  },
  plugins: {
    Notify,
    Dialog,
  },
  config: {
    brand: {
      primary: '#FF9F0D',
      secondary: '#0E0E11',
      accent: '#E53935',
      dark: '#0E0E11',
      positive: '#25D366',
      negative: '#E53935',
      info: '#2196F3',
      warning: '#FFB300'
    },
    notify: {
      position: 'top-right',
      timeout: 2500,
      textColor: 'white'
    }
  }
});

app.mount('#app');

