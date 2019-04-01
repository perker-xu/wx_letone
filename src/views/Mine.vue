<template>
  <div class="mine">
    <div class="user-box">
      <div class="user-top">
        <div class="user-portrait">
          <div class="picture">
            <img src="@/assets/images/resource/product-1.png">
          </div>
        </div>
        <div class="user-info">
          <div class="name">往事随风</div>
          <div class="member-number">
            会员编号:1
          </div>
          <div class="member">
            快乐值:154
          </div>
        </div>
        <div class="user-member">
          <div class="member" @click="goMemberInfo">紫罗兰大使</div>
        </div>
      </div>
      <div class="user-bottom">
        <div class="counting-houss">我的帐房</div> |
        <div class="counselor">我的帐房</div>
      </div>
    </div>
    <ul>
      <li v-for="item in listData" :key="item.id"> 
        <div class="icon">
          <img :src="item.iconSrc">
        </div>
        <h5 class="name"> {{ item.name }} </h5>
        <i class="iconfont icon-right"></i>
      </li>
      
    </ul>
  </div>
</template>

<script>
export default {
  name:'Mine',
  data () {
    return {
      listData:[ 
        { name: '个人信息', iconSrc: require('@/assets/images/static/icon/icon-personal-details@2x.png'), id: 1},
        { name: '我的订单', iconSrc: require('@/assets/images/static/icon/icon-myorder@2x.png'), id: 2},
        { name: '地址管理', iconSrc: require('@/assets/images/static/icon/icon-address@2x.png'), id: 3},
        { name: '我的社区', iconSrc: require('@/assets/images/static/icon/icon-community@2x.png'), id: 4},
        { name: '紫罗兰大使', iconSrc: require('@/assets/images/static/icon/icon-brand@2x.png'), id: 5},
        { name: '我的消息', iconSrc: require('@/assets/images/static/icon/icon-message@2x.png'), id: 6},
        { name: '我的钱包', iconSrc: require('@/assets/images/static/icon/icon-mywallet@2x.png'), id: 7},
        { name: '发票信息', iconSrc: require('@/assets/images/static/icon/icon-invoice@2x.png'), id: 8}
      ]
    }
  },
  methods: {
    goMemberInfo (){
      this.$router.push({ path: '/mine/memberinfo'});
    }
  },
}
</script>

<style lang="less" scoped>
.mine {
  .user-box {
    background-image: url('../assets/images/static/mine-bg.jpg');
    height: 2.1rem;
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-wrap: nowrap;
    font-size: .14rem;
    color: #fff;
    .user-top {
      width: calc(100% - .4rem);
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      margin: .3rem .2rem;
      margin-bottom: .5rem;
      .user-portrait {
        border: 2px solid #fff;
        background: linear-gradient(
          0deg,
          rgba(233,145,249,1),
          rgba(195,134,251,1)
        );
        width: 25%;
        padding: 4px;
        box-shadow: 1px 2px 3px #666;
        border-radius: 50%;
        .picture {
          border-radius: 50%;
          overflow: hidden;
          background-color: #fff;
          img {
            width: 100%;
            vertical-align: middle;
          }
        }
      }
      .user-info {
        padding: 0 .1rem;
        width: 40%;
        .name {
          width: 100%;
          font-size: .18rem;
          font-weight: bold;
          // 溢出显示省略号
          overflow:hidden;
          text-overflow:ellipsis;
          white-space:nowrap
        }
      }
      .user-member {
        display: flex;
        flex-direction: row-reverse;
        justify-content: center;
        width: 35%;
        font-size: .12rem;
        .member {
          border: 2px solid #fff;
          border-radius: 10px;
          padding: .05rem .1rem;
          box-shadow: 1px 2px 3px #666;
        }
        .member:active {
          opacity: .7;
        }
      }
    }
    .user-bottom {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      font-size: .16rem;
      padding: .1rem 0;
      div:active {
        opacity: .7;
      }
    }
  }
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    li {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      border-bottom: 1px solid #e5e5e5;
      padding: 0 .1rem;
      position: relative;
      .icon {
        width: .2rem;
        margin-right: .1rem;
        img {
          width: .2rem;
          vertical-align: middle;
        }
      }
      h5 {
        margin: .1rem;
        font-size: .14rem;
      }
      i::before {
        content: " ";
        display: inline-block;
        height: 6px;
        width: 6px;
        border-width: 2px 2px 0 0;
        border-color: #c8c8cd;
        border-style: solid;
        // 旋转45°
        -webkit-transform: matrix(.71, .71, -.71, .71, 0, 0);
        transform: matrix(.71, .71, -.71, .71, 0, 0);
        position: absolute;
        top: 50%;
        margin-top: -4px;
        right: .1rem;
      }
    }
    li:active {
      opacity: .7;
    }
  }
}
</style>
