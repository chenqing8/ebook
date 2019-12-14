/*
1.请求网站数据
2.将数据保存到本地
*/
const http = require('https');
const http1 = require('http');
const fs =require('fs');
const cheerio=require('cheerio')
let url='https://www.baidu.com'
http.get(url,res=>{
    // const {statusCode}=res;
    // const contentType=res.headers['content-type'];
    // console.log(statusCode,contentType);
    // let err=null;
    // if(statusCode!==200){
    //     err=new Error('请求状态码错误')
    // }else if(!/^text\/html/.test(contentType)){
    //     err=new Error('请求类型错误')
    // }

    // if(err){
    //     console.log(err);
    //     res.resume();//重置缓存
    //     return false;
    // }
    //数据分段 只要接受数据就会触发data 事件 chunk每次接受的数据片段
    let rowD=''
    res.on('data',chunk=>{//数据流信息
        rowD+=chunk.toString('utf8');
    })
    //数据流传输
    res.on('end',()=>{
        fs.writeFileSync('./bibi1.html',rowD)
        // 通过cheerion来分析，并且爬取图片到本地
        let $=cheerio.load(rowD)
        let reg=/^htt/;
        $('img').each((index,el)=>{
            let sr=$(el).attr('src');
            let flag=reg.test(sr)
            if(flag){
                http1.get(sr,res1=>{
                    let dataImg=''
                   res1.on('data',chunk=>{
                       dataImg=chunk
                   })
                   res1.on('end',()=>{
                       console.log(new Buffer(dataImg));
                       fs.writeFileSync('./1.gif',new Buffer(dataImg))
                   })
                }).on('error',(err)=>{
                    console.log(err);
                })
            }else{

            }
        })
        // 爬取网页
    })
}).on('error',(err)=>{
    console.log(err);
})