<template>
  <div>
    <!-- header -->
    <div class="titleDiv">
      <van-row type="flex" justify="space-between">
        <van-col span="20">
          <van-field
            @input="inputChange"
            class="searchInput"
            v-model="search_v"
            @keyup.enter="searchEnter"
            placeholder="请输入搜索内容"
          >
            <template v-slot:left-icon>
              <van-icon name="search" size=".5rem" />
            </template>
            <template #button>
              <van-icon
                v-show="isCloseIcon"
                @click="emptyInput"
                name="close"
                size=".5rem"
              />
            </template>
          </van-field>
        </van-col>
        <van-col span="3">
          <van-button
            class="cancelBtn"
            @click="callbackIndexWrap"
            type="primary"
            size="mini"
            >取消</van-button
          >
        </van-col>
      </van-row>
    </div>
    <div>
        <ul style="font-size:.5rem">
            <li v-for="(goods,inx) in searchData" :key="inx">{{goods.name}},${{goods.price}}</li>
        </ul>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "searchPage",
  data() {
    return {
      msg: "搜索页",
      search_v: "",
      input_v:"",
      isCloseIcon: false,
      searchData:[]
    };
  },
  created() {
    // let aa_get=axios.get('http://localhost:4567/aa');
    // aa_get.then(result=>{
    //     console.log(result.data);
    // });
    // axios.get('http://localhost:4567/bb')
    // .then((result)=>{
    //     console.log(result.data);
    // });
  },
  watch:{
    input_v(_v){
      this.isCloseIcon=true;
      if (!_v) {
        this.isCloseIcon=false;
      }
    }
  },
  methods: {
    emptyInput() {
      this.search_v = "";
      this.isCloseIcon = false;
    },
    inputChange(_v) {
      this.input_v=_v;
    },
    callbackIndexWrap() {
      this.$router.push("/");
    },
    // 点击Enter进行搜索
    searchEnter() {
      let _searchKey = this.search_v;
      axios("http://localhost:4567/search", {
        params: {
          searchValue: _searchKey,
        },
      }).then((result) => {
        this.searchData=result.data;
      });
    },
  },
};
</script>
<style scoped>
.titleDiv {
  padding: 0.3rem 0.5rem;
}
.cancelBtn {
  width: 0.98667rem;
  height: 0.53333rem;
  font-size: 0.32rem;
  line-height: 0.53333rem;
  text-align: center;
  color: #dd1a21;
  border: 1px solid #dd1a21;
  border-radius: 0.10667rem;
  background: #fff;
  margin: 0.1rem 0.5rem 0 0;
}
.searchInput {
  border: 0;
  background-color: #f4f4f4;
  height: 0.74667rem;
  line-height: 0.6rem;
  border-radius: 4px;
  font-size: 0.37333rem;
}
</style>