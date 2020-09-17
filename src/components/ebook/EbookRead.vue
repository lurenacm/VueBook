<template>
    <div id="read">
    </div>
</template>

<script>
import Epub from 'epubjs'
import { mapGetters } from 'vuex'

global.epub = Epub
    export default {
        name: 'EbookRead',
        computed: {
            ...mapGetters(['fileName'])
        },
        methods: {
            initEbook() {
                const url = 'http://localhost:8081/epub/'+this.fileName + '.epub'
                console.log(url)
                this.book = new Epub(url)
                // console.log(this.book)
            //     this.rendition = this.book.renderTo('read',  {
            //         width: innerWidth,
            //         height: innerHeight,
            //         method: 'default'
            //     })
            //  this.rendition.display()
            }
        },
        mounted() {
            const fileName = this.$route.params.fileName.split('|').join('/')
            this.$store.dispatch('setFileName', fileName).then(() => {
                this.initEbook()
            })
        }
    }
</script>

<style lang="sass" scoped>

</style>