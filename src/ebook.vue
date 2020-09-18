<template>
    <div>
        <div id="read">
        </div>
    </div>
</template>

<script>
import Epub from 'epubjs'
global.ePub = Epub
const url = 'http://127.0.0.1:8081/epub/Biomedicine/2014_Book_Self-ReportedPopulationHealthA.epub'

export default {
    methods: {
        readEpub() {
            this.book = new Epub(url)
            console.log(this.book)
           this.rendition = this.book.renderTo('read', {
                // width: window.innerWidth,
                // height: window.innerHeight,
                // method: 'default',
                // flow: 'auto'
            })
            this.rendition.display()
        }
    },
    mounted() {
    },
    created() {
        this.readEpub()
    }
}
</script>

<style lang="scss" scoped>
@import '../src/assets/styles/global'
</style>