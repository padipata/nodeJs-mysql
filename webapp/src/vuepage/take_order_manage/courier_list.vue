<template lang="html">
  <div class="">

    <el-row class="select_line" >
      <el-col :span='14' style="display:flex;flex-direction:row;justify-content:space-content;">
          <el-col  class="dark_title " >
            <div class="box_width">
              服务类型
            </div>
          </el-col>
          <el-col  class="common_right" >
            <el-dropdown size='medium' >
              <el-button type="primary" plain >
                安装<i class="el-icon-caret-bottom el-icon--right"></i>
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
          <el-col class="dark_title text_left">
            <div class="box_width">
              服务品类
            </div>
          </el-col>
          <el-col  class="common_right">
            <el-dropdown size='medium' >
              <el-button type="primary" plain >
                家居<i class="el-icon-caret-bottom el-icon--right"></i>
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
          <el-col  class="dark_title text_left ">
            <div class="" style="width:32px;">
              状态
            </div>
          </el-col>
          <el-col  class="">
            <el-dropdown size='medium'>
              <el-button type="primary" plain>
                冻结<i class="el-icon-caret-bottom el-icon--right"></i>
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
          <el-col  class="common_right" :offset='1'>
            <el-input
            style="width:180px;"
              placeholder="搜索小哥姓名/手机号"
              prefix-icon="el-icon-search">
            </el-input>
          </el-col>
          <el-col  class="text_center">
            <el-button type="primary">查询</el-button>
          </el-col>
        </el-col>
      <el-col :span='10' class="text_right" >
        <el-button type="primary">新增小哥</el-button>
      </el-col>
    </el-row>

    <!-- 表格   开始 -->
    <div class="courier box_radius  ">
      <el-row style="line-height:40px;">
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
          label="小哥姓名"
          align='center'>
        </el-table-column>
        <el-table-column
          prop="name"
          label="服务类型"
          align='center'>
        </el-table-column>
        <el-table-column
          prop="address"
          align='center'
          label="服务品质">
        </el-table-column>
        <el-table-column
          prop="address"
          align='center'
          label="合作次数">
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
            <el-button size="mini" @click='btn_click(1)' type='danger' plain>封号</el-button>
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
    data(){
      return{
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
          this.$router.push({path:'CourierInfo'})
        }else if(index==1){

        }
      }
    }
}
</script>

<style lang="css" scoped>
  .common_right{
    margin-right: 20px;
  }
  .head_left_title{
    font-size: 20px;
    color: #141414;
    font-weight: bold;
  }
  .courier{
    background: #fff;
    padding: 2% 2.5% 2% 2.5%;
    width: 95%;
    margin-top: 20px;
  }
  .dark_title{
    font-weight: bold;
    color: #223040;
    font-size: 14px;
  }
  .select_line{
    line-height: 40px;
  }
</style>
