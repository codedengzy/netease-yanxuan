<template>
  <div class="sidebarClass">
    <!-- 侧边栏 -->
    <van-sidebar v-model="sidebarActiveKey" @change="changeGoodsList">
      <van-sidebar-item
        v-for="(n, inx) in sidebar_arr"
        :key="inx"
        :title="n.txt"
      />
    </van-sidebar>
    <div class="cateGoodsListClass">
      <div class="goodsItem" 
      v-for="(n, inx) in cateGoodsList" 
      :key="inx"
      @click="gotoGoodsDetail(n)">
        <img :src="n.goods_img" alt="goodsImg" />
        <p>{{ n.goods_name }}</p>
        <b>￥{{ n.goods_price }}</b>
      </div>
    </div>
    <!-- footer -->
    <footerBar></footerBar>
  </div>
</template>
<script>
import footerBar from "../components/footerBar";
import axios from "axios";

export default {
  name: "catelist",
  data() {
    return {
      msg: "分类栏目",
      sidebarActiveKey: 0,
      sidebar_arr: [
        {
          txt: "推荐专区",
        },
        {
          txt: "爆品专区",
        },
        {
          txt: "新品专区",
        },
        // {
        //   txt: "居家生活",
        // },
        // {
        //   txt: "服饰鞋包",
        // },
        // {
        //   txt: "美食酒水",
        // },
        // {
        //   txt: "个护清洁",
        // },
        // {
        //   txt: "母婴亲子",
        // },
        // {
        //   txt: "运动旅行",
        // },
        // {
        //   txt: "数码家电",
        // },
        // {
        //   txt: "严选全球",
        // },
      ],
      cateGoodsList: null,
    };
  },
  components: { footerBar },
  created() {
    axios.get("http://localhost:4567/cate_goods_list_0").then((res) => {
      this.cateGoodsList = res.data;
    });
  },
  methods: {
    changeGoodsList(_inx) {
      //   console.log(_inx);
      axios.get("http://localhost:4567/cate_goods_list_" + _inx).then((res) => {
        this.cateGoodsList = res.data;
      });
    },
    gotoGoodsDetail(_n){
        // this.$router.push({name:'detail',params:{
        //     goodsName:_name
        // }});
         this.$router.push({name:'detail',params:{
            goods:_n
        }});
    },
  },
};
</script>
<style scoped>
.cateGoodsListClass {
  margin-left: 2.62rem;
  position:absolute;
  left: 0;
  top: 0;
}
.cateGoodsListClass .goodsItem {
  float: left;
  width: 44%;
  margin: .2rem 0.2rem 0.44rem 0.2rem;
  font-size: 0.37333rem;
  overflow: hidden;
}
.cateGoodsListClass p,
b {
  margin-top: 0.16rem;
  line-height: 0.4rem;
  text-align: left;
  font-size: 0.38rem;
  text-overflow: ellipsis;
  overflow: hidden;
  color: #333;
  font-family: PingFangSC-Regular;
}
.cateGoodsListClass img{
    border-radius: .1rem;
}
</style>