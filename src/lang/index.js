import Vue from 'vue'
import VueI18n from 'vue-i18n'
import cn from './cn'
import  en from './en'
import { saveLang, getLang } from '@/utils/localStorage'  // 利用vue的自动加载全局判断国际化

Vue.use(VueI18n)

const messages = {  // messages 复数
    en,
    cn
}

let locale = getLang('selectLang')
if (!locale) {
    locale = 'cn'
    saveLang(locale)
}

const i18n = new VueI18n({
    locale,
    messages
})

export default i18n