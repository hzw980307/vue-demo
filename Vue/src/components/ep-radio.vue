<template>
  <ul class="radio-root-view">
      <li @click="doit(true)" class="yes" :class="{selected:value}">是</li>
      <li @click="doit(false)" class="no" :class="{selected:!value}">否</li>
  </ul>
</template>
<script>
export default {
  props: ["value"],
  methods: {
    doit(flag) {
      this.$emit("input", flag);
    },
  },
};
</script>
<style lang="scss" scoped>
.radio-root-view {
  display: inline-block;
  & > li {
    display: inline-block;
    line-height: 1em;
    cursor: pointer;
    border-radius: 50%;
    &.yes {
      background-color: gray;
    }
    &.no {
      background-color: lawngreen;
    }
    &.selected {
      border: 3px solid red;
    }
  }
}
</style>