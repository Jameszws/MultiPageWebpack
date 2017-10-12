/*
* detail 控制器
*/
import "../static/css/common.css";
import "../static/css/detail.css";

import BaseController from "./baseController.js";

class  DetailController extends BaseController {
    constructor(){
        super();
    }
    init(){
        console.log("this is detail controller");
    }
};

new DetailController().init();