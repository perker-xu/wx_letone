<template>
  <div class="member-info">
    <div class="member-info-top">
      <div class="picture">
        <img src="../assets/images/static/icon/icon-member.png">
      </div>
      <div class="member-grade">
        会员等级：紫罗兰
      </div>
    </div>
    <div class="member-intro">
      <label>等级管理</label>
      <div class="intro">
        <div class="grade-btn" v-for="item in gradeList" :key="item.id" @click="showAlert"> 
          {{ item.name }} 
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'MemberInfo',
  data() {
    return {
      gradeList: [
        { name: '紫罗兰', id: 1 },
        { name: '三星紫罗兰', id: 2 },
        { name: '五星紫罗兰', id: 3 },
        { name: '紫罗兰之家', id: 4 },
        { name: '紫罗兰联盟', id: 5 },
        { name: '紫罗兰分院', id: 6 }
      ]
    }
  },
  methods:{
    showAlert(){
      // alert(this.key);
    }
  }
}
</script>

<style lang="less" scoped>
.member-info {
  &-top {
    background-image: url('../assets/images/static/member-bg.png');
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: .25rem 0;
    color: #8F25FF;
    font-size: .16rem;
    .picture {
      width: 20%;
      img {
        width: 100%;
        vertical-align: middle;
      }
    }
    .member-grade {
      margin-top: .2rem;
      line-height: 2.5;
    }
  }
  .member-intro {
    display: flex;
    flex-direction: column;
    label {
      display: block;
      line-height: 1.8;
      width: 100%;
      text-align: center;
      font-size: .16rem;
      padding: .08rem 0;
      border-bottom: 2px solid #f0f0f0;
    }
    .intro {
      display: flex;
      flex: 1;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
      width: 100%;
      .grade-btn {
        width: 40%;
        background-color: #eee;
        margin: .1rem 0;
        text-align: center;
        padding: .1rem 0;
        border-radius: .08rem;
        font-size: .16rem;
        color: #666;
      }
    }
  }
}
</style>
