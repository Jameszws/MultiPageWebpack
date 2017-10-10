/*
* rest 统一接口请求
*/
class RestApi {
    
    //get 请求
    get(options){
        $.ajax({
            url:options.url,
            type:"GET",
            headers:options.headers?options.headers:{},
            timeout:options.timeout?options.timeout:3000,
            data:options.params?options.params:{},
            dataType:options.dataType?options.dataType:"json",
            async:options.async?options.async:"async",
            contentType:options.contentType?options.contentType:"application/x-www-form-urlencoded",
            success:function(ret){
                //ret是接口返回的数据，传到controller中
                options.callback && typeof options.callback == "function" && options.callback({
                    isSuccess:true,
                    ret:ret
                });
            },
            error:function(err){                
                options.callback && typeof options.callback == "function" && options.callback({
                    isSuccess:false
                });
            }
        });
    }
    
    //post 请求
    post(options){
        $.ajax({
            url:options.url,
            type:"POST",
            headers:options.headers?options.headers:{},
            timeout:options.timeout?options.timeout:3000,
            data:options.params?options.params:{},
            dataType:options.dataType?options.dataType:"json",
            async:options.async?options.async:"async",
            contentType:options.contentType?options.contentType:"application/x-www-form-urlencoded",
            success:function(ret){
                //ret是接口返回的数据，传到controller中                
                options.callback && typeof options.callback == "function" && options.callback({
                    isSuccess:true,
                    ret:ret
                });
            },
            error:function(err){                
                options.callback && typeof options.callback == "function" && options.callback({
                    isSuccess:false
                });
            }
        });        
    }
}

export default RestApi;