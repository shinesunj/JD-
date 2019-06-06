(function(){
    function Init (options) {
        this.parend = options.parend;
        this.data = options.data;
        this.liNum = options.data.length;
        this.createDom();
        this.addCss();
        this.bindEvent();
    }
    Init.prototype.createDom = function () {
        var content = $('<div class="content"></div>');
        var oUl = $('<ul class="oUl"></ul>');
        content.append(oUl).appendTo(this.parend);
        for(var i = 0;i < this.liNum;i ++){
        var oLi = $('<li class="menu-item" index ="'+i+'"></li>').appendTo(oUl)
            var aNum = this.data[i].name
            for(var j = 0; j < aNum.length;j ++){
                if(j % 2 == 0){
                    $('<a href="#" class="newA"></a>').appendTo(oLi)
                        .text(aNum[j])
                }else if(j % 2 == 1){
                    $('<span class="newSpan"></span>').appendTo(oLi)
                    .text(aNum[j])
                }
            }
            var oDivCom = $('<div class="oDiv-com" index ="'+i+'"></div>').appendTo(oLi)
            var divCom = $('<div class="divCom"></div>').appendTo(oDivCom)
            var divImg = $('<div class="divImg"></div>').appendTo(oDivCom)
            var divComT = $('<div class="divComTitle"></div>').appendTo(divCom)
            var divComS = $('<div class="divComS"></div>').appendTo(divCom)
            var divImgT = $('<div class="divImgTop"></div>').appendTo(divImg) 
            var divImgB = $('<div class="divImgBottom"></div>').appendTo(divImg)
            var Contentblack = this.data[i].Contentblack;
            var imgsTop = this.data[i].imgs.imgsTop;
            var imgsButton = this.data[i].imgs.imgsButton;
            var datali = this.data[i].datali
            for(var j = 0; j < Contentblack.length;j ++){
                $('<a href="'+ Contentblack[j].href +'"></a>').html(Contentblack[j].name).appendTo(divComT)
            }
            for(var j = 0;j < datali.length;j ++){
                var title = datali[j].title
                var items = datali[j].items;
                var com = $("<div class='com'></div>").appendTo(divComS)
                $('<span class="comtitle"></span>').appendTo(com).html(title)
                for(var y = 0;y < items.length; y ++){
                    $('<span class="spans"></span>').html(items[y].name).appendTo(com)
                }
            } 
            for(var j = 0;j < imgsTop.length;j ++){
                $('<img src="'+imgsTop[j] +'"/>').appendTo(divImgT)
            }
            for(var j = 0;j < imgsButton.length;j ++){
                $('<img src="'+ imgsButton[j] +'">').appendTo(divImgB)
            }
        }   
    }   
    Init.prototype.addCss = function () {
        $('.oUl',this.parend).css({
            width:'100%',
            padding: '6px 0',
            height: '468px',
            position:'relative',
        })
        $('.oUl .menu-item',this.parend).css({
            paddingLeft:'18px',
            height: '26px',
            lineHeight: '26px',
        })
        $('.oUl .menu-item a',this.parend).css({
            fontSize: '14px',
            color: '#636363',
        })
        $('.oUl .menu-item span',this.parend).css({
            fontSize: '14px',
            color: '#636363',
            margin:"0 2px",
        })   
        $('.oUl .menu-item .oDiv-com',this.parend).css({
            width:'998px',
            height:'449px',
            background:'#fff',
            position:'absolute',
            padding: "20px 0 10px",
            top:0, 
            left:190,
            display: 'none',
            zIndex: 50,
        })
        $('.divCom','.oDiv-com').css({
            float: 'left',
            width: '800px',
            font: '12px/1.5 Microsoft YaHei,tahoma,arial,Hiragino Sans GB,\\5b8b\4f53,sans-serif',
            color:'#666',
        })
        $('.divImg','.oDiv-com').css({
            width:198,
            float:'left',
        })
        $('.divCom .divComTitle','.oDiv-com').css({
            overflow: 'hidden',
            paddingLeft: '20px',
            height: '24px',
        })
        $('.divCom .divComTitle a','.oDiv-com').css({
            float: 'left',
            marginRight: 10,
            padding: '0 10px',
            height: '24px',
            backgroundColor: '#333',
            lineHeight: '24px',
            color: '#fff',
            fontSize:12,
        })
        $('.divComS','.divCom').css({
            padding: '10px 0 0 20px',
        })
        $('.com').css({
            width:'90%',
            height:'36px',
            overflow: 'hidden',
            lineHeight:'36px',
            whiteSpace:'nowrap',
            textOverflow:'ellipsis',
            padding: '0 10',
            marginTop:4,
        })
        $('.com .comtitle').css({
            fontWeight:700,
            color:"#555" ,
            marginRight: 10,
            fontSize:12,
            cursor:'pointer',
        })
        $('.spans','.com').css({
            color:'#666',
            fontSize:12,
            borderLeft: '1px solid #e0e0e0',
            padding:' 0 10px',
            cursor:'pointer',
        })
        $('.divImg .divImgTop').css({
            textAlign: 'center',
        })
        $('.divImg .divImgBottom').css({
            textAlign: 'center',
            marginTop:10,
        })
        $('.divImg .divImgTop img').css({
            width:83,
            height:35,
            marginRight:2, 
            marginTop:-6,
            fontSize:0,
            
        })
        $('.divImg .divImgBottom img').css({
            width:168,
            heihgt:134,
            marginTop:-6,
        })
    }
    Init.prototype.bindEvent = function () {
        $('.oUl .menu-item',this.parend).hover(function(){
            $(this).css({
                background:"#eee",
            })
            $('.oDiv-com',this).show()
        },function(){
            $(this).css({
                background:"#fff",
            })
            $('.oDiv-com',this).hide()
        })
        $('.oUl .menu-item a',this.parend).hover(function(){
            $(this).css({
                color:'red',
            })
        },function(){
            $(this).css({
                color: '#636363',
            })
        })
        $('.divCom .divComTitle a','.oDiv-com').hover(function(){
            $(this).css({
                background:'#333',
                color: '#fff',
                opacity: '0.9',
            })
        },function(){
            $(this).css({
                background:'#333',
                color: '#fff',
                opacity: '1',
            })
        })
        $('.spans','.com').hover(function(){
            $(this).css({
                color:"#f40",
            })
        },function(){
            $(this).css({
                color:"#666",
            })
        })
        $('.com .comtitle').hover(function(){
            $(this).css({
                color:"#f10214",
            })
        },function(){
            $(this).css({
                color:"#555",
            })
        })
    }
    $.fn.extend({
        fsMenu: function(options){
            options.parend = this;
            new Init(options);
            return this;
        }
    })
}())




