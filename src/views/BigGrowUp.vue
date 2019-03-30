<template>
  <div class="big-grow-up">
    <!-- 大丰收轮播图 -->
    <div class="big-grow-up-swiper">
      <div><img src="../assets/images/resource/swiper2-2.jpg"></div>
    </div>
    <!-- 按钮去 -->
    <div class="category">
      <div class="category-box" v-for="item in category" :key="item.category_id">
        <div>{{ item.name }}</div>
      </div>
    </div>
    <!-- 商品列表 -->
    <div class="goods-list">
      商品内容
    </div>
  </div>
</template>

<script>

export default {
  name:'BigGrowUp',
  data() {
    return {
      category:[
        { name: '智慧学院', category_id: 1 },
        { name: '生命学院', category_id: 2 },
        { name: '女子学院', category_id: 3 },
        { name: '国学院', category_id: 4 },
        { name: '商学院', category_id: 5 }
      ]
    }
  },
  components: {
    
  }
}
</script>

<style lang="less" scoped>
.big-grow-up {
  padding-bottom: 55px;
  &-swiper {
    width: 100%;
    div {
      img {
        width: 100%;
        vertical-align: middle;
      }
    }
  }
  // 分类
  .category {
    display: flex;
    flex: 1;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    margin: 2%;

    &-box {
      width: calc(20%-4px);
			width: -moz-calc(20%-4px);
			width: -webkit-calc(20%-4px);
      line-height: 1.8;
      text-align: center;
      border-radius: 5px;
      padding: 2px;
      background: linear-gradient(90deg,rgba(190,134,252,1),rgba(234,135,246,1));
      
      div {
        width: 100%;
        height: 100%;
        background: #fff;
        border-radius: 5px;
        color: #DFA5E4;
      }
    }
    &-box:active {
      opacity: .7;
    }
  }
  // 商品列表

}
</style>



