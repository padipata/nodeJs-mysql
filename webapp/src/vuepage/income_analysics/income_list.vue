<template lang="html">
  <div>
    <div class="analysice box_radius">
      <el-row>
        <el-col :span='12'>
          <div id="left"  style="height:350px;width:100%;">

          </div>
        </el-col>
        <el-col :span='12'>
          <div id="right"  style="height:350px;width:100%;">

          </div>
        </el-col>
      </el-row>
    </div>
    <div class="lists box_radius">
      <el-row >
        <el-col :span="12" class="text_left head_left_title" >
          <span class="all_list">全部交易流水</span>
        </el-col>
        <el-col :span="12" class="text_right" >
          <el-button plain>导出Excel</el-button>
        </el-col>
      </el-row>

      <el-tabs v-model="activeName2" type="card">
        <el-tab-pane label="平台流水" name="first">
          <el-table
            :data="tableData"
            style="width: 100%;margin-top:20px;"
            >
            <el-table-column
              prop="date"
              label="流水号"
              align='center'>
            </el-table-column>
            <el-table-column
              prop="name"
              label="订单号"
              align='center'>
            </el-table-column>
            <el-table-column
              prop="address"
              align='center'
              label="订单完成时间">
            </el-table-column>
            <el-table-column
              prop="address"
              align='center'
              label="商家名称">
            </el-table-column>
            <el-table-column
              prop="address"
              align='center'
              label="服务类型">
            </el-table-column>
            <el-table-column
              prop="address"
              align='center'
              label="订单金额(元)">
            </el-table-column>
            <el-table-column
              prop="address"
              align='center'
              label="抽成比例">
            </el-table-column>
            <el-table-column
              prop="address"
              align='center'
              label="实际抽成金额">
            </el-table-column>
            <el-table-column
              prop="address"
              align='center'
              label="收入(元)">
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="小哥提现记录" name="second">
          <el-table
            :data="tableData"
            style="width: 100%;margin-top:20px;"
            >
            <el-table-column
              prop="date"
              label="流水号"
              align='center'>
            </el-table-column>
            <el-table-column
              prop="name"
              label="订单号"
              align='center'>
            </el-table-column>
            <el-table-column
              prop="address"
              align='center'
              label="商家名称">
            </el-table-column>
            <el-table-column
              prop="address"
              align='center'
              label="服务类型">
            </el-table-column>
            <el-table-column
              prop="address"
              align='center'
              label="金额(元)">
            </el-table-column>
            <el-table-column
              prop="address"
              align='center'
              label="下单时间">
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="商家充值明细" name="third">
          <el-table
            :data="tableData"
            style="width: 100%;margin-top:20px;"
            >
            <el-table-column
              prop="date"
              label="流水号"
              align='center'>
            </el-table-column>
            <el-table-column
              prop="name"
              label="小哥姓名"
              align='center'>
            </el-table-column>
            <el-table-column
              prop="address"
              align='center'
              label="金额(元)">
            </el-table-column>
            <el-table-column
              prop="address"
              align='center'
              label="提现时间">
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <div class="pagination">
          <el-row type="flex"  justify="center">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="1000">
            </el-pagination>
          </el-row>
        </div>
      </el-tabs>
    </div>
  </div>
</template>

<script>
// 引入 ECharts 主模块
var echarts = require('echarts')
// 引入柱状图
require('echarts/lib/chart/bar');
export default {
  data(){
    return{
      activeName2:'first',
      tableData: [{
           date: '2016-05-02',
           name: '王小虎',
           address: '上海市普陀区金沙江路 1518 弄'
         }, {
           date: '2016-05-04',
           name: '王小虎',
           address: '上海市普陀区金沙江路 1517 弄'
         }
       ]
    }
  },
  methods:{
    bar(){
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('right'));
      // 绘制图表
      myChart.setOption({
          title: {
              text: '收入分析'
          },
          legend:{
            data:['日收入']
          },
          grid:{
            show:true
          },
          tooltip: {},
          xAxis: {
              name:'日期',
              splitLine:{
                show:true
              },
              axisTick:{
                show:false
              },
              axisLine:{
                show:false
              },
              data: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
          },
          yAxis: {
            name:'收入(元)',
            splitNumber:5,
            axisLine:{
              show:false
            },
            axisLabel:{
              show:false
            },
            axisTick:{
              show:false
            },
          },
          series: [{
              name: '销量',
              type: 'bar',
              itemStyle:{
                color:'#20A0FF'
              },
              data: [0,1,2,34,23,234,234,23,2,2,1,123,12,13,123,1,1]
          }]
      });
    },
    line(){
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('left'));
      // 绘制图表
      myChart.setOption({
          title: { text: '订单分析' },
          tooltip: {
            trigger: 'axis'
            // showTitle:false
          },
          toolbox:{
            showTitle:false
          },
          legend: {
              data:['今日订单数']
          },
          xAxis: {
              // show:false,
              axisLine:{
                show:false
              },
              axisTick:{
                show:false
              },
              name:'日期',
              data: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

          },
          grid:{
            show:true
          },
          yAxis: {
            // show:false,
            axisLine:{
              show:false
            },
            axisLabel:{
              show:false
            },
            axisTick:{
              show:false
            },
            splitLine:{
              show:false
            },
            name:'订单数'
          },
          series: [{
              name: '今日订单数',
              type: 'line',
              itemStyle: {
                  color:'#22D170'
              },
              smooth: true,
              data: [0,1,2,34,23,234,234,23,2,2,1,123,12,13,123,1,1]
          },
          {
              name: '昨日订单数',
              type: 'line',
              itemStyle: {
                  color:'#22D170'
              },
              smooth: true,
              data: [0,1,2,34,223,2324,232,23,2,2,1,123,122,132,123,12,1]
          }
        ]
      });
    }
  },
  mounted(){
    // 初始化曲线图和柱状图
    this.line();
    this.bar();
  }
}
</script>

<style lang="css" scoped>
  .el-table {
    margin-top: 10px!important;
  }
  .all_list{
    font-size: 20px;
    font-weight: bold;
  }
  .analysice,.lists{
    background: #fff;
    padding: 2% 2% 3% 2%;
  }
  .lists{
    margin-top: 20px;
  }
</style>
