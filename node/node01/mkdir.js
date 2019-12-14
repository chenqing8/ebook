const fs=require('fs');
// // 创建文件夹
// fs.mkdir('./aa',(err,data)=>{
//     console.log(err);
//     console.log(data);
// })

// // 更改文件夹名字
// fs.rename('./aa','./bb',(err,data)=>{
//     console.log(err);
// })

//删除文件夹
fs.rmdir('./bb',err=>{
    console.log(err);
})