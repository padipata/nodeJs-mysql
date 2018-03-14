<template lang="html">
  <div class="about_us box_radius  ">
    <el-row style="line-height:40px; display:none;">
      <el-col :span="12" class="text_left head_left_title" >
        <span class="about_title">关于我们管理</span>
      </el-col>
    </el-row>
    <el-row style="line-height:40px;">
      <el-col :span="12" class="text_left head_left_title" >
        <span class="about_title">发布规则</span>
      </el-col>
      <el-col :span="12" class="text_left head_left_title" >
        <span class="about_title">送货规则</span>
      </el-col>
    </el-row>
    <el-row style="margin-top:80px;">
      <el-col :span='10' class="" :offset='2'>
        <div class="title ">
          上传安卓端图文详情
        </div>
        <el-upload
          class="upload-demo"
          drag
          action="https://jsonplaceholder.typicode.com/posts/"
          multiple>
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          <div class="el-upload__tip text_center" slot="tip">只能上传jpg/png文件，且不超过500kb<span style="display:none;">最佳尺寸：1000（宽）x 根据内容长度（高）</span></div>
        </el-upload>
      </el-col>
      <el-col :span='10' class="" :offset='2'>
        <div class="title ">
          上传商家端图文详情
        </div>
        <el-upload
          class="upload-demo"
          drag
          action="https://jsonplaceholder.typicode.com/posts/"
          multiple>
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          <div class="el-upload__tip text_center" slot="tip">只能上传jpg/png文件，且不超过500kb<span style="display:none;">最佳尺寸：750（宽）x 根据内容长度（高）</span></div>
        </el-upload>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
  .title{
    color: #8492A6;
    font-size: 14px;
    margin-bottom: 10px;
  }
  .about_title{
    font-weight: bold;
  }
  .about_us{
    background: #fff;
    padding: 2% 2.5% 3% 2.5%;
    width: 95%;
  }
</style>
