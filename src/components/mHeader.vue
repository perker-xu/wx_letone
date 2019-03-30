<template>
  <div class="m-header">
    <mt-header fixed title="固定在顶部"></mt-header>
  </div>
</template>

<script>
import Vue from 'vue';
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);

export default {
  name: 'mHeader'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
