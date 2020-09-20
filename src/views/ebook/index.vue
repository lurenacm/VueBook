<template>
    <div>
        <ebook-title></ebook-title>
        <ebook-read></ebook-read>
        <ebook-bar></ebook-bar>
    </div>
</template>

<script>
import EbookRead from '@/components/ebook/EbookRead'
import EbookTitle from '@/components/ebook/EbookTitle' 
import EbookBar from '@/components/ebook/EbookBar' 

    export default {
        components: {
            EbookRead,
            EbookTitle,
            EbookBar
        }
    }
</script>

<style lang="sass" scoped>

</style>