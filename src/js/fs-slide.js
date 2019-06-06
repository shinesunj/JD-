(function () {
    // 初始化函数
    function Init(options){
        // 保存父元素 即轮播图要插入的位置 
        this.parent = options.parent;
        // 存储 用户要轮播的所有图片
        this.images = options.images;
        // 轮播的方向
        this.direction = options.direction || 'next';
        // 图片的宽度
        this.width = options.width || $(this.parent).width();
        // 图片的高度
        this.height = options.height || $(this.parent).height();
        // 自动轮播的时间
        this.autoTime = options.autoTime || 2000;
        // index  当前图片的索引值
        this.nowIndex = options.nowIndex || 0;
        // 判断 当前动画是否结束
        this.lock = false;
        // 定时器 自动轮播
        this.timer = null;
        // 图片的个数
        this.imgNum = options.images.length;
        // 按钮大小 
        this.buttonWidth = options.buttonWidth || 50;
        this.buttonHeight = options.buttonHeight || 50;
        // 按钮背景
        this.buttonBackground = options.buttonBackground || '#eee',
        // 按钮字体
        this.buttonColor = options.buttonColor || '#000',
        this.createDom();
        this.addCss();
        this.bindEvent();                              
        this.autoMove();
        this.changeIndex();                            
    }
    // 创建轮播图内容结构
    Init.prototype.createDom = function(){
        var imgContent = $('<ul class="imgContent"></ul>');
        var pointer = $("<div class='pointer'></div>")
        for(var i = 0;i < this.imgNum; i++){
            $('<li><img src = "' + this.images[i] + '"/></li>').appendTo(imgContent);
            $('<span></span>').appendTo(pointer);
        }
        //插入最后几个li  内容于第一张一样
        imgContent.append($('<li><img src = "' + this.images[0] + '"/></li>'));
        $(this.parent).append(imgContent)
                      .append($("<div class='btn left-btn'><span></span></div>"))
                      .append($("<div class='btn right-btn'><span></span></div>"))
                      .append(pointer);
    }
    // 添加初始化样式
    Init.prototype.addCss = function(){
        $('*',this.parent).css({
            margin:0,
            padding:0,
            listStyle: 'none',
        });
        $('.imgContent',this.parent).css({
            width: this.width * (this.imgNum + 1),
            height: this.height,
            "font-size": '0px',
            position: 'absolute',
            left: 0,
            right: 0,
        });
        $('.imgContent > li',this.parent).css({
            width: this.width,
            height: this.height,
            display:'inline-block',
            zIndex:0,
            opacity:1,
            transition: 'background .2s ease'
        });
        $('.imgContent > li > img',this.parent).css({
            width:'100%',
            height:'100%',
        });
        $('.btn',this.parent).css({
            width: this.buttonWidth,
            height: this.buttonHeight,
            background: this.buttonBackground,
            color: this.buttonColor,
            position: 'absolute',
            top: '50%',
            marginTop: '-25px',
            textAlign: 'center',
            lineHeight: this.buttonHeight + 'px',
            cursor: "pointer",
            opacity: 0.5,
            borderRadius: '4px',
            display: 'none',
        });
        $('.btn.left-btn',this.parent).css({
            left:0,
        });
        $('.btn.right-btn',this.parent).css({
            right:0,
        });
      
        $('.btn.left-btn span',this.parent).css({
            display: 'inline-block',
            width:'6px',
            height: '12px',
            background:'url("./src/img/timg-3.png")',
            backgroundSize:'100% 100%',
            marginTop:'14px',
        })
        $('.btn.right-btn span',this.parent).css({
            display: 'inline-block',
            width:'6px',
            height: '12px',
            background:'url(" ./src/img/timg-2.png")',
            backgroundSize:'100% 100%',
            marginTop:'14px',
        })
        $('.pointer',this.parent).css({
            display: 'inline-block',
            position:'absolute',
            left: '46px',
            bottom: '20px',
        });
        $('.pointer > span',this.parent).css({
            display: 'inline-block',
            width: 6,
            height: 6,
            borderRadius: '50%',
            border: '2px solid rgba(255,255,255,0.3)',
            cursor: 'pointer',
            marginLeft:'6px',
            transition: 'background .2s ease',
        });

    }
    //  所有事件的集合  添加事件
    Init.prototype.bindEvent = function (){
        // 划过 事件
        var self = this;
        $(this.parent).hover(function(){
            $('.btn',self.parent).fadeIn();
            clearInterval(self.timer);
        }, function(){
            $('.btn',self.parent).fadeOut();
            self.autoMove();
        })
        // 按钮 button
        $(this.parent).on('click','.btn',function(e){
            if($(this).hasClass('left-btn')){
                self.move("prev")
            }else if($(this).hasClass('right-btn')){
                self.move("next")
            }
        })
        // 索引 index
        $('.pointer',this.parent).on('mousemove','span',function(e){
            self.move($(this).index());
            // console.log($(this).index())
        })
    }
    //  运动 的函数    dir 运动方向 prev 向左； next 向右 
    Init.prototype.move = function (dir){
        var self = this;
        if(this.lock){
            return false;
        }
        this.lock = true; 
        if(dir == 'prev'){
            if(this.nowIndex == 0){
                this.nowIndex = this.imgNum;
                $('ul',this.parent).css('left', - this.nowIndex * this.width)
            }
            this.nowIndex --;
            $('ul',this.parent).animate({
                'left':  - this.nowIndex * this.width
            },0, function(){
                self.changeIndex();
                self.lock = false;
            })
            
            console.log($('ul li',this.parent))
        }else if(dir == 'next'){
            if(this.nowIndex == this.imgNum){
                this.nowIndex = 0;
                $('ul',this.parent).css('left', - this.nowIndex * this.width)
            }
            this.nowIndex ++;
            $('ul',this.parent).animate({
                'left':  - this.nowIndex * this.width
            },0,function(){
                self.changeIndex();
                self.lock = false;
            })
        }else if(typeof dir == "number"){
            this.nowIndex = dir;
            $('ul',this.parent).animate({
                'left':  - this.nowIndex * this.width
            },0,function(){
                self.changeIndex();
                self.lock = false;
            })
        }
    }
    // 小红点展示
    Init.prototype.changeIndex = function (){
        $('.pointer > span',this.parent).css({
            background:'rgba(255,255,255,0)',
            border: '2px solid rgba(255,255,255,0.6)',
        });
        if(this.nowIndex == this.imgNum){
            $('.pointer > span',this.parent).eq(0).css({
                width: 6,
                height: 6,
                borderRadius: '50%',
                border: '2px solid rgba(255,255,255,0.2)',
                background:'rgba(255,255,255,1)',
                cursor: 'pointer',
                marginLeft:'6px',
                transition: 'background .2s ease',
            });
        }else{
            $('.pointer > span',this.parent).eq(this.nowIndex).css({
                width: 6,
                height: 6,
                borderRadius: '50%',
                border: '2px solid rgba(255,255,255,0.2)',
                background:'rgba(255,255,255,1)',
                cursor: 'pointer',
                marginLeft:'6px',
                transition: 'background .2s ease',
            });
        }
    }
    // 默认 next 移动
    Init.prototype.autoMove = function (){
        var self = this;
        this.timer = setInterval(function(){
            if(self.direction == 'next'){
                self.move('next')
            }else if(self.direction == 'prev'){
                self.move('prev')
            }
        },this.autoTime)
    }
    // 封装在 jQ 原型上
    $.fn.extend({
        fsSlide: function(options){
            options.parent = this;
            new Init(options);
            return this;
        } 
    })
} ())




