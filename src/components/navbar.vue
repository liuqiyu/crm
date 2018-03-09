<template>
  <div class="i-navbar">
    <div class="i-nav-box">
      <el-menu
        :router="true"
        :default-active="this.$store.state.navDefaultIndex"
        class="el-menu-vertical-demo">
        <template v-for="(item, index) in list">
          <el-submenu :index="item.index" v-if="item.hasChild" :key="index">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{item.label}}</span>
            </template>
            <el-menu-item :index="row.index" :route="row.path"
                          v-for="(row, key) in item.children" :key="key">
              {{row.label}}
            </el-menu-item>
          </el-submenu>
          <!-- 无子集 -->
          <el-menu-item class="a" :index="item.index" v-else :key="index" :route="item.path">
            <i class="el-icon-menu"></i>
            <span slot="title">{{item.label}}</span>
          </el-menu-item>
        </template>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          label: '概览',
          path: {
            path: '/overview',
          },
          icon: '',
          hasChild: false,
          index: '1',
        },
        {
          label: '客户',
          path: {
            path: '/customer',
          },
          icon: '',
          hasChild: false,
          index: '2',
        },
      ],
    };
  },
};
</script>

<style scoped>
  .i-navbar {
    width: 200px;
    background: #f0f5f8;
    border-right: 1px solid #eee;
    flex: 0 0 auto;
    display: flex;
    flex-direction: column;
  }
</style>
