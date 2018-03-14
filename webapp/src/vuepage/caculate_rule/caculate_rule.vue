<template lang="html">
  <div class="caculate box_radius  ">
    <el-row style="line-height:40px;">
      <el-col :span="12" class="text_left head_left_title" >
        <span class="server_title">车型计价列表</span>
      </el-col>
    </el-row>
    <el-table
      :data="tableData"
      style="width: 100%;margin-top:20px;"
      >
      <el-table-column
        prop="date"
        label="车型"
        align='center'>
      </el-table-column>
      <el-table-column
        prop="name"
        label="起步价(10公里内/元)"
        align='center'>
      </el-table-column>
      <el-table-column
        prop="address"
        align='center'
        label="超出10公里后每公里价格(元)">
      </el-table-column>
      <el-table-column
        prop="address"
        align='center'
        label="操作">
        <template  slot-scope="scope">
          <el-button size="mini" @click='btn_click(0)' type='primary' plain>编辑</el-button>
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

    <!--编辑计价  开始-->
    <el-dialog
      :title="title"
      :visible.sync="dialogVisible"
      width="45%"
      >
      <el-row>
        <el-col :span='8' style="text-align:left;" :offset='3'>车型</el-col>
      </el-row>
      <el-row class="margin_bottom">
        <el-col :span='8' :offset='3'>
          <el-select v-model='value' style="width:100%;" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span='8' style="text-align:left;" :offset='3'>起步价(10公里内)(元)</el-col>
      </el-row>
      <el-row class=" margin_bottom">
        <el-col :span='18' :offset='3'>
          <el-input  placeholder="请输入内容"></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span='8' style="text-align:left;" :offset='3'>超出10公里后每公里价格(元)</el-col>
      </el-row>
      <el-row class=" margin_bottom">
        <el-col :span='18' :offset='3'>
          <el-input  placeholder="请输入内容"></el-input>
        </el-col>
      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <!--编辑计价  结束-->

  </div>
</template>

<script>
export default {
  data(){
    return{
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      title:'编辑计价',
      value:'',
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
  },
  methods:{
    btn_click(index){
      if(index==0){
        this.dialogVisible=true;
      }
    }
  }
}
</script>

<style lang="css" scoped>
  .server_title{
    font-size: 20px;
    color: #141414;
    font-weight: bold;
  }
  .margin_bottom{
    margin-bottom: 20px;
  }
  .caculate{
    padding:  2% 2.5% 3% 2.5%;
    width: 95%;
    background: #fff;
  }
</style>