//
// (function(){

//     function Init (options) {
//         this.parent = options.parent;
//         this.width = options.width || $(this.parent).width();
//         this.height = options.height || $(this.parent).height();
//         this.autoTime = options.autoTime || 2000;
//         this.nowIndex = options.nowIndex || 0;
//         this.lock = false;
//         this.timer = null;
//         this.direction = options.direction || 'next';
//         this.biaoji = options.biaoji;
//         this.images = options.images;
//         this.imgNum = options.images.length;
//         this.buttonWidth = options.buttonWidth || 50;
//         this.buttonHeight = options.buttonHeight || 50;
//         this.buttonBackground = options.buttonBackground || '#eee';
//         this.buttonColor = options.buttonColor || '#000';
                    
//         this.createDom()
//         this.addCss()
//         this.bindEvent();
//     }
//     Init.prototype.createDom = function(){
//         var content = $('<div class="content"><div>')
//         var oUl = $('<ul class="oUl"></ul>');
//         var pointer = $("<div class='pointer'></div>")
//         for(var i = 0;i < this.imgNum; i++){
//             $('<li><img src = "' + this.images[i] + '"/></li>').appendTo(oUl);
//             $('<span></span>').appendTo(pointer);
//         }
//         $(content).append(oUl)
//             .append($("<div class='btn left-btn'><span></span></div>"))
//             .append($("<div class='btn right-btn'><span></span></div>"))
//             .append(pointer);
//         content.appendTo(this.parent)
//         $('li:eq(0)','.oUl').append($('<span></span>'));
//         $('li:eq(2)','.oUl').append($('<span></span>'));
//     }
//     Init.prototype.addCss = function () {
//         $('*',this.parent).css({
//             margin:0,
//             padding:0,
//             listStyle: 'none',
//         });
//         $('.content',this.parent).css({
//             position: 'relative',
//         })
//         $('.oUl',this.parent).css({
//             width: this.width ,
//             height: this.height,
//             "font-size": '0px',
//         });
//         $('.oUl li',this.parent).css({
//             position:'absolute',
//             left: 0,
//             right: 0,
//             opacity: 1,
//             zIndex: 0,
//             transition: 'opacity 500ms ease-in-out 0s'
//         })
//         $('.btn',this.parent).css({
//             width: this.buttonWidth,
//             height: this.buttonHeight,
//             background: this.buttonBackground,
//             color: this.buttonColor,
//             position: 'absolute',
//             top: '50%',
//             marginTop: '-25px',
//             textAlign: 'center',
//             lineHeight: this.buttonHeight + 'px',
//             cursor: "pointer",
//             opacity: 0.5,
//             borderRadius: '4px',
//             display: 'none',
//         });
//         $('.btn.left-btn',this.parent).css({
//             left:0,
//         });
//         $('.btn.right-btn',this.parent).css({
//             right:0,
//         });
      
