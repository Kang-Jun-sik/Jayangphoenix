import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/home",
        name: "home",
        component: Home,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/",
        name: "login",
        component: () => import("../views/login.vue")
    },
    {
        path: "/register",
        name: "register",
        component: () => import("../views/register.vue")
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

// 전역 라우팅 가드 지정 =>
// to : 이동할 url
// from : 현재 url
// next : to에서 지정한 url로 이동하기 위해 꼭 호출해야 하는 함수
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (localStorage.getItem("jwt") == null) {
            next({
                path: "/"
            });
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router;
