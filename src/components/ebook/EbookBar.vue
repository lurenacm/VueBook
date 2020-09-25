<template>
  <div>
    <transition name="slide-up">
      <div class="ebookbar"  v-show="showTitle">
        <div class="icon" @click="setShowSetting(3)">
          <span class="icon-menu"></span>
        </div>
        <div class="icon" @click="setShowSetting(2)">
          <span class="icon-progress"></span>
        </div>
        <div class="icon" @click="setShowSetting(1)">
          <span class="icon-bright"></span>
        </div>
        <div class="icon" @click="setShowSetting(0)">
          <span class="icon-A"></span>
        </div>
      </div>
    </transition>
    <ebook-font-size></ebook-font-size>
    <ebook-font-family></ebook-font-family>
  </div>
</template>

<script>
import mixins from '@/utils/mixins'
import EbookFontSize from '@/components/ebook/EbookFontSize'
import EbookFontFamily from '@/components/ebook/EbookFontFamily'

export default {
  name: "EbookBar",
  mixins: [mixins],
  components: {
    EbookFontSize,
    EbookFontFamily
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/global.scss";
.ebookbar {
  width: 100%;
  height: px2rem(48);
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: white;
  box-shadow: 0 px2rem(-8) px2rem(8) rgba(0, 0, 0, 0.15);
  .icon {
      font-size: px2rem(22);
      margin: auto px2rem(30);
  }
}
</style>