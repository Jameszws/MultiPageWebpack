/*
* 调用API操作
*/
import RestApi from '../common/restApi.js';
const restApi = new RestApi();

class IndexModel {
    //测试请求
    getPageInfo(params,callback) {
        restApi.get({
            url:"/endtoend-replace-service/api/pagehearderservice/json/getPageInfo",
            callback:function(ret){
                //处理数并返回给controller
                callback && typeof callback == "function" && callback(ret);
            }
        });
    }
}

export default IndexModel;
