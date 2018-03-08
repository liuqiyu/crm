<template>
  <div class="i-navbar">
    <div class="i-nav-box">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo">
        <template v-for="(item, index) in list">
          <el-submenu index="1" v-if="item.hasChild" :key="index">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{item.label}}</span>
            </template>
            <el-menu-item index="1-3" v-for="(row, key) in item.children" :key="key">
              {{row.label}}
            </el-menu-item>
          </el-submenu>
          <el-menu-item index="2" v-else :key="index">
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
          path: '/overview',
          icon: '',
          hasChild: false,
          index: '1',
        },
        {
          label: '客户',
          icon: '',
          hasChild: true,
          index: '2',
          children: [
            {
              label: '客户1',
              path: '/customer1',
              icon: '',
              hasChild: false,
              index: '2-1',
            },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
  .i-navbar {
    position: absolute;
    left: 0;
    width: 200px;
    height: 100%;
    background: #f0f5f8;
  }
</style>
