<template>
  <!-- <div> -->
  <!-- 录入页 -->
  <!-- <span v-on:click='$router.push({path:"/router"})'>跳转到结果页</span> -->
  <!-- <span @click='$router.push({path:"/output"})'>跳转到结果页</span> -->
  <!-- </div> -->
  <form novalidate v-submit="doSubmit">
    <div class="row">
      <label>姓名</label>
      <ep-input v-model="personName"></ep-input>
    </div>
    <div class="row">
      <label>出生年月{{birthDate}}</label>
      <ep-calendar v-model="birthDate"></ep-calendar>
    </div>
    <div class="row">
      <label>国籍{{country}}</label>
      <ep-select v-model="country" :list="selectList.countrys"></ep-select>
    </div>
    <div class="row">
      <label>是否自贸区</label>
      <ep-radio v-model="isFTZ"></ep-radio>
    </div>
    <div class="btn-list">
      <input type="button" @click="doReset()" value="重置" class="btn btn-reset" />
      <input type="submit" value="提交" class="btn btn-submit" />
    </div>
  </form>
</template>
<script>
export default {
  data() {
    return {
      personName: "",
      birthDate: "19491001",
      country:"1",
      isFTZ:null,
      selectList:{
        countrys:{
          1:'中国',
          2:'俄罗斯',
          3:'美国',
          4:'英国',
          5:'法国',
          6:'德国',
          7:'日本',
          8:'新加坡',
        }
      },
      
    };
  },
  methods: {
    //表单提交方法
    doSubmit() {
      console.warn("提交方法触发了");
    },
    //表单重置方法
    doReset() {
      console.warn("重置方法触发了");
    },
  },
};
</script>
<style lang="scss" scoped>
form {
  width: 300px;
  padding: 10px 0;
  div {
    &.row {
      & > label {
        width: 6em;
        display: inline-block;
        text-align: right;
      }
      line-height: 1.5em;
    }
    &.btn-list {
      text-align: center;
      margin-top: 14px;
      & > .btn {
        padding: 3px 10px;
        border-radius: 8px;
        & > .btn-submit {
          background-color: blue;
        }
        & > .btn-reset {
          background-color:gray;
        }
      }
    }
  }
}
</style>