// 性能 差
// (function(){
//     function Init (options) {
//         this.parend = options.parend;
//         this.data = options.data;
//         this.liNum = options.data.length;
//         // 判断 鼠标 滑动的 索引
//         this.index = 0;
//         this.newCom();
//         this.createDom();
//         this.addCss();
//         this.bindEvent();
//     }
//     Init.prototype.createDom = function () {
//         var self = this;
//         var content = $('<div class="content"></div>');
//         var oUl = $('<ul class="oUl"></ul>');
//         var oDiv = $('<div class="oDiv-1"></div>');
        
//         content.append(oUl).appendTo(this.parend);
//         // 列表结构
//         for(var i = 0;i < this.liNum;i ++){
//         var oLi = $('<li class="menu-item" index ="'+i+'"></li>').appendTo(oUl)
//             var aNum = this.data[i].name
//             for(var j = 0; j < aNum.length;j ++){
//                 if(j % 2 == 0){
//                     $('<a href="#" class="newA"></a>').appendTo(oLi)
//                         .text(aNum[j])
//                 }else if(j % 2 == 1){
//                     $('<span class="newSpan"></span>').appendTo(oLi)
//                     .text(aNum[j])
//                 }
//             }
//         }  
//         // 鼠标 移进时 对应 生成 结构 样式 插入 data    
//         $('.oUl .menu-item',this.parend).hover(function(){
//             self.index = this.getAttribute('index')
//             self.newCom()
//             oDiv.appendTo(this) 
//             var titleA = self.data[self.index].Contentblack
//             var datali = self.data[self.index].datali;
//             // console.log($('.divData .title-A',oDiv))
            
