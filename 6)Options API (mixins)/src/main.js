import { createApp } from 'vue';

import App from './App.vue';
import loggerMixin from './mixins/logger.js';

const app = createApp(App)

// GLOBAL MIXIN: adds logic to each component
app.mixin(loggerMixin);

app.mount('#app');
