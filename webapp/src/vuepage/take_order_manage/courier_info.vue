<template lang="html">
  <div class="info box_radius">
    <el-row class="title_head">
      <el-col :span='12' class="text_left">
        <div class="head">
          小哥资料
        </div>
      </el-col>
      <el-col :span='12' size='medium' class="text_right">
        <!-- <el-button type="danger">封号处理</el-button> -->
        <el-button type="primary">保存</el-button>
      </el-col>
    </el-row>
    <el-row class="top">
      <el-col :span='6'>
        <span class="box_title">小哥姓名</span>
        <input class='box_content' type="text" name="" value="">
      </el-col>
      <el-col :span='6'>
        <span class="box_title">姓名</span>
        <input class='box_content' type="text" name="" value="">
      </el-col>
      <el-col :span='6'>
        <span class="box_title">手机号码</span>
        <input class='box_content' type="text" name="" value="">
      </el-col>
      <el-col :span='6'>
        <span class="box_title">入驻日期</span>
        <input class='box_content' type="text" name="" value="">
      </el-col>
    </el-row>
    <el-row class="top">
      <el-col :span='6'>
        <span class="box_title">服务类型</span>
        <input class='box_content' type="text" name="" value="">
      </el-col>
      <el-col :span='6'>
        <span class="box_title">服务品类</span>
        <input class='box_content' type="text" name="" value="">
      </el-col>
      <el-col :span='6'>
        <span class="box_title">服务区域</span>
        <input class='box_content' type="text" name="" value="">
      </el-col>
    </el-row>
    <el-row class="top">
      <el-col :span='6'>
        <span class="box_title">车型</span>
        <input class='box_content' type="text" name="" value="">
      </el-col>
    </el-row>
    <el-row>
      <div class="line">

      </div>
    </el-row>
    <el-row class="title_head">
      <el-col :span='12' class="text_left">
        <div class="head">
          身份信息
        </div>
      </el-col>
    </el-row>
    <el-row class="title_head top" >
      <el-col :span='6' class="text_left">
        <span class="box_title">身份证号</span>
        <input class='box_content' type="text" name="" value="">
      </el-col>
    </el-row>
    <el-row class="title_head top">
      <el-col :span='14' class="text_left">
        <span class="box_title">身份证照</span>
        <img class='id_card' src="../../assets/img/1.png" alt="">
        <img class='id_card' src="../../assets/img/1.png" alt="">
      </el-col>
    </el-row>
    <el-row>
      <div class="line">

      </div>
    </el-row>
    <el-row class="title_head">
      <el-col :span='12' class="text_left">
        <div class="head">
          账户信息
        </div>
      </el-col>
    </el-row>
    <el-row class="top">
      <el-col :span='6'>
        <span class="box_title">开户银行</span>
        <input class='box_content' type="text" name="" value="">
      </el-col>
      <el-col :span='6'>
        <span class="box_title">账户账号</span>
        <input class='box_content' type="text" name="" value="">
      </el-col>
      <el-col :span='6'>
        <span class="box_title">持卡人</span>
        <input class='box_content' type="text" name="" value="">
      </el-col>
    </el-row>
    <el-row>
      <div class="line">

      </div>
    </el-row>
    <el-row class="title_head">
      <el-col :span='12' class="text_left">
        <div class="head">
          钱包信息
        </div>
      </el-col>
    </el-row>
    <el-row class="top">
      <el-col :span='6'>
        <span class="box_title new_title">钱包余额</span>
        <span class="all">8890</span>
      </el-col>
    </el-row>
    <el-row class="top">
      <el-col :span='6'>
        <span class="box_title new_title">总收入(元)</span>
        <span>8890</span>
      </el-col>
    </el-row>
    <el-row class="top">
      <el-col :span='6'>
        <span class="box_title new_title">已提现金额(元)</span>
        <span>8890</span>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
  .new_title{
    width: 110px!important;
  }
  .all{
    color: #F7BA2A;
    font-size:  30px;
    font-weight: bold;
  }
  .id_card{
    /*display: inline-block;*/
    vertical-align: text-top;
  }
  .id_card{
    width: 200px;
    height: 130px;
    margin-right: 20px;
  }
  .line{
    border-bottom: 1px solid #E5E5E5;
    margin-bottom: 20px;
    margin-top:30px;
  }
  .top{
    margin-top: 25px;
    /*margin-bottom: 25px;*/
  }
  .box_title{
    margin-right: 10px;
    width: 64px;
    display: inline-block;
  }
  input{
    width: 157px;
    height: 36px;
    border: 1px solid #C0CCDA;
    border-radius: 4px;
  }
  .head{
    color: #141414;
    font-weight: bold;
    font-size: 18px;
  }
  .title_head{
    line-height: 40px;
  }
  .info{
    background: #fff;
    padding: 2% 2.5% 3% 2.5%;
    width: 95%;
  }
</style>
