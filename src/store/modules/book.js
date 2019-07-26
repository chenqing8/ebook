const book = {
  state: {
    filename: '',
    showMenu: false,
    menuItem: -1, //-1：不显示，0菜单，1，2皮肤，3字号,
    defaultFontSize: 16, //字号
    defaultFontfamily: 'Days One', //字体
    currenBook: null,
    defaultThemes: 0, //主题编号
  },
  mutations: {
    'FILE_NAME': (state, filename) => {
      state.filename = filename;
    },
    'SHOW_MENU': (state, showmenu) => {
      state.showMenu = showmenu;
    },
    'MENU_ITEM': (state, menuItem) => {
      state.menuItem = menuItem;
    },
    'DEFAULT_FONTSIZE': (state, defaultFontSize) => {
      state.defaultFontSize = defaultFontSize;
    },
    'DEFAULT_FONTFAMILY': (state, defaultFontfamily) => {
      state.defaultFontfamily = defaultFontfamily;
    },
    'CURREN_BOOK': (state, currenBook) => {
      state.currenBook = currenBook;
    },
    'DEFAULT_THEMES': (state, defaultThemes) => {
      state.defaultThemes = defaultThemes;
    }
  },
}
export default book;
