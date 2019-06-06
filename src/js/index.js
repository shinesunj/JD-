// 购物车
$('.settleup','.header-content').hover(function(){
    $('.dropdown-layer','.settleup').show()
},function(){
    $('.dropdown-layer','.settleup').hide()
})
//

function word (data,timer) {
    var arr = data,len = arr.length-1, i = 0;
    setInterval(function(){
        if(i < len){
            i ++;
            $('.hotwords a:first').text(arr[i])
        }else{
            i = 0;
            $('.hotwords a:first').text(arr[i])
        }
    },timer);
} 
$('div','.fs-show').hover(function(){
    $(this).css({
        opacity:0.8,
    })
},function(){
    $(this).css({
        opacity:1,
    })
})
$('.vip-1 .vip-1-com .vip-greet-select span').hover(function(){
    $(this).css({
        color:'#c81623',
    })
    
},function(){
    $(this).css({
        color:'#666',
    })
})
$('.vip-service .vip-service-1').hover(function(){
    $(this).css({
        background:'#c81623',
        color:'#fff'
    })
},function(){
    $(this).css({
        color: '#e43f3b',
        background:'#fff',
    })
})
$('.vip-service .vip-service-2').hover(function(){
    $(this).css({
        background:'#c81623',
        color:'#fff'
    })
},function(){
    $(this).css({
        background: '#363634',
        color: '#e5d790',
    })
})
$('.news .news-title .sales').hover(function(){
    $(this).siblings('.active_line').css('left','0px')
    $('.news-com .notices-comtent').hide()
    $('.news-com .sales-comtent').show()
})
$('.news .news-title .notices').hover(function(){
    $(this).siblings('.active_line').css('left','56px')
    $('.news-com .sales-comtent').hide()
    $('.news-com .notices-comtent').show()
})
$('.news .news-title .more').hover(function(){
    $(this).css({
        color: '#f10215',
    })  
},function(){
    $(this).css({
        color:'#666'
    })
})
$('.news-com > div > div').hover(function(){
    $(this).css({
        color: '#f10215',
    })  
},function(){
    $(this).css({
        color: '#666',
    }) 
})
$('.services .services-entry > div > div').hover(function(){
    $(this).find('span').css({
        color: "#e01121",
    })
},function(){
    $(this).find('span').css({
        color: "#888",
    })
})
$('.services .services-entry > div > div').hover(function(){
    $(this).find('.img-1').css({
        background:"url('./src/img/hong-1.png')",
        display: 'inline-block',
        position: 'absolute',
        overflow: 'hidden',
        width:'15px',
        height:'20px',
        backgroundRepeat:'no-repeat',
        backgroundSize: '100% 100%',
    })
},function(){
    $(this).find('.img-1').css({
        background:"url('./src/img/hui-1.png')",
        display: 'inline-block',
        position: 'absolute',
        overflow: 'hidden',
        width:'15px',
        height:'20px',
        backgroundRepeat:'no-repeat',
        backgroundSize: '100% 100%',
    })
})
$('.services .services-entry > div > div').hover(function(){
    $(this).find('.img-2').css({
        background:"url('./src/img/hong-2.png')",
        display: 'inline-block',
        position: 'absolute',
        overflow: 'hidden',
        width:'20px',
        height:'20px',
        backgroundRepeat:'no-repeat',
        backgroundSize: '100% 100%',
    })
},function(){
    $(this).find('.img-2').css({
        background:"url('./src/img/hui-2.png')",
        display: 'inline-block',
        position: 'absolute',
        overflow: 'hidden',
        width:'20px',
        height:'20px',
        backgroundRepeat:'no-repeat',
        backgroundSize: '100% 100%',
    })
})
$('.services .services-entry > div > div').hover(function(){
    $(this).find('.img-3').css({
        background:"url('./src/img/hong-3.png')",
        display: 'inline-block',
        position: 'absolute',
        overflow: 'hidden',
        width:'18px',
        height:'20px',
        backgroundRepeat:'no-repeat',
        backgroundSize: '100% 100%',
    })
},function(){
    $(this).find('.img-3').css({
        background:"url('./src/img/hui-3.png')",
        display: 'inline-block',
        position: 'absolute',
        overflow: 'hidden',
        width:'18px',
        height:'20px',
        backgroundRepeat:'no-repeat',
        backgroundSize: '100% 100%',
    })
})
$('.services .services-entry > div > div').hover(function(){
    $(this).find('.img-4').css({
        background:"url('./src/img/hong-4.png')",
        display: 'inline-block',
        position: 'absolute',
        overflow: 'hidden',
        width:'24px',
        height:'24px',
        backgroundRepeat:'no-repeat',
        backgroundSize: '100% 100%',
    })
},function(){
    $(this).find('.img-4').css({
        background:"url('./src/img/hui-4.png')",
        display: 'inline-block',
        position: 'absolute',
        overflow: 'hidden',
        width:'24px',
        height:'24px',
        backgroundRepeat:'no-repeat',
        backgroundSize: '100% 100%',
    })
})
$('.services .services-entry > div > div').hover(function(){
    $(this).find('.img-5').css({
        background:"url('./src/img/hong-5.png')",
        display: 'inline-block',
        position: 'absolute',
        overflow: 'hidden',
        width:'20px',
        height:'22px',
        backgroundRepeat:'no-repeat',
        backgroundSize: '100% 100%',
    })
},function(){
    $(this).find('.img-5').css({
        background:"url('./src/img/hui-5.png')",
        display: 'inline-block',
        position: 'absolute',
        overflow: 'hidden',
        width:'20px',
        height:'22px',
        backgroundRepeat:'no-repeat',
        backgroundSize: '100% 100%',
    })
})
$('.services .services-entry > div > div').hover(function(){
    $(this).find('.img-6').css({
        background:"url('./src/img/hong-6.png')",
        display: 'inline-block',
        position: 'absolute',
        overflow: 'hidden',
        width:'20px',
        height:'20px',
        backgroundRepeat:'no-repeat',
        backgroundSize: '100% 100%',
    })
},function(){
    $(this).find('.img-6').css({
        background:"url('./src/img/hui-6.png')",
        display: 'inline-block',
        position: 'absolute',
        overflow: 'hidden',
        width:'20px',
        height:'20px',
        backgroundRepeat:'no-repeat',
        backgroundSize: '100% 100%',
    })
})
$('.services .services-entry > div > div').hover(function(){
    $(this).find('.img-7').css({
        background:"url('./src/img/hong-7.png')",
        display: 'inline-block',
        position: 'absolute',
        overflow: 'hidden',
        width:'20px',
        height:'20px',
        backgroundRepeat:'no-repeat',
        backgroundSize: '100% 100%',
    })
},function(){
    $(this).find('.img-7').css({
        background:"url('./src/img/hui-7.png')",
        display: 'inline-block',
        position: 'absolute',
        overflow: 'hidden',
        width:'20px',
        height:'20px',
        backgroundRepeat:'no-repeat',
        backgroundSize: '100% 100%',
    })
})
$('.services .services-entry > div > div').hover(function(){
    $(this).find('.img-8').css({
        background:"url('./src/img/hong-8.png')",
        display: 'inline-block',
        position: 'absolute',
        overflow: 'hidden',
        width:'20px',
        height:'20px',
        backgroundRepeat:'no-repeat',
        backgroundSize: '100% 100%',
    })
},function(){
    $(this).find('.img-8').css({
        background:"url('./src/img/hui-8.png')",
        display: 'inline-block',
        position: 'absolute',
        overflow: 'hidden',
        width:'20px',
        height:'20px',
        backgroundRepeat:'no-repeat',
        backgroundSize: '100% 100%',
    })
})
$('.services .services-entry > div > div').hover(function(){
    $(this).find('.img-9').css({
        background:"url('./src/img/hong-9.png')",
        display: 'inline-block',
        position: 'absolute',
        overflow: 'hidden',
        width:'20px',
        height:'20px',
        backgroundRepeat:'no-repeat',
        backgroundSize: '100% 100%',
    })
},function(){
    $(this).find('.img-9').css({
        background:"url('./src/img/hui-9.png')",
        display: 'inline-block',
        position: 'absolute',
        overflow: 'hidden',
        width:'20px',
        height:'20px',
        backgroundRepeat:'no-repeat',
        backgroundSize: '100% 100%',
    })
})
$('.services .services-entry > div > div').hover(function(){
    $(this).find('.img-10').css({
        background:"url('./src/img/hong-10.png')",
        display: 'inline-block',
        position: 'absolute',
        overflow: 'hidden',
        width:'20px',
        height:'20px',
        backgroundRepeat:'no-repeat',
        backgroundSize: '100% 100%',
    })
},function(){
    $(this).find('.img-10').css({
        background:"url('./src/img/hui-10.png')",
        display: 'inline-block',
        position: 'absolute',
        overflow: 'hidden',
        width:'20px',
        height:'20px',
        backgroundRepeat:'no-repeat',
        backgroundSize: '100% 100%',
    })
})
$('.services .services-entry > div > div').hover(function(){
    $(this).find('.img-11').css({
        background:"url('./src/img/hong-11.png')",
        display: 'inline-block',
        position: 'absolute',
        overflow: 'hidden',
        width:'24px',
        height:'24px',
        backgroundRepeat:'no-repeat',
        backgroundSize: '100% 100%',
    })
},function(){
    $(this).find('.img-11').css({
        background:"url('./src/img/hui-11.png')",
        display: 'inline-block',
        position: 'absolute',
        overflow: 'hidden',
        width:'24px',
        height:'24px',
        backgroundRepeat:'no-repeat',
        backgroundSize: '100% 100%',
    })
})
$('.services .services-entry > div > div').hover(function(){
    $(this).find('.img-12').css({
        background:"url('./src/img/hong-12.png')",
        display: 'inline-block',
        position: 'absolute',
        overflow: 'hidden',
        width:'16px',
        height:'20px',
        backgroundRepeat:'no-repeat',
        backgroundSize: '100% 100%',
    })
},function(){
    $(this).find('.img-12').css({
        background:"url('./src/img/hui-12.png')",
        display: 'inline-block',
        position: 'absolute',
        overflow: 'hidden',
        width:'16px',
        height:'20px',
        backgroundRepeat:'no-repeat',
        backgroundSize: '100% 100%',
    })
})