//             for(var g = 0; g < titleA.length;g ++){
//                 var aLen = $('.divData .title-A',oDiv)[g]
//                 // console.log(aLen)                       //   初始触发 oDiv-1 不存在 aLen 为 undefired
//                 $(aLen).html(titleA[g].name)
//             }
//             for(var g = 0; g < datali.length;g ++){
//                 var items = datali[g].items;

//                 for(var j = 0; j < items.length;j ++){
//                     if(j == 0){
//                         $('.datali-Y-'+g+' .datali-Y-title').html(datali[g].title)
//                     } 
//                     //  $('.datali-Y-'+g+' .datali-X-con').html(items[j].name)
//                 }
//             }
//             $('.oDiv-1',).css({
//                 width:'998px',
//                 height:'448px',
//                 background:'#fff',
//                 position:'absolute',
//                 padding: "20px 0 10px",
//                 top:0, 
//                 left:190,
//                 display: 'none',
//             })
//             $('.divData',this.parend).css({
//                 width: 800,
//                 float: 'left',
                // font: '12px/1.5 Microsoft YaHei,tahoma,arial,Hiragino Sans GB,\\5b8b\4f53,sans-serif',
                // color:'#666',
//             })
//             $('.divImg',this.parend).css({
//                 width:198,
//                 float: 'left',
//             })
//             $(".divData .DataTitle",this.parend).css({
//                 overflow: 'hidden',
//                 paddingLeft: '20px',
//                 height: '24px',
//             })
//             $(".divData .DataTitle .title-A",this.parend).css({
//                 float: 'left',
//                 marginRight: '10px',
//                 padding:'0 10px',
//                 height: '24px',
//                 backgroundColor:'#333',
//                 lineHeight: '24px',
//                 color: '#fff',
//             }).hover(function(){
//                 $(this).css({
//                     opacity: '0.9',
//                 })
//             },function(){
//                 $(this).css({
//                     opacity: '1',
//                 })
//             })
//             $('.divData .DataCon',this.parend).css({
//                 overflow: 'hidden',
//                 padding: '10px 0 0 20px',
//             })
//             $('.divData .DataCon div',this.parend).css({
//                 marginTop: 7,
//             })
//             $('.divData .DataCon .datali-Y-title',this.parend).css({
//                 color:' #666',
//                 overflow: 'hidden',
//                 width: 70,
//                 textAlign: 'right',
//                 fontWeight: 700,
//                 whiteSpace: 'nowrap',
//                 textOverflow: 'ellipsis',
//                 marginTop:6,
//             })
//             $('.divData .DataCon .datali-X-con',this.parend).css({
                // margin: '3px 0',
                // padding: '0 10px',
                // height: '16px',
                // borderLeft: '1px solid #e0e0e0',
                // lineHeight: '16px',
                // wordWrap:'break-word',
                // color:'#666',
                // textAlign: 'justify',
//             })
//             $(this).css({
//                 background:'#d9d9d9'
//             })
//             $('.divData .DataCon .datali-Y-title',this.parend).hover(function(){
//                 $(this).css({
//                     color:'#c81623',
//                 })
//             },function(){
//                 $(this).css({
//                     color:"#666",
//                 })
//             })
//             $('.divData .DataCon .datali-X-con',this.parend).hover(function(){
//                 $(this).css({
//                     color: '#f40',
//                 })
//             },function(){
//                 $(this).css({
//                     color:'#666'
//                 })
//             })
            // $('.divImg .imgA .img-A').css({
            //     width:83,
            //     height:35,
            //     marginRight:2, 
            //     marginTop:-6,
            //     fontSize:0,
            // })
            // $('.divImg .imgB .img-B').css({
            //     width:168,
            //     heihgt:134,
            //     marginTop:-6,
            // })
