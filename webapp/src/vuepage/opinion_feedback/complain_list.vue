<template lang="html">
  <div class="">
    <el-tabs type="border-card">
      <el-tab-pane label="投诉列表">
        <div class="tab_panel">
          <el-row :gutter="20" >
            <el-col :span="3">
              <el-dropdown>
                <el-button type="primary" size='medium' >
                  处理完成<i class="el-icon-caret-bottom el-icon--right"></i>
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
            <el-col :span="1">
                &nbsp;
            </el-col>
            <el-col :span="3">
              <el-dropdown>
                <el-button type="primary" size='medium'>
                  订单编号<i class="el-icon-caret-bottom el-icon--right"></i>
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
            <el-col :span="5">
              <el-input  suffix-icon="el-icon-search" size='medium'  placeholder="请输入搜索关键词"></el-input>
            </el-col>
            <el-col :span="3" class="text_right" :offset="9">
              <el-button size='medium' plain>导出Excel</el-button>
            </el-col>
          </el-row>
        </div>
        <el-table
          :data="tableData"
          border
          style="width: 98%;margin-left:auto;margin-right:auto;"
          >
          <el-table-column
            prop="date"
            label="商家名称"
            align='center'>
          </el-table-column>
          <el-table-column
            prop="name"
            label="投诉对象"
            align='center'>
          </el-table-column>
          <el-table-column
            prop="address"
            align='center'
            label="累计被投诉次数">
          </el-table-column>
          <el-table-column
            prop="address"
            align='center'
            label="涉及单号">
          </el-table-column>
          <el-table-column
            prop="address"
            align='center'
            label="状态">
          </el-table-column>
          <el-table-column
            prop="address"
            align='center'
            label="结果">
          </el-table-column>
          <el-table-column
            prop="address"
            align='center'
            label="操作">
            <template  slot-scope="scope">
              <el-button  size="mini" @click='btn_click(0)' type="warning" plain>订单详情</el-button>

              <el-button  size="mini" @click='btn_click(1)' type="primary" plain>查看详情</el-button>
            </template>
          </el-table-column>
        </el-table>

      </el-tab-pane>
      <el-tab-pane label="评价列表">
        <div class="tab_panel">
          <el-row :gutter="20" >
            <el-col :span="3">
              <el-dropdown>
                <el-button type="primary" size='medium' >
                  服务类型<i class="el-icon-caret-bottom el-icon--right"></i>
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
            <el-col :span="1">
                &nbsp;
            </el-col>
            <el-col :span="3">
              <el-dropdown>
                <el-button type="primary" size='medium'>
                  订单编号<i class="el-icon-caret-bottom el-icon--right"></i>
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
            <el-col :span="5">
              <el-input  suffix-icon="el-icon-search" size='medium'  placeholder="请输入内容"></el-input>
            </el-col>
            <el-col :span="3" class="text_right" :offset="9">
              <el-button size='medium' plain>导出Excel</el-button>
            </el-col>
          </el-row>
        </div>
        <el-table
          :data="tableData"
          border
          style="width: 98%;margin-left:auto;margin-right:auto;"
          >
          <el-table-column
            prop="date"
            label="订单编号"
            align='center'>
          </el-table-column>
          <el-table-column
            prop="name"
            label="订单日期"
            align='center'>
          </el-table-column>
          <el-table-column
            prop="address"
            align='center'
            label="服务类型">
          </el-table-column>
          <el-table-column
            prop="address"
            align='center'
            label="配送员">
          </el-table-column>
          <el-table-column
            prop="address"
            align='center'
            label="评价等级">
          </el-table-column>
          <el-table-column
            prop="address"
            align='center'
            label="操作">
            <template  slot-scope="scope">
              <el-button  size="mini" @click='btn_click(2)' type="warning" plain>订单详情</el-button>

              <el-button  size="mini" @click='btn_click(3)' type="primary" plain>查看详情</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="意见反馈">
        <div class="tab_panel">
          <el-row  >
            <el-col :span="24" class="text_right" >
              <el-button size='medium' plain>导出Excel</el-button>
            </el-col>
          </el-row>
        </div>
        <el-table
          :data="tableData"
          border
          style="width: 98%;margin-left:auto;margin-right:auto;"
          >
          <el-table-column
            prop="date"
            label="反馈时间"
            align='center'>
          </el-table-column>
          <el-table-column
            prop="name"
            label="商家名称"
            align='center'>
          </el-table-column>
          <el-table-column
            prop="address"
            align='center'
            label="反馈内容">
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

      }else if(index==1){
        this.$router.push({path:'/ComplainDetail'})
      }else if(index==2){

      }else if(index==3){
        this.$router.push({path:'/CommentDetail'})
      }
    }
  }
}
</script>

<style lang="css" scoped>
  .tab_panel{
    padding: 4px 1% 28px 1%;
  }
</style>
