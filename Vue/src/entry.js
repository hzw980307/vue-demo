import Vue from 'vue';
import App from './App.vue'
import router from './router'
// import image2D from 'image2d'


new Vue({
    el: document.getElementById("root"),
    router,
    // template: `<span>我来了</span>`
    // render:function(createElement){
    //     return createElement(App);
    // },
    render: createElement => createElement(App)
});