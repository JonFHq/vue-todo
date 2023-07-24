import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import List from './components/Todo/List.vue'

const app = createApp(App);
app.component('todo-list', List);
const mountedApp = app.mount('#app')
