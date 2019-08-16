const book={
    filename:state=>state.book.filename,
    showMenu:state=>state.book.showMenu,
    menuItem:state=>state.book.menuItem,
    defaultFontsize:state=>state.book.defaultFontSize,
    defaultFontfamily:state=>state.book.defaultFontfamily,
    defaultThemes:state=>state.book.defaultThemes,
    currenBook:state=>state.book.currenBook,
    bookAvailable:state=>state.book.bookAvailable,
}
export default book;
