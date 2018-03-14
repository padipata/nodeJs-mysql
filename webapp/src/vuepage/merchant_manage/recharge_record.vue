<template lang="html">
  <div >
    <!-- 搜索框  开始-->
    <el-row :gutter="20" >
      <el-col :span="7">
        <el-input placeholder="请输入内容"  v-model="input5" class="input-with-select" >
          <el-select v-model="select" slot="prepend" placeholder="请选择">
            <el-option label="餐厅名" value="1"></el-option>
            <el-option label="订单号" value="2"></el-option>
            <el-option label="用户电话" value="3"></el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </el-col>
      <el-col :span='5'>
        <el-date-picker
              style="width:100%;"
              type="date"
              placeholder="选择日期">
        </el-date-picker>
      </el-col>
      <el-col :span='1'>
        <el-button type="primary">查询</el-button>
      </el-col>
      <el-col :span="3" class="text_right" :offset="8">
        <el-button size='medium' type="primary">新增商家</el-button>
      </el-col>
    </el-row>
    <!-- 搜索框  结束-->

    <!-- 表格   开始 -->
    <div class="panel box_radius box_relative ">
      <el-row >
        <el-col :span="12" class="text_left" >
          <span class="recharge_record">充值记录</span>
        </el-col>
        <el-col :span="12" class="text_right" >
          <el-button plain>导出Excel</el-button>
        </el-col>
      </el-row>
      <el-table
        :data="tableData"
        style="width: 100%;margin-top:20px;"
        >
        <el-table-column
          prop="date"
          label="充值金额(元)"
          align='center'>
        </el-table-column>
        <el-table-column
          prop="name"
          label="钱包金额"
          align='center'>
        </el-table-column>
        <el-table-column
          prop="address"
          align='center'
          label="来源">
        </el-table-column>
        <el-table-column
          prop="address"
          align='center'
          label="流水号">
        </el-table-column>
        <el-table-column
          prop="address"
          align='center'
          label="时间">
        </el-table-column>
      </el-table>

      <div class="pagination">
        <el-row type="flex"  justify="center">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="1000">
          </el-pagination>
        </el-row>
      </div>
    </div>
    <!-- 表格   结束 -->

  </div>
</template>

<script>
export default {
  data(){
    return{
      input5:'',
      select:'',
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
  }
}
</script>

<style scoped>
  .recharge_record{
    font-size: 20px;
    color: #141414;
    line-height: 40px;
    font-weight: bold;
  }
</style>
