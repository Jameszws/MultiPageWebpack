/**
*  加载第三方js文件
*/    
var loadThirdJs={
    init:function(){
        this.loadVConsole();
    },
    loadVConsole:function(){
        var paramObj=this.getQueryParams();
        var isdebug = paramObj.isdebug;
        if(isdebug && isdebug.toLowerCase()=="yes"){
            var html = '<script src="src/libs/eruda/eruda.min.js"><\/script>'+'<scr' + 'ipt>eruda.init();</scr' + 'ipt>';
            
            document.write(html);       
        }
    },
    getQueryParams:function() { 
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
};

loadThirdJs.init();

