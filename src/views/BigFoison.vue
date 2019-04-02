<template>
  <div class="big-foison">
    <!-- 顶部导航栏 -->
    <div class="user-header">
      <FoisonHeader />
    </div>
    <!-- 大丰收轮播图 -->
    <div class="big-foison-swiper">
      <div>
        <userSwiper/>
      </div>
    </div>
    <!-- 按钮去 -->
    <div id="category" class="category" :class="categoryFiexd == true ? 'isFixed' : ''">
      <div class="category-box" v-for="item in category" :key="item.category_id">
        <div>{{ item.name }}</div>
      </div>
    </div>
    <!-- 商品列表 -->
    <div class="product-list">
      <ProductList/>
    </div>
		
  </div>
</template>

<script>
import FoisonHeader from '@/components/FoisonHeader.vue';
import ProductList from '@/components/ProductList.vue';
import userSwiper from '@/components/userSwiper.vue';

export default {
  name:'BigFoison',
  data() {
    return {
      category:[
        { name: '前端课', category_id: 1 },
        { name: '品牌课', category_id: 2 },
        { name: '精品课', category_id: 3 },
        { name: '专业课', category_id: 4 }
      ],
      categoryFiexd: false
    }
  },
  components: {
    FoisonHeader,
    ProductList,
    userSwiper
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      let offsetTop = document.querySelector('#category').offsetTop;
      scrollTop > offsetTop ? this.categoryFiexd = true : this.categoryFiexd = false;
    }
  },
}
</script>

<style lang="less" scoped>
@baseColor: #DFA5E4; 
.big-foison {
  padding-top: 40px;
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
    justify-content: space-around;
    padding: 2%;
    &-box {
      width: calc(23%-4px);
			width: -moz-calc(23% - 4px);
			width: -webkit-calc(23% - 4px);
      line-height: 1.8;
      text-align: center;
      border-radius: 5px;
      padding: 2px;
      background: linear-gradient(
        90deg,
        rgba(190,134,252,1),
        rgba(234,135,246,1)
      );
      div {
        width: 100%;
        height: 100%;
        background: #fff;
        border-radius: 5px;
        font-size: .17rem;
        color: @baseColor;
      }
    }
    &-box:active {
      opacity: .7;
    }
  }
  .isFixed{
    position:fixed;
    top: 40px;
    left: 0;
    width: 96%;
    background-color: #fff;
    z-index:999;
  }
}
</style>