<template>
  <el-container id="container">
    <!--头部开始  -->

    <el-header style="text-align: right; font-size: 12px;" height='84px'>
      <el-row>
        <el-col :span="14">
          <div class="logo fl">
            <img class="box_center" src="../assets/img/logo.png" alt="">
          </div>
          <!-- <div class="">
          </div> -->
          <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb">
            <el-breadcrumb-item v-for='(item,index) in $route.meta' :to="{ path:item.url}" v-bind:key="index">{{item.name}}</el-breadcrumb-item>
          </el-breadcrumb>
        </el-col>
        <!-- <el-col :span='3' class="breadcrumb">
          &nbsp;
        </el-col> -->
        <el-col :span="10">
          <span class="name">王小虎</span>
          <span class="quit">退出 <img src="../assets/img/quit.png" alt=""></span>
        </el-col>
      </el-row>
    </el-header>
    <!--头部结束  -->
    <!--底部（侧边栏，主体部分）开始  -->
    <el-container>
      <!--侧边栏开始  -->
      <el-aside width="240px" style="background-color: rgb(0, 0, 0)">
        <el-menu
        background-color="#000000"
        text-color="#999999"
        active-text-color="#F8B802"
        :default-active='actived'
        >
          <el-submenu index="1">
            <template slot="title"><i class="income_analysics"></i>收入分析</template>
            <router-link to="/IncomeList" tag="li">
                  <el-menu-item class="text_center" index="1-1" >平台收入流水</el-menu-item>
            </router-link>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="order_take_manage"></i>接单端管理</template>
            <router-link to="/CourierList" tag="li">
                  <el-menu-item class="text_center" index="2-1">小哥列表</el-menu-item>
            </router-link>
            <router-link to="/CourierApplyList" tag="li">
                  <el-menu-item class="text_center" index="2-2">小哥申请列表</el-menu-item>
            </router-link>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="mechent_manage"></i>商家端管理</template>
            <router-link to="/MerchantList" tag="li">
                  <el-menu-item class="text_center" index="3-1">商家列表</el-menu-item>
            </router-link>
            <router-link to="/ApplyList" tag="li">
                  <el-menu-item class="text_center" index="3-2">申请列表</el-menu-item>
            </router-link>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title"><i class="order_manage"></i>订单管理</template>
            <router-link to="/OrderList" tag="li">
                  <el-menu-item class="text_center" index="4-1">订单列表</el-menu-item>
            </router-link>
            <router-link to="/UntakeOrder" tag="li">
                  <el-menu-item class="text_center" index="4-2">待接单订单</el-menu-item>
            </router-link>
            <router-link to="/AbnormalOrder" tag="li">
                  <el-menu-item class="text_center" index="4-3">异常订单</el-menu-item>
            </router-link>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title"><i class="withdraw_manage"></i>提现管理</template>
            <router-link to="/WithdrawManage" tag="li">
                  <el-menu-item class="text_center" index="5-1">小哥提现管理</el-menu-item>
            </router-link>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title"><i class="content_manage"></i>内容管理</template>
            <router-link to="/CommonQuestion" tag="li">
                  <el-menu-item class="text_center" index="6-1">常见问题</el-menu-item>
            </router-link>
            <router-link to="/AboutUs" tag="li">
                  <el-menu-item class="text_center" index="6-2">关于我们管理</el-menu-item>
            </router-link>
            <router-link to="/RuleManage" tag="li">
                  <el-menu-item class="text_center" index="6-3">规则管理</el-menu-item>
            </router-link>
          </el-submenu>
          <el-submenu index="7">
            <template slot="title"><i class="service_manage"></i>服务管理</template>
            <router-link to="/Server" tag="li">
                  <el-menu-item class="text_center" index="7-1">服务类目管理</el-menu-item>
            </router-link>
          </el-submenu>
          <el-submenu index="8">
            <template slot="title"><i class="opinion_feedback"></i>意见反馈</template>
            <router-link to="/ComplainList" tag="li">
                  <el-menu-item class="text_center" index="8-1">投诉列表</el-menu-item>
            </router-link>
            <router-link to="/CommentList" tag="li">
                  <el-menu-item class="text_center" index="8-2">评价列表</el-menu-item>
            </router-link>
            <router-link to="/FeedbackList" tag="li">
                  <el-menu-item class="text_center" index="8-3">反馈列表</el-menu-item>
            </router-link>
          </el-submenu>
          <el-submenu index="9">
            <template slot="title"><i class="valuation_rule"></i>计价规则</template>
            <router-link to="/CaculateRule" tag="li">
                  <el-menu-item class="text_center" index="9-1">计价规则</el-menu-item>
            </router-link>
          </el-submenu>
          <router-link to="/Authority" tag="li">
            <el-menu-item class="" index="10-1" ><i class="authority_manage"></i>权限管理</el-menu-item>
            <!-- <el-submenu index="10">
                <template slot="title"><i class="authority_manage"></i>权限管理</template>
            </el-submenu> -->
          </router-link>
        </el-menu>
      </el-aside>
      <!--侧边栏结束  -->
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
    <!--底部（侧边栏，主体部分）结束  -->
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      actived:'1-1',
      bread_box:[{name:'商家端管理'},{name:'商家端管理'}]
    }
  },
  mounted(){
    document.getElementById('container').style.height=window.screen.availHeight-70+'px';
  },
  methods:{
    sideBarClick(router){
      console.log(router);
      // this.$router.push({path:'/Login'})
    }
  },
  watch:{

  }
};
</script>

