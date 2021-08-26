<template>
  <div class="footerWrap">
    <van-tabbar
      v-model="active"
      @change="changeActiveRouter"
      active-color="#ee0a24"
    >
      <van-tabbar-item>
        <span>首页</span>
        <template #icon="props">
          <div :class="props.active ? icon.icon1 : icon.inicon1"></div>
        </template>
      </van-tabbar-item>
      <van-tabbar-item>
        <span>分类</span>
        <template #icon="props">
          <div :class="props.active ? icon.icon2 : icon.inicon2"></div>
        </template>
      </van-tabbar-item>
      <van-tabbar-item>
        <span>值得买</span>
        <template #icon="props">
          <div :class="props.active ? icon.icon3 : icon.inicon3"></div>
        </template>
      </van-tabbar-item>
      <van-tabbar-item>
        <span>购物车</span>
        <template #icon="props">
          <div :class="props.active ? icon.icon4 : icon.inicon4"></div>
        </template>
      </van-tabbar-item>
      <van-tabbar-item>
        <span>个人</span>
        <template #icon="props">
          <div :class="props.active ? icon.icon5 : icon.inicon5"></div>
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import "../assets/resetVant.css";

export default {
  name: "footerBar",
  data() {
    return {
      msg: "footerBar",
      active: 0,
      icon: {
        icon1: "footerIcon footerIcon_1",
        inicon1: "footerIcon footerIcon_1_red",

        icon2: "footerIcon footerIcon_2",
        inicon2: "footerIcon footerIcon_2_red",

        icon3: "footerIcon footerIcon_3",
        inicon3: "footerIcon footerIcon_3_red",

        icon4: "footerIcon footerIcon_4",
        inicon4: "footerIcon footerIcon_4_red",

        icon5: "footerIcon footerIcon_5",
        inicon5: "footerIcon footerIcon_5_red",
      },
    };
  },
  mounted() {
    this.active = Number(localStorage.getItem("inxState"));
  },
  methods: {
    changeActiveRouter() {
      let _active = this.active;
      switch (_active) {
        case 0:
          this.$router.push({ path: "/" }, () => {
            localStorage.setItem("inxState", 0);
          });
          break;
        case 1:
          this.$router.push({ path: "/catelist" }, () => {
            localStorage.setItem("inxState", 1);
          });
          break;
        case 4:
          this.$router.push({ path: "/loginNav" }, () => {
            localStorage.setItem("inxState", 4);
          });
          break;
        default:
          break;
      }
    },
  },
};
</script>
<style scoped>
.footerIcon {
  background-repeat: no-repeat;
  background-size: 0.53rem;
  width: 0.53rem;
  height: 0.53rem;
}
/* 第一个图标 */
.footerIcon_1 {
  background-image: url("../assets/footer_icon.png");
  background-position: 0 -197px;
}
.footerIcon_1_red {
  background-image: url("../assets/footer_icon.png");
  background-position: 0 -247px;
}
/* 第二个 */
.footerIcon_2 {
  background-image: url("../assets/footer_icon.png");
  background-position: 0 -97px;
}
.footerIcon_2_red {
  background-image: url("../assets/footer_icon.png");
  background-position: 0 -147px;
}
/* 第三个 */
.footerIcon_3 {
  background-image: url("../assets/footer_icon.png");
  background-position: 0 -297px;
}
.footerIcon_3_red {
  background-image: url("../assets/footer_icon.png");
  background-position: 0 -347px;
}
/* 第四个 */
.footerIcon_4 {
  background-image: url("../assets/footer_icon.png");
  background-position: 0 3px;
}
.footerIcon_4_red {
  background-image: url("../assets/footer_icon.png");
  background-position: 0 -47px;
}
/* 第五个 */
.footerIcon_5 {
  background-image: url("../assets/footer_icon.png");
  background-position: 0 -397px;
}
.footerIcon_5_red {
  background-image: url("../assets/footer_icon.png");
  background-position: 0 -447px;
}
</style>