//             console.log()
//             if(!$('.divData .title-A',oDiv).length == false){
//                 $('.oDiv-1').show()
//             }
//         },function(){
//             $(this).css({
//                 background:'#fff'
//             })
//             $('.oDiv-1').hide()
//             $('.divData',oDiv).remove()
//             $('.divImg',oDiv).remove()
//         })
//     }   
//     // 内容 data imgs
//     Init.prototype.newCom = function() {
//         var divData = $('<div class="divData"></div>') 
//         var divImg = $('<div class="divImg"></div>')
//         var oDiv = $('.oDiv-1')
//         oDiv.append(divData).append(divImg);
//         divData.append($('<div class="DataTitle"></div>')).append($('<div class="DataCon"></div>'))
//         divImg.append($('<div class="imgA"></div>')).append($('<div class="imgB"></div>'))
//         var titleA = this.data[this.index].Contentblack
//         for(var g = 0; g < titleA.length;g ++ ){
//             $('<a href="'+ titleA[g].href +'" class="title-A"></a>').appendTo($('.DataTitle',divData)).html(titleA[g].name)
//         }
//         var datali = this.data[this.index].datali;
        // for(var g = 0;g < datali.length;g ++){
        //     $('<div class="datali-Y-'+g+'"></div>').appendTo($('.DataCon',divData)) 
        //     var items = datali[g].items;
        //     for(var j = 0,s = 0;j < items.length;j ++,s++){
        //         if(s == 0){
        //             $('<span class="datali-Y-title"></span>').appendTo($('.datali-Y-'+g+'')).html(datali[g].title)
        //         }
        //         $('<a href class="datali-X-con"></a>').appendTo($('.datali-Y-'+g+'')).html(items[j].name)
        //     }
        // }
//         // 图
//         var imgS = this.data[this.index].imgs
//         var imgsTop = this.data[this.index].imgs.imgsTop
//         var imgsButton = this.data[this.index].imgs.imgsButton
//         // console.log($('.imgA','.divImg'))
//         // console.log($('.imgB','.divImg'))
//         // console.log(imgS)
//         // console.log(imgsTop)
//         // console.log(imgsButton)
//         for(var g = 0; g < imgsTop.length;g ++){
//             $('<img src="" class="img-A"/>').appendTo($('.imgA','.divImg')).attr('src',''+imgsTop[g]+'')
//         }
//         for(var g = 0;g < imgsButton.length;g ++){
//             $('<img src="" class="img-B"/>').appendTo($('.imgB','.divImg')).attr('src',''+imgsButton[g]+'')
//         }
//     }
//     Init.prototype.addCss = function () {
//         $('.oUl',this.parend).css({
//             width:'100%',
//             padding: '6px 0',
//             height: '468px',
//             position:'relative',
//         })
//         $('.oUl .menu-item',this.parend).css({
//             paddingLeft:'18px',
//             height: '26px',
//             lineHeight: '26px',
//         })
//         $('.oUl .menu-item a',this.parend).css({
//             fontSize: '14px',
//             color: '#636363',
//         })
//         $('.oUl .menu-item span',this.parend).css({
//             fontSize: '14px',
//             color: '#636363',
//             margin:"0 2px",
//         })   
//     }
//     Init.prototype.bindEvent = function () {
//         $('.oUl .menu-item a',this.parend).hover(function(){
//             $(this).css({
//                 color:'red',
//             })
//         },function(){
//             $(this).css({
//                 color: '#636363',
//             })
//         })
//     }
//     $.fn.extend({
//         fsMenu: function(options){
//             options.parend = this;
//             new Init(options);
//             return this;
//         }
//     })
// }())