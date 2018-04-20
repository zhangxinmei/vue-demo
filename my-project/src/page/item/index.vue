<template>
  <div class="box">
      <common></common>
      <div class="btn">
         <router-link to="/" class="btton" >点击我</router-link>
      </div>
  </div>
</template>
<script>
import common from '../../components/common'
export default {
    name:'index',
    components: {
    common
  },
};
</script>
<style lang="less">
.box {
  .btn {
    .btton {
      padding: 10px;
      border: 1px solid red;

    }
  }
}
</style>
