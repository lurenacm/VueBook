<template>
  <div id="app">
    <span class="icon-bookmark"></span>
    <span class="icon-close"></span>
    <span class="text">aaasss</span>
    <router-view />
  </div>
</template>

<script>
export default {}

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
  font-size: 90px;
}
</style>
