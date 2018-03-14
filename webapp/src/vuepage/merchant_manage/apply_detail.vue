<template lang="html">
  <div class="check_detail box_radius">
    <el-row >
      <el-col :span='12'>
         <span class="title_name brother">小哥资料</span>
      </el-col>
      <el-col :span="12" class="text_right" >
        <el-button @click='edit' size='medium' type="primary">审核</el-button>
      </el-col>
    </el-row>
    <el-row class="com_border">
      <el-col :span='24'>
         <span class="title_name">公司名称</span>
         <span class="box_content">深圳市蛋壳创意科技有限公司</span>
      </el-col>
    </el-row>
    <el-row class="com_border">
      <el-col :span='6'>
         <span class="title_name">公司法人</span>
         <span class="box_content">15219999219</span>
      </el-col>
      <el-col :span='6'>
         <span class="title_name">法人电话</span>
         <span class="box_content">15219999219</span>
      </el-col>
      <el-col :span='6'>
         <span class="title_name short_span">联系人</span>
         <span class="box_content">15219999219</span>
      </el-col>
    </el-row>
    <el-row class="com_border">
      <el-col :span='6'>
         <span class="title_name">联系电话</span>
         <span class="box_content">15219999219</span>
      </el-col>
      <el-col :span='6'>
         <span class="title_name">公司电话</span>
         <span class="box_content">15219999219</span>
      </el-col>
      <el-col :span='6'>
         <span class="title_name short_span">地区</span>
         <span class="box_content">15219999219</span>
      </el-col>
      <el-col :span='6'>
         <span class="title_name short_span">商家品类</span>
         <span class="box_content">15219999219</span>
      </el-col>
    </el-row>
    <el-row >
      <el-col :span='6'>
         <span class="title_name">公司网址</span>
         <span class="box_content">15219999219</span>
      </el-col>
      <el-col :span='6'>
         <span class="title_name">公司邮箱</span>
         <span class="box_content">15219999219</span>
      </el-col>
      <el-col :span='6'>
         <span class="title_name">详细地址</span>
         <span class="box_content">15219999219</span>
      </el-col>
    </el-row>
    <div class="line">

    </div>
    <el-row>
      <el-col :span='8'>
         <span class=" brother">账户信息</span>
      </el-col>
    </el-row>
    <el-row style="margin-top:17px;">
      <el-col :span='6'>
        <span class="title_name">账户类型</span>
        <span class="box_content">15219999219</span>
      </el-col>
      <el-col :span='6'>
        <span class="title_name">账户账号</span>
        <span class="box_content">15219999219</span>
      </el-col>
    </el-row>
    <div class="line">

    </div>
    <el-row >
      <el-col :span='8'>
         <span class="title_name brother">营业执照</span>
      </el-col>
    </el-row>
    <el-row  class="imgs" >
      <el-col :span='8'>
         <img src="../../assets/img/1.png" alt="">
      </el-col>
    </el-row>
    <el-dialog
      title="提示"
      :visible.sync="centerDialogVisible"
      width="30%"
      center>
      <span >该商家审核是否通过</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data(){
    return{
      centerDialogVisible:false
    }
  },
  methods:{
    edit(){
      this.if_disabled=true;
      this.if_cancel=true;
      if(this.centerDialogVisible){
        this.centerDialogVisible=false;
      }else{
        this.centerDialogVisible=true;
      }
    }
  }
}
</script>

<style lang="css" scoped>

  .com_border{
    margin-bottom: 20px;
  }
  .brother{
    font-weight: bold!important;
    color: #333!important;

  }
  .imgs img{
    width: 360px;
    height: 178px;
    margin-top: 17px;
  }
  .short_span{
    width: 48px;
    display: inline-block;
  }
  .can_border{
    border: 1px solid transparent!important;
    background: transparent;

  }
  .short_input{
    width: 123px;

  }
  .title_name{
    font-size: 16px;
    color:#9B9B9B;
    width: 64px;
    margin-right: 20px;
    /* font-weight: 200; */
  }
  input{
    width: 196px;
    height: 36px;
    line-height: 36px;
    border: 1px solid #C0CCDA;
    border-radius: 4px;
    margin-left: 20px;
    margin-bottom: 14px;
  }
  .check_detail{
    background: #fff;
    padding: 2% 3% 10% 3%;
    width: 94%;
  }
</style>
