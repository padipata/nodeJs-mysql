<template lang="html">
  <div class="">
    <div class="top">
      <el-row >
        <el-col  :span="4" :offset="6">
            <img src="../../assets/img/logo_login.png" alt="">
        </el-col>
        <el-col :span='6'>
          <div class="logo_name">管理平台</div>
        </el-col>
      </el-row>
    </div>
    <el-row class="middle">
      <!-- <img src="../../assets/img/pic_login.png" alt=""> -->
      <el-col :span='13'>&nbsp;</el-col>
      <el-col :span='8' class="position_relative" >
        <div class="cover">
          <div class="title">
              <span>管理员登录</span>
          </div>
          <div class="inputs">
            <span class="left"><img src="../../assets/img/ic_login_user.png" alt=""> </span>
            <span class="right"><img src="../../assets/img/ic_del.png" alt=""> </span>
            <input type="text" name="" value="">
          </div>
          <div class="inputs">
            <span class="left"><img src="../../assets/img/ic_login_password.png" alt=""> </span>
            <!-- <span class="right"><img src="../../assets/img/ic_del.png" alt=""> </span> -->
            <input type="text" name="" value="">
          </div>
          <div class="inputs short_inputs clear">
            <div class="fl">
              <span class="left"><img src="../../assets/img/ic_login_verification.png" alt=""> </span>
              <input type="text" name="" value="">
            </div>
            <div class="varify fl">

            </div>
          </div>
          <div class="warning  box_center">
            <img src="../../assets/img/ic_mistake.png" alt="">
            <span>您输入的密码和账户名不匹配，请重新输入</span>
          </div>
          <div class="login box_center text_center">
            登陆
          </div>
          <div class="remenber">
            <img src="../../assets/img/ic_remember.png" alt="">
            <!-- <img src="../../assets/img/ic_remember_normal.png" alt=""> -->
            <span>记住密码</span>
          </div>
        </div>
      </el-col>

    </el-row>
    <div class="bottom text_center">
      <div class="one">
        © 2013 - 2016 www.lb-dj.com 萨科（深圳）科技有限公司版权所有 粤ICP备16071335号-
      </div>
      <div class="two">
        服务电话：400-888-888
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
  .position_relative{
    position: relative;
  }
  .middle{
    background: url('../../assets/img/pic_login.png');
    background-repeat: no-repeat;
    height: 540px;
    width: 100%;
    background-size: 100% 100%;
  }
  .remenber span{
    font-size: 14px;
    color: #333;
  }
  .remenber{
    margin-left: 20px;
    margin-top: 10px;
  }
  .remenber img{
    width: 20px;
    height: 20px;
    vertical-align: middle;
  }
  .login{
    width:380px;
    height:40px;
    line-height: 40px;
    font-size: 20px;
    color: #fff;
    background:linear-gradient(rgba(251,222,96,1),rgba(249,191,58,1));
    border-radius: 4px ;
  }
  .warning{
    width: 380px;
    height: 25px;
    border: 1px solid #FF8A7A;
    background: #FFCEC2;
    margin-top: 13px;
    margin-bottom: 11px;
    border-radius: 2px;
  }

  .warning img{
    width: 16px;
    height: 16px;
    vertical-align: middle;
    margin-left: 16px;
    margin-right: 10px;
  }
  .warning span{
    color: #EB7464;
    font-size: 14px;
  }
  .varify{
    height: 40px;
    border: 1px solid #eee;
    width: 90px;
    margin-left: 20px;
  }
  .short_inputs{
    text-align: left!important;
  }
  .short_inputs input{
    width: 210px!important;
  }
  .inputs {
    position: relative;
    text-align: center;
    margin-top: 10px;
  }
  .inputs input{
    margin-left: 18px;
    /* margin-right: auto; */
    width: 320px;
    height: 40px;
    display: block;
    border: 2px solid #DCE0EB;
    background: #FCFDFD;
    border-radius: 4px;
    padding-left: 60px;
  }
  .inputs .left {
    border-right: 2px solid #F3F5F8;
    padding-right: 15px;
    width: 20px;
    height: 20px;
    position: absolute;
    left: 30px;
    top: 13px;
  }
  .inputs .left img{

  }
  .inputs .right img{
    width: 16px;
    position: absolute;
    height: 16px;
    right: 30px;
    top: 15px;
  }
  .cover .title span{
    margin-left: 21px;
    font-size: 20px;
    color: #333;
    font-weight: bold;
  }
  .cover .title{
    background: url('../../assets/img/pic_cpm_bg.png');
    height:80px;
    line-height: 80px;
    width: 100%;
    background-size: 100%;
  }
  .middle .cover{
    padding-bottom: 40px;
    width: 420px;
    background: #fff;
    margin-top:8%;
    /* position: absolute; */
    /* float: right; */
    /* top: 13%;
    right: 13%; */
    box-shadow: 0 2px 20px 0 rgba(0, 0, 0, .09);
  }
  .middle{
    /* position:relative;
    width: 100%; */
  }
  .bottom>.one{
    margin-top: 58px;
    margin-bottom: 8px;
  }
  .bottom{
    font-size: 14px;
    color: #333;
    margin-bottom: 97px;
  }
  .logo_name{
    font-size: 26px;
    color: #FEB12B;
    border-left: 1px solid #E5E5E5;
    padding-left: 26px;
    height: 37px;
    line-height: 37px;
    margin-top: 40px;
  }
  .top{
    height: 116px;
    line-height: 116px;
  }
  .top img{
    width: 198px;
    height: 68px;
    vertical-align: middle;
  }
  .top{
    height: 116px;
  }
</style>
