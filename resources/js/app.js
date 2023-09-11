import './bootstrap';
import { createApp } from 'vue'; // <--- import the createApp function
import App from './App.vue'; // <--- import the App component 
import '../css/app.css'; // <--- import the CSS file
import router from './router'; // <--- import the router

createApp(App).use(router).mount('#app'); // <--- mount the App component on the #app element