webpackJsonp([3],{ZcOI:function(t,e){},xCHB:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("Dd8w"),i=a.n(n),s=a("NYxO"),r={mounted:function(){this.chart(),this.setBreadCrumb([{label:"概览",path:"/overview",isDisabled:!0}]),this.setNavDefaultIndex("1")},methods:i()({},Object(s.b)(["setBreadCrumb","setNavDefaultIndex"]),{chart:function(){var t=echarts.getInstanceByDom(document.getElementById("chart"));void 0===t&&(t=echarts.init(document.getElementById("chart")));t.setOption({xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},series:[{data:[820,932,901,934,1290,1330,1320],type:"line"}]})}})},c={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{height:"400px"}},[e("div",{staticStyle:{height:"100%"},attrs:{id:"chart"}})])}]};var d=a("VU/8")(r,c,!1,function(t){a("ZcOI")},"data-v-c11ab838",null);e.default=d.exports}});
//# sourceMappingURL=3.b2b5e4cc556dcc46acf8.js.map