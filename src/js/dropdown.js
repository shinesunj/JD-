(function() {

    function Init (options) {
        //  参数
        this.opt = options;
        // 下拉列表内容
        this.menuList = options.menuList || [],
        // 要放置的区域
        this.parent = options.parent;
        // 下拉列表的宽度
        this.itemWidth = options.itemWidth || 60;
        // 最外面的标题
        this.title = options.title || '',
        // 下拉列表内的每块的排布方式  横向排布（y） 纵向排布（x）
        this.direction = options.direction || 'x';
        // 标题的高度
        this.titleHeight = options.height || $(this.parent).height();
        // 居中方式
        this.align = options.align || 'left',
        // 标题的链接
        this.href = options.href || '';
        // 默认的字体颜色
        this.fontColor = options.color || $(this.parent).css('font-color');
        this.borderColor = options.borderColor || '#e3e4e5';
        this.createDom();
        this.bindEvent();
    }   
        //  dom 
        Init.prototype.createDom = function () {
            // 插件内容区
            // 下拉列表初始化时展示的标题
            // 下拉列表内的内容区
            var content = $('<div class="dropContent"></div>');
            var title = $('<div class="title-icon"></div>');
            var dropDownContent = $('<div class="dropDownContent"></div>');
            // 如果下面有子导航 则有下拉的图标
            if (this.menuList.length) {
                // 最外层标题展示
                $('<span></span>').text(this.title).appendTo(title);
                title.append($('<div class="down-icon"></div>'))
            } else {
                $('<span></span>').append($('<a href="' + this.href + '">' + this.title +'</a>')).appendTo(title);
            }

            // 下拉列表内容区的展示 内容区可以分成多块 按块展示
            for (var i = 0; i < this.menuList.length; i++) {
                var menuDetail = this.menuList[i];
                // 每一块的数据展示区
                var menu = $('<div class="menu"></div>')
                // 每一块的标题
                if (menuDetail.title){
                    $('<div class="item menu-title"></div>')
                        .html(menuDetail.title)
                        .appendTo(menu)
                        .css({
                            color:'#666',
                            textAlign: 'left',
                            padding: "0px 10px",
                        })
                }
                var itemListData = menuDetail.items;                                                                                           
                var itemList = $('<div class="itemList"></div>')
                // 每行展示几列数据 存储在当前块最外层的div上
                menu.attr('data_col_num',menuDetail.colNum)
                // 渲染每一个选项内容
                for (var j = 0; j < itemListData.length; j++){
                    var item = $('<div class="item"></div>')
                        .append($('<a href="' + itemListData[j].href + '">' + itemListData[j].name + '</a>'))
                        .appendTo(itemList);
                    if (this.direction == 'x') {
                        // 若每块是纵向排列 则每个选项的宽度应该为用户设置的整个下拉列表宽度除以每行展示个列数再减去每个的padding
                        item.css({
                            width: this.itemWidth / menuDetail.colNum - 20,
                            display: 'inline-block',
                            padding: '0 10px',
                            textAlign: 'left',
                            whiteSpace: 'nowrap' ,// 打点 ...
                        })
                    } else {
                        item.css({
                            width: menuDetail.width / menuDetail.colNum - 20,
                            display: 'inline-block',
                            padding: '0 10px',
                            textAlign: 'left',
                        })
                    }
                }
                menu.append(itemList).appendTo(dropDownContent).css('width', menuDetail.width);
            }
            content.append(title)
                .append(dropDownContent)
                .appendTo($(this.parent));
            this.addCss();
        }
        //  style
        Init.prototype.addCss = function () {
            $('a', this.parent).css({
                textDecoration: 'none',
                color: this.fontColor,
            })

            $('.dropContent', this.parent).css({
                display: 'inline-block',
                position: 'relative',
                color:this.fontColor,
                padding: '0 2px'
            });
         
            $('.dropContent > .title-icon', this.parent).css({
                position: 'relative',
                boxSizing: 'border-box',
                height:30,
                top:0,
                zIndex: 100,
                padding: '0 6px',
                backgroundColor: $(this.parent).parents().css('background-color'),
                border: 'none',
                cursor: 'pointer',
            })
            $('.dropContent > .title-icon .down-icon', this.parent).css({
                display: 'inline-block',
                width:'12px',
                height:'6px',
                marginLeft:4,
                background: "url('./src/img/timg.png')",
                backgroundSize:'100% 100%', 
            })

            if (this.direction == 'y') {
                $('.dropContent > .dropDownContent', this.parent).css({
                    width: this.itemWidth - 22,
                    padding: '0 10px',
                    border: '1px solid #e3e4e5',
                    position: 'absolute',
                    top: this.titleHeight - 1 +'px',
                    color: this.fontColor,
                    backgroundColor: '#fff',
                    zIndex: 101,
                    right: -72,
                    margin: '0 auto',
                    display: 'none',
                    
                })
                $('.dropContent > .dropDownContent .menu', this.parent).css({
                    float: 'left',
                    borderLeft: '1px solid #eee',
                    padding: '6px 2px',
                });
                $('.dropContent > .dropDownContent .menu:nth-child(1)', this.parent).css({
                    borderLeft:"none",
                });
                
            } else {
                $('.dropContent > .dropDownContent', this.parent).css({
                    padding: '0 10px',
                    border: '1px solid ' + this.borderColor,
                    position: 'absolute',
                    top: this.titleHeight - 1 +'px',
                    color: this.fontColor,
                    display: 'none',
                    backgroundColor: '#fff',
                    zIndex: 101,
                });
                $('.dropContent > .dropDownContent .menu', this.parent).css({
                    width: this.itemWidth,
                    folat: 'left',
                    borderBottom: '1px solid #eee',
                });
            }
            if (this.align == 'left' && this.direction == 'x') {
                $('.dropContent > .dropDownContent', this.parent).css({
                    left:0
                })
            } else if(this.direction == 'x') {
                $('.dropContent > .dropDownContent', this.parent).css({
                    right: 0
                })
            }
           
            $('.dropContent .dropDownContent .menu-title', this.parent).css({
                fontWeight: '900',
                width:'100%',
                textAlign: 'left'
            })
            $('.dropContent .itemList', this.parent).css({
                textAlign: 'left'
            })
            $('.dropContent > .dropDownContent .item', this.parent).css({
                display: 'inline-block',
                textAlign: 'left',
                height: 26,
            })
        }
        //  绑定 事件
        Init.prototype.bindEvent = function () {
            var self = this;
            if (this.menuList.length) {
                $('.dropContent', $(self.parent)).hover(function (e) {
                    e.preventDefault();
                    $('.dropContent > .dropDownContent', self.parent).show();
                    $('.dropContent > .title-icon', self.parent).css({
                        position: 'relative',
                        boxSizing: 'border-box',
                        height:30,
                        top:0,
                        zIndex: 102,
                        backgroundColor: '#fff',
                        border: '0px solid ' + self.borderColor,
                        borderBottom: 'none',
                        cursor: 'pointer',
                    })
                }, function () {
                    $('.dropContent > .dropDownContent', self.parent).hide();
                    $('.dropContent > .title-icon', self.parent).css({
                        position: 'relative',
                        boxSizing: 'border-box',
                        height:30,
                        zIndex: 100,
                        top:0,
                        backgroundColor: $(self.parent).parents().css('background-color'),
                        border: 'none',
                        cursor: 'pointer', 
                    })
                });
            } else {
                $('.title-icon a', this.parent).hover(function () {
                    $(this).css('color', 'red')      
                }, function () {
                    $(this).css('color', self.fontColor)
                })
            }
            $('.item', this.parent).hover(function () {
                $(this).find('a').css('color', 'red');
            }, function () {
                $(this).find('a').css('color', self.fontColor)
            });
            $('.dropContent > .title-icon span', self.parent).hover(function(){
                $(this).css({
                    color:'red',
                })
            },function(){
                $(this).css({
                    color:'#999'
                })
            })     
        }
    $.fn.extend({
        dropdown: function(options){
            options.parent = this;
            new Init(options);
            return this;
        }
    })
} ())