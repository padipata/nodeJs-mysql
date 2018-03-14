<template lang="html">
  <div class="about_us box_radius  ">
    <el-row style="line-height:40px;">
      <el-col :span="12" class="text_left head_left_title" >
        <span class="common_question">常见问题列表</span>
      </el-col>
      <el-col :span="12" class="text_right" >
        <el-button type='primary' @click='add_new'>新增问题</el-button>
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
        label='标题'
        align='center'>
      </el-table-column>
      <el-table-column
        prop="name"
        label="创建时间"
        align='center'>
      </el-table-column>
      <el-table-column
        prop="address"
        align='center'
        label="所属客户端">
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
        <el-col :span='8' style="text-align:left;" :offset='3'>所属客户端</el-col>
      </el-row>
      <el-row class="common_bottom">
        <el-col :span='18' :offset='3'>
          <el-select style="width:100%;" v-model="value" placeholder="请选择">
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
        <el-col :span='8' style="text-align:left;" :offset='3'>标题</el-col>
      </el-row>
      <el-row class="common_bottom">
        <el-col :span='18' :offset='3'>
          <el-input  placeholder="请输入内容"></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span='8' style="text-align:left;" :offset='3'>内容</el-col>
      </el-row>
      <el-row class="common_bottom">
        <el-col :span='18' class="question" :offset='3'>
          <el-input
            type="textarea"
            :autosize="{ minRows: 4, maxRows: 6}"
            placeholder="请输入内容"
            v-model="textarea">
          </el-input>
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
        dialogVisible:false,
        title:'新增问题',
        textarea:'',
        value:'',
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
      add_new(){
        this.dialogVisible=true;
      },
      btn_click(index){
        if(index==0){
          this.dialogVisible=true;
          this.title='修改常见问题'
        }else if(index==1){

        }
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
  }
}
</script>

<style lang="css" scoped>
  .common_bottom{margin-bottom: 20px;}
  .el-textarea__inner{
    border: 1px solid #dcdfe6!important;
  }
  .common_question{
    font-weight: bold;
  }
  .about_us{
    background: #fff;
    padding: 2% 2.5% 3% 2.5%;
    width: 95%;
  }
</style>
