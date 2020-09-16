<template>
    <div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

    export default {
        name: 'EbookRead',
        computed: {
            ...mapGetters(['fileName'])
        },
        methods: {
            initEbook() {
                const url = 'http://127.0.0.1:8081/epub/'+this.fileName + '.epub'
                console.log(url)
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