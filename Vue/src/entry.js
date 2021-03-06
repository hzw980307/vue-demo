import Vue from 'vue';
//引入主页面
import App from './App.vue'

//引入路由配置文件
import router from './router'

//引入公共指令
import './directives/index'
//引入公共组件
import './components/index'
//引入公共样式
import '@yelloxing/normalize.css';

//创建根VUE节点(实例对象)
new Vue({
    //挂再点
    el: document.getElementById("root"),
    //挂载路由
    router,
    //主页面
    render: createElement => createElement(App)
});