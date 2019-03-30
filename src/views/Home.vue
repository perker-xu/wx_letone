<template>
  <div class="main" ref="container">
    <!-- 顶部背景图 -->
    <div class="main-top">
      <img src="../assets/images/static/home-bg.jpg">
    </div>
    <!-- 轮播图 -->
    <div class="main-circle">
      <!-- 轮播图 -->
      <div>
        <img src="../assets/images/resource/home-banner.jpg">
      </div>
    </div>
    <!-- 圆形按钮 -->
    <div class="main-icons">
      <div class="main-icons-icon" v-for="item in circle_icons" :key="item.id">
        <div>
          <img :src="item.icon">
        </div>
        <label> {{ item.title }} </label>
      </div>
    </div> 
    <!-- <mSwiper class="swiper"/> -->
    
    <!-- 标语 -->
    <div class="main-remark">
      <p>用心成就生命，将快乐传递一亿人</p>
			<p>Enlighten lives with heart, deliver happiness to 100,000,000 people</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data (){
    return {
      circle_icons:[
        {
          title: '紫罗兰公益',
          icon: require('../assets/images/static/icon/icon-commonweal@2x.png'),
          id:1
        },
        {
          title: '知识库',
          icon: require('../assets/images/static/icon/icon-knowledgebase@2x.png'),
          id:2
        },
        {
          title: '排行榜',
          icon: require('../assets/images/static/icon/icon-ranked@2x.png'),
          id:3
        },
        {
          title: '紫罗兰发布',
          icon: require('../assets/images/static/icon/icon-video@2x.png'),
          id:4
        }
      ]
    }
  },
  components: {
    // mSwiper
  },
  mounted () {
    this.$refs.container.style.height = window.screen.height + "px";
  },
}
</script>

<style scoped lang="less">
.main {
  // padding-bottom: 55px;
  &-top {
    img {
      width: 100%;
      vertical-align: middle;
    }
  }
  &-circle {
    transform: translateY(-50%);
    width: 50%;
    margin-left: 25%;
    border-radius: 50%;
    overflow: hidden;
    background-color: #fff;
    
    div {
      background-color: #ddadff;
      margin: 6px;
      padding: 0px 8px;
      width: calc(100% - 16px);
			width: -moz-calc(100% - 16px);
			width: -webkit-calc(100% - 16px);
      border-radius: 50%;
      img {
        width: 100%;
        border-radius: 50%;
        margin-top: 5px;
      }
    }
  }

  &-icons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 7%;
    transform: translateY(-110%);

    &-icon {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      div {
        width: 0.4rem;
        height: 0.4rem;
        border-radius: 0.2rem;
        background: linear-gradient(
          90deg,
          rgba(190, 134, 252, 1),
          rgba(234, 135, 246, 1)
        );
        text-align: center;
        img {
          margin-top: 25%;
          width: 70%;
        }
      }
      label {
        font-size: 0.11rem;
        margin-top: 0.05rem;
      }
    }

    &-icon:nth-child(2) {
      margin-top: 50%;
      padding-right: 0.3rem;
      img {
        margin-top: 22%;
        width: 60%;
      }
    }
    &-icon:nth-child(3) {
      margin-top: 50%;
      padding-left: 0.3rem;
      img {
        margin-top: 16%;
        width: 65%;
      }
    }
    &-icon:last-child {
      img {
        margin-top: 20%;
        width: 45%;
        margin-left: 5%;
      }
    }
    &-icon:active {
      opacity: 0.7;
    }
  }
  &-remark {
    transform: translateY(-250%);
    text-align: center;
    p {
      line-height: 1.8;
      color: #bf88fc;
      font-size: 0.14rem;
      word-spacing: 2px;
      letter-spacing: 1px;
    }
    p:last-child {
      font-size: 0.12rem;
    }
  }  
}
</style>