const book={
    state: {
        filename:''
    },
    mutations: {
        'FILE_NAME':(state,filename)=>{
            state.filename=filename;
        }
    },
    actions: {
        setFileName:({commit,state},newFileName)=>{
            return commit('FILE_NAME',newFileName)
        }
    }
}
export default book;