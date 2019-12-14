const fs=require('fs');
// //创建文件,如果内容发生改变，就会覆盖之前的内容
// fs.writeFile('name.txt','22222hello',err=>{console.log(err);})

// // 写入文件
// fs.appendFile('name.txt','0000000000',err=>{
//     console.log(err);
// })

// // 读取文件
// 1.
// fs.readFile('name.txt','utf-8',(err,msg)=>{
//     console.log(msg);
// })
// 2.
// fs.readFile('name.txt',(err,msg)=>{
//     console.log(msg.toString('utf8'));
// })

// // 删除文件
// fs.unlink('name.txt',err=>{
//     console.log(err);
// })

// // 判断是否是文件还是文件夹
// fs.stat('./node01',(err,data)=>{
//     if(data.isFile()){
//         console.log('is file');
//     }else{
//         console.log('is dir');
//     }
// })

// 打印目录树
fs.readdir('./node01',(err,dirs)=>{
    console.log(dirs);
})
