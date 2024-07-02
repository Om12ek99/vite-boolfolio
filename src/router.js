import { createRouter, createWebHistory } from "vue-router";
import ProjectPage from "./pages/ProjectPage.vue";
import AppHome from "./pages/AppHome.vue";
import AppChiSiamo from "./pages/AppChiSiamo.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'projects',
            component: ProjectPage
        },
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/',
            name: 'chi-siamo',
            component: AppChiSiamo
        }
    ]
});

export {router};
