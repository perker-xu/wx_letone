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
    <div class="product-box">
      <div class="category-bar">
        <ul>
          <li v-for=" categoryBar in categoryBars" :key="categoryBar.id">{{ categoryBar.name }}</li>
        </ul>
      </div>
      <div class="product-list">
        <ProductList/>
      </div>
    </div>
  </div>
</template>

<script>

import ProductList from '@/components/ProductList.vue';

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
      ],
      categoryBars:[
        { name: '前端课', id: 1},
        { name: '品牌课', id: 2},
        { name: '精品课', id: 3},
        { name: '专业课', id: 4}
      ]
    }
  },
  components: {
    ProductList
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
  .product-box {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    .category-bar {
      width: 20%;
      ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
        background-color: #FFF7F7F7;
        li {
          text-align: center;
          line-height: .5rem;
        }
      }
    }

    .product-list {
      width: 80%;
      height: 500px;
    }
  }
}
</style>



