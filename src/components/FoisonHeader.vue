<template>
  <div class="foison-header">
    <div class="header">
        <span @click="Toast('提示信息');">积分商城</span>
        <span class="active">课程兑换</span>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Header } from 'mint-ui';
import { Toast } from 'mint-ui';
Vue.component(Header.name, Header);

export default {
  name: 'FoisonHeader'
}
</script>

<style scoped lang="scss">
.foison-header{
  .header{
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    width: 100%;
    height: 40px;
    color: #fff;
    font-size: .18rem;
    background: linear-gradient(0deg,rgba(233,145,249,1),rgba(195,134,251,1));
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    z-index: 10;
    span {
      display: inline-block;
      margin: 0 10px;
    }
    span:active {
      opacity: .7;
    }
    .active {
      border-bottom: 2px solid #fff;
    }
  }
  
}
</style>
