const qs=require('querystring');
// 将query的字符串变为query对象
// let string='name=chenqing&pass=123'
// // 将query的字符串变为query对象
// let obj=qs.parse(string)
// console.log(obj);

// const qs=require('querystring');
// let string='name-chenqing#pass-123'
// // 将query的字符串变为query对象,表示先以#来切分，再用-来进行切分
// let obj=qs.parse(string,'#','-')
// console.log(obj);

// // 将query的对象变为query字符串
// let obj={name:'cq',age:1}
// // let string=qs.stringify(obj);
// // console.log(string);//name=cq&age=1
// let string=qs.stringify(obj,'*','$');
// console.log(string);//name$cq*age$1

// // 编码操作
// let string='w=你好&q=123'
// let obj=qs.escape(string)
// console.log(obj);

// 解码操作
let str='w%3D%E4%BD%A0%E5%A5%BD%26q%3D123'
let obj=qs.unescape(str);
console.log(obj);

