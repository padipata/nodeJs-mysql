<template lang="html">
  <!-- 表格   开始 -->
  <div class="server box_radius  ">
    <el-row style="line-height:40px;">
      <el-col :span="12" class="text_left head_left_title" >
        <span class="server_title">服务类目列表</span>
      </el-col>
      <el-col :span="12" class="text_right" >
        <el-button type='primary' @click='dialogVisible=true'>新增类目</el-button>
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
        label="类目名称"
        align='center'>
      </el-table-column>
      <el-table-column
        prop="name"
        label="最低安装费(元)"
        align='center'>
      </el-table-column>
      <el-table-column
        prop="address"
        align='center'
        label="单件安装费(元)">
      </el-table-column>
      <el-table-column
        prop="address"
        align='center'
        label="折旧费(元)">
      </el-table-column>
      <el-table-column
        prop="address"
        align='center'
        label="抽成比例(%)">
      </el-table-column>
      <el-table-column
        prop="address"
        align='center'
        label="操作">
        <template  slot-scope="scope">
          <el-button size="mini" @click='btn_click(0)' type='primary' plain>修改</el-button>
          <el-button size="mini" @click='btn_click(1)' type='danger' plain>删除</el-button>
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

    <!--新增问题  开始-->
    <el-dialog
      :title="title"
      :visible.sync="dialogVisible"
      width="30%"
      >
      <el-row>
        <el-col :span='8' style="text-align:left;" :offset='3'>类目名称</el-col>
      </el-row>
      <el-row class="common_bottom margin_bottom">
        <el-col :span='18' :offset='3'>
          <el-input  placeholder="请输入内容"></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span='8' style="text-align:left;" :offset='3'>最低安装费(元)</el-col>
      </el-row>
      <el-row class="common_bottom margin_bottom">
        <el-col :span='18' :offset='3'>
          <el-input  placeholder="请输入内容"></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span='8' style="text-align:left;" :offset='3'>单件安装费(元)</el-col>
      </el-row>
      <el-row class="common_bottom margin_bottom">
        <el-col :span='18' :offset='3'>
          <el-input  placeholder="请输入内容"></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span='8' style="text-align:left;" :offset='3'>折旧费(元)</el-col>
      </el-row>
      <el-row class="common_bottom margin_bottom">
        <el-col :span='18' :offset='3'>
          <el-input  placeholder="请输入内容"></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span='8' style="text-align:left;" :offset='3'>抽成比率(元)</el-col>
      </el-row>
      <el-row class="common_bottom margin_bottom">
        <el-col :span='18' :offset='3'>
          <el-input  placeholder="请输入内容"></el-input>
        </el-col>
      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <!--新增问题  结束-->

  </div>
</template>

<script>
export default {
  data(){
    return{
      title:'新增类目',
      dialogVisible:false,
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

<style lang="css" scoped>
  .server_title{
    color: #141414;
    font-weight: bold;
    font-size: 20px;
  }
  .margin_bottom{
    margin-bottom: 20px;
  }
  .server{
    background: #fff;
    padding: 2% 2.5% 3% 2.5%;
    width: 95%;
  }
</style>
