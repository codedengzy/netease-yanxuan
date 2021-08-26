<template>
  <div>
    <div class="navbarClass">
      <van-nav-bar :title="msg" left-text="返回" left-arrow>
        <template #left>
          <van-icon name="wap-home-o" size="58" @click="gotoHome" />
        </template>
        <template #right>
          <van-icon name="shopping-cart-o" size="58" />
        </template>
      </van-nav-bar>
    </div>
  </div>
</template>
<script>
export default {
  name: "navBar",
  data() {
    return {
      
    };
  },
  props:["msg"],
  methods: {
    gotoHome() {
      this.$router.push({ path: "/" }, () => {
        localStorage.setItem("inxState", 0);
      });
    },
  },
};
</script>
<style scoped>
.navbarClass {
  border-top: 0.02rem solid #e6e6e6;
  border-left: 0.02rem solid #e6e6e6;
  border-right: 0.02rem solid #e6e6e6;
  border-bottom: 0.03rem solid #bdbdbd;
}
</style>