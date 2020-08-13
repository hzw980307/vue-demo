<template>
  <div class="select-root-view">
    <input
      ref="country"
      type="text"
      @click="isOpen=!isOpen"
      placeholder="请选择国籍"
      isOpen="false"
    />
    <ul v-show="isOpen">
      <li @click="isOpen=false;doit(key)" v-for="(value,key) in list" :key="key">{{key}}-{{value}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ["value", "list"],
  data() {
    return {
      //下拉是否打开
      isOpen: false,
    };
  },
  methods: {
    //下拉框内容选择
    doit(key) {
      this.$emit("input", key);
      this.$refs.country.value = key + "-" + this.list[key];
    //   console.log(this.$refs.country.value+'选择的数据')
    },
  },
  mounted() {
    this.$refs.country.value = this.value + "-" + this.list[this.value];
    // console.log(this.$refs.country.value+ '回写数据')
  },
};
</script>
<style lang="scss" scoped>
.select-root-view {
  display: inline-block;
  position: relative;
  &>input{
      cursor: pointer;
      background-size: auto 70%;
      background-repeat: no-repeat;
      background-position: right center;
  }
  &>ul{
      position: absolute;
      width: 100%;
      background-color: honeydew;
      z-index: 1;
      &>li{
          padding: 10px;
          cursor: pointer;
      
      &:hover{
          background-color: aqua;
      }
      }
  }
}

</style>