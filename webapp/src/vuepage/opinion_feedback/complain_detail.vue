<template lang="html">
  <div class="detail box_radius">
    <el-row :gutter="20" class="margin_bottom">
      <el-col :span="6" >
        <span class="box_title">投诉人</span>
        <span class="box_content">周杰伦</span>
      </el-col>
      <el-col :span="6" >
        <span class="box_title">投诉对象</span>
        <span class="box_content">周杰伦</span>
      </el-col>
      <el-col :span="6" >
        <span class="box_title">投诉类别</span>
        <span class="box_content">周杰伦</span>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="margin_bottom">
      <el-col :span="6" >
        <span class="box_title">订单号</span>
        <span class="box_content">周杰伦</span>
      </el-col>
      <el-col :span="6" >
        <span class="box_title">地区</span>
        <span class="box_content">周杰伦</span>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="6" >
        <span class="box_title">投诉内容</span>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="6" >
        <span class="box_content">投诉内容</span>
        <div class="imgs">
          <img src="../../assets/img/1.png" alt="">
        </div>
      </el-col>
    </el-row>
    <div class="line"></div>
    <el-row :gutter="20">
      <el-col :span="6" >
        <span class="box_title">处理说明</span>
      </el-col>
    </el-row>
    <el-row :gutter="20" style="margin-top:20px;">
      <el-col :span="16" >
        <textarea
        v-bind:class="{cancel_border:if_cancel}"
          class="textarea"
          type="textarea"
          :disabled='if_cancel'
          placeholder="请输入处理说明">
        </textarea>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="6" >
        <span class="box_title" style="margin-top:30px;margin-bottom:20px;">处理结果</span>
      </el-col>
    </el-row>
    <el-row :gutter="20" v-show='show_btn'>
      <el-col :span="2" >
        <el-button type="primary" size='medium'>成立</el-button>
      </el-col>
      <el-col :span="2" >
        <el-button type="primary" plain size='medium' @click='btn'>不成立</el-button>
      </el-col>
    </el-row>
    <el-row :gutter="20" v-show='!show_btn'>
      <el-col :span="2" style="color:#FF4949;">
        不成立
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data(){
    return{
      show_btn:true,
      if_cancel:false
    }
  },
  methods:{
    btn(){
      this.show_btn=false;
      this.if_cancel=true;
    }
  }
}
</script>

<style lang="css" scoped>
  .textarea{
    color:#1F2D3D;
    font-size:16px;
    font-weight:bold;
    background:#fff;
    width:845px;
    height:113px;
    border:1px solid #DADADA;
    border-radius:6px;
    resize:none;
  }
  .cancel_border{
    border: 1px solid transparent!important;
  }
  .line{
    border-bottom: 1px solid #E5E5E5;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .imgs{
    margin-top: 24px;
  }
  .imgs>img{
    width: 200px;
    height: 100px;
  }
  .margin_bottom{
    margin-bottom: 30px;
  }
  .box_title{
    margin-right: 40px;
    width: 64px;
    display: inline-block;
  }
  .box_content{
    font-weight: bold;
  }
  .detail{
    background: #fff;
    padding: 2% 2% 8% 2%;
    width: 96%;

  }
</style>
