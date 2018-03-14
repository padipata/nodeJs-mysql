<template>
  <el-container id="container">
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
  </el-container>
</template>
<script>
export default {
  data() {
    return {
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
  mounted(){

  },
  methods:{

  },
  watch:{

  }
};
</script>

<style  scoped>

</style>
