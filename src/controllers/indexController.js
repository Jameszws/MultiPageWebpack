/*
* index 控制器
*/
import "../static/css/common.css";
import "bootstrap";
import layer from "../libs/layer/layer.js";
import indexModel from "../models/indexModel.js"; //加载数据访问层

var indexController = {
    
    init:function(){
        console.log("this is index controller");
        this.getPageInfo();
    },
    
    //测试接口
    getPageInfo:function(){
        var params ={};
        indexModel.getPageInfo(params,function(ret){
            //这里处理接口返回的值
            console.log("这里是请求返回的结果");
        });
    }
}

indexController.init();
