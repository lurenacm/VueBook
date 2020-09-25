<template>
  <div>
      <transition>
          <div class="ebook-setting" v-show="showTitle && showSetting>=0">
              <div class="left-font">
                  <span :style="{fontSize:fontsizelist[0].fontSize+ 'px'}">A</span>
              </div>
              <div v-for="(item, index) of fontsizelist" :key="index" class="line-item" @click="setFontSize(item.fontSize)">
                  <div class="vertical-line"></div>
                  <div class="line"></div>
                  <div class="vertical-line"></div>
                  <div class="point" v-show="defFontSize === item.fontSize">
                    <div class="point-item"></div>
                  </div>
              </div>
              <div class="right-font">
                  <span :style="{fontSize:fontsizelist[fontsizelist.length-1].fontSize+ 'px'}">A</span>
              </div>
          </div>
      </transition>
  </div>
</template>

<script>
import mixins from "@/utils/mixins"
export default {
  name: "EbookFontSize",
  mixins: [mixins],
  methods: {
      setFontSize(fontSize) {
          console.log(fontSize)
          this.setFont(fontSize)
          this.Book.rendition.themes.fontSize(fontSize)
      }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/global.scss";

.ebook-setting {
    width: 100%;
    height: px2rem(90);
    line-height: px2rem(90);
    position: absolute;
    left: 0;
    right: 0;
    bottom: px2rem(48);
    background: white;
    display: flex;
    flex-direction: row;
    align-items: baseline;
    box-shadow: px2rem(0) px2rem(-8) px2rem(8) #ccc;
    .left-font {
        margin: 0 px2rem(20);
    }
    .right-font {
        margin: 0 px2rem(20);
    }
    .line-item {
        width: 50%;
        position: relative;
        .vertical-line {
            flex: 1;
            height: px2rem(4);
            border-left: px2rem(1) solid #ccc;
            border-right: px2rem(1) solid #ccc;
            &:last-child {
             border-right: none
            }
        }
        .line {
            flex: 1;
            height: 0;
            border-top: px2rem(1) solid #ccc;
        }
        .point {
            width: px2rem(20);
            height: px2rem(20);
            background: white;
            border-radius: 50%;
            border: solid #ccc px2rem(1);
            box-shadow: px2rem(.5) px2rem(2.5) px2rem(2.5) #ccc;
            position: absolute;
            top: px2rem(-8);
            left: px2rem(-10);
            display: flex;
            justify-content: center;
            align-items: center;
            .point-item {
                width: px2rem(5);
                height: px2rem(5);
                background:  black;
                border-radius: 50%;
            }
        }
    }

}
</style>