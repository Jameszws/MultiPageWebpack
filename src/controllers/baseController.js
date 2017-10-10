/*
* 控制器基类
*/
import Util from "../utils/util.js";
import LoadThirdJsDll from "../utils/loadThirdJsDll.js";
const util = new Util();
const loadThirdJsDll = new LoadThirdJsDll();

class BaseController {

    constructor(){
       this.loadEruda();
    }
    
    //同步加载 eruda 插件
    loadEruda(){
        let paramObj = util.getQueryParams();
        if(paramObj.isdebug && paramObj.isdebug.toLowerCase()=="yes") {
            let rootObject=document.body;
            loadThirdJsDll.addJs(rootObject,"../../src/libs/eruda/eruda.min.js");
            eruda.init();
        }
    }
    
}

export default BaseController;