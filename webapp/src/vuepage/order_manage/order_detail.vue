<template lang="html">
  <div class="detail box_radius">
    <el-row>
      <el-col :span='12' class="text_left">
        <span class="title box_title">订单详情</span>
      </el-col>
      <el-col :span='12' class="text_right">
        <el-button type="primary">保存</el-button>
      </el-col>
    </el-row>
    <div class="line">

    </div>
    <el-row class="common_bottom">
      <el-col :span='6'>
        <span class="box_title dark_color">订单号：a123456789</span>
      </el-col>
      <el-col :span='6' class="common_line">
        <span class="box_title dark_color">订单状态：</span>
        <el-dropdown>
          <el-button type="primary" plain size='medium'>
            更多菜单<i class="el-icon-arrow-down el-icon--right"></i>
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
      <el-col :span='6'>
        <span class="box_title dark_color">下单时间：2017-07-08 14:22:33</span>
      </el-col>
    </el-row>
    <el-row class="common_bottom">
      <el-col :span='6'>
        <span class="dark_color">基本信息</span>
      </el-col>
    </el-row>
    <el-row class="common_bottom">
      <el-col :span='6'>
        <span class='gray_color'>客户姓名</span>
        <span class="dark_color">张小妞</span>
      </el-col>
      <el-col :span='6'>
        <span class='gray_color'>客户手机</span>
        <span class='dark_color'>张小妞</span>
      </el-col>
      <el-col :span='12'>
        <span class='gray_color'>客户详细地址</span>
        <span class="dark_color">广东省深圳市龙岗区龙城广场龙年广场a栋1003</span>
      </el-col>
    </el-row>
    <el-row class="common_bottom">
      <el-col :span='6'>
        <span class='gray_color'>小哥名字</span>
        <span class="dark_color">张小妞</span>
      </el-col>
      <el-col :span='6'>
        <span class="gray_color">小哥手机</span>
        <span class="dark_color">张小妞</span>
      </el-col>
    </el-row>
    <div class="line">

    </div>
    <el-row class="common_bottom">
      <el-col :span='6'>
        <span class="dark_color">商品基本信息</span>
      </el-col>
    </el-row>
    <el-row class="common_bottom">
      <el-col :span='6'>
        <span class='gray_color fl'>商品图片</span>
        <div class="imgs " >
          <img src="../../assets/img/1.png" alt="">
          <img src="../../assets/img/1.png" alt="">
          <img src="../../assets/img/1.png" alt="">
        </div>
        <!-- <span class="dark_color">张小妞</span> -->
      </el-col>
      <el-col :span='12'>
        <span class='gray_color'>商品名字</span>
        <span class='dark_color'>张小妞</span>
      </el-col>
    </el-row>
    <el-row class="common_bottom">
      <el-col :span='6'>
        <span class='gray_color'>商品数量</span>
        <span class="dark_color">50 </span>
      </el-col>
      <el-col :span='6'>
        <span class="gray_color">商品型号</span>
        <span class="dark_color">张小妞</span>
      </el-col>
      <el-col :span='6'>
        <span class="gray_color">拆旧费(元)</span>
        <span class="dark_color">张小妞</span>
      </el-col>
    </el-row>
    <el-row class="common_bottom">
      <el-col :span='6'>
        <span class='gray_color'>商品备注</span>
        <span class="dark_color">50 </span>
      </el-col>
    </el-row>
    <div class="line">

    </div>

    <el-row class="common_bottom">
      <el-col :span='6'>
        <span class="dark_color">提货信息</span>
      </el-col>
    </el-row>
    <el-row class="common_bottom">
      <el-col :span='6'>
        <span class='gray_color'>所需车型</span>
        <span class="dark_color">面包车</span>
      </el-col>
      <el-col :span='6'>
        <span class='gray_color'>提货联系人</span>
        <span class='dark_color'>张小妞</span>
      </el-col>
      <el-col :span='12'>
        <span class='gray_color'>联系电话</span>
        <span class="dark_color">15211212121</span>
      </el-col>
    </el-row>
    <el-row class="common_bottom">
      <el-col :span='9'>
        <span class='gray_color'>提货地址</span>
        <span class="dark_color">广东省深圳市罗湖区翠竹小区a288号</span>
      </el-col>
    </el-row>
    <div class="line">

    </div>
    <el-row class="common_bottom">
      <el-col :span='6'>
        <span class="dark_color">费用信息</span>
      </el-col>
    </el-row>
    <el-row class="common_bottom">
      <el-col :span='6'>
        <span class='gray_color'>维修费(元)</span>
        <input type="text" name="" value="">
      </el-col>
      <el-col :span='6'>
        <span class='gray_color'>安装费(元)</span>
        <input type="text" name="" value="">
      </el-col>
      <el-col :span='6'>
        <span class='gray_color'>拆旧费(元)</span>
        <input type="text" name="" value="">
      </el-col>
      <el-col :span='6'>
        <span class='gray_color'>路程费(元)</span>
        <input type="text" name="" value="">
      </el-col>
    </el-row>
    <el-row class="common_bottom">
      <el-col :span='8'>
        <span class='gray_color'>总费用(元)</span>
        <input type="text" name="" value="">
      </el-col>
    </el-row>

  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
  input{
    width: 126px;
    height: 36px;
    border: 1px solid #C0CCDA;
    border-radius: 4px;
    color: #000;
  }
  .imgs img{
    width:40px;
    height: 40px;
    margin-right: 10px;
  }
  .common_bottom{
    margin-bottom: 26px;
  }
  .gray_color{
    color: #9B9B9B;
    margin-right: 20px;
  }
  .dark_color{
    font-size: 16px;
    color: #000;
  }
  .common_line,.box_title{
    line-height: 40px;
  }
  .line{
    border-bottom: 1px solid #E5E5E5;
    margin-bottom: 17px;
  }
  .title{
    font-size: 17px;
    color: #1F2D3D;
  }
  .detail{
    background: #fff;
    padding: 2% 2.5% 3% 2.5%;
    width: 95%;
  }
</style>
