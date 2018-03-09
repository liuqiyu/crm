<template>
  <div style="height: 400px;">
    <div id="chart" style="height: 100%"></div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  mounted() {
    this.chart();
    this.setBreadCrumb([
      {
        label: '概览',
        path: '/overview',
        isDisabled: true,
      },
    ]);
    this.setNavDefaultIndex('1');
  },
  methods: {
    ...mapActions([
      'setBreadCrumb',
      'setNavDefaultIndex',
    ]),
    chart() {
      let myChart = echarts.getInstanceByDom(document.getElementById('chart'));
      if (myChart === undefined) {
        /* global echarts:true */
        /* eslint no-undef: "error" */
        myChart = echarts.init(document.getElementById('chart'));
      }

      const option = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
          type: 'value',
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
        }],
      };
      myChart.setOption(option);
    },
  },
};
</script>

<style scoped>

</style>
