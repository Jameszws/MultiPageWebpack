/*
* 调用API操作
*/
var model = {
    //获取商品信息(测试发送了个空请求)
    getGoodsInfo:function(params,callback){        
        $.ajax({
            url:"",
            data:params,
            success:function(ret){
                //ret是接口返回的数据，传到controller中
                callback && typeof callback == "function" && callback(ret);
            }
        });
    }
};

export default model;
