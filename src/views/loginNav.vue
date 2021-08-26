<template>
  <div>
    <!-- header -->
    <navBar msg="网易严选"></navBar>
    <div class="logoWrap">
      <img src="//yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png" />
    </div>
    <div class="btnWrap">
      <van-button :icon="login_icon" 
      plain type="primary" 
      color="#DD1A21" block
      @click="loginNavBtn"
      >
        邮箱账号登录
      </van-button>
    </div>
  </div>
</template>
<script>
import login_icon from "../assets/login_icon.png";
import navBar from "../components/navBar"

export default {
  name: "loginNav",
  data() {
    return {
      msg: "网易严选",
      login_icon: login_icon,
    };
  },
  components:{navBar},
  methods: {
    loginNavBtn(){
        this.$router.push('/login');
    }
  },
};
</script>
<style scoped>
.logoWrap {
  text-align: center;
  padding-top: 2.13333rem;
  padding-bottom: 3.09333rem;
}
.logoWrap img {
  width: 3.5rem;
  height: 1.2rem;
}
.btnWrap{
  padding: 0 0.4rem;
  margin-bottom: 2.05rem;
}
</style>