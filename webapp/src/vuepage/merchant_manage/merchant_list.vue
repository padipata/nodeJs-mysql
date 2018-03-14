<template>
    <div >
      <!-- 搜索框  开始-->
      <el-row :gutter="20" >
        <el-col :span="7">
          <el-input placeholder="请输入内容"  v-model="input5" class="input-with-select">
            <el-select v-model="select" slot="prepend" placeholder="请选择">
              <el-option label="餐厅名" value="1"></el-option>
              <el-option label="订单号" value="2"></el-option>
              <el-option label="用户电话" value="3"></el-option>
            </el-select>
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <el-col :span="3" class="text_right" :offset="14">
          <el-button size='medium' type="primary">新增商家</el-button>
        </el-col>
      </el-row>
      <!-- 搜索框  结束-->

      <!-- 表格   开始 -->
      <div class="panel box_radius box_relative ">
        <el-row >
          <el-col :span="12" class="text_left head_left_title" >
            <span class="recharge_record">商家列表</span>
          </el-col>
          <el-col :span="12" class="text_right" >
            <el-button plain>导出Excel</el-button>
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
            label="商家名称"
            align='center'>
          </el-table-column>
          <el-table-column
            prop="name"
            label="联系人"
            align='center'>
          </el-table-column>
          <el-table-column
            prop="address"
            align='center'
            label="联系电话">
          </el-table-column>
          <el-table-column
            prop="address"
            align='center'
            label="所在区域">
          </el-table-column>
          <el-table-column
            prop="address"
            align='center'
            label="状态">
          </el-table-column>
          <el-table-column
            prop="address"
            align='center'
            label="操作">
            <template  slot-scope="scope">
              <el-button size="mini" @click='btn_click(0)' type='primary' plain>查看详情</el-button>
              <el-button size="mini" @click='btn_click(1)' type='success' plain>充值记录</el-button>
              <el-button size="mini" @click='btn_click(2)' type='danger' plain>解封</el-button>

              <!-- <el-tag size='mini' @click='btn_click(0)'></el-tag> -->
              <!-- <el-tag size='mini' @click='btn_click(1)' type='success'></el-tag>
              <el-tag size='mini' @click='btn_click(2)' type='danger'></el-tag> -->
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
      <!-- 表格   结束 -->

    </div>
</template>

<script>
    export default {
        data() {
            return {
              input5:'',
              select:'',
              currentPage:1,
              total_length:1,
              pageSize:1,
              loading:true,

              row:true,
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

        methods: {
          btn_click(index){
            console.log(index);
            if(index==0){
              this.$router.push({path:'/CheckDetail'})
            }else if(index==1){
              this.$router.push({path:'/RechargeRecord'})
            }else if(index==2){

            }
          }
        }
    }
</script>


<style  scoped>
    /* // table头部背景色 */

    .head_left_title{
      font-weight: bold;
      font-size: 20px;
      color: #141414;
    }
    .header_bg{
      background: red;
    }
    .panel{
      margin-top: 30px;
      background: #fff;
      width: 94%;
      line-height: 40px;
      padding: 20px 3% 20px 3%;
    }
</style>
