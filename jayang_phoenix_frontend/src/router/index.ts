import Vue from "vue";
import VueRouter, {RouteConfig} from "vue-router";
import ErrorPage from "@/components/404.vue";
import AboutPage from "@/pages/About.vue";
import LoginPage from "@/pages/Login.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {path: '/404', component: ErrorPage, name: 'ErrorPage'},
    {path: '/about', component: AboutPage, name: 'About'},
    {path: '/login', component: LoginPage, name: 'Login'}
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
