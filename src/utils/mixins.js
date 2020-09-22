import {
  mapGetters,
  mapActions
} from 'vuex'

import { FONT_SIZE_LIST } from './book'
const mixins = {
  computed: {
    ...mapGetters(["fileName", "showTitle", 'showSetting'])
  },
  data() {
   return {
    fontsizelist: FONT_SIZE_LIST
   }
  },
  methods: {
    ...mapActions(['setFileName', 'setShowTitle', 'setShowSetting'])
  }
}
export default mixins
