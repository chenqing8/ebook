const express= require('express')
var bodyParser = require('body-parser')//具体使用看npm，往下滑动

const app=express();
// 解析 application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// 解析 application/json
app.use(bodyParser.json())

app.get('/user/login',(req,res)=>{
    res.send({err:0,msg:'ok'})
})
app.post('/reg',(req,res)=>{
    // 在post请求中如果你想解析req.body，需要使用第三方插件body-parse，否则下面的req.body会为undefined
    let {us,ps}=req.body;//req.body是用来接受用户的参数，req是请求
    console.log(us,ps);
    res.send({err:0,msg:'ok'})//res是响应
})
app.listen(3000,()=>{
    console.log('serve start');
})