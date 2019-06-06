(function(){

    function Init (options) {
      
        this.parent = options.parent;
        this.searchBtn = options.searchBtn;
        this.tubiao = options.tubiao;
        this.default = options.default
        this.oDivtiming = options.oDivtiming;
        this.bntTu = options.bntTu;
       
        this.key = options.key || 'callback';
        this.jsonpCallback = options.jsonpCallback || '';
        this.url = options.url;
        this.type = options.type;
        this.success = options.success;
        this.dataName = options. dataName;
       
        this.createDom();
        this.addCss();
        this.bindEvent();
    }
    Init.prototype.createDom = function() {
        var content = $('<div class="content"></div>');
        var newForm = $('<div class="form"></div>');
        var form = $('<form></form>').append($('<span></span>'))
                                     .append('<input type="file" name="file" class="file">');
        $('<div class="oDiv"></div>').appendTo(newForm).text(this.default[0]) // 默认值
        $('<input type="text" class="oInput" value="">').appendTo(newForm)
        $('<span class="search-btn"></span>').appendTo(newForm)
            .append(form)
            .attr("title","未选择任何文件")
        // 没用 button   
        $('<span class="oInput-btn"></span>').append($('<span></span>'))
            .appendTo(newForm)  
        content.append(newForm)
            .appendTo(this.parent);
    }
    Init.prototype.addCss = function () {
        $('.content .form',this.parent).css({
            position:'absolute',
            left: 320,
            top: 25,
            width: 550,
            height:35,
            background:'#fff',
            color:'#989898',
        })
        $('.content .form .oDiv',this.parent).css({
            position:'absolute',
            left:0,
            top: 0,
            padding: '4px 44px 4px 4px',
            width: 450,
            border: '1px solid transparent',
            lineHeight: '25px',
            fontSize: '14px',
            outline: 'none',
        })
        $('.content .form .oInput',this.parent).css({
            display:'inline-block',
            padding:'4px 44px 4px 4px',
            width: 450,
            height: 25,
            border: '1px solid transparent',
            lineHeight: '25px',
            fontSize: '14px',
            position:'absolute',
            backgroundColor:'rgba(255,255,255,0)',
            color: "#424242",
        })
        $('.content .form .search-btn',this.parent).css({
            display:'inline-block',
            width:19,
            height:15,
            cursor:'pointer',
            position:'absolute',
            right:65,
            top:10,
        })
        $('.content .form .search-btn form span',this.parent).css({
            display:'inline-block',
            width:19,
            height:15,
            cursor: 'pointer',
            background:'url("'+ this.searchBtn +'")',
        })
        // 光标小手作用不上  好难受 这个 file type 的input 
        $('.content .form .search-btn form .file',this.parent).css({
            display:"none",
            position: 'absolute',
            width:19,
            height:15,
            right: 0,
            top: 0,
            cursor: 'pointer',
            filter: 'alpha(opacity=0)',
            MozOpacity: 0,
            opacity: 0,
            fontSize: 0,
        })

        $('.content .form .oInput-btn').css({
            display:'inline-block',
            width:50,
            height:35,
            background:'#f00',
            border:'none',
            boxSizing:'border-box',
            position:'absolute',
            top: 0,
            right: 0,
            cursor:'pointer',
        })
        $('.content .form .oInput-btn span').css({
            display:'inline-block',
            width:20,
            height:20,
            position:'absolute',
            top: 7,
            left: 14,
            background:'url("'+ this.bntTu +'")'              
        })
    }
    Init.prototype.bindEvent = function () {
        var self = this;
        var lock = true;
        var timer = null;
        // 相机 图片切换
        $('.content .form .search-btn',this.parent).hover(function(){
            $('.content .form .search-btn form span',this.parent).css({
                backgroundPosition:'-30px 0px',
            })
            $('.content .form .search-btn form .file',this.parent).css({
                display:'inline-block',
                zIndex:3,
                cursor: 'pointer',
            })
        },function(){
            $('.content .form .search-btn form span',this.parent).css({
                backgroundPosition:'0 0',
            })
            $('.content .form .search-btn form .file',this.parent).css({
                display:"none",
            })
        })
        // 处理 input 文字效果
        var oInput = $('.content .form .oInput',this.parent)
        oInput.focus(function(){
            lock = false;
            if(oInput.val() == ''){
                $('.content .form .oDiv',this.parent).css({
                    color:"rgb(200,200,200)"
                })
            }else{
                $('.content .form .oDiv',this.parent).css({
                    color:'rgba(255,255,255,0)',
                })
            }
        })
        
        oInput.on('input',function(){
            if(oInput.val() == ''){
                $('.content .form .oDiv',this.parent).css({
                    color:"rgb(200,200,200)"
                })
            }else{
                $('.content .form .oDiv',this.parent).css({
                    color:'rgba(255,255,255,0)',
                })
            }
            clearTimeout(timer);
            timer = setTimeout(function(){
                $.ajax({
                    async: false,
                    type: self.type,
                    url: self.url,
                    success: self.success,
                    // content:$('.oInput'),    
                    data:self.dataName + '=' + $(oInput).val() + '&code=utf-8',
                    dataType:'jsonp',
                    jsonp:self.key,
                    jsonpCallback: self.jsonpCallback,
                });
                console.log($(oInput).val())
            },251)
           
        })
        oInput.blur(function(){
            if(oInput.val() == ''){
                $('.content .form .oDiv',this.parent).css({
                    color:'#989898',
                })
            }else{
                $('.content .form .oDiv',this.parent).css({
                    color:'rgba(255,255,255,0)',
                }) 
            }
            lock = true;        
        })

        // 定时 oDiv 循环 value
        var oDiv =  $('.content .form .oDiv',this.parent)
        var i = 0;
        setInterval(timing,this.oDivtiming)
        function timing () {
            //加锁
            if(lock){
                if(i < self.default.length - 1 ){
                    i++
                    oDiv.text(self.default[i])  // 不知为何第一次没不赋值了 用默认的代替了
                }else{
                    i = 0
                    oDiv.text(self.default[i])
                }
            }
        }
        // 模拟下 提交事件
        $('.content .form .oInput-btn').on('click',function(){
            if($('.oInput').val() == ''){
                // 不知道控制台怎嘛多输出了的点东西
                console.log($('.oDiv').text())
            }else{
                console.log($('.oInput').val())
            }
        })
    }
    $.fn.extend({
        inputS: function (options) {
            options.parent = this;
            new Init(options);
            return this;
        }
    })
}())