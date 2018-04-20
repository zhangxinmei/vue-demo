<template>
  <div class="box">
      <common></common>
  </div>
</template>
<script>
import common from "../../components/common";
export default {
  name: "home",
  components: {
    common
  },
  data() {
    return {
      counter: 0
    };
  },
  methods: {
    count: function(n) {
      this.counter = n;
    }
  }
};
</script>
<style lang="less">
* {
  -webkit-tap-highlight-color: transparent;
}
.btn {
  .btton {
    padding: 10px;
    border: 1px solid red;
  }
}
button {
  margin-top: 15px;
  border: 1px solid #fff;
  outline: none;
  padding: 5px;
}
</style>
