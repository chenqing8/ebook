const http = require('http')
/**
 * 1.创建一个服务,然后显示不同的东西
 */
var server = http.createServer();
server.on('request',(req,res)=>{
  res.setHeader('Content-Type','text/html;charset=utf-8');
  res.write('Hello <h1>sdf</h1>即0')
  // res.end是必须要有的
  res.end()
})
server.listen(8080,function(){
  console.log('http://localhost:8080');
})

  /*
    2.根据用户的不同请求服务器做出不同的响应
  */
http.createServer((req,res)=>{
  // 获取用户的请求路径
  res.setHeader('Content-Type','text/html;charset=utf-8')
  if(req.url=='/'){
    res.end('欢迎进入')
  }else if(req.url=='/login'){
    res.end('这是登录页')
  }else{
    res.end('这是首页')
  }
}).listen(8081,()=>{
  console.log('http://localhost:8081');
})

/**
 * 3.根据用户的不同请求服务器做出不同的响应(响应现有html文件)
 */
const fs= require('fs')
const path=require('path')
http.createServer((req,res)=>{
  // 获取用户的请求路径
  if(req.url=='/'){
    fs.readFile(path.join(__dirname,'welcome.html'),(err,data)=>{
      if(err){
        return false;
      }
      res.end(data)
    })
  }else if(req.url=='/login'){
    fs.readFile(path.join(__dirname,'login.html'),(err,data)=>{
      if(err){
        return false;
      }
      res.end(data)
    })
  }else{
    fs.readFile(path.join(__dirname,'index.html'),(err,data)=>{
      if(err){
        return false;
      }
      res.end(data)
    })
  }
}).listen(8082,()=>{
  console.log('http://localhost:8082');
})
