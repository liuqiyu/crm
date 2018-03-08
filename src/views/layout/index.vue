<template>
  <div class="i-layout">
    <topbar></topbar>
    <div class="i-main" ref="main">
      <navbar></navbar>
      <div class="i-content">
        <breadcrumb></breadcrumb>
        <div class="i-c-box">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import topbar from './../../components/topbar';
import navbar from './../../components/navbar';
import breadcrumb from './../../components/breadcrumb';
import height from './../../utils/height';

window.onresize = () => {
  height();
};

export default {
  components: {
    topbar,
    navbar,
    breadcrumb,
  },
  mounted() {
    this.timer = setTimeout(() => {
      document.getElementById('preloader').style.display = 'none';
    }, 500);
  },
  data() {
    return {
      timer: null,
    };
  },
  beforeRouteEnter(to, from, next) {
    height();
    next();
  },
  beforeDestroy() {
    clearTimeout(this.timer);
  },
};
</script>

<style scoped>
  .i-layout {
    position: relative;
  }

  .i-main {
    padding-left: 200px;
    position: relative;
  }

  .i-content {
    height: 100%;
    width: 100%;
    padding: 20px 0 20px 20px;
  }

  .i-c-box {
    width: 100%;
    height: 100%;
    overflow-y: auto;
  }
</style>
