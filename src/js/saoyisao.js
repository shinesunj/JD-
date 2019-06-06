(function () {
    //初始化声明
    function Init (options) {
        this.parent = options.parent;
        this.title = options.title;
        this.align = options.align;
        this.color = options.color;
        this.imgUrls = options.imgUrls;
        this.imgUrlsSize = options.imgUrlsSize || 70; 
        this.shangbiaoSize = options.shangbiaoSize || 25;
        this.menuListWidth = options.menuListWidth || 190;
        this.menuList = options.menuList || {};
        this.createDom();
        this.addCss();
        this.bindEvent();
    }
    Init.prototype.createDom = function () {
        var content = $('<div class="dropContent"></div>');
        var newtitle = $('<div class="title-icon"></div>');
        var dropDownContent = $('<div class="dropDownContent"></div>');
        var mobile = ($('<div class="mobile" style="width: 60px; height: 60px;"></div>'));
        $('<span></span>').text(this.title).appendTo(newtitle)
        for(var i = 0; i < this.menuList.length; i++){
            var menu = $('<div class="menu"></div>').appendTo(dropDownContent)
            var imgDiv = $('<div class="imgDiv"></div>').appendTo(menu)
            var textDiv = $('<div class="textDiv"></div>').appendTo(menu)
            $('<img class="imgD"/>').appendTo(imgDiv)
                .attr("src",this.imgUrls[i])
                .css({
                    width: this.imgUrlsSize,
                    height: this.imgUrlsSize,
                    margin: '2px auto',
                })
            $('<h5></h5>').html(this.menuList[i].title).appendTo(textDiv);    
            $('<p></p>').html(this.menuList[i].duanl).appendTo(textDiv);
            if(this.menuList[i].shangbiao){
                var spanDiv = $('<div class="spanDiv"></div>').appendTo(textDiv)
                var len = this.menuList[i].shangbiao.length;
                for(var j = 0; j < len; j++){
                    $('<span class="'+ "span-" + j +'"></span>').appendTo(spanDiv)
                        .css({
                            width: this.shangbiaoSize,
                            height: this.shangbiaoSize,
                            display: 'inline-block',
                            margin:'0 2px',
                            background:'url("' + this.menuList[i].shangbiao[j] + '")',
                    })
                }   
            }
        }
        var mobileF = $('<div class ="mobileF"></div>')
        mobileF.append(mobile)
        content.append(newtitle)
            .append(mobileF)
            .append(dropDownContent)
            .appendTo(this.parent)
    }
    Init.prototype.addCss =  function () {
        // 有需求连接时备用
        $(this.parent).css({
            textDecoration: 'none',
            color:'#999',
            zIndex:100,
        })
        $('.dropContent', this.parent).css({
            display: 'inline-block',
            position: 'relative',
            color:this.fontColor,
            padding: '0 2px'
        });
        $('.dropContent > .title-icon', this.parent).css({
            position: 'relative',
            top:0,
            zIndex: 100,
            padding: '0 6px',
            backgroundColor: $(this.parent).parents().css('background-color'),
            border: 'none',
            cursor: 'pointer',
        })
        $('.dropContent .dropDownContent',this.parent).css({
            padding: '0px 0px',
            border: '1px solid #E7E7E7',
            position: 'absolute',
            top: 29,
            right:0,
            color: this.color,
            display: 'none',
            zIndex:110,
            width: this.menuListWidth,
            backgroundColor:"#fff",
            paddingBottom:'6px',
            borderBottom:'3px solid #60575a ' 
        })
        $('.dropContent .dropDownContent .menu',this.parent).css({
            width: '100%',
            padding: '4px 0',
            borderBottom: '1px solid #E7E7E7',
            position: 'relative',
        })
        $('.dropContent .dropDownContent .menu:nth-child(3)',this.parent).css({
            borderBottom:'none',
        })
        $('.dropContent .dropDownContent .menu .imgDiv',this.parent).css({
            width:74,
            height:74,
            border: '1px solid #ccc',
            position: 'absolute',
            left: 5,
            top: 10,
           
        })
        $('.dropContent .dropDownContent .menu .textDiv',this.parent).css({
            margin: '14px 0px 0 86px',
            minHeight: '70px',
            border: '0px solid #ccc',
            textAlign: 'left',
            overflow: 'hidden',
        })
        $('.dropContent .dropDownContent .menu .textDiv h5',this.parent).css({
            fontSize: '12px',
            lineHeight: '18px',
            color: '#666 !important',
        })
        $('.dropContent .dropDownContent .menu .textDiv p',this.parent).css({
            margin: '3px 0',
            lineHeight: '14px',
            color:' #F10214',
        })
        $('.dropContent .dropDownContent .menu .textDiv .spanDiv',this.parent).css({
            overflow: 'hidden',
            height: 25,
        })
        $('.dropContent .dropDownContent .menu .textDiv .spanDiv .span-0',this.parent).css({
            backgroundPosition: '0px 0px',      
        })
        $('.dropContent .dropDownContent .menu .textDiv .spanDiv .span-1',this.parent).css({
            backgroundPosition: '0px 51px',
        })
        $('.dropContent .dropDownContent .menu .textDiv .spanDiv .span-2',this.parent).css({
            backgroundPosition: '0px 25px',
        })   
    }
    Init.prototype.bindEvent = function () {
        var self = this;
        $(this.parent).hover(function(e){
            e.preventDefault();
            $('.dropContent .dropDownContent',self.parent).show();
        },function(){
            $('.dropContent .dropDownContent',self.parent).hide()
        })
    }
    $.fn.extend({
        saoyisao: function (options) {
            options.parent = this;
            new Init(options);
            return this;
        }
    })
} ())
