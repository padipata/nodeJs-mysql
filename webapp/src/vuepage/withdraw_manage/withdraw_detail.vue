<template lang="html">
  <div class="detail box_radius">
    <el-row class="margin_bottom">
      <div class="title">
        基本信息
      </div>
    </el-row>
    <el-row>
      <el-col :span='6'>
        <span class="box_title">小哥姓名</span>
        <span class="box_content">金阳</span>
      </el-col>
      <el-col :span='6'>
        <span class="box_title">性别</span>
        <span class="box_content">金阳</span>
      </el-col>
      <el-col :span='6'>
        <span class="box_title">联系电话</span>
        <span class="box_content">金阳</span>
      </el-col>
    </el-row>
    <div class="line">

    </div>
    <el-row class="margin_bottom">
      <div class="title">
        账户信息
      </div>
    </el-row>
    <el-row class="margin_bottom">
      <el-col :span='6'>
        <span class="box_title">提现金额</span>
        <span class="box_content money">金阳</span>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span='6'>
        <span class="box_title">开户行</span>
        <span class="box_content ">金阳</span>
      </el-col>
      <el-col :span='6'>
        <span class="box_title">银行账号</span>
        <span class="box_content">金阳</span>
      </el-col>
      <el-col :span='6'>
        <span class="box_title">开户人姓名</span>
        <span class="box_content">金阳</span>
      </el-col>
    </el-row>
    <div class="line">

    </div>
    <el-row class="margin_bottom">
      <div class="title">
        是否允许小哥提现申请？
      </div>
    </el-row>
    <el-row class="margin_bottom">
      <el-col :span='2'>
        <el-button type="primary">是</el-button>
      </el-col>
      <el-col :span='2'>
        <el-button type="primary" plain>否</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
  .money{
    color: #F7BA2A;
    font-size: 30px;
    /* font-weight: bold; */
  }
  .box_title{
    width: 84px;
    margin-right: 28px;
    display: inline-block;
  }
  .line{
    border-bottom: 1px solid #E5E5E5;
    margin-bottom: 20px;
    margin-top: 30px;
  }
  .margin_bottom{
    margin-bottom: 23px;
  }
  .detail{
    width: 95%;
    padding: 2% 2.5% 3% 2.5%;
    background: #fff;
  }
  .title{
    color: #141414;
    font-size: 20px;
    font-weight: bold;
  }
</style>