//         $('.btn.left-btn span',this.parent).css({
//             display: 'inline-block',
//             width:'6px',
//             height: '12px',
//             background:'url("./src/img/timg-3.png")',
//             backgroundSize:'100% 100%',
//             marginTop:'14px',
//         })
//         $('.btn.right-btn span',this.parent).css({
//             display: 'inline-block',
//             width:'6px',
//             height: '12px',
//             background:'url(" ./src/img/timg-2.png")',
//             backgroundSize:'100% 100%',
//             marginTop:'14px',
//         })
//         $('.pointer',this.parent).css({
//             display: 'inline-block',
//             position:'absolute',
//             left: '46px',
//             bottom: '20px',
//         });
//         $('.pointer > span',this.parent).css({
//             display: 'inline-block',
//             width: 6,
//             height: 6,
//             borderRadius: '50%',
//             border: '2px solid rgba(255,255,255,0.3)',
//             cursor: 'pointer',
//             marginLeft:'6px',
//             transition: 'background .2s ease',
//         });
//         $('li:eq(0) span','.oUl').css({
//             width:75,
//             height:75,
//             position: 'absolute',
//             top:0,
//             left:20,
//             zIndex:2,
//             background:'url("./src/img/lbT-2.png")'
//         })
//         $('li:eq(2) span','.oUl').css({
//             width:34,
//             height:20,
//             position: 'absolute',
//             right:0,
//             bottom:0,
//             zIndex:2,
//             background:'url("./src/img/lbT-1.png")'
//         })
//     }
//     Init.prototype.bindEvent = function () {


//     }
//     $.fn.extend({
//         fsSlide: function(options){
//             options.parent = this;
//             new Init(options);
//             return this;
//         }
//     })
// }())