/*
*   代理服务——处理dev环境跨域问题
*/
const domain = 'http://ws.open.ctripcorp.com';
const proxy = [
    {
        url: '/endtoend-replace-service/api/pagehearderservice/json/GetPageInfo',
        target: domain
    }
];
module.exports = proxy;
