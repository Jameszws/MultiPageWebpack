/*
* 发布——订阅
*/
const PubSub = {
    topics : {},
    subUid : -1,
    //发布消息
    publish(topic, args) {
        if(!this.topics[topic]) {return;}
        let subs = this.topics[topic],
            len = subs.length;
        while(len--) {
            subs[len].func(topic, args);
        }
        return this;
    },
    //订阅事件
    subscribe(topic, func) {
        this.topics[topic] = this.topics[topic] ? this.topics[topic] : [];
        let token = (++this.subUid).toString();
        this.topics[topic].push({
            token : token,
            func : func
        });
        return token;
    },
    //取消订阅
    off(msgname,token){
        for(let name in this.topics ){
            let msgObj=this.topics[name];
            for(let i=0;i<msgObj.length;i++){
                if(msgObj[i].token==token){
                    msgObj.splice(i,1);
                    break;
                }
            }
        }
    }
};

export default PubSub;