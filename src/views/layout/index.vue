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
        <copyright></copyright>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import topbar from './../../components/topbar';
import navbar from './../../components/navbar';
import breadcrumb from './../../components/breadcrumb';
import copyright from './../../components/copyright';
import height from './../../utils/height';

export default {
  components: {
    topbar,
    navbar,
    breadcrumb,
    copyright,
  },
  data() {
    return {
      timer: null,
    };
  },
  watch: {
    '$route'() {
      height();
      this.setTableHeight(['.i-topbar', '.copyright', '.breadcrumb', '.i-search', '.i-pagination']);
    },
  },
  mounted() {
    height();
    this.setTableHeight(['.i-topbar', '.copyright', '.breadcrumb', '.i-search', '.i-pagination']);
    window.onresize = () => {
      height();
      this.setTableHeight(['.i-topbar', '.copyright', '.breadcrumb', '.i-search', '.i-pagination']);
    };
  },
  methods: {
    ...mapActions([
      'setTableHeight',
    ]),
  },
};
</script>

<style scoped>
  .i-layout {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    overflow: hidden;
  }

  .i-main {
    position: relative;
    flex: 1 1 auto;
    overflow-x: hidden;
    display: flex;
    flex-direction: row;
    padding-left: 200px;
  }

  .i-content {
    width: 100%;
    padding: 10px 20px 0 20px;
    position: relative;
  }

  .i-c-box {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    position: relative;
  }
</style>
