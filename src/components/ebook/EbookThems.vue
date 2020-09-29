<template>
  <div>
    <transition>
        <div class="container" v-show=" showTitle && showSetting ==1">
            <div class="ebook-setting">
                <div class="ebook-thems" v-for="(item, index) of themeList" :key="index">
                    <!-- <div class="thems-item">{{item.name}}</div> -->
                    <div>{{item.alias}}</div>
                </div>
            </div>
        </div>
    </transition>
    </div>
</template>

<script>
import mixins from "@/utils/mixins"
    export default {
        name: 'EbookThems',
        mixins: [mixins]
    }
</script>

<style lang="scss" scoped>
@import "@/assets/styles/global.scss";

.container {
    display: flex;
    flex-direction: column;
    position: relative;
    // background: yellow;
    .ebook-setting {
        width: 100%;
        height: px2rem(90);
        line-height: px2rem(90);
        position: absolute;
        left: 0;
        right: 0;
        margin-bottom:px2rem(5) ;
        bottom: px2rem(43);
        background: white;
        box-shadow: px2rem(0) px2rem(-8) px2rem(8) #ccc;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        .ebook-thems {
            width: 100%;
            // display: flex;
            // flex-direction: row;
            font-size: px2rem(14);
        }
    }
}
</style>