<template>
  <div class="i-pagination">
    <el-pagination
      background
      layout="prev, pager, next"
      :total="1">
    </el-pagination>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped>
  .i-pagination {
    width: 100%;
    text-align: right;
    padding: 20px;
    position: absolute;
    bottom: 0px;
    left: 0;
  }
</style>
