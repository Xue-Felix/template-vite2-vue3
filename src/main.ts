import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import store from './store';
import App from './App.vue';
import router from './router/index';
// const router = require('./router/index');

const app = createApp(App);

app.use(ElementPlus);
app.use(router);
app.use(store);

app.mount('#app');
