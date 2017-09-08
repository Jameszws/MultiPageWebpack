/*
* index 控制器
*/
import "../static/css/common.css";
import model from "../models/model.js"; //加载数据访问层

var indexController={
    
    init:function(){
        console.log("this is index controller");
        this.getGoodsInfo();
    },
    
    //获取商品信息
    getGoodsInfo:function(){
        var params ={};
        model.getGoodsInfo(params,function(ret){
            //这里处理接口返回的值
            console.log("这里是请求返回的结果");
        });
    }
};

indexController.init();
