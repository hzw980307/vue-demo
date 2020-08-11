<template>
    <!-- <div>我是来自.vue的文件</div> -->
    <!-- <div>

        <h2>演示项目</h2>
        <ul>
            <li class="imp">vue如何搭建</li>
            <li>webpack</li>
            <li>loader</li>
        </ul>

    </div> -->
    <router-view></router-view>
</template>

<style lang="scss" scoped>
ul>li{
    background-color: aqua;
    &.imp{
        color: red;
    }
}

</style>


<style scoped>
    /* div{
        background-image: url('./assets/demo.png');
        color: red;
    } */
</style>