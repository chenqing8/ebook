import Vue from "vue"
import VueI18N from "vue-i18n"
import cn from "../lang/cn"
import en from "../lang/en"
Vue.use(VueI18N)
const messages = {
  cn,
  en
}
const i18n = new VueI18N({
  locale: 'cn', // 语言标识
  //this.$i18n.locale // 通过切换locale的值来实现语言切换
  messages
})
export default i18n;
