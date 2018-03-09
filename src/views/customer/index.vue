<template>
  <div style="height: 100%; position: relative">
    <div class="i-search">

    </div>
    <div class="table-wrap">
      <el-table
        :data="tableData"
        border
        :height="this.$store.state.tableHeight"
        stripe
        style="width: 100%">
        <el-table-column
          fixed
          prop="num"
          label="#"
          min-width="50">
        </el-table-column>
        <el-table-column
          fixed
          prop="name"
          label="姓名"
          min-width="150">
        </el-table-column>
        <el-table-column
          prop="gender"
          label="性别"
          min-width="120">
          <template slot-scope="scope">
            <span v-if="scope.row.gender === 1">男</span>
            <span v-else>女</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="age"
          label="年龄"
          min-width="120">
        </el-table-column>
        <el-table-column
          prop="height"
          label="身高（cm）"
          min-width="120">
        </el-table-column>
        <el-table-column
          prop="weight"
          label="体重（kg）"
          min-width="120">
        </el-table-column>
        <el-table-column
          prop="province"
          label="省份"
          min-width="120">
        </el-table-column>
        <el-table-column
          prop="city"
          label="市"
          min-width="120">
        </el-table-column>
        <el-table-column
          prop="area"
          label="区"
          min-width="120">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址"
          min-width="300">
        </el-table-column>
      </el-table>
    </div>
    <pagination></pagination>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import pagination from './../../components/pagination';

export default {
  data() {
    return {
      customerList: [],
      tableData: [],
    };
  },
  mounted() {
    this.getData();
    this.setBreadCrumb([
      {
        label: '概览',
        path: '/overview',
        isDisabled: false,
      },
      {
        label: '客户',
        path: '',
        isDisabled: true,
      },
    ]);
    this.setNavDefaultIndex('2');
  },
  components: {
    pagination,
  },
  methods: {
    ...mapActions([
      'setBreadCrumb',
      'setNavDefaultIndex',
    ]),
    getData() {
      this.customerList = this.$store.state.customerList;
      this.customerList.forEach((value, index) => {
        this.$set(this.customerList[index], 'num', index + 1);
      });
      this.tableData = this.customerList;
    },
  },
};
</script>

<style scoped>
  .i-search {
    width: 100%;
    border: 1px solid #eee;
    height: 100px;
    margin-bottom: 20px;
  }
</style>
