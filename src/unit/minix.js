import {
  mapGetters,
  mapActions
} from 'vuex';
import {
  themes
} from "../unit/book";
const eBookMinix = {
  data() {
    return {
      themes: themes(this),
      /* 获取主题的数据 */
      themesStyle: null,
      /* 切换主题时的样式 */
    }
  },
  computed: {
    ...mapGetters([
      "filename",
      "showMenu",
      "menuItem",
      "defaultFontsize",
      "defaultFontfamily",
      "currenBook",
      "defaultThemes",
      "bookAvailable",
    ]),
    // 切换主题时切换的样式
    color() {
      return this.themes[this.defaultThemes].style.body.color;
    },
    background() {
      return this.themes[this.defaultThemes].style.body.background;
    }
  },
  methods: {
    ...mapActions([
      "setShowMenu",
      "setFileName",
      "setMenuItem",
      "setDefaultFontfamily",
      "setDefaultFontsize",
      "setCurrenBook",
      "setDefaultThemes",
      "setBookAvailable",
    ])
  },
  mounted() {
    // 它只执行一次,后面需要watch来监听发生的改变
    // 直接在data中不能获取computed的方法,只能在钩子函数中给他赋值
    this.themesStyle = {
      color: this.color,
      background: this.background
    };
  },
  watch: {
    // 主题发生改变的时候重新赋值所有样式
    defaultThemes() {
      this.themesStyle = {
        color: this.color,
        background: this.background
      };
    }
  }
}
export default eBookMinix;
