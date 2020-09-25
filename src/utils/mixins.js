import {
  mapGetters,
  mapActions
} from 'vuex'

import { FONT_SIZE_LIST, FONT_FAMILY_LIST } from './book'
const mixins = {
  data() {
   return {
    fontsizelist: FONT_SIZE_LIST,
    fontFamilyList: FONT_FAMILY_LIST
   }
  },
  computed: {
    ...mapGetters(["fileName", "showTitle", 'showSetting', 'defFontSize', 'Book', 'showFontFamily', 'defaultFontFamily'])
  },
  methods: {
    ...mapActions(['setFileName', 'setShowTitle', 'setShowSetting', 'setFont', 'setBook', 'setFontFamily', 'setDefFontFamily'])
  }
}
export default mixins
