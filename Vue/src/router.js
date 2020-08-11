import Vue from 'vue';
import VueRouter from 'vue-router';
//往Vue中加一些vue-router维护的东西
Vue.use(VueRouter);

import inputPage from './pages/inputPage.vue';
import outputPage from './pages/outputPage.vue';

const router = new VueRouter({
    routes: [{
        //录入页面
        name: "input",
        path: "/input",
        component: inputPage
    }, {
        //输出页面
        name: "output",
        path: "/output",
        component: outputPage
    }, {
        path: "/*",
        redirect: '/input'
    }]
});
//导出路由
export default router;