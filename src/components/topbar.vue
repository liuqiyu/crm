<template>
  <div class="i-topbar">
    <div class="i-title">
      <span class="icon iconfont icon-kehuguanli"></span>
      <span class="name">Customer</span>
    </div>
    <div class="i-info" @click="logout">
      退出
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$router.replace({
        path: '/login',
      });
    },
  },
};
</script>

<style scoped>
  .i-topbar {
    height: 50px;
    width: 100%;
    background: #409EFF;
    display: -webkit-flex;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-justify-content: space-between;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    overflow: hidden;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .i-title {
    color: #fff;
    font-size: 26px;
    font-weight: bold;
    font-family: '幼圆';
    margin-left: 25px;
    cursor: pointer;
  }

  .i-title .icon {
    font-size: 26px;
    margin-right: 5px;
  }

  .i-title .name {
    font-size: 22px;
  }

  .i-info {
    color: #fff;
    font-size: 16px;
    margin-right: 20px;
    text-decoration: underline;
    cursor: pointer;
  }
</style>
