//定时切换 logo
(function(){    
    function Init (options) {
        this.parent = options.parent
        this.url = options.url;
        this.timing = options.timing;
        this.createDom()
        // this.addCss() // 重绘不好就 算了
        this.bindEvent()
    }
    Init.prototype.createDom = function () {
        $('<div class="logo_extend">')
            .append($('<a href="#" class="J_logo_extend" title = "京东"></a>'))
            .appendTo(this.parent)
    }
    Init.prototype.bindEvent = function () {
        var self = this;
        var i = 0;   
        var timer = null; 
        var lock = true;
        var ele = $('.header-content .logo .logo_extend .J_logo_extend','.header')
        // this.timing == 10000
        setInterval(timing ,this.timing);
        
         function timing () {
            if(i < self.url.length - 1 ){
                if(lock){
                    i++
                }       
                ele.css({
                    background:'url("'+ self.url[i] +'")'   
               })
            }else{
                i = 0
                ele.css({
                    background:'url("'+ self.url[i] +'")'  
               })
            }  
         }
         $('.J_logo_extend').hover(function(){
            lock = false;        
         },function(){
             lock = true;
         })
    }
    $.fn.extend({
        logoS: function (options) {
            options.parent = this;
            new Init(options);
            return this;
        }
    })
}())