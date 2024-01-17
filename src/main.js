import { createApp } from 'vue';
import './style.scss';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';

import Home from './pages/Home.vue';
import ToDo from './pages/ToDo.vue';
import Modals from './pages/Modals.vue';
import ChuckNorris from './pages/ChuckNorris.vue';
const routes = [
    { path: '/', component: Home, name: 'Home' },
    { path: '/todo', component: ToDo, name: 'ToDo' },
    { path: '/modals', component: Modals, name: 'Modals' },
    { path: '/chuck', component: ChuckNorris, name: 'Chuck Norris' },
];

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
});

const app = createApp(App);

app.use(router);

app.mount('#app');

if(app == null) {
    window.a = null;
}