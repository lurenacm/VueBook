<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  computed: {
  },
  mounted() {
  }
}

document.addEventListener('DOMContentLoaded', () => {
  let fontSize = window.innerWidth / 10
  fontSize = fontSize > 50 ? 50 : fontSize
  const html = document.querySelector('html')
  html.style.fontSize = fontSize + 'px'
})
</script>

<style lang="scss" scoped>
@import "./assets/styles/global.scss";
  #app {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
</style>
