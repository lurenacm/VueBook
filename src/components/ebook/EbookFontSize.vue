<template>
  <div>
      <transition>
          <div class="container" v-show="showTitle && showSetting==0">
            <div class="ebook-setting">
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
            <div class="fontFamily" @click.stop="showFamily">
                <div class="defaultFont">{{defaultFontFamily}}</div>
                <span class="icon-forward defaultFont"></span>
            </div>
          </div>
      </transition>
  </div>
</template>

<script>
import mixins from "@/utils/mixins"
import { saveFontSize } from '@/utils/localStorage'

export default {
  name: "EbookFontSize",
  mixins: [mixins],
  methods: {
      setFontSize(fontSize) {
        this.setFont(fontSize)
        this.Book.rendition.themes.fontSize(fontSize+'px')
        saveFontSize(this.fileName, fontSize)
      },

      showFamily() {
        //   console.log('showFamily')
        //   console.log(this.showFontFamily)
          this.setFontFamily(true)
        //   this.showFontFamily = true
      }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/global.scss";
.container {
    display: flex;
    flex-direction: column;
    position: relative;
    .ebook-setting {
        width: 100%;
        height: px2rem(90);
        line-height: px2rem(90);
        position: absolute;
        left: 0;
        right: 0;
        margin-bottom:px2rem(5) ;
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
    .fontFamily {
        position: absolute;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background: white;
        left: 0;
        right: 0;
        bottom: px2rem(48);
        font-size: px2rem(14);
        padding: px2rem(5);
        .defaultFont {
            font-size: px2rem(14);
            font-weight: bold;
        }
    }
}
</style>
