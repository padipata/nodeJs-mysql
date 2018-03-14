<template lang="html">
  <div class="check_detail box_radius">
    <el-row >
      <el-col :span='12'>
         <span class="title_name">公司名称</span>
         <input v-bind:class="{can_border:if_cancel==true}" :disabled='if_disabled' type="text" name="" value="">
      </el-col>
      <el-col :span="12" class="text_right" >
        <el-button @click='edit' size='medium' type="primary">编辑</el-button>
      </el-col>
    </el-row>
    <el-row >
      <el-col :span='8'>
         <span class="title_name">公司法人</span>
         <input type="text" name="" value="">
      </el-col>
      <el-col :span='8'>
         <span class="title_name">法人电话</span>
         <input type="text" name="" value="">
      </el-col>
      <el-col :span='8'>
         <span class="title_name short_span">联系人</span>
         <input class="short_input" type="text" name="" value="">
      </el-col>
    </el-row>
    <el-row >
      <el-col :span='8'>
         <span class="title_name">联系电话</span>
         <input type="text" name="" value="">
      </el-col>
      <el-col :span='8'>
         <span class="title_name">公司电话</span>
         <input type="text" name="" value="">
      </el-col>
      <el-col :span='8'>
         <span class="title_name short_span">地区</span>
         <input class="short_input" type="text" name="" value="">
      </el-col>
    </el-row>
    <el-row >
      <el-col :span='8'>
         <span class="title_name">公司网址</span>
         <input type="text" name="" value="">
      </el-col>
      <el-col :span='8'>
         <span class="title_name">公司邮箱</span>
         <input type="text" name="" value="">
      </el-col>
    </el-row>
    <el-row >
      <el-col :span='8'>
         <span class="title_name">账户类型</span>
         <input type="text" name="" value="">
      </el-col>
      <el-col :span='8'>
         <span class="title_name">账户账号</span>
         <input type="text" name="" value="">
      </el-col>
    </el-row>
    <el-row >
      <el-col :span='8'>
         <span class="title_name">营业执照</span>
      </el-col>
    </el-row>
    <el-row  class="imgs" style="display:none;">
      <el-col :span='8'>
         <img src="../../assets/img/1.png" alt="">
      </el-col>
    </el-row>
    <el-row style="margin-top:10px;">
      <el-upload
        class="upload-demo"
        drag
        action="https://jsonplaceholder.typicode.com/posts/"
        multiple>
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" style="width:360px;text-align:center;" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
    </el-row>
  </div>
</template>

<script>
export default {
  data(){
    return{
      if_cancel:false,
      if_disabled:false
    }
  },
  methods:{
    edit(){
      this.if_disabled=true;
      this.if_cancel=true;
    }
  }
}
</script>

<style lang="css" scoped>
  .imgs img{
    width: 360px;
    height: 178px;
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
