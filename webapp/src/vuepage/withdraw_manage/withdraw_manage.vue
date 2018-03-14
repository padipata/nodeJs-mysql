<template lang="html">
  <div class="">
    <el-row :gutter='20'>
      <el-col :span="14" style="display:flex;flex-direction:row;justify-content:space-content;">
        <el-col>
          <el-dropdown >
            <el-button type="primary">
              充值状态<i class="el-icon-arrow-down el-icon-caret-bottom"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>黄金糕</el-dropdown-item>
              <el-dropdown-item>狮子头</el-dropdown-item>
              <el-dropdown-item>螺蛳粉</el-dropdown-item>
              <el-dropdown-item>双皮奶</el-dropdown-item>
              <el-dropdown-item>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
        <el-col>
          <el-date-picker
            type="date"
            placeholder="选择日期">
          </el-date-picker>
        </el-col>
        <el-col>
          <el-input
            placeholder="搜索小哥姓名/联系电话"
            prefix-icon="el-icon-search"
            style="width:220px;"
          >
          </el-input>
        </el-col>
        <el-col>
          <el-button  type="primary">查询</el-button>
        </el-col>
      </el-col>
    </el-row>
    <div class="withdraw box_radius">
      <el-row style="line-height:40px;">
        <el-col :span="12" class="text_left head_left_title" >
          <span class="common_question">小哥提现列表</span>
        </el-col>
        <el-col :span="12" class="text_right" >
          <el-button type='primary' @click='add_new'>设置提现最低金额</el-button>
        </el-col>
      </el-row>
      <!-- <el-row type='flex' justify='end' :span='24'>
        <el-button plain>导出Excel</el-button>
      </el-row> -->
      <el-table
        :data="tableData"
        style="width: 100%;margin-top:20px;"
        >
        <el-table-column
          prop="date"
          label='小哥姓名'
          align='center'>
        </el-table-column>
        <el-table-column
          prop="name"
          label="联系电话"
          align='center'>
        </el-table-column>
        <el-table-column
          prop="address"
          align='center'
          label="提现金额">
        </el-table-column>
        <el-table-column
          prop="address"
          align='center'
          label="提现时间">
        </el-table-column>
        <el-table-column
          prop="address"
          align='center'
          label="提现状态">
        </el-table-column>
        <el-table-column
          prop="address"
          align='center'
          label="操作">
          <template  slot-scope="scope">
            <el-button size="mini" @click='btn_click(0)' type='primary' plain>查看详情</el-button>
            <el-button size="mini" @click='btn_click(1)' type='primary' plain>允许提现</el-button>
            <el-button size="mini" @click='btn_click(2)' type='danger' plain>不允许提现</el-button>
          </template>
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
  </div>
</template>

<script>
export default {
  data(){
    return{
      value1:'',
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
    btn_click(index){
      if(index==0){
        this.$router.push({path:'/WithdrawDetail'})
      }else if(index==1){

      }else if(index==2){

      }
    }
  }
}
</script>

<style lang="css" scoped>
  .withdraw{
    margin-top: 30px;
    background: #fff;
    padding: 2% 2.5% 3% 2.5%;
    width: 95%;

  }
</style>
