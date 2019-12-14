// const fs=require('fs');
// //同步读取文件
// let dirs=fs.readdirSync('./')
// console.log(dirs);
// // 异步读取文件
// fs.readdir('./',(err,data)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log('sure',data);
//     }
// })
// //错误的回调优先，在回调函数中第一个参数表示错误对象，默认为null 如果出现错误err 就是错误对象

//如果出错就会终止执行，所以在readdirSync的时候要用trycatch，readdir就是用回调函数，错误的回调优先
const fs=require('fs');
//同步读取文件
let dirs=fs.readdirSync('./')
console.log(dirs);
// 异步读取文件
fs.readdir('./',(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log('sure',data);
    }
})
//curd：数据库操作的增删改查



