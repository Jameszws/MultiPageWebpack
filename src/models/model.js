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
    },
    
    //get 请求
    get:function(url,params,callback){
        $.ajax({
            url:url,
            type:"GET",
            data:params,
            dataType:"json",
            success:function(ret){
                //ret是接口返回的数据，传到controller中
                callback && typeof callback == "function" && callback({
                    isSuccess:true,
                    ret:ret
                });
            },
            error:function(err){                
                callback && typeof callback == "function" && callback({
                    isSuccess:false
                });
            }
        });
    },
    
    //post 请求
    post:function(url,params,callback){
        $.ajax({
            url:url,
            type:"POST",
            data:params,
            dataType:"json",
            success:function(ret){
                //ret是接口返回的数据，传到controller中                
                callback && typeof callback == "function" && callback({
                    isSuccess:true,
                    ret:ret
                });
            },
            error:function(err){                
                callback && typeof callback == "function" && callback({
                    isSuccess:false
                });
            }
        });        
    }
};

export default model;
