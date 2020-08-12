<template>
    <div class="input-root-view">
        <!-- {{value}} -->
        <input ref="personName" type="text" :value="value" @input="doit()">
    </div>
</template>
<script>
export default {
    //从引用组件的页面获取值
    props:['value'],
    methods:{
        doit(){
            //将数据回写到页面去
            this.$emit('input',this.$refs.personName.value);
        }
    }
}
</script>
<style lang="scss" scoped>
.input-root-view{
    display: inline-block;
}
</style>