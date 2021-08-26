<template>
  <div class="title_div">
    <van-row type="flex" justify="space-between">
      <van-col span="5">
        <img class="logo" src="../assets/logo-img.png" alt="logo" />
      </van-col>
      <van-col @click="searchPageFn" class="seach_div" span="14">
        <van-icon class="search_icon" name="search" size=".5rem" />
        <span>请搜索您想要的内容</span>
      </van-col>
      <van-col span="3">
        <van-button class="loginBtn" type="primary" size="mini"
          >登录</van-button
        >
      </van-col>
    </van-row>
    <van-tabs class="tabsClass" v-model="active" swipeable>
      <van-tab v-for="n in tabsData" :title="n">
        <!-- {{ n }} -->
      </van-tab>
    </van-tabs>
    <van-swipe class="my-swipe" :autoplay="2000" indicator-color="white">
      <van-swipe-item v-for="imgUrl in swipeImgData">
        <img style="width: 100%" :src="imgUrl" alt="swipe image" />
      </van-swipe-item>
    </van-swipe>
    <div class="indexServicePolicy">
      <ul>
        <li>
          <i
            style="
              background-image: url('https://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png');
            "
          ></i>
          网易自营品牌
        </li>
        <li>
          <i
            style="background-image: url('https://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png');height:'.32rem';width='.32rem';"
          ></i>
          30天无忧退货
        </li>
        <li>
          <i
            style="
              background-image: url('https://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png');
            "
          ></i>
          48小时快速退款
        </li>
      </ul>
    </div>
    <div class="goodsColumn_Wrap">
      <van-grid :column-num="5">
        <van-grid-item
          v-for="(n, inx) in goodsListData"
          :key="inx"
          :icon="n.img_url"
          :text="n.img_txt"
        />
      </van-grid>
    </div>
    <div class="CountDownWrap">
      <p>限时购</p>
      <van-count-down :time="time_val">
        <template #default="timeData">
          <span class="block">{{ timeData.hours }}</span>
          <span class="colon">:</span>
          <span class="block">{{ timeData.minutes }}</span>
          <span class="colon">:</span>
          <span class="block">{{ timeData.seconds }}</span>
        </template>
      </van-count-down>
      <a href="#" class="right">更多>></a>
    </div>
    <div class="goodsListWrap">
      <van-grid :column-num="3">
        <van-grid-item
          v-for="(n, inx) in goodsListData2"
          :key="inx"
          :icon="n.img_url"
          :text="n.img_txt"
        />
      </van-grid>
    </div>
    <!-- footer -->
    <footerBar></footerBar>
  </div>
</template>

<script>
import "../assets/resetVant.css";
import axios from "axios";
import footerBar from "../components/footerBar";

export default {
  name: "indexWrap",
  data() {
    return {
      msg: "this is home",
      active:0,
      tabsData: [],
      swipeImgData: [],
      goodsListData: [],
      goodsListData2: [
        {
          img_url:
            "https://yanxuan-item.nosdn.127.net/e78096b543cc65af16da3a93cacb4071.png?quality=75&type=webp&imageView&thumbnail=216x216",
          img_txt: "￥219",
        },
        {
          img_url:
            "https://yanxuan-item.nosdn.127.net/570e762763536175b9ec226c0d93a7cd.png?quality=75&type=webp&imageView&thumbnail=216x216",
          img_txt: "￥167",
        },
        {
          img_url:
            "https://yanxuan-item.nosdn.127.net/f3f18a4fe9e7905cd7c9ff28e42ff0c2.png?quality=75&type=webp&imageView&thumbnail=216x216",
          img_txt: "￥50.2",
        },
        {
          img_url:
            "https://yanxuan-item.nosdn.127.net/0b05c22b99e8fc2cf3015e4bbb8d7c3f.png?quality=75&type=webp&imageView&thumbnail=216x216",
          img_txt: "￥139",
        },
        {
          img_url:
            "https://yanxuan-item.nosdn.127.net/ec55e5314bfd670320c3c15ce5e0b095.png?quality=75&type=webp&imageView&thumbnail=216x216",
          img_txt: "￥42.8",
        },
        {
          img_url:
            "https://yanxuan-item.nosdn.127.net/f815bf4d31ece0500089d69475c2014c.png?quality=75&type=webp&imageView&thumbnail=216x216",
          img_txt: "￥249",
        },
      ],
      time_val: 5 * 60 * 60 * 1000,
    };
  },
  components: { footerBar },
  methods: {
    searchPageFn() {
      this.$router.push("/searchPage");
    },
  },
  created() {
    // 导航栏
    axios.get("http://localhost:4567/get_Tabs").then((result) => {
      this.tabsData = result.data;
    });
    // 轮播图
    axios.get("http://localhost:4567/get_SwipeImg").then((result) => {
      this.swipeImgData = result.data;
    });
    // 轮播图
    axios.get("http://localhost:4567/get_GoodsList").then((result) => {
      this.goodsListData = result.data;
    });
  },
};
</script>
<style scoped>
.title_wrap {
  padding: 0.23rem 0.2rem 0.23rem 0.4rem;
}
.logo {
  vertical-align: middle;
  width: 1.84rem;
  height: 0.53rem;
  margin-top: 0.2rem;
  margin-left: 0.3rem;
  padding-top: 0.1rem;
}
.loginBtn {
  width: 0.98667rem;
  height: 0.53333rem;
  font-size: 0.32rem;
  line-height: 0.53333rem;
  text-align: center;
  color: #dd1a21;
  border: 1px solid #dd1a21;
  border-radius: 0.10667rem;
  background: #fff;
  margin: 0.3rem 0.5rem 0 0;
}
.seach_div {
  font-size: 0.4rem;
  height: 0.75rem;
  background-color: #ededed;
  color: #666;
  border-radius: 0.11rem;
  margin-top: 0.18rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.seach_icon {
  width: 0.28rem;
  height: 0.28rem;
  margin-right: 0.1rem;
}
.tabsClass {
  font-size: 0.35rem;
  padding: 0 0.2rem;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
  height: 4rem;
}
.indexServicePolicy {
  background: #fff;
}
.indexServicePolicy ul {
  width: 100%;
  height: 0.72rem;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  zoom: 1;
}
.indexServicePolicy ul li {
  flex: 1;
  float: left;
  font-size: 0.34rem;
  color: #333;
  margin-left: 0.08rem;
  line-height: 0.32rem;
}
.indexServicePolicy ul li i {
  width: 0.42667rem;
  height: 0.42667rem;
  display: inline-block;
  vertical-align: middle;
  font-size: 0.32rem;
  color: #333;
  margin-left: 0.10667rem;
  line-height: 0.42667rem;
  background-size: 100% 100%;
}
/* 倒计时 */
.CountDownWrap {
  height: 1rem;
  overflow: hidden;
}
.CountDownWrap p {
  margin: 0.2rem 0 0 0;
  float: left;
  font-size: 0.42667rem;
}
.CountDownWrap a.right {
  display: block;
  font-size: 0.37333rem;
  float: right;
  color: #333;
  margin: 0.2rem 0.4rem 0 0;
}
.colon {
  display: inline-block;
  margin: 0 4px;
  color: #333;
  font-size: 0.32rem;
}
.block {
  display: inline-block;
  width: 22px;
  color: #fff;
  font-size: 0.32rem;
  line-height: 0.48rem;
  width: 0.48rem;
  height: 0.48rem;
  text-align: center;
  background-color: #333;
}
</style>