$('.services-entry .entry-1 > div','.services').hover(function(){
    $('.services-entry .entry-1','.services').hide()
    $('.services-entry .entry-1-a','.services').show()
    $('.services-entry .entry-2','.services').hide()
    $('.services-entry .entry-3','.services').hide()
    $('.services-entry .services-con').show();
},function(){})

$('.services-entry .entry-1-a > div span','.services').hover(function(){
    $('.services-entry .entry-1-a > div > div','.services').slideUp(100,'linear',function(){
        $(' .services-entry > .entry-1-a > div','.services').css({
            height:34,
        })
        $(this).remove()
    })
    $(' .services-entry > .entry-1-a > div span','.services').animate({
        marginTop:0,
    },100,function(){
        $('.services-entry .services-con .close').show()
    })
    
},function(){
    $(this).find('.xiangong').hide();
})
$('.services-entry .entry-1-a > div > div','.services').hover(function(){
    $('.services-entry .entry-1-a > div > div','.services').slideUp(100,'linear',function(){
        $(' .services-entry > .entry-1-a > div','.services').css({
            height:30,
        })
        $(this).remove()
        console.log()
    })
    $(' .services-entry > .entry-1-a > div span','.services').animate({
        marginTop:0,
    },100,function(){
        $('.services-entry .services-con .close').show()
    })
    
},function(){
    $(this).find('.xiangong').hide();
})


