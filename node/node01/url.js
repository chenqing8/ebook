const url=require('url');
let urlStr='http://baidu.com/hot/user?id=1&pas=123#nihao';
let urlObj=url.parse(urlStr);
console.log(urlObj);
/**
 * url 类比json记忆
 * url.parse将url字符串转成对象
 * url.format将对象转成字符串
 */
// json是一种数据格式，json对象是保存json格式的对象，json字符串就是json格式的字符串

// {
//     protocol: 'http:',
//     slashes: true,
//     auth: null,
//     host: 'baidu.com',
//     port: null,
//     hostname: 'baidu.com',
//     hash: '#nihao',
//     search: '?id=1&pas=123',
//     query: 'id=1&pas=123',
//     pathname: '/hot/user',
//     path: '/hot/user?id=1&pas=123',
//     href: 'http://baidu.com/hot/user?id=1&pas=123#nihao' }
