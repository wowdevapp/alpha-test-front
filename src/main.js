import './assets/index.css'
import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Users from './pages/Users.vue'
import Posts from './pages/Posts.vue'
import PostDetails from './components/posts/post-details.vue'
const routes = [
    { path: '/', component: Users },
    { path: '/user/:id', component: Posts },
    { path: '/user/:id/post/:postId', component: PostDetails },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App)
    .use(router)
    .mount('#app')
