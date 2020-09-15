<template>
  <div id="app">
    <span class="icon-bookmark"></span>
    <span class="icon-close"></span>
    <span class="text">aaasss</span>
    <router-view />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

const gettersObj = {
  c: () => 'c',
  d: () => 'd'
}

function print(keys) {
  const data = {}
  keys.forEach(e => {
    // 直接使用 gettersObj.prototype.hasOwnProperty(e) 新版 eslint 会直接报错 https://cn.eslint.org/docs/rules/no-prototype-builtins
    if (Object.prototype.hasOwnProperty.call(gettersObj, e)){
      data[e] = gettersObj[e]
    }
  })
  return data
}

export default {
  computed: {
    ...mapGetters(['test']),
    ...print(['c', 'd'])
  },
  mounted() {
    console.log("this.c, this.d:", this.c, this.d) // 直接使用this.c, this.d 获取混入（映射）的值
    console.log(this.test)    // vuex的state 中 test为23
    this.$store.commit('getInfo', 43)
  }
}

document.addEventListener('DOMContentLoaded', () => {
  let fontSize = window.innerWidth / 10
  fontSize = fontSize > 50 ? 50 : fontSize
  const html = document.querySelector('html')
  html.style.fontSize = fontSize + 'px'
})
</script>

<style lang="scss">
@import "./assets/styles/global.scss";

.text {
  font-family: "Days One";
  color: blanchedalmond;
  font-size: px2rem(90);
}
</style>
