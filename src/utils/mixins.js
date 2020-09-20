import {
  mapGetters,
  mapActions
} from 'vuex'
const mixins = {
  computed: {
    ...mapGetters(["fileName", "showTitle"])
  },
  methods: {
    ...mapActions(['setFileName', 'setShowTitle'])
  }
}
export default mixins
