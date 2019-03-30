<template>
  <div class="m-swiper">
    <div class="img-border">
      <mt-swipe  :auto="0"  :show-indicators="false" >
        <mt-swipe-item v-for="item in items" :key="item.id">
          <a :href="item.href" rel="external nofollow">
            <img :src="item.url" class="img">
          </a>
        </mt-swipe-item>
      </mt-swipe>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "mint-ui";

export default {
  name: "mSwiper",
  components: {
    "mt-swipe": Swipe,
    "mt-swipe-item": SwipeItem
  },
  data() {
    return {
      items: [
        {
          title: "你的名字",
          href: "http://google.com",
          url: require("@/assets/images/resource/home-banner.jpg")
        },
        {
          title: "我的名字",
          href: "http://baidu.com",
          url: require("@/assets/images/resource/home-banner.jpg")
        }
      ]
    };
  }
};
</script>

<style scoped>
.m-swiper {
  width: 2rem;
  height: 2rem;
}
img {
  width: 100%;
  height: 100%;
  vertical-align: bottom;
}

.mint-swipe {
  height: 2rem;
  box-sizing: border-box;
  border: 8px solid #ddadff;
  border-radius: 50%;
}

.img-border {
  box-sizing: border-box;
  border: 2px solid #fff;
  border-radius: 50%;
}
</style>