<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
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
  beforeDestroy() {
    clearTimeout(this.timer);
  },
};
</script>

<style>
  #app {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
</style>
