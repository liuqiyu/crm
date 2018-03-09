<template>
  <div class="breadcrumb">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item v-for="(item, index) in this.$store.state.breadcrumb" :key="index">
        <el-button type="text" :disabled="item.isDisabled" @click="goLink(item)">
          {{item.label}}
        </el-button>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  methods: {
    goLink(item) {
      this.$router.push({
        path: item.path,
      });
    },
  },
};
</script>

<style scoped>
  .breadcrumb {
    width: 100%;
    padding-bottom: 10px;
  }

  .el-button {
    font-size: 12px !important;
  }
</style>
