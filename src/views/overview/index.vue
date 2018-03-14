<template>
  <div>
    <!-- 头部数据 -->
    <div class="header">
      <el-row class="row">
        <el-col class="col" :span="3">
          <div class="h-column">
            <div class="icon" style="background: #1da0fc">
              <span class="iconfont icon-nianling"></span>
            </div>
            <div class="value" v-text="aveAge"></div>
            <div class="label">平均年龄</div>
          </div>
        </el-col>
        <el-col class="col" :span="3">
          <div class="h-column">
            <div class="icon" style="background: #13c7ce">
              <span class="iconfont icon-wodebaobeiye_shengao"></span>
            </div>
            <div class="value" v-text="aveHeight"></div>
            <div class="label">平均身高</div>
          </div>
        </el-col>
        <el-col class="col" :span="3">
          <div class="h-column">
            <div class="icon" style="background: #6359f4">
              <span class="iconfont icon-icon"></span>
            </div>
            <div class="value" v-text="aveWeight"></div>
            <div class="label">平均体重</div>
          </div>
        </el-col>
        <el-col class="col" :span="3">
          <div class="h-column">
            <div class="icon" style="background: #13ce64">
              <span class="iconfont icon-nansheng"></span>
            </div>
            <div class="value" v-text="maleNum"></div>
            <div class="label">男生数量</div>
          </div>
        </el-col>
        <el-col class="col" :span="3">
          <div class="h-column">
            <div class="icon" style="background: #3a74f9">
              <span class="iconfont icon-nvsheng"></span>
            </div>
            <div class="value" v-text="femaleNum"></div>
            <div class="label">女生数量</div>
          </div>
        </el-col>
      </el-row>
    </div>

    <!-- 图表 -->
    <div class="chart-wrapper">
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="chart">
            <div class="c-header">
              <p class="c-h-info">
                <span class="icon iconfont icon-kehu"></span>
                <span class="label">男女占比</span>
              </p>
            </div>
            <div class="c-content">
              <div id="chart-gender" style="height: 100%; width: 100%"></div>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="chart">
            <div class="c-header">
              <p class="c-h-info">
                <span class="icon iconfont icon-nianling"></span>
                <span class="label">年龄</span>
              </p>
            </div>
            <div class="c-content">
              <div class="c-introduce clearfix">
              </div>
              <div id="chart-age" style="height: 100%; width: 100%"></div>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="chart">
            <div class="c-header">
              <p class="c-h-info">
                <span class="icon iconfont icon-wodebaobeiye_shengao"></span>
                <span class="label">身高</span>
              </p>
            </div>
            <div class="c-content">
              <div id="chart-height" style="height: 100%"></div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="chart-wrapper">
      <el-row>
        <el-col :span="24">
          <div class="chart">
            <div class="c-header">
              <p class="c-h-info">
                <span class="icon iconfont icon-dizhi"></span>
                <span class="label">地址分布</span>
              </p>
            </div>
            <div class="c-content" style="height: 500px">
              <div id="chart-map" style="height: 100%; width: 100%"></div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      dataList: [],
      genderData: [],
      aveAge: null,
      aveHeight: null,
      aveWeight: null,
      maleNum: null,
      femaleNum: null,
    };
  },
  mounted() {
    this.setData();
    // 面包屑
    this.setBreadCrumb([
      {
        label: '概览',
        path: '/overview',
        isDisabled: true,
      },
    ]);
    // 导航栏选定
    this.setNavDefaultIndex('1');
    // 地图
    this.chartMap();
  },
  methods: {
    ...mapActions([
      'setBreadCrumb',
      'setNavDefaultIndex',
    ]),

    /**
     * 年龄 图表
     * @param data
     */
    chartAge(data) {
      let myChart = echarts.getInstanceByDom(document.getElementById('chart-age'));
      if (myChart === undefined) {
        /* global echarts:true */
        /* eslint no-undef: "error" */
        myChart = echarts.init(document.getElementById('chart-age'));
      }

      const option = {
        color: ['#3398DB'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        grid: {
          top: '15%',
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: [
          {
            type: 'category',
            data: ['少年', '青年', '中年', '老年'],
            axisTick: {
              alignWithLabel: true,
            },
          },
        ],
        yAxis: [
          {
            type: 'value',
          },
        ],
        series: [
          {
            name: '数量',
            type: 'bar',
            barWidth: '50%',
            data,
          },
        ],
      };

      myChart.setOption(option);
    },

    /**
     * 性别 图表
     */
    chartGender() {
      let myChart = echarts.getInstanceByDom(document.getElementById('chart-gender'));
      if (myChart === undefined) {
        /* global echarts:true */
        /* eslint no-undef: "error" */
        myChart = echarts.init(document.getElementById('chart-gender'));
      }

      const option = {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
        },
        legend: {
          orient: 'vertical',
          right: 20,
          top: 20,
          bottom: 0,
          data: ['男生', '女生'],
        },
        series: [
          {
            name: '性别',
            type: 'pie',
            radius: '55%',
            center: ['40%', '50%'],
            data: this.genderData,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
              },
            },
          },
        ],
      };

      myChart.setOption(option);
    },

    /**
     * 年龄 身高 图表
     */
    chartHeight(data) {
      let myChart = echarts.getInstanceByDom(document.getElementById('chart-height'));
      if (myChart === undefined) {
        /* global echarts:true */
        /* eslint no-undef: "error" */
        myChart = echarts.init(document.getElementById('chart-height'));
      }
      const xAxis = [];
      const series = [];
      data.forEach((value) => {
        xAxis.push(value.label);
        series.push(value.value);
      });

      const option = {
        grid: {
          top: '15%',
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: {
          type: 'category',
          data: xAxis,
        },
        yAxis: {
          type: 'value',
          splitLine: {
            show: false,
          },
        },
        series: [
          {
            name: '身高',
            type: 'line',
            stack: null,
            smooth: true,
            data: series,
            color: '#409EFF',
            label: {
              normal: {
                show: true,
                position: 'top',
              },
            },
          },
        ],
      };

      myChart.setOption(option);
    },

    /**
     * 地图
     */
    chartMap() {
      let myChart = echarts.getInstanceByDom(document.getElementById('chart-map'));
      if (myChart === undefined) {
        /* global echarts:true */
        /* eslint no-undef: "error" */
        myChart = echarts.init(document.getElementById('chart-map'));
      }

      const option = {
        tooltip: {
          trigger: 'item',
          formatter: '{b}',
        },
        series: [
          {
            name: '中国',
            type: 'map',
            mapType: 'china',
            selectedMode: 'multiple',
            label: {
              normal: {
                show: true,
              },
              emphasis: {
                show: true,
              },
            },
            data: [
              {
                name: '江西',
                selected: true,
              },
            ],
          },
        ],
      };

      myChart.setOption(option);
    },

    /**
     * 数据处理
     */
    setData() {
      this.dataList = [...this.$store.state.customerList];

      let male = 0;
      let female = 0;
      let height = 0;
      let weight = 0;
      let age = 0;
      let ageData = [];
      // 0 ~ 17
      let juvenile = 0;
      let juvenileHeight = 0;
      // 18 ~ 44
      let youth = 0;
      let youthHeight = 0;
      // 45 ~ 59
      let middleAge = 0;
      let middleAgeHeight = 0;
      // 60 ~
      let oldAge = 0;
      let oldAgeHeight = 0;

      let heightData = [];

      this.dataList.forEach((value) => {
        // 男女生数量
        if (value.gender === 1) {
          male += 1;
        } else {
          female += 1;
        }

        // 所有身高体重年龄
        height += value.height;
        weight += value.weight;
        age += value.age;

        ageData.push(value.age);

        if (value.age < 18) {
          juvenile += 1;
          juvenileHeight += value.height;
        } else if (value.age >= 18 && value.age < 45) {
          youth += 1;
          youthHeight += value.height;
        } else if (value.age >= 45 && value.age < 60) {
          middleAge += 1;
          middleAgeHeight += value.height;
        } else {
          oldAge += 1;
          oldAgeHeight += value.height;
        }
        // 身高
        heightData.push(value.height);
      });

      ageData = [juvenile, youth, middleAge, oldAge];

      heightData = [
        {
          label: '少年',
          value: (juvenileHeight / juvenile).toFixed(0),
        },
        {
          label: '青年',
          value: (youthHeight / youth).toFixed(0),
        },
        {
          label: '中年',
          value: (middleAgeHeight / middleAge).toFixed(0),
        },
        {
          label: '老年',
          value: (oldAgeHeight / oldAge).toFixed(0),
        },
      ];

      this.genderData = [
        {
          name: '男生',
          value: male,
        },
        {
          name: '女生',
          value: female,
        },
      ];

      this.chartGender();
      this.chartAge(ageData);
      this.chartHeight(heightData);

      // 男女生数
      this.femaleNum = female;
      this.maleNum = male;
      // 平均身高体重年龄
      this.aveHeight = (height / (this.dataList).length).toFixed(2);
      this.aveWeight = (weight / (this.dataList).length).toFixed(2);
      this.aveAge = (age / (this.dataList).length).toFixed(0);
    },
  },
};
</script>

<style scoped>
  .header {
    width: 100%;
    border: 1px solid #eee;
    height: 120px;
  }

  .row, .col {
    height: 100%;
  }

  .h-column {
    width: 100%;
    height: 100%;
    padding: 12px;
    text-align: center;
  }

  .h-column .icon {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 0 auto;
    background: #fff;
    line-height: 50px;
    text-align: center;
  }

  .h-column .icon span {
    font-size: 26px;
    color: #fff;
  }

  .h-column .value {
    font-size: 12px;
    margin-top: 10px;
    font-weight: bold;
  }

  .h-column .label {
    font-size: 12px;
    margin-top: 5px;
  }

  .chart-wrapper {
    margin-top: 20px;
    overflow: hidden;
  }

  .chart {
    border: 1px solid #eee;
  }

  .c-header {
    height: 40px;
    background: #f0f5f8;
    padding: 0 15px;
  }

  .c-h-info {
    line-height: 40px;
  }

  .c-h-info .icon {
    font-size: 16px;
    font-weight: bold;
    margin-right: 8px;
  }

  .c-h-info .label {
    font-size: 14px;
    color: #333;
  }

  .c-content {
    height: 260px;
    padding: 0 15px;
  }
</style>
