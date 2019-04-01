<template>
  <mt-tabbar v-model="message" fixed>
    <mt-tab-item id="home">
      <img slot="icon" :src="this.atabs[0]">
      首页
    </mt-tab-item>
    <mt-tab-item id="bigfoison">
      <img slot="icon" :src="this.atabs[1]">
      大丰收
    </mt-tab-item>
    <mt-tab-item id="biggrowup">
      <img slot="icon" :src="this.atabs[2]">
      大成长
    </mt-tab-item>
    <mt-tab-item id="mine">
      <img slot="icon" :src="this.atabs[3]">
      我的后院
    </mt-tab-item>
  </mt-tabbar>
</template>

<script>
import Vue from 'vue'
import { Tabbar, TabItem } from 'mint-ui';

Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
export default {
    data(){
        return{
          //选中的tabbar值message为外面页面传入的值selected
          message:this.selected,
          //这里使用的icon图标为图片，所以需要加图片改变的传入，若使用阿里图标，则不用加
          atabs:this.tabs,
        }
    },
    props:{
      selected: String,
      tabs:Array,
    },
    methods: {
      changeItem:function(){
        alert(1);
      }
    },
    watch: {
        message: function (val, oldVal) {
          // 这里就可以通过 val 的值变更来确定去向
          console.log(val+"===="+oldVal)
            switch(val){
              case 'home':
                  this.$router.push('/home');
              break;
              case 'bigfoison':
                  this.$router.push('/bigfoison');
              break;
              case 'biggrowup':
                  this.$router.push('/biggrowup');
              break;
              case 'mine':
                  this.$router.push('/mine');
              break;
            }
        }
    },
}
</script>
