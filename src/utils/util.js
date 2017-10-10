/*
* 基础操作类
*/
class Util {
    getQueryParams() { 
        var paramListObj={};
        var list=window.location.href.split('?');
        if(list.length>1){
            var paramList=list[1].split('&');
            for (var i = 0; i < paramList.length; i++) {
                var key = paramList[i].split("=")[0];
                var value = paramList[i].split("=")[1];
                paramListObj[key]=value;
            };
        }
        return paramListObj;
    }
}

export default Util;