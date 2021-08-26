<template>
  <div>
    <navBar :msg="msg"></navBar>
    <div class="logoWrap">
      <img src="//yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png" />
    </div>
    <div class="loginContent">
      <van-field
        v-model="uemail"
        placeholder="请输入邮箱"
        @input="inputEmailChange"
      >
        <template #right-icon>
          <van-icon
            v-show="isEmail"
            name="close"
            size=".3rem"
            @click="emptyEmailInput"
          />
        </template>
      </van-field>
      <van-field
        type="password"
        v-model="upwd"
        placeholder="请输入密码"
        @input="inputPwdChange"
      >
        <template #right-icon>
          <van-icon
            name="close"
            size=".3rem"
            v-show="isPwd"
            @click="emptyPwdInput"
          />
        </template>
      </van-field>
      <van-button @click="registerFn" type="danger">注册用户</van-button>
    </div>
  </div>
</template>
<script>
import navBar from "../components/navBar";

export default {
  name: "login",
  data() {
    return {
      msg: "网易严选",
      //   绑定文本框文本
      uemail: "",
      //   保存输入文本
      inputUeamil: "",
      upwd: "",
      inputUpwd: "",
      isEmail: false,
      isPwd: false,
      userObj:[]
    };
  },
  components: { navBar },
  watch: {
    //   监听输入文本
    inputUeamil(_v) {
      this.isEmail = true;
      if (!_v) {
        this.isEmail = false;
      }
    },
    inputUpwd(_pwd) {
      this.isPwd = true;
      if (!_pwd) {
        this.isPwd = false;
      }
    },
  },
  methods: {
    // 输入时触发
    inputEmailChange(_txt) {
      // 保存输入的文本
      this.inputUeamil = _txt;
    },
    // 清空email文本框
    emptyEmailInput() {
      this.uemail = "";
      this.isEmail = false;
    },
    emptyPwdInput() {
      this.upwd = "";
      this.isPwd = false;
    },
    inputPwdChange(_pwd) {
      this.inputUpwd = _pwd;
    },
    // 注册用户
    registerFn(){
        let u={u:this.uemail,p:this.upwd};
        this.userObj.push(u);
        localStorage.setItem("userObj",JSON.stringify(this.userObj));
        this.$dialog.alert({message:'注册成功'})
        .then(()=>{
            this.$router.push('/login');
        });
    }
  },
};
</script>
<style scoped>
.logoWrap {
  text-align: center;
  padding-top: 1.13333rem;
  padding-bottom: 1.39333rem;
}
.logoWrap img {
  width: 3.5rem;
  height: 1.2rem;
}
</style>