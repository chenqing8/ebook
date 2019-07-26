const actions={
    setFileName:({commit,state},newFileName)=>{
        return commit('FILE_NAME',newFileName)
    },
    setShowMenu:({commit,state},newShowMenu)=>{
        return commit('SHOW_MENU',newShowMenu)
    },
    setMenuItem:({commit,state},newMenuItem)=>{
        return commit('MENU_ITEM',newMenuItem)
    },
    setDefaultFontsize:({commit,state},newDefaultFontsize)=>{
        return commit('DEFAULT_FONTSIZE',newDefaultFontsize)
    },
    setDefaultFontfamily:({commit,state},newDefaultFontfamily)=>{
        return commit('DEFAULT_FONTFAMILY',newDefaultFontfamily)
    },
    setCurrenBook:({commit,state},newCurrenBook)=>{
        return commit('CURREN_BOOK',newCurrenBook)
    },
    setDefaultThemes:({commit,state},newDefaultThemes)=>{
        return commit('DEFAULT_THEMES',newDefaultThemes)
    },
}
export default actions;