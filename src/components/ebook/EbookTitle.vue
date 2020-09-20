<template>
  <transition name="slide-down">
    <div class="ebookTile" v-show="showTitle">
      <div class="leftArrow" @click="back">
        <span class="icon-back"></span>
      </div>
      <div class="rigthContainer">
        <div class="icon">
          <span class="icon-shelf"></span>
        </div>
        <div class="icon">
          <span class="icon-cart"></span>
        </div>
        <div class="icon">
          <span class="icon-more"></span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import mixins from '@/utils/mixins'
export default {
  name: "EbookTitle",
  mixins: [mixins],
  methods: {
    back(event) {
      console.log("back")
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/global.scss";

.ebookTile {
  width: 100%;
  height: px2rem(48);
  display: flex;
  flex-direction: row;
  background: white;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 100;
  font-size: px2rem(22);
  align-items: center;
  box-shadow: 0 px2rem(8) px2rem(8) rgba(0, 0, 0, 0.15);
  .leftArrow {
    margin: 0 px2rem(20);
  }
  .rigthContainer {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: px2rem(10);
    .icon {
      margin: 0 px2rem(10);
    }
  }
}
</style>