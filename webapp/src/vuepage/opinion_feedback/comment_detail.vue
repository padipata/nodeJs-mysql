<template lang="html">
  <div class="comment_detail box_radius">
    <el-row :gutter="20">
      <el-col :span="6" class="text_left box_content"><span>评价详情</span></el-col>
    </el-row>
    <el-row :gutter="20" style="margin-top:27px;margin-bottom:27px;">
      <el-col :span="2" class=" box_title">
        <span class="common_width ">商品信息</span>
        <!-- <img class="detail_img" src="../../assets/img/1.png" alt=""> -->
        <!-- <span class="info_block">《浴室卫生间置物架 吸盘毛巾架浴巾架 挂钩粘钩 洗手间毛》</span> -->
      </el-col>
      <el-col :span="2" class=" box_title">
        <!-- <span class="common_width ">商品信息</span> -->
        <img class="detail_img" src="../../assets/img/1.png" alt="">
        <!-- <span class="info_block">《浴室卫生间置物架 吸盘毛巾架浴巾架 挂钩粘钩 洗手间毛》</span> -->
      </el-col>
      <el-col :span="5" class=" box_title">
        <!-- <span class="common_width ">商品信息</span> -->
        <!-- <img class="detail_img" src="../../assets/img/1.png" alt=""> -->
        <span style="color:#223040;">《浴室卫生间置物架 吸盘毛巾架浴巾架 挂钩粘钩 洗手间毛》</span>
      </el-col>
    </el-row>
    <el-row style="margin-bottom:27px;">
      <el-col :span="6" class=" box_title">
        <span class="common_width box_title">订单编号</span>
        <span class="box_content">1232131231</span>
      </el-col>
      <el-col :span="6" class=" box_title">
        <span class="common_width box_title">金额（元）</span>
        <span class="box_content">234234.23</span>
      </el-col>
      <el-col :span="6" class=" box_title">
        <span class="common_width box_title">服务类型</span>
        <span class="box_content">安装</span>
      </el-col>
    </el-row>
    <el-row style="margin-bottom:55px;">
      <el-col :span="6" class=" box_title">
        <span class="common_width box_title">配送员</span>
        <span class="box_content">阿斯蒂芬</span>
      </el-col>
      <el-col :span="6" class=" box_title">
        <span class="common_width box_title">标签</span>
        <el-tag size='mini'>标签一</el-tag>
      </el-col>
      <el-col :span="6" class=" box_title">
        <span class="common_width box_title fl">评价</span>
        <el-rate></el-rate>
      </el-col>
    </el-row>
    <el-row style="margin-bottom:27px;">
      <el-col :span='18'>
        <span class="box_title common_width">评价内容</span>
        <span>这款沙发用了一个多月了，总体来说还是一帮毕竟价格便宜，垫子薄一点做工粗糙点，外观好看，再用一段时间看看吧！</span>
      </el-col>
    </el-row>
    <el-row>
      <div class="imgs">
        <img src="../../assets/img/1.png" alt="">
      </div>
    </el-row>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
  .imgs img{
    width: 200px;
    height: 100px;
  }
  .info_block{
    height: 74px;
    display: inline-block;
  }
  .detail_img{
    width: 74px;
    height: 74px;
    vertical-align: middle;
  }
  .common_width{
    width: 84px;
    display: inline-block;
  }
  .comment_detail{
    padding: 2% 2.5% 10% 2.5%;
    background: #fff;
  }
  .text_left{
    font-weight:bold;
    font-size: 18px;
  }
</style>
