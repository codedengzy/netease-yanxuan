<template>
  <div class="detailWrap">
    <!-- header -->
    <navBar :msg="msg"></navBar>

    <!-- 商品详情 -->
    <div class="goodsDetail">
      <img :src="goods.goods_img" alt="goodsImg" />
      <p>{{ goods.goods_name }}</p>
      <p>￥{{ goods.goods_price }}</p>
    </div>
    <!-- footer -->
    <div class="goodsBuy">
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" @click="" />
        <van-goods-action-button
          type="danger"
          text="立即购买"
          @click="onClickBuy"
        />
        <van-goods-action-button type="warning" text="加入购物车" />
      </van-goods-action>
    </div>
    <!-- SKU组件 -->
    <div class="skuClass">
      <van-sku
        v-model="sku_show"
        :sku="sku"
        :goods="goods"
        :goods-id="goodsId"
        :quota="quota"
        :quota-used="quotaUsed"
        :hide-stock="sku.hide_stock"
        :message-config="messageConfig"
        @buy-clicked="onBuyClicked"
        @add-cart="onAddCartClicked"
      >
        <template slot="sku-actions-top">
          <van-uploader v-model="fileList" :after-read="afterRead">
          </van-uploader>
        </template>
      </van-sku>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import navBar from "../components/navBar"

export default {
  name: "detail",
  data() {
    return {
      msg: "商品详情页",
      sku_show: false,
      goodsId: 1,
      quota: 0,
      quotaUsed: 0,
      messageConfig: {},
    //   上传文件数组
      fileList:[],
      uploadImg_Arr:[],
      goods: {
        picture: "",
      },
      sku: {
        // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
        // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
        tree: [
          {
            k: "颜色", // skuKeyName：规格类目名称
            k_s: "s1", // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
            v: [
              {
                id: "101", // skuValueId：规格值 id
                name: "红色", // skuValueName：规格值名称
                imgUrl: "", // 规格类目图片，只有第一个规格类目可以定义图片
                previewImgUrl: "", // 用于预览显示的规格类目图片
              },
              {
                id: "102",
                name: "蓝色",
                imgUrl: "",
                previewImgUrl: "",
              },
            ],
            // largeImageMode: true, //  是否展示大图模式
          },
          {
            k: "尺码", // skuKeyName：规格类目名称
            k_s: "s2", // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
            v: [
              {
                id: "103", // skuValueId：规格值 id
                name: "M", // skuValueName：规格值名称
              },
              {
                id: "104",
                name: "L",
              },
            ],
            // largeImageMode: true, //  是否展示大图模式
            is_multiple: true,
          },
        ],
        // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
        list: [
          {
            id: 1234, // skuId
            s1: "101", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "103", // 规格类目 k_s 为 s2 的对应规格值 id
            price: 100, // 价格（单位分）
            stock_num: 110, // 当前 sku 组合对应的库存
          },
          {
            id: 12345, // skuId
            s1: "101", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "104", // 规格类目 k_s 为 s2 的对应规格值 id
            price: 100, // 价格（单位分）
            stock_num: 110, // 当前 sku 组合对应的库存
          },
          {
            id: 1235, // skuId
            s1: "102", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "104", // 规格类目 k_s 为 s2 的对应规格值 id
            price: 100, // 价格（单位分）
            stock_num: 220, // 当前 sku 组合对应的库存
          },
        ],
        price: "1.00", // 默认价格（单位元）
        stock_num: 227, // 商品总库存
        collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
        none_sku: false, // 是否无规格商品
        messages: [
          {
            // 商品留言
            datetime: "0", // 留言类型为 time 时，是否含日期。'1' 表示包含
            multiple: "0", // 留言类型为 text 时，是否多行文本。'1' 表示多行
            name: "留言", // 留言名称
            type: "text", // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
            required: "1", // 是否必填 '1' 表示必填
            placeholder: "", // 可选值，占位文本
          },
          {
            // 商品留言
            datetime: "0", // 留言类型为 time 时，是否含日期。'1' 表示包含
            multiple: "0", // 留言类型为 text 时，是否多行文本。'1' 表示多行
            name: "留言", // 留言名称
            type: "date", // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
            required: "1", // 是否必填 '1' 表示必填
            placeholder: "", // 可选值，占位文本
          },
        ],
        hide_stock: false, // 是否隐藏剩余库存
      },
    };
  },
  components:{navBar},
  created() {
    this.goods = this.$route.params.goods;
    this.goods.picture = this.$route.params.goods.goods_img;
    // console.log(this.$route.params.goodsName);
  },
  methods: {
    onClickBuy() {
      this.sku_show = true;
    },
    onBuyClicked(_skuData) {
      console.log(_skuData);
    //   console.log(this.fileList);
    },
    onAddCartClicked(_skuData) {
      console.log(_skuData);
      console.log(this.uploadImg_Arr);
    },
    afterRead(_file){
        this.uploadImg_Arr.push(_file);
    }
  },
};
</script>
<style scoped>

.goodsDetail {
  margin: 0.1rem 0.1rem 0 0.1rem;
}
.goodsDetail img {
  width: 100%;
  height: 100%;
}
.goodsDetail p {
  font-size: 0.5rem;
}
</style>