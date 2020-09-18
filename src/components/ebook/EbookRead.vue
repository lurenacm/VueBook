<template>
    <div>
      <div id="read"></div>
    </div>
</template>

<script>
import Epub from "epubjs"
import { mapGetters } from "vuex"

global.epub = Epub
export default {
  name: "EbookRead",
  computed: {
    ...mapGetters(["fileName"])
  },
  methods: {
    initEbook() {
      const url = "http://localhost:8081/epub/" + this.fileName + ".epub"
      console.log(url)
      // const baseUrl = "http://localhost:8081/epub/History/2016_Book_AHistoryOfForceFeeding.epub"
      this.book = new Epub(url)
      console.log(this.book)
      // 通过Book.renderTo生成Rendition对象
      this.rendition = this.book.renderTo('read', {
        // width: window.innerWidth,
        // height: window.innerHeight,
        // method: 'default'
      })
      // 通过Rendtion.display渲染电子书
      this.rendition.display()
    }
  },
  created() {
    const fileName = this.$route.params.fileName.split("|").join("/")
    this.$store.dispatch("setFileName", fileName).then(() => {
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