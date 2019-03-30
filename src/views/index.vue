<template>
  <div class="main">
      <router-view/>
      <mTabBar :selected="selected" :tabs='tabs'/>
  </div>
</template>

<script>
import mTabBar from '@/components/mTabBar.vue'
export default {
  name: 'Main',
  data() {
    return {
      selected:"home",
      tabs:[
        require('@/assets/images/static/icon/icon-home-active.png'),
        require('@/assets/images/static/icon/icon-bigfoison.png'),
        require('@/assets/images/static/icon/icon-biggrowup.png'),
        require('@/assets/images/static/icon/icon-mine.png') 
      ],
    }
  },
  components:{
    mTabBar
  }
}
</script>

<style lang="less" scoped>

</style>


