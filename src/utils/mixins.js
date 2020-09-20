import { mapGetters } from 'vuex'
const mixins = {
    computed: {
        ...mapGetters(["fileName", "showTitle"])
      }
}
export default mixins