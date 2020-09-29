<template>
  <div>
    <transition name="popup-slide-up">
      <div class="family-container" v-if="showFontFamily">
        <div class="header">
          <span class="icon-down2" @click="showFamily"></span>
          <div class="text">{{$t('book.selectFont')}}</div>
        </div>
        <div class="fontFamilyList" v-for="(item ,index) of fontFamilyList" :key="index">
            <div class="itemContainer" @click="setFont(item.fontFamily)">
              <div class="item" :class="{'selectFamily': selectFamily(item.fontFamily)}">{{item.fontFamily}}</div>
               <span class="icon-check itemicon" v-if="selectFamily(item.fontFamily)"></span>
            </div>
          </div>
      </div>
    </transition>
  </div>
</template>

<script>
import mixins from "@/utils/mixins"
import { saveFontFamily } from '@/utils/localStorage'

export default {
  name: "EbookFontFamily",
  mixins: [mixins],
  methods: {
      showFamily() {
        this.setFontFamily(false)
      },
      setFont(font) {
        this.setDefFontFamily(font)
        saveFontFamily(this.fileName, font)
        if (font === 'Default'){
          this.Book.rendition.themes.font('Courier New')
        } else {
          this.Book.rendition.themes.font(font)
        }
      },
      selectFamily(fontFamily) {
         return this.defaultFontFamily === fontFamily
      }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/global.scss";
.family-container {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  background: white;
  display: flex;
  flex-direction: column;
  box-shadow: 0 px2rem(-4) px2rem(6) rgba(0, 0, 0, .1);
  .header {
    display: flex;
    flex-direction: row;
    font-size: px2rem(15);
    font-weight: bold;
    padding: px2rem(15);
    border-bottom: solid px2rem(2) #ccc;
    .text {
        flex: 1;
        text-align: center;
    }
  }
  .fontFamilyList {
      display: flex;
      flex-direction: column;
      font-size: px2rem(15);
      font-weight: bold;
      padding: px2rem(10);
      .itemContainer {
          display: flex;
          flex-direction: row;
        .item {
                &.selectFamily {
                color: #346cb9;
                font-weight: bold;
            }
        }
        .itemicon {
            flex: 1;
            text-align: end;
            color: #346cb9;
            font-weight: bold;
        }
      }
  }
}
</style>