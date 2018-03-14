<template lang="html">
  <div class="">
    <el-row >
      <el-col :span="4" class="text_left">
        <el-input style="width:100%;"
        size='medium'
          placeholder="搜索账号或姓名"
          prefix-icon="el-icon-search">
        </el-input>
      </el-col>
      <el-col :span='2' class="text_right">
        <el-button size='medium' type="primary">查询</el-button>
      </el-col>
      <el-col :span="18" class="text_right" >
        <el-button size='medium' type="primary" @click='centerDialogVisible=true'>新增管理员</el-button>
      </el-col>
    </el-row>

      <div class="authority">
        <el-row style="line-height:40px;">
          <el-col :span="12" class="text_left head_left_title" >
            <span class="recharge_record">权限管理</span>
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
            label="ID"
            align='center'>
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            align='center'>
          </el-table-column>
          <el-table-column
            prop="address"
            align='center'
            label="手机号">
          </el-table-column>
          <el-table-column
            prop="address"
            align='center'
            label="管理员类型">
          </el-table-column>
          <el-table-column
            prop="address"
            align='center'
            label="账号">
          </el-table-column>
          <el-table-column
            prop="address"
            align='center'
            label="密码">
          </el-table-column>
          <el-table-column
            prop="address"
            align='center'
            label="拥有权限">
          </el-table-column>
          <el-table-column
            prop="address"
            align='center'
            label="创建时间">
          </el-table-column>
          <el-table-column
            prop="address"
            align='center'
            label="操作">
            <template  slot-scope="scope">
              <el-button size="mini" @click='btn_click(0)' type='primary' plain>编辑</el-button>
              <el-button size="mini" @click='btn_click(1)' type='warning' plain>设置权限</el-button>
              <el-button size="mini" @click='btn_click(2)' type='danger' plain>删除</el-button>
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

      <!-- 点击新增管理员 开始 -->
      <el-dialog
        title="编辑信息"
        :visible.sync="centerDialogVisible"
        width="30%"
        center>
        <el-row>
          <el-col :span='18' :offset='3' class="text_left">
            <span>姓名</span>
          </el-col>
        </el-row>
        <el-row class="input">
          <el-col :span='18' :offset='3'>
            <el-input width='100%' size='medium' ></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span='18' :offset='3' class="text_left">
            <span>手机</span>
          </el-col>
        </el-row>
        <el-row class="input">
          <el-col :span='18' :offset='3'>
            <el-input width='100%' size='medium'></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span='18' :offset='3' class="text_left">
            <span>账号</span>
          </el-col>
        </el-row>
        <el-row class="input">
          <el-col :span='18' :offset='3'>
            <el-input width='100%' size='medium'></el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span='18' :offset='3' class="text_left">
            <span>密码</span>
          </el-col>
        </el-row>
        <el-row class="input">
          <el-col :span='18' :offset='3'>
            <el-input width='100%' size='medium'></el-input>
          </el-col>
        </el-row>
        <div class="line">

        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="centerDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
      <!-- 点击新增管理员 结束 -->


      <!--点击设置权限  开始-->
      <el-dialog
        :title="title"
        :visible.sync="setAuthorityVisible"
        width="30%"
        center>

        <el-checkbox-group v-model="checkList">
          <el-row class="text_left">
            <el-col :span='4' :offset='4'>
              <el-checkbox label="复选框 A" ></el-checkbox>
            </el-col>
          </el-row>
          <el-row class="text_left">
            <el-col :span='4' :offset='4'>
              <el-checkbox label="复选框 B"></el-checkbox>
            </el-col>
          </el-row>
          <el-row class="text_left">
            <el-col :span='4' :offset='4'>
              <el-checkbox label="复选框 C"></el-checkbox>
            </el-col>
          </el-row>
        </el-checkbox-group>
        <span slot="footer" class="dialog-footer">
          <el-button @click="setAuthorityVisible = false">取 消</el-button>
          <el-button type="primary" @click="setAuthorityVisible = false">确 定</el-button>
        </span>
      </el-dialog>
      <!--点击设置权限  结束-->

  </div>


</template>

<script>
export default {
  data(){
    return{
      title:'设置某人的权限',
      checkList: ['选中且禁用','复选框 A'],
      setAuthorityVisible:false,
      centerDialogVisible: false,
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
    delete(){
      this.$confirm('您确定删除该管理员吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      }).then(() => {
        // this.$message({
        //   type: 'success',
        //   message: '删除成功!'
        // });
      }).catch(() => {
        // this.$message({
        //   type: 'info',
        //   message: '已取消删除'
        // });
      });
    },
    btn_click(index){
      if(index==0){
        this.centerDialogVisible=true;
      }else if(index==1){
        this.setAuthorityVisible=true;
      }else if(index==2){
        this.delete()
      }
    }
  }
}
</script>

<style lang="css" scoped>

    .line{
      border-bottom: 1px solid #E5E5E5;
      margin-bottom: 17px;
      margin-top: 17px;
    }
  .input{
    margin-bottom: 20px;
  }
  .authority{
    margin-top: 20px;
    background: #fff;
    padding: 2% 2.5% 3% 2.5% ;
    width: 95%;
  }
</style>
