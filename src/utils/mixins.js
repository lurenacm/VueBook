import {
  mapGetters,
  mapActions
} from 'vuex'

import { FONT_SIZE_LIST } from './book'
const mixins = {
  data() {
   return {
    fontsizelist: FONT_SIZE_LIST
   }
  },
  computed: {
    ...mapGetters(["fileName", "showTitle", 'showSetting', 'defFontSize', 'Book'])
  },
  methods: {
    ...mapActions(['setFileName', 'setShowTitle', 'setShowSetting', 'setFont', 'setBook'])
  }
}
export default mixins
