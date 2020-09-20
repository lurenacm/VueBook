<template>
    <div>
        <ebook-title></ebook-title>
        <ebook-read></ebook-read>
    </div>
</template>

<script>
import EbookRead from '@/components/ebook/EbookRead'
import EbookTitle from '@/components/ebook/EbookTitle'
    export default {
        components: {
            EbookRead,
            EbookTitle
        }
    }
</script>

<style lang="sass" scoped>

</style>