function debounce (handler,delay){
    var timer = null;
    return function(){
        var _self = this,
            _arg = arguments;
        clearTimeout(timer);
        timer = setTimeout(function(){
            handler.apply(_self,_arg);
        },delay)
    }
}
function throttle(handler,wait){
    var lastTime = 0;
    return  function(e){
        var nowTime = new Date().getTime();
        if(nowTime - lastTime > wait){
            handler.apply(this,arguments);
            lastTime = nowTime;
        }
    }
}