/*
* 调用API操作
*/
import restApi from '../common/restApi.js';

var indexModel ={
    //测试请求
    getPageInfo:function(params,callback){
        restApi.get("/endtoend-replace-service/api/pagehearderservice/json/GetPageInfo",params,function(ret){
            //处理数并返回给controller
            callback && typeof callback == "function" && callback(ret);
        })
    }
};

export default indexModel;
