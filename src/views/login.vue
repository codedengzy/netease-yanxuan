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
      <div style="width:100%;height:.5rem;margin-top:.2rem;margin-left:.1rem">
        <span class="registerClass" @click="registerBtn">注册用户</span>
      </div>
      <van-button @click="loginFn" type="danger">登录</van-button>
      <span class="ortherLogin" @click="ortherLoginBtn">其他方式登录></span>
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
    ortherLoginBtn() {
      this.$router.push("/loginNav");
    },
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
    registerBtn(){
        this.$router.push('/register');
    },
    loginFn(){
        let uObj=JSON.parse(localStorage.getItem('userObj'));
        for (let i = 0; i < uObj.length; i++) {
            if (uObj[i].u===this.uemail&&uObj[i].p===this.upwd) {
                this.$dialog.alert({message:"登陆成功"})
                .then(()=>{
                    this.$router.push({name:'indexWrap'},()=>{
                        localStorage.setItem("inxState", 0);
                    });
                });
            }
        }
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
.ortherLogin {
  display: block;
  margin-top: 0.98rem;
  font-size: 0.38rem;
  line-height: 0.4rem;
}
.registerClass {
  display: block;
  margin-left: 0;
  font-size: 0.38rem;
  line-height: 0.4rem;
  float: left;
}
</style>