$(' .services-entry > .entry-1-a > div span','.services').hover(function(){
    $(' .services-entry > .entry-1-a > div span','.services').css({
        borderBottom: '2px solid #fff',
        paddingBottom:6, 
    })
    $(this).css({  
        borderBottom: '2px solid #c81623',
        paddingBottom:6, 
    })
},function(){
    $(this).css({
        borderBottom: '2px solid #c81623',
        paddingBottom:6, 
    })
})
 

$('.services-entry .services-con .close','.services').on('click',function(){
    $('.services-entry .services-con').hide();
    $('.services-entry .entry-1','.services').slideDown()
    $('.services-entry .entry-1-a','.services').hide()
    $('.services-entry .entry-2','.services').show()
    $('.services-entry .entry-3','.services').show()
    
})
$('.services-entry .entry-1-a span:eq(0)','.services').hover(function(){
    $('.services-entry .services-con .services-con-4').hide()
    $('.services-entry .services-con .services-con-3').hide()
    $('.services-entry .services-con .services-con-2').hide()
    $('.services-entry .services-con .services-con-1').show()
})

$('.services-entry .entry-1-a span:eq(1)','.services').hover(function(){
    $('.services-entry .services-con .services-con-4').hide()
    $('.services-entry .services-con .services-con-3').hide()
    $('.services-entry .services-con .services-con-1').hide()
    $('.services-entry .services-con .services-con-2').show()
})
$('.services-entry .entry-1-a span:eq(2)','.services').hover(function(){
    $('.services-entry .services-con .services-con-4').hide()
    $('.services-entry .services-con .services-con-2').hide()
    $('.services-entry .services-con .services-con-1').hide()
    $('.services-entry .services-con .services-con-3').show()
})
$('.services-entry .entry-1-a span:eq(3)','.services').hover(function(){
    $('.services-entry .services-con .services-con-3').hide()
    $('.services-entry .services-con .services-con-2').hide()
    $('.services-entry .services-con .services-con-1').hide()
    $('.services-entry .services-con .services-con-4').show()
})
    
    
$('.services-con .services-con-1 .tit i:eq(0)').hover(function(){
    $('.services-con .services-con-1 .tit i').css('color','#666')
    $('.COM-3').hide()
    $('.COM-2').hide()
    $('.COM-1').show()
    $(this).css('color','#c81623')

},function(){})

$('.services-con .services-con-1 .tit i:eq(1)').hover(function(){
    $('.services-con .services-con-1 .tit i').css('color','#666')
    $('.COM-3').hide()
    $('.COM-1').hide()
    $('.COM-2').show()
    $(this).css('color','#c81623')
},function(){})

$('.services-con .services-con-1 .tit i:eq(2)').hover(function(){
    $('.services-con .services-con-1 .tit i').css('color','#666')
    $(this).css('color','#c81623')
    $('.COM-2').hide()
    $('.COM-1').hide()
    $('.COM-3').show()
},function(){})
