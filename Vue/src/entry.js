import Vue from 'vue';
import App from './App.vue'
import router from './router'
new Vue({
    el: document.getElementById("root"),
    router,
    // template: `<span>我来了</span>`
    // render:function(createElement){
    //     return createElement(App);
    // },
    render: createElement => createElement(App)
});