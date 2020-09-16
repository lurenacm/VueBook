<template>
    <div>
    </div>
</template>

<script>
    export default {
        name: 'EbookRead',
        mounted() {
            const baseUrl = 'http://127.0.0.1:8081/epub/'
            const firstName = this.$route.params.firstName.split('|').join('/')
            console.log(`${baseUrl}${firstName}.epub`)
        }
    }
</script>

<style lang="sass" scoped>

</style>