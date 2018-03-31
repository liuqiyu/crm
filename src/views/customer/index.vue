<template>
  <div style="height: 100%; position: relative">
    <search :searchList="searchList" @data-search="dataSearch"></search>
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
import search from './../../components/search';
import { searchData } from '../../utils/search';

export default {
  data() {
    return {
      customerList: [],
      tableData: [],
      input: '',
      searchList: [
        {
          key: 'name',
          label: '姓名',
          type: 'input',
          value: null,
          placeholder: '请输入姓名',
        },
        {
          key: 'gender',
          label: '性别',
          type: 'select',
          value: null,
          placeholder: '请输入姓名',
          options: [
            {
              label: '男',
              value: '1',
            },
            {
              label: '女',
              value: '0',
            },
          ],
        },
        {
          key: 'age',
          label: '年龄',
          type: 'input',
          value: null,
          placeholder: '请输入年龄',
        },
        {
          key: 'height',
          label: '身高',
          type: 'input',
          value: null,
          placeholder: '请输入身高',
        },
        {
          key: 'weight',
          label: '体重',
          type: 'input',
          value: null,
          placeholder: '请输入体重',
        },
      ],
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
    search,
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
    dataSearch(value) {
      this.tableData = searchData(this.$store.state.customerList, value);
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
    background: url("./../../assets/images/more_arrow_down.png");
  }

  .search-control .icon-wrap .icon.up {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }
</style>