<style  scoped>
  .el-submenu .el-menu-item{
    padding-left: 88px!important;
    text-align: left;
  }
  .quit>img{
    width: 18px;
    height: 18px;
    vertical-align: middle;
    margin-bottom: 3px;
    margin-left: 10px;
  }
  .name,.quit{
    font-weight: bold;
  }
  .name{
    border-right: 1px solid #e5e5e5;
    padding-right: 15px;
    margin-right: 8px;
  }
  .breadcrumb span{
    line-height: 84px;
    font-size: 16px;
  }
  .opinion_feedback{
    background: url('../assets/img/10.png');
    width: 23px;
    height: 23px;
    background-size: 100%;
    display: inline-block;
    margin-left: 23px;
    margin-right: 21px;
  }
  .valuation_rule{
    background: url('../assets/img/11.png');
    width: 23px;
    height: 23px;
    background-size: 100%;
    display: inline-block;
    margin-left: 23px;
    margin-right: 21px;
  }
  .authority_manage{
    background: url('../assets/img/6.png');
    width: 23px;
    height: 23px;
    background-size: 100%;
    display: inline-block;
    margin-left: 23px;
    margin-right: 21px;
  }
  .service_manage{
    background: url('../assets/img/7.png');
    width: 23px;
    height: 23px;
    background-size: 100%;
    display: inline-block;
    margin-left: 23px;
    margin-right: 21px;
  }
  .content_manage{
    background: url('../assets/img/2.png');
    width: 23px;
    height: 23px;
    background-size: 100%;
    display: inline-block;
    margin-left: 23px;
    margin-right: 21px;
  }
  .withdraw_manage{
    background: url('../assets/img/9.png');
    width: 23px;
    height: 23px;
    background-size: 100%;
    display: inline-block;
    margin-left: 23px;
    margin-right: 21px;
  }
  .order_manage{
    background: url('../assets/img/8.png');
    width: 23px;
    height: 23px;
    background-size: 100%;
    display: inline-block;
    margin-left: 23px;
    margin-right: 21px;
  }
  .mechent_manage{
    background: url('../assets/img/4.png');
    width: 23px;
    height: 23px;
    background-size: 100%;
    display: inline-block;
    margin-left: 23px;
    margin-right: 21px;
  }
  .order_take_manage{
    background: url('../assets/img/5.png');
    width: 23px;
    height: 23px;
    background-size: 100%;
    display: inline-block;
    margin-left: 23px;
    margin-right: 21px;
  }
  .income_analysics{
    background: url('../assets/img/3.png');
    width: 23px;
    height: 23px;
    background-size: 100%;
    display: inline-block;
    margin-left: 23px;
    margin-right: 21px;
  }
  .income_analysics{
    background: url('../assets/img/3.png');
    width: 23px;
    height: 23px;
    background-size: 100%;
    display: inline-block;
    margin-left: 23px;
    margin-right: 21px;
  }
  .logo{
    width: 239px;
    background: #F8B802;
    height: 84px;
    margin-right: 20px;
    /* padding-top: 12px; */
  }
  .logo>img{
      width: 180px;
      height: 60px;
      object-fit: cover;
      vertical-align: middle;
      display: block;
      padding-top: 12px;
  }
  .el-header{
    padding-left: 0;
  }
  .el-header {
      background-color: #fff;
      color: #333;
      text-align: center;
      line-height: 84px;
      height: 84px;
  }

  .el-aside {
    background: #000;
    color: #999;
    /* text-align: center; */
    /* line-height: 200px; */
  }
  .el-menu{
    background-color: #000!important;
  }
  .el-main {
    background: #f5f5f5;
  }
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    /* line-height: 260px; */
  }

  .el-container:nth-child(7) .el-aside {
    /* line-height: 320px; */
  }
</style>
