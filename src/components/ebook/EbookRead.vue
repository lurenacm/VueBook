<template>
    <div>
      <div id="read"></div>
    </div>
</template>

<script>
import Epub from "epubjs"
import mixins from '@/utils/mixins'

global.epub = Epub
export default {
  name: "EbookRead",
  mixins: [mixins],
  methods: {
    initEbook() {
      const url = "http://localhost:8081/epub/" + this.fileName + ".epub"
      this.book = new Epub(url)
      // 通过Book.renderTo生成Rendition对象
      this.rendition = this.book.renderTo('read', {
        // width: window.innerWidth,
        // height: window.innerHeight,
        // method: 'default'
      })
      // 通过Rendtion.display渲染打开电子书
      this.rendition.display()
      this.rendition.on('touchstart', event => {
        this.touchstartX = event.changedTouches[0].clientX
        this.timeStart = event.timeStamp
      })

      this.rendition.on('touchend', event => {
        const offsetx = event.changedTouches[0].clientX - this.touchstartX
        const time = event.timeStamp - this.timeStart
        // console.log(offsetx, time)
        if (time<500 && offsetx>40) {
          this._prePages()
        } else if (time<500 && offsetx<-40) {
          this._nextPages()
        } else {
          this._toggleShowTtile()
        }
        // event.preventDefault()
        // event.stopPropagation()
      })
    },

    _prePages() {
      this.rendition.prev()
      this._hideToggle()
    },
    _nextPages() {
      this.rendition.next()
       this._hideToggle()
    },
    _toggleShowTtile() {
      this.setShowTitle(!this.showTitle)
    },
    _hideToggle() {
      this.setShowTitle( false)
    }
  },

  mounted() {
    const fileName = this.$route.params.fileName.split("|").join("/")
    this.setFileName(fileName).then(() => {
      this.initEbook()
    })
  }
}
</script>

<style lang="scss"  rel="stylesheet/scss" scoped>
@import "@/assets/styles/global.scss";

.container >>> epub-view {
    width: 375px !important;
}

.container {
    width: 100%;
    height: 100%;
    overflow: hidden;
    #read {
        width: 100%;
        height: 100%;
    }
}
</style>