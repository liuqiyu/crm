<template>
  <div class="i-search">
    <div class="search-content">
      <el-row :gutter="20">
        <el-col :span="6" v-for="(item, index) in searchList" :key="index">
          <div class="search-item clearfix">
            <label>{{item.label}}</label>

            <div class="search-form" v-if="item.type === 'input'">
              <el-input v-model="item.value" size="small" :placeholder="item.placeholder">
              </el-input>
            </div>

            <div class="search-form" v-if="item.type === 'select'">
              <el-select size="small" v-model="item.value" :placeholder="item.placeholder">
                <el-option
                  v-for="row in item.options"
                  :key="row.value"
                  :label="row.label"
                  :value="row.value">
                </el-option>
              </el-select>
            </div>

          </div>
        </el-col>
      </el-row>
    </div>
    <div class="search-btn">
      <el-button type="primary" icon="el-icon-search" size="small" @click="onSearch"></el-button>
      <el-button type="primary" icon="el-icon-delete" size="small" @click="onDelete"></el-button>
    </div>
    <div class="search-control" v-if="searchList.length > 8">
      <div class="icon-wrap">
        <span class="icon"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    searchList: {
      type: Array,
    },
  },
  data() {
    return {
      allValue: {},
    };
  },
  methods: {
    // 搜索事件
    onSearch() {
      this.allValue = {};
      this.searchList.forEach((value) => {
        const cell = {};
        cell.value = value.value;
        this.allValue[value.key] = cell;
      });
      this.$emit('data-search', this.allValue);
    },
    // 清空事件
    onDelete() {
      this.searchList.forEach((value, index) => {
        this.searchList[index].value = null;
        const cell = {};
        cell.value = null;
        this.allValue[value.key] = cell;
      });
      this.$emit('data-search', this.allValue);
    },
  },
};
</script>

<style scoped>
  .i-search {
    position: relative;
    width: 100%;
    border: 1px solid #eee;
    margin-bottom: 20px;
    padding-right: 150px;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .search-btn {
    position: absolute;
    top: 10px;
    right: 10px;
  }

  .search-item {
    width: 100%;
    position: relative;
    padding-left: 60px;
    margin-bottom: 10px;
  }

  .search-item label {
    width: 60px;
    line-height: 32px;
    text-align: right;
    position: absolute;
    top: 0;
    left: 0;
  }

  .search-item .search-form {
    width: 100%;
    padding-left: 16px;
  }

  .search-control {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 6px;
    background: #f9f9f9;
    border-top: 1px solid #e1e1e1;
    text-align: center;
  }

  .search-control .icon-wrap {
    width: 60px;
    height: 6px;
    background: #bbb;
    margin: 0 auto;
    cursor: pointer;

  }

  .search-control .icon-wrap .icon {
    display: block;
    margin: 0 auto;
    width: 8px;
    height: 6px;
    transition: all 0.4s;
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
    background: url("./../assets/images/more_arrow_down.png");
  }

  .search-control .icon-wrap .icon.up {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }

  .search-btn .el-button {
    font-size: 18px !important;
    font-weight: bolder !important;
    padding: 5px 12px !important;
  }
</style>
