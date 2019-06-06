(function () {

    var obj = {
        // 初始化
        init: function (options) {
            this.parent = options.parent;
            this.items = options.items;
            this.itemWidth = options.itemWidth,
            this.itemHeight = options.itemHeight,
            this.rowNum  = options.rowNum || 5;
            this.nowItem = options.nowItem || this.items[0] || '';
            this.nowItemImg = options.nowItemImg || '';
            this.fontColor = options.color || $(this.parent).css('color');
            this.itemImgWidth = options.itemImgWidth || parseInt($(this.parent).css('font-size')) || parseInt($(window).css('font-size'));
            this.itemImgHeight = options.itemImgHeight ||  parseInt($(this.parent).css('font-size')) || parseInt($(window).css('font-size'));
            this.title = options.title;
            this.backgroundImg = options.backgroundImg;
            // console.log(this.backgroundImg)
            this.state = options.state || "",
            // 创建dom
            this.createDom();
            // 绑定事件
            this.bindEvent()
        },
        // 创建dom元素
        createDom: function () {
            // 插件最外层
            var wrapper = $('<div class="areaContent"></div>');
            // 当前展示的地区
            var nowArea = $('<div id = "nowArea"></div>')
            // 地区列表
            var itemList = $('<div class="itemList"></div>');
            // 底部的信息
            var state= $('<div class="state"></div>') 
            //
            var oUl = $('<ul class="oUl"></ul>')
            if(this.nowItemImg) {
                var img = new Image();
                img.src = this.nowItemImg;
                img.width = this.itemImgWidth;
                img.height = this.itemImgHeight;
                img.onload = function(){
                    $(img).prependTo(nowArea);
                }
            }
            $('<span class="item-name"></span>').html(this.nowItem).appendTo(nowArea);

            for ( var i = 0; i < this.items.length; i++) {
                var itme_a = $('<a href="' + this.items[i].href  + '">'+ this.items[i].name + '</a>')
                itme_a.attr('data_name', this.items[i].name)
                 $('<div class="item"></div>')
                    .append($(itme_a))
                    .appendTo(itemList)
            }
            // for (var i = 0; i < this.items.length; i++){
            //     $('<div class="item"></div>')
            //         .append($('<a href="' + this.items[i].href  + '">'+ this.items[i].name + '</a>'))
            //         .appendTo(itemList)
            //         .attr('data_name', this.items[i].name);
            // } 

            // .append($('<span class="img'+ i +'"></span>'))
            // .append($('<a href="'+ this.state[i].href +'"></a>'))
            // .appendTo(oUl);
            for(var i = 0; i < this.state.length; i++){
                $('<a href="'+ this.state[i].href +'"></a>')
                        .append($('<span class="img'+ i +'"></span>'))
                        .append($('<div class="oDiv">'+ this.state[i].name +'</div>'))
                        .appendTo($('<li class="newLi"></li>'))
                        .appendTo(oUl)
            }

            // 将dom元素插入到页面中
            state.append($('<div class="borderX"></div>'))
                        .append($('<p>'+ this.title +'</p>'))
                        .append(oUl)
                        .appendTo(itemList);
            wrapper.append(nowArea)
                    .append(itemList)
                    .appendTo($(this.parent));
            // 添加初始化样式
            this.addCss();
        },

        addCss: function () {
            $('.areaContent', this.parent).css({
                'position': 'relative',
                'display': 'inline-block',
            });
            $('.areaContent #nowArea', this.parent).css({
                boxSizing: 'border-box',
                display: 'inline-block',
                padding: '0 6px',
                cursor: 'pointer',
                textAlign:'center',
                height: $(this.parent).height(),
                lineHeight:$(this.parent).height()+ 'px',
                position: 'relative',
                color: this.fontColor,
                zIndex: '100',
                verticalAlign: 'middle', 
            });
            $('.areaContent > #nowArea > span', this.parent).css({
                'display': 'inline-block',
                padding: '0 4px',
            })
            $('.areaContent > .itemList', this.parent).css({
                border: '1px solid #ddd',
                position: 'absolute',
                padding: '10px 16px 15px 10px',
                top:  $(this.parent).height() - 2 + 'px',
                width: this.itemWidth * this.rowNum,
                height: this.itemHeight,
                background:"#fff",
                display: 'none',
                zIndex:100,
            })
            $('.areaContent .itemList .item a', this.parent).css({
                display: 'inline-block',
                textDecoration: 'none',
                color: this.fontColor,
                margin: '0 auto',
                padding: '0 4px',
                height: '100%',
            })
            // for(var i = 0,j = 1; i < this.items.length; i++,j++){
            //    (function(i) {
                    // $('.areaContent > .itemList > .item:nth-child(j)', this.parent).css({
                    //     width: this.items[i].name.length * 20,   
                    // })
            //    } (i))
            // }

            $('.areaContent > .itemList > .item', this.parent).css({
                display: 'inline-block',
                width: this.itemWidth, 
                margin:'2px 0',  
                // 用IE6混杂盒模型
                boxSizing: 'border-box',    
            });
            $('.areaContent > .itemList > .item a', this.parent).css({
                padding:'0 10px'
            })
            $('.areaContent > .itemList .borderX',this.parent).css({
                marginTop: 8,
                borderBottom:'1px dotted #eee',
            })
            $('.itemList .state',this.parent).css({
                padding: '0 16px',
            })
            $(".state .oUl",this.parent).css({
                overflow: 'hidden'

            })
            $(".state .oUl a",this.parent).css({
                display: 'inline-block',
                color:'#999',
                width: '50%',
            })

            //    问题 图片 url 的路径是在html文件那引用的 
            $('.itemList .state .oUl span',this.parent).css({
                width: 13,
                height: 12,
                display:'inline-block',
                background:"red",
                marginRight: 10,
            })

            $('.state .oUl a div',this.parent).css({
                display: 'inline-block',
            })
            $('.itemList .state .oUl span.img0',this.parent).css({
                background: "url("+ this.backgroundImg +")",
            })
            $('.itemList .state .oUl span.img1',this.parent).css({
                background: "url("+ this.backgroundImg +")",
                backgroundPosition: '-20px 0px'
            })
            $('.itemList .state .oUl span.img2',this.parent).css({
                background: "url("+ this.backgroundImg +")",
                backgroundPosition: '0px -15px'
            })
            $('.itemList .state .oUl span.img3',this.parent).css({
                background: "url("+ this.backgroundImg +")",
                backgroundPosition: '-40px 0px'
            })
            $('.itemList .state .oUl span.img4',this.parent).css({
                background: "url("+ this.backgroundImg +")",
                backgroundPosition: '-20px -20px'
            })
        },

        bindEvent: function(){
            var self = this;
            $('.areaContent',this.parent).hover(function () {
                $('.areaContent > #nowArea',this.parent).css({
                    border: '1px solid #ddd',
                    borderBottom:'none',
                    backgroundColor:'#fff',
                })
                $('.areaContent > .itemList',this.parent).show();
            }, function () {
                $('.areaContent > #nowArea',this.parent).css({
                    border:'1px solid #e3e4e5',
                    backgroundColor: '#e3e4e5'
                })
                $('.areaContent > .itemList', this.parent).hide()
            });

            $('.state .oUl a div',this.parent).hover(function(){
                $(this).css({
                    color: "red",
                })
            },function(){
                $(this).css({
                    color: "#999",
                })
            })


            $('.areaContent > itemList a').click(function (e) {
                e.preventDefault();
            })

          
            $('.areaContent > .itemList .item').on('click', 'a', function (e) {
                e.stopPropagation();
                $('.areaContent > .itemList .item a').css({
                    backgroundColor: '#fff',
                    color:self.fontColor,
                })
                $('a').removeClass('active') // 问题解决
                $(this).css({
                    backgroundColor: 'red',
                    color:'#fff',
                }).addClass('active');
                $('.areaContent > #nowArea > span').text($(this).attr('data_name'));
            }).on('mouseover', 'a', function (e) {
                e.preventDefault();
                e.stopPropagation();
                if (!$(this).hasClass('active')) {          // if 原因
                    $(this).css({
                        backgroundColor: '#eee',
                        color:'red',
                    })
                    console.log($(this));
                }
            }).on('mouseout', 'a', function (e) {
                if (!$(this).hasClass('active')) {          // if 原因
                    $(this).css({
                        backgroundColor: '#fff',
                        color:self.fontColor,
                    })
                }else{
                    $(this).css({
                        backgroundColor: 'red',
                        color:'#fff',
                    })
                }
                console.log($(this));
                $('.active').css({
                    background:'red',
                    color:'#fff',
                })
            });


        }
    }
    $.fn.extend({
        areaList: function (options) {
            options.parent = this;
            obj.init(options);
        }
    })
} ())
