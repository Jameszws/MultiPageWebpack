/*
* index 控制器
*/
import "../static/css/common.css";
import "bootstrap";
import layer from "../libs/layer/layer.js";
import IndexModel from "../models/indexModel.js"; //加载数据访问层
import BaseController from "./baseController.js";

const indexModel = new IndexModel();

class IndexController extends BaseController {
        
    init(){
        console.log("this is index controller");
        this.getPageInfo();
    }
    
    //测试接口
    getPageInfo(){
        var params ={};
        indexModel.getPageInfo(params,function(ret){
            //这里处理接口返回的值
            console.log("请求完成，结果为",ret);
        });
    }
}

new IndexController().init();
