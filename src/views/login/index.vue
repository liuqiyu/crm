<template>
  <div id="root">
    <div class="bg">
      <img src="./../../assets/images/login-bg.png" alt="">
    </div>
    <div class="enter" @click="login">Enter</div>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      this.$router.push({
        path: '/',
      });
    },
  },
};
</script>

<style scoped>
  * {
    padding: 0;
    margin: 0;
  }
  html, body {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  #root {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .bg {
    width: 100%;
    height: 100%;
    position: absolute;
  }

  .enter {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -50px;
    margin-left: -100px;
    width: 200px;
    height: 100px;
    background: #409eff;
    z-index: 99;
    border-radius: 4px;
    line-height: 100px;
    text-align: center;
    color: #fff;
    font-size: 24px;
    cursor: pointer;
  }

</style>
