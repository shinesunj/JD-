// 广告位
$('.leaflet .leaflet-content span').on('click',function(){
    $('.leaflet','.wrapper').fadeOut()
})
   //  数据
    $('.shortcut > .left > .location').areaList({
        items:[{
            name: '北京',
            href: '#'
        },{
            name: '上海',
            href: '#',
        },{
            name: '天津',
            href: '#',
        },{
            name: '重庆',
            href: '#'
        },{
            name: '河北',
            href: '#',
        },{
            name: '山西',
            href: '#'
        },{
            name: '河南',
            href: '#'
        },{
            name: '辽宁',
            href: '#',
        },{
            name: '吉林',
            href: '#',
        },{
            name: '黑龙江',
            href: '#'
        },{
            name: '内蒙古',
            href: '#',
        },{
            name: '江苏',
            href: '#'
        },{
            name: '山东',
            href: '#'
        },{
            name: '安徽',
            href: '#'
        },{
            name: '浙江',
            href: '#',
        },{
            name: ' 福建',
            href: '#',
        },{
            name: '湖北',
            href: '#'
        },{
            name: '湖南',
            href: '#',
        },{
            name: '广东',
            href: '#'
        },{
            name: ' 广西',
            href: '#',
        },{
            name: '江西',
            href: '#'
        },{
            name: '四川',
            href: '#'
        },{
            name: '海南',
            href: '#'
        },{
            name: '贵州',
            href: '#',
        },{
            name: ' 云南',
            href: '#',
        },{
            name: '西藏',
            href: '#'
        },{
            name: '陕西',
            href: '#',
        },{
            name: '甘肃',
            href: '#'
        },{
            name: '青海',
            href: '#'
        },{
            name: '宁夏',
            href: '#'
        },{
            name: '新疆',
            href: '#',
        },{
            name: ' 港澳',
            href: '#',
        },{
            name: '台湾',
            href: '#'
        },{
            name: '钓鱼岛',
            href: '#',
        },{
            name: '海外',
            href: '#'
        }],
        rowNum: 5,
        itemWidth: 60,
        nowItemImg:'./src/img/loca.png' ,
        nowItem: '北京',
        color: '#999',
        title: 'Available Sites',
        itemImgWidth: 14,
        itemImgHeight:14,
        backgroundImg: './src/img/demo2.png',
        state:[{
            href: "#",
            name:'Global Site'
        },{
            href: '#',
            name:'Сайт России'
        },{
            href: '#',
            name:'Situs Indonesia'
        },{
            href: '#',
            name:'Sitio de España'
        },{
            href: '#',
            name:'เว็บไซต์ประเทศไทย'
        }]
    })

    $('.shortcut > .right > .nav > .login').dropdown({
        title: '您好，请登录',
        align: 'left',
        color:'#999',
        href: '#',
    }).append($('<a href="#" style="color: red;margin-right: 10px;">免费注册</a>'));

    $('.shortcut > .right > .nav > .mine').dropdown({
        title: '我的订单',
        align: 'left',
        color:'#999',
        href: '#',
    });
    $('.shortcut > .right > .nav > .myJD').dropdown({
        title: '我的京东', 
        align: 'left',
        color: '#999',
        itemWidth: 240,
        direction: 'x',
        height: 30,
        menuList: [{
            title: '',
            // width: ''
            items: [{
                    href: '#',
                    name: '待处理订单',
                }, {
                    href: '#',
                    name: '消息',
                }, {
                    href: '#',
                    name: '返修退换货',
                }, {
                    href: '#',
                    name: '我的问答',
                }, {
                    href: '#',
                    name: '降价商品',
                }, {
                    href: '#',
                    name: '我的关注',
                }
            ],
            colNum:2
        }, {
            title: '',
            items: [{
                    href: '#',
                    name: '我的京豆',
                }, {
                    href: '#',
                    name: '我的优惠券',
                }, {
                    href: '#',
                    name: '我的白条',
                },{
                    href: '#',
                    name: '我的理财'
                }
            ],
            colNum:2
        }]
    });
    
$('.shortcut > .right > .nav > .vip').dropdown({
    title: '京东会员',
    align: 'left',
    color:'#999',
    href: '#',
});
$('.shortcut > .right > .nav >.enterprise-procurement').dropdown({
    // 展示的title
    title: '企业采购',
    // 对齐方式
    align: 'left',
    // 默认的字体颜色
    color:'#999',
    // title的链接地址
    href: '#',
    // 下拉列表的宽度
    itemWidth: 140,
    height: 30,
    // 下拉列表里面每一块的排布是横向横向（y）, 纵向（x）
    direction: 'x',
    // 下拉列表内的内容
    menuList: [{
        // 每块的标题
        // title: '特色',
        // 每块的宽度
        width: 140,
        // 每块里面的可选项
        items: [{
            name: '企业购',
            href:'#'
        }, {
            name: '商用场景管',
            href: '#'
        }, {
            name: '工业品',
            href: '#'
        }, {
            name: '礼品卡',
            href:'#'
        }],
        // 每块每行的选项列数
        colNum: 2,
    }]
})

$('.shortcut > .right > .nav >.service').dropdown({
    // 展示的title
    title: '客户服务',
    // 对齐方式
    align: 'right',
    // 默认的字体颜色
    color:'#999',
    // title的链接地址
    href: '#',
    // 下拉列表的宽度
    itemWidth: 140,
    height: 30,
    // 下拉列表里面每一块的排布是横向横向（y）, 纵向（x）
    direction: 'x',
    // 下拉列表内的内容
    menuList: [{
        // 每块的标题
        title: '客户',
        // 每块的宽度
        width: 140,         
        // 每块里面的可选项     
        items: [{
            name: ' 帮助中心',
            href:'#'
        }, {
            name: '客户售后',
            href: '#'
        }, {
            name: ' 服务在线',
            href: '#'
        }, {
            name: '客服意见',
            href:'#'
        },{
            name: ' 建议电话',
            href:'#'
        }, {
            name: '客服邮箱',
            href: '#'
        }, {
            name: ' 金融咨询',
            href: '#'
        }, {
            name: '全球售客服',
            href:'#'
        }],
        // 每块每行的选项列数
        colNum: 2,
    }, {
        title: '商户',
        width: 140,
        items: [{
            name: '合作招商',
            href:'#'
        }, {
            name: ' 学习中心',
            href: '#'
        }, {
            name: '商家后台',
            href: '#'
        }, {
            name: '京麦工作',
            href:'#'
        }, {
            name: '商家帮助',
            href: '#'
        }, {
            name: '规则平台',
            href:'#'
        }],
        colNum: 2,
    }]
});
$('.shortcut > .right > .nav >.navigator').dropdown({
    // 展示的title
    title: '网站导航',
    // 对齐方式
    align: 'left',
    // 默认的字体颜色
    color:'#999',
    // title的链接地址
    href: '#',
    // 下拉列表的宽度
    itemWidth:1190,
    height: 30,
    // 下拉列表里面每一块的排布是横向横向（y）, 纵向（x）
    direction: 'y',
    // 下拉列表内的内容
    menuList: [{
        // 每块的标题
        title: '特色主题',
        // 每块的宽度
        width: 360,
        // 每块里面的可选项
        
        items: [{
            name: '京东试用',
            href:'#'
        }, {
            name: '京东金融',
            href: '#'
        }, {
            name: '全球售',
            href: '#'
        }, {
            name: '国际站',
            href:'#'
        },{
            name: '京东会员',
            href:'#'
        }, {
            name: '京东预售',
            href: '#'
        }, {
            name: '买什么',
            href: '#'
        }, {
            name: '俄语站',
            href:'#'
        },{
            name: '装机大师',
            href:'#'
        }, {
            name: '0元评测',
            href: '#'
        }, {
            name: '定期送',
            href: '#'
        }, {
            name: '港澳售',
            href:'#'
        },{
            name: '优惠券',
            href:'#'
        }, {
            name: ' 秒杀',
            href: '#'
        }, {
            name: ' 闪购',
            href: '#'
        }, {
            name: '印尼站',
            href: '#'
        }, {
            name: '金融科技',
            href:'#'
        },{
            name: 'In货推荐',
            href:'#'
        }, {
            name: '陪伴计划',
            href: '#'
        }, {
            name: '出海招商',
            href: '#'
        }],
        // 每块每行的选项列数
        colNum: 4,
        
    }, {
        title: '行业频道',
        width: 260,
        items: [{
            name: '手机',
            href:'#'
        },{
            name: '智能数码',
            href:'#'
        }, {
            name: '玩3C',
            href: '#'
        }, {
            name: '电脑办公',
            href: '#'
        }, {
            name: '家用电器',
            href:'#'
        },{
            name: '京东智能',
            href:'#'
        },{
            name: '服装城',
            href:'#'
        }, {
            name: '京东生鲜',
            href: '#'
        }, {
            name: '家装城',
            href: '#'
        }, {
            name: '母婴',
            href:'#'
        },{
            name: '食品',     
            href:'#'
        }, {
            name: '农资频道',
            href: '#'
        }, {
            name: '整车',
            href: '#'
        }, {
            name: '图书',
            href:'#'
        },{
            name: '京东元器件',
            href:'#'
        }],
        colNum: 3,
    }, {
        title: '生活服务',
        width: 265,
        items: [{
            name: '京东众筹',
            href:'#'
        }, {
            name: '白条',
            href: '#'
        }, {
            name: ' 金融App',
            href: '#'
        },{
            name: '京东小金库',
            href:'#'
        }, {
            name: '理财',
            href: '#'
        }, {
            name: '话费',
            href: '#'
        }, {
            name: '水电煤',
            href:'#'
        },{
            name: '彩票',
            href:'#'
        }, {
            name: '旅行',
            href: '#'
        }, {
            name: '机票酒店',
            href: '#'
        }, {
            name: '电影票',
            href:'#'
        },{
            name: '京东到家',
            href:'#'
        }, {
            name: '游戏',
            href: '#'
        }],
        colNum: 3,
    }, {     
        title: '更多精选',
        width: 260,
        items: [{
            name: '合作招商',
            href:'#'
        }, {
            name: '京东通信',
            href: '#'
        }, {
            name: '京东E卡',
            href: '#'
        }, {
            name: '企业采购',
            href:'#'
        },{
            name: '服务市场',
            href:'#'
        }, {
            name: '办公生活',
            href: '#'
        }, {
            name: '馆乡村',
            href: '#'
        }, {
            name: '招募校园',
            href:'#'
        },{
            name: ' 加盟京友邦',
            href:'#'
        }, {
            name: '京东社区',
            href: '#'
        }, {
            name: '游戏社区',
            href: '#'
        }, {
            name: '产权维权',
            href:'#'
        }],
        colNum: 3,
    }]
})

$('.shortcut > .right > .nav > .phone').saoyisao({
    title: '手机京东',
    align: 'left',
    color:'#999',
    imgUrls:['./src/img/xiao-1.jpg','./src/img/xiao-2.jpg','./src/img/xiao-3.jpg'],
    imgUrlsSize: 70,
    shangbiaoSize: 25,
    menuListWidth: 190,
    menuList: [
            {
            title:'手机京东',
            duanl:"新人专享大礼包",
            shangbiao:["./src/img/xiao-4.jpg","./src/img/xiao-4.jpg","./src/img/xiao-4.jpg"]
                 
        },
            {
            title:'关注京东微信',
            duanl:"微信扫一扫关注<br>新粉最高180元<br>惊喜礼包",
        }, 
            {
            title:'京东金融客户端',
            duanl:"新人专享大礼包",
            shangbiao:["./src/img/xiao-4.jpg","./src/img/xiao-4.jpg"]
        }
    ]
})

// logo
$('.header-content .logo','.header').logoS({
    timing:'9000',
    url:[
        "./src/img/locas.gif",
        // "./src/img/locas-1.gif",
        "./src/img/locas-2.gif",
        "./src/img/locas-9.gif",
        "./src/img/locas-4.gif",
        "./src/img/locas-5.gif",
        "./src/img/locas-6.gif",
        "./src/img/locas-7.gif",
        "./src/img/locas-8.gif",
        "./src/img/locas-10.gif",
        "./src/img/locas-11.gif",
        "./src/img/locas-12.gif",
        // "./src/img/locas-3.gif",
]
})
//  处理 回调函数的信息 
function dealData (data) {
    // console.log(this);  //  为啥 this 指向 url 懵比了  不应该是window 嘛
    var newForm = $('.content .form','.search');
    var oUl = $('<ul class="shelper"></ul>');
    var dataList = data.result;

    $('.shelper').remove();
    for(var i = 0; i < dataList.length; i++){
        // $('<li></li>').html(dataList[i][0]).appendTo(oUl);
        var oLi = $('<li class="oLi"></li>')
        $('<span class="leftS"></span>').html(dataList[i][0]).appendTo(oLi);
        $('<span class="rightS"></span>').html("约" + dataList[i][1] + "个商品").appendTo(oLi);
        oLi.appendTo(oUl)
    }
    // 添加 活动     
    if(!dataList[0] == ''){
        var activity = $('<li class="activity"></li>').prependTo(oUl)
        $('<img src="./src/img/jing-dong1.png" class="img_a">').appendTo(activity)
        $('<span class="leftS-1"></span>').html('在11.11下搜索'+ (dataList[0][0] || '')).appendTo(activity)
        $('<span class="rightS"></span>').html("约" + (dataList[0][1] || '') + "个商品").appendTo(activity) 
    }
    
    var newLi = $('<li class="anniu"></li>').css({
        position: 'relative',
    })
        .append($('<span>关闭</span>'))
        .appendTo(oUl)

    // 下不让她消失
    if(data.result[0] == null){
        newLi.remove();
    }
    oUl.css({
        width:500,
        position:'absolute',
        top:35,
        left:0,
        border: '1px solid #ccc',
        background:'#fff',
        cursor:'pointer',
        zIndex:100,
    })
    $('li',oUl).css({
        width:'100%',
        height:24,
        lineHeight:'24px',
        position: 'relative',
        display:'inline-block',
        zIndex:100,
    })
    $('li .leftS',oUl).css({
        display:'inline-block',
        position:'absolute',
        top:0,
        left:6,
        height:24,
        lineHeight:'24px',
        color:'#666'
    })
    $('li .rightS',oUl).css({
        display:'inline-block',
        position:'absolute',
        top:0,
        right:5,
        height:24,
        lineHeight:'24px',
        fontSize:10,
    })
    $('.activity',oUl).css({
        overflow: 'hidden',
        boxSizing: 'border-box', 
        border:'1px solid #aaa',
    })
    $('.activity .img_a',oUl).css({
        width:50,
        height:18,
        verticalAlign:-3,
        margin:'0 4px',
    })
    
    $('.activity .leftS-1',oUl).css({
        height:24,
        lineHeight:'24px',
        color:'#666',
    })
    
    $('span',newLi).css({
        position:'absolute',
        top:0,
        right:8,
    })
    
    $('li',oUl).hover(function(){
        $(this).css({
            background:'#eee',
        })
    },function(){
        $(this).css({
            background:'#fff',
        })
    })
    // 下不让她消失
    var timer = null;
    $(newForm).hover(function(){
        clearTimeout(timer);
    },function(){
        timer = setTimeout(function(){
            $('.shelper').fadeOut() 
        },1000)
    })
    // 鼠标 事件
    // $(newForm).mouseenter(function(){
    //     $('.shelper').delay().show()
    // }).mouseleave(function(){
    //     $('.shelper').delay(1000).hide(); // delay()为啥拦截不住
    // })

   
    newLi.on('click',function(){
        $('.shelper').remove();

    })
    $('.oLi',oUl).on('click',function(){
        // console.log($('.leftS',this).html())
        var oInput = $('.oInput',newForm)
        oInput.val($('.leftS',this).html());
    })
    $('.activity',oUl).on('click',function(){
        var oInput = $('.oInput',newForm)
        oInput.val(dataList[0][0]);
    })
    oUl.appendTo(newForm)

}  
// input 
$('.header-content .search','.header').inputS({
    keyl:'callback',
    jsonpCallback:'dealData',
    url: 'https://suggest.taobao.com/sug',
    type: 'GET',
    success: dealData,
    dataName: 'q',

    searchBtn:"./src/img/xiaogji.png",
    tubiao:'',
    default:['小博最可爱','风火大琪姐','美琪姐好可爱','jQuery不好玩','思彤姐在干嘛','传说中的邓哥呢 !'],
    oDivtiming:'6000',
    bntTu:"./src/img/xiao-tu.png",
})
// 推荐
word(['超新星盛典','玩转新装备','图书品类日','改造智能家'],4000)

// fs - menu  menu 信息

var data = [{
    name : ['家用电器'],
    href : '#',
    Contentblack :[{
        name : '家电馆&nbsp;&nbsp;>',
        href : '#'
    },{
        name : '乡镇专卖店&nbsp;&nbsp;>',
        href : '#'
    },{
        name : '家电服务&nbsp;&nbsp;>',
        href : '#'
    },{
        name : '家电企业购&nbsp;&nbsp;>',
        href : '#'
    },{
        name : '商用电器&nbsp;&nbsp>',
        href : '#'
    }],

    imgs : {
        imgsTop : ['./src/img/ganggao/meidi.jpg',
                   './src/img/ganggao/haier.jpg',
                   './src/img/ganggao/geli.jpg',
                   './src/img/ganggao/haixin.jpg',
                   './src/img/ganggao/vatti.jpg',
                   './src/img/ganggao/supor.jpg',
                   './src/img/ganggao/konka.jpg',
                   './src/img/ganggao/sanling.jpg',],
        imgsButton : ['./src/img/ganggao/DDbingxiang.jpg',
                       './src/img/ganggao/DDdianshi.jpg',]
    },

    datali : [{
        title : '电视&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '曲面电视',
            href : '#'
        },{
            name : '超薄电视',
            href : '#'
        },{
            name : 'OLED电视',
            href : '#'
        },{
            name : '4K超清电视',
            href : '#'
        },{
            name : '55英寸',
            href : '#'
        },{
            name : '65英寸',
            href : '#'
        },{
            name : '电视配件',
            href : '#'
        }]
    },{
        title : '空调&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '壁挂式空调',
            href : '#'
        },{
            name : '柜式空调',
            href : '#'
        },{
            name : '中央空调',
            href : '#'
        },{
            name : '一级能效空调',
            href : '#'
        },{
            name : '变频空调',
            href : '#'
        },{
            name : '1.5匹空调',
            href : '#'
        },{
            name : '以旧换新',
            href : '#'
        }]
    },{
        title : '洗衣机&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '滚筒洗衣机',
            href : '#'
        },{
            name : '洗烘一体机',
            href : '#'
        },{
            name : '波轮洗衣机',
            href : '#'
        },{
            name : '迷你洗衣机',
            href : '#'
        },{
            name : '烘干机',
            href : '#'
        },{
            name : '洗衣机配件',
            href : '#'
        }]
    },{
        title : '冰箱&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '多门',
            href : '#'
        },{
            name : '对开门',
            href : '#'
        },{
            name : '三门',
            href : '#'
        },{
            name : '双门',
            href : '#'
        },{
            name : '冷柜/冰吧',
            href : '#'
        },{
            name : '酒柜',
            href : '#'
        },{
            name : '冰箱配件',
            href : '#'
        }]
    },{
        title : '厨卫大件&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '油烟机',
            href : '#'
        },{
            name : '燃气灶',
            href : '#'
        },{
            name : '烟灶套装',
            href : '#'
        },{
            name : '集成灶',
            href : '#'
        },{
            name : '消毒柜',
            href : '#'
        },{
            name : '洗碗机',
            href : '#'
        },{
            name : '电热水器',
            href : '#'
        },{
            name : '燃气热水器',
            href : '#'
        },{
            name : '嵌入式厨电',
            href : '#'
        }]
    },{
        title : '厨房小电&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '破壁机',
            href : '#'
        },{
            name : '电烤箱',
            href : '#'
        },{
            name : '电饭煲',
            href : '#'
        },{
            name : '电压力锅',
            href : '#'
        },{
            name : '咖啡机',
            href : '#'
        },{
            name : '豆浆机',
            href : '#'
        },{
            name : '料理机',
            href : '#'
        },{
            name : '电炖锅',
            href : '#'
        },{
            name : '电饼铛',
            href : '#'
        },{
            name : '多用途锅',
            href : '#'
        },{
            name : '电水壶/热水瓶',
            href : '#'
        },{
            name : '微波炉',
            href : '#'
        },{
            name : '榨汁机/原汁机',
            href : '#'
        },{
            name : '养生壶',
            href : '#'
        },{
            name : '电磁炉',
            href : '#'
        },{
            name : '面包机',
            href : '#'
        },{
            name : '空气炸锅',
            href : '#'
        },{
            name : '面条机',
            href : '#'
        },{
            name : '电陶炉',
            href : '#'
        },{
            name : '煮蛋器',
            href : '#'
        },{
            name : '电烧烤炉',
            href : '#'
        }]
    },{
        title : '生活电器&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '吸尘器/除螨仪',
            href : '#'
        },{
            name : '空气净化器',
            href : '#'
        },{
            name : '扫地机器人',
            href : '#'
        },{
            name : '蒸汽拖把/拖地机',
            href : '#'
        },{
            name : '干衣机',
            href : '#'
        },{
            name : '电话机',
            href : '#'
        },{
            name : '饮水机',
            href : '#'
        },{
            name : '净水器',
            href : '#'
        },{
            name : '除湿机',
            href : '#'
        },{
            name : '挂烫机/熨斗',
            href : '#'
        },{
            name : '加湿器',
            href : '#'
        },{
            name : '电风扇',
            href : '#'
        },{
            name : '冷风扇',
            href : '#'
        },{
            name : '毛球修剪器',
            href : '#'
        },{
            name : '生活电器配件',
            href : '#'
        }]
    },{
        title : '个护健康&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '剃须刀',
            href : '#'
        },{
            name : '电动牙刷',
            href : '#'
        },{
            name : '电吹风',
            href : '#'
        },{
            name : '按摩器',
            href : '#'
        },{
            name : '健康秤',
            href : '#'
        },{
            name : '卷/直发器',
            href : '#'
        },{
            name : '剃/脱毛器',
            href : '#'
        },{
            name : '理发器',
            href : '#'
        },{
            name : '足浴盆',
            href : '#'
        },{
            name : '足疗机',
            href : '#'
        },{
            name : '美容器',
            href : '#'
        },{
            name : '洁面仪',
            href : '#'
        },{
            name : '按摩椅',
            href : '#'
        }]
    },{
        title : '家庭影音&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '家庭影院',
            href : '#'
        },{
            name : 'KTV音响',
            href : '#'
        },{
            name : '迷你音响',
            href : '#'
        },{
            name : 'DVD',
            href : '#'
        },{
            name : '功放',
            href : '#'
        },{
            name : '回音壁',
            href : '#'
        },{
            name : '影音配件',
            href : '#'
        }]
    },{
        title : '进口电器&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '进口电器',
            href : '#'
        }]
    }]
},{
    name : ['手机','/','运营商','/','数码'],
    href : '#',
    Contentblack :[{
        name : '玩3C&nbsp&nbsp>',
        href : '#'
    },{
        name : '手机频道&nbsp&nbsp>',
        href : '#'
    },{
        name : '网上营业厅&nbsp&nbsp>',
        href : '#'
    },{
        name : '配件选购中心&nbsp&nbsp>',
        href : '#'
    },{
        name : '智能数码&nbsp&nbsp>',
        href : '#'
    }],

    imgs : {
        imgsTop : ['./src/img/ganggao/apple.jpg',
                   './src/img/ganggao/huawei.jpg',
                   './src/img/ganggao/rongyao.jpg',
                   './src/img/ganggao/xiaomi.jpg',
                   './src/img/ganggao/tengda.jpg',
                   './src/img/ganggao/TP.jpg',
                   './src/img/ganggao/SONY.jpg',
                   './src/img/ganggao/MEIGUO.jpg',],
        imgsButton : ['./src/img/ganggao/DDshouji.jpg',
                       './src/img/ganggao/DDYINGSHI.jpg',]
    },

    datali : [{
        title : '手机通讯&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '手机',
            href : '#'
        },{
            name : '游戏手机',
            href : '#'
        },{
            name : '老人机',
            href : '#'
        },{
            name : '对讲机',
            href : '#'
        },{
            name : '以旧换新',
            href : '#'
        },{
            name : '手机维修',
            href : '#'
        }]
    },{
        title : '运营商&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '合约机',
            href : '#'
        },{
            name : '选号码',
            href : '#'
        },{
            name : '固话宽带',
            href : '#'
        },{
            name : '办套餐',
            href : '#'
        },{
            name : '充话费/流量',
            href : '#'
        },{
            name : '中国电信',
            href : '#'
        },{
            name : '中国联通',
            href : '#'
        },{
            name : '京东通信',
            href : '#'
        },{
            name : '170选号',
            href : '#'
        }]
    },{
        title : '手机配件&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '手机壳',
            href : '#'
        },{
            name : '贴膜',
            href : '#'
        },{
            name : '手机存储卡',
            href : '#'
        },{
            name : '数据线',
            href : '#'
        },{
            name : '充电器',
            href : '#'
        },{
            name : '手机耳机',
            href : '#'
        },{
            name : '创意配件',
            href : '#'
        },{
            name : '手机饰品',
            href : '#'
        },{
            name : '手机电池',
            href : '#'
        },{
            name : '苹果周边',
            href : '#'
        },{
            name : '移动电源',
            href : '#'
        },{
            name : '蓝牙耳机',
            href : '#'
        },{
            name : '手机支架',
            href : '#'
        },{
            name : '车载配件',
            href : '#'
        },{
            name : '拍照配件',
            href : '#'
        }]
    },{
        title : '摄影摄像&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '数码相机',
            href : '#'
        },{
            name : '单电/微单相机',
            href : '#'
        },{
            name : '单反相机',
            href : '#'
        },{
            name : '拍立得',
            href : '#'
        },{
            name : '运动相机',
            href : '#'
        },{
            name : '摄像机',
            href : '#'
        },{
            name : '镜头',
            href : '#'
        },{
            name : '户外器材',
            href : '#'
        },{
            name : '影棚器材',
            href : '#'
        },{
            name : '冲印服务',
            href : '#'
        },{
            name : '数码相框',
            href : '#'
        }]
    },{
        title : '数码配件&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '存储卡',
            href : '#'
        },{
            name : '三脚架/云台',
            href : '#'
        },{
            name : '相机包',
            href : '#'
        },{
            name : '滤镜',
            href : '#'
        },{
            name : '闪光灯/手柄',
            href : '#'
        },{
            name : '相机清洁/贴膜',
            href : '#'
        },{
            name : '机身附件',
            href : '#'
        },{
            name : '镜头附件',
            href : '#'
        },{
            name : '读卡器',
            href : '#'
        },{
            name : '支架',
            href : '#'
        },{
            name : '电池/充电器',
            href : '#'
        }]
    },{
        title : '影音娱乐&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '耳机/耳麦',
            href : '#'
        },{
            name : '音箱/音响',
            href : '#'
        },{
            name : '智能音箱',
            href : '#'
        },{
            name : '便携/无线音箱',
            href : '#'
        },{
            name : '收音机',
            href : '#'
        },{
            name : '麦克风',
            href : '#'
        },{
            name : 'MP3/MP4',
            href : '#'
        },{
            name : '专业音频',
            href : '#'
        },{
            name : '音频线',
            href : '#'
        }]
    },{
        title : '数码配件&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '存储卡',
            href : '#'
        },{
            name : '三脚架/云台',
            href : '#'
        },{
            name : '相机包',
            href : '#'
        },{
            name : '滤镜',
            href : '#'
        },{
            name : '闪光灯/手柄',
            href : '#'
        },{
            name : '相机清洁/贴膜',
            href : '#'
        },{
            name : '机身附件',
            href : '#'
        },{
            name : '镜头附件',
            href : '#'
        },{
            name : '读卡器',
            href : '#'
        },{
            name : '支架',
            href : '#'
        },{
            name : '电池/充电器',
            href : '#'
        }]
    },{
        title : '智能设备&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '智能手环',
            href : '#'
        },{
            name : '智能手表',
            href : '#'
        },{
            name : '智能眼镜',
            href : '#'
        },{
            name : '智能机器人',
            href : '#'
        },{
            name : '运动跟踪器',
            href : '#'
        },{
            name : '健康监测',
            href : '#'
        },{
            name : '智能配饰',
            href : '#'
        },{
            name : '智能家居',
            href : '#'
        },{
            name : '体感车',
            href : '#'
        },{
            name : '无人机',
            href : '#'
        }]
    },{
        title : '电子教育&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '学生平板',
            href : '#'
        },{
            name : '点读机/笔',
            href : '#'
        },{
            name : '早教益智',
            href : '#'
        },{
            name : '录音笔',
            href : '#'
        },{
            name : '电纸书',
            href : '#'
        },{
            name : '电子词典',
            href : '#'
        },{
            name : '复读机',
            href : '#'
        },{
            name : '翻译机',
            href : '#'
        }]
    }]
},{
    name : ['电脑','/','办公'],
    href : '#',
    Contentblack :[{
        name : '玩3C&nbsp&nbsp>',
        href : '#'
    },{
        name : '本周热卖&nbsp&nbsp>',
        href : '#'
    },{
        name : '企业采购&nbsp&nbsp>',
        href : '#'
    },{
        name : 'GAME+&nbsp&nbsp>',
        href : '#'
    },{
        name : '装机大师&nbsp&nbsp>',
        href : '#'
    },{
        name : '私人定制&nbsp&nbsp>',
        href : '#'
    }],

    imgs : {
        imgsTop : ['./src/img/ganggao/D1.jpg',
                   './src/img/ganggao/D2.jpg',
                   './src/img/ganggao/D3.jpg',
                   './src/img/ganggao/D4.jpg',
                   './src/img/ganggao/D5.jpg',
                   './src/img/ganggao/D6.jpg',
                   './src/img/ganggao/D7.jpg',
                   './src/img/ganggao/D8.jpg',],
        imgsButton : ['./src/img/ganggao/DDD1.jpg',
                       './src/img/ganggao/DDD2.jpg',]
    },


    datali : [{
        title : '电脑整机&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '笔记本',
            href : '#'
        },{
            name : '游戏本',
            href : '#'
        },{
            name : '平板电脑',
            href : '#'
        },{
            name : '平板电脑配件',
            href : '#'
        },{
            name : '台式机',
            href : '#'
        },{
            name : '一体机',
            href : '#'
        },{
            name : '服务器/工作站',
            href : '#'
        },{
            name : '笔记本配件',
            href : '#'
        }]
    },{
        title : '电脑配件&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '显示器',
            href : '#'
        },{
            name : '柜式空调',
            href : '#'
        },{
            name : 'CPU',
            href : '#'
        },{
            name : '主板',
            href : '#'
        },{
            name : '显卡',
            href : '#'
        },{
            name : '硬盘',
            href : '#'
        },{
            name : '内存',
            href : '#'
        },{
            name : '机箱',
            href : '#'
        },{
            name : '电源',
            href : '#'
        },{
            name : '散热器',
            href : '#'
        },{
            name : '刻录机/光驱',
            href : '#'
        },{
            name : '声卡/扩展卡',
            href : '#'
        },{
            name : '装机配件',
            href : '#'
        },{
            name : 'SSD固态硬盘',
            href : '#'
        },{
            name : '组装电脑',
            href : '#'
        },{
            name : 'HUB/集线器',
            href : '#'
        }]
    },{
        title : '外设产品&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '网络仪表仪器',
            href : '#'
        },{
            name : 'U盘',
            href : '#'
        },{
            name : '移动硬盘',
            href : '#'
        },{
            name : '鼠标垫',
            href : '#'
        },{
            name : '摄像头',
            href : '#'
        },{
            name : '线缆',
            href : '#'
        },{
            name : '手写板',
            href : '#'
        },{
            name : '硬盘盒',
            href : '#'
        },{
            name : '电脑工具',
            href : '#'
        },{
            name : '电脑清洁',
            href : '#'
        },{
            name : 'UPS电源',
            href : '#'
        },{
            name : '插座',
            href : '#'
        }]
    },{
        title : '游戏设备&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '游戏机',
            href : '#'
        },{
            name : '游戏耳机',
            href : '#'
        },{
            name : '手柄/方向盘',
            href : '#'
        },{
            name : '游戏软件',
            href : '#'
        },{
            name : '游戏周边',
            href : '#'
        }]
    },{
        title : '网络产品&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '路由器',
            href : '#'
        },{
            name : '网络机顶盒',
            href : '#'
        },{
            name : '交换机',
            href : '#'
        },{
            name : '网络存储',
            href : '#'
        },{
            name : '网卡',
            href : '#'
        },{
            name : '4G/3G上网',
            href : '#'
        },{
            name : '网线',
            href : '#'
        },{
            name : '网络配件',
            href : '#'
        }]
    },{
        title : '办公设备&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '投影机',
            href : '#'
        },{
            name : '投影配件',
            href : '#'
        },{
            name : '多功能一体机',
            href : '#'
        },{
            name : '打印机',
            href : '#'
        },{
            name : '传真设备',
            href : '#'
        },{
            name : '验钞/点钞机',
            href : '#'
        },{
            name : '扫描设备',
            href : '#'
        },{
            name : '复合机',
            href : '#'
        },{
            name : '碎纸机',
            href : '#'
        },{
            name : '考勤门禁',
            href : '#'
        },{
            name : '收银机',
            href : '#'
        },{
            name : '会议音频视频',
            href : '#'
        },{
            name : '保险柜',
            href : '#'
        },{
            name : '装订/封装机',
            href : '#'
        },{
            name : '安防监控',
            href : '#'
        },{
            name : '办公家具',
            href : '#'
        },{
            name : '白板',
            href : '#'
        }]
    },{
        title : '文具&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '笔类',
            href : '#'
        },{
            name : '本册/便签',
            href : '#'
        },{
            name : '办公文具',
            href : '#'
        },{
            name : '文件收纳',
            href : '#'
        },{
            name : '学生文具',
            href : '#'
        },{
            name : '计算器',
            href : '#'
        },{
            name : '画具画材',
            href : '#'
        },{
            name : '财会用品',
            href : '#'
        }]
    },{
        title : '耗材&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '硒鼓/墨粉',
            href : '#'
        },{
            name : '墨盒',
            href : '#'
        },{
            name : '色带',
            href : '#'
        },{
            name : '纸类',
            href : '#'
        },{
            name : '网卡',
            href : '#'
        },{
            name : '刻录光盘',
            href : '#'
        }]
    },{
        title : '服务产品&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '延保服务',
            href : '#'
        },{
            name : '上门安装',
            href : '#'
        },{
            name : '维修保养',
            href : '#'
        },{
            name : '电脑软件',
            href : '#'
        }]
    }]
},{
    name : ['家居','/','家具','/','家装','/','厨具'],
    href : '#',
    Contentblack :[{
        name : '家电馆&nbsp&nbsp>',
        href : '#'
    },{
        name : '乡镇专卖店&nbsp&nbsp>',
        href : '#'
    },{
        name : '家电服务&nbsp&nbsp>',
        href : '#'
    },{
        name : '家电企业购&nbsp&nbsp>',
        href : '#'
    },{
        name : '商用电器&nbsp&nbsp>',
        href : '#'
    }],

    imgs : {
        imgsTop : ['./src/img/ganggao/meidi.jpg',
                   './src/img/ganggao/haier.jpg',
                   './src/img/ganggao/geli.jpg',
                   './src/img/ganggao/haixin.jpg',
                   './src/img/ganggao/vatti.jpg',
                   './src/img/ganggao/supor.jpg',
                   './src/img/ganggao/konka.jpg',
                   './src/img/ganggao/sanling.jpg',],
        imgsButton : ['./src/img/ganggao/DDbingxiang.jpg',
                       './src/img/ganggao/DDdianshi.jpg',]
    },

    datali : [{
        title : '电视&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '曲面电视',
            href : '#'
        },{
            name : '超薄电视',
            href : '#'
        },{
            name : 'OLED电视',
            href : '#'
        },{
            name : '4K超清电视',
            href : '#'
        },{
            name : '55英寸',
            href : '#'
        },{
            name : '65英寸',
            href : '#'
        },{
            name : '电视配件',
            href : '#'
        }]
    },{
        title : '空调&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '壁挂式空调',
            href : '#'
        },{
            name : '柜式空调',
            href : '#'
        },{
            name : '中央空调',
            href : '#'
        },{
            name : '一级能效空调',
            href : '#'
        },{
            name : '变频空调',
            href : '#'
        },{
            name : '1.5匹空调',
            href : '#'
        },{
            name : '以旧换新',
            href : '#'
        }]
    },{
        title : '洗衣机&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '滚筒洗衣机',
            href : '#'
        },{
            name : '洗烘一体机',
            href : '#'
        },{
            name : '波轮洗衣机',
            href : '#'
        },{
            name : '迷你洗衣机',
            href : '#'
        },{
            name : '烘干机',
            href : '#'
        },{
            name : '洗衣机配件',
            href : '#'
        }]
    },{
        title : '冰箱&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '多门',
            href : '#'
        },{
            name : '对开门',
            href : '#'
        },{
            name : '三门',
            href : '#'
        },{
            name : '双门',
            href : '#'
        },{
            name : '冷柜/冰吧',
            href : '#'
        },{
            name : '酒柜',
            href : '#'
        },{
            name : '冰箱配件',
            href : '#'
        }]
    },{
        title : '厨卫大件&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '油烟机',
            href : '#'
        },{
            name : '燃气灶',
            href : '#'
        },{
            name : '烟灶套装',
            href : '#'
        },{
            name : '集成灶',
            href : '#'
        },{
            name : '消毒柜',
            href : '#'
        },{
            name : '洗碗机',
            href : '#'
        },{
            name : '电热水器',
            href : '#'
        },{
            name : '燃气热水器',
            href : '#'
        },{
            name : '嵌入式厨电',
            href : '#'
        }]
    },{
        title : '厨房小电&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '破壁机',
            href : '#'
        },{
            name : '电烤箱',
            href : '#'
        },{
            name : '电饭煲',
            href : '#'
        },{
            name : '电压力锅',
            href : '#'
        },{
            name : '咖啡机',
            href : '#'
        },{
            name : '豆浆机',
            href : '#'
        },{
            name : '料理机',
            href : '#'
        },{
            name : '电炖锅',
            href : '#'
        },{
            name : '电饼铛',
            href : '#'
        },{
            name : '多用途锅',
            href : '#'
        },{
            name : '电水壶/热水瓶',
            href : '#'
        },{
            name : '微波炉',
            href : '#'
        },{
            name : '榨汁机/原汁机',
            href : '#'
        },{
            name : '养生壶',
            href : '#'
        },{
            name : '电磁炉',
            href : '#'
        },{
            name : '面包机',
            href : '#'
        },{
            name : '空气炸锅',
            href : '#'
        },{
            name : '面条机',
            href : '#'
        },{
            name : '电陶炉',
            href : '#'
        },{
            name : '煮蛋器',
            href : '#'
        },{
            name : '电烧烤炉',
            href : '#'
        }]
    },{
        title : '生活电器&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '吸尘器/除螨仪',
            href : '#'
        },{
            name : '空气净化器',
            href : '#'
        },{
            name : '扫地机器人',
            href : '#'
        },{
            name : '蒸汽拖把/拖地机',
            href : '#'
        },{
            name : '干衣机',
            href : '#'
        },{
            name : '电话机',
            href : '#'
        },{
            name : '饮水机',
            href : '#'
        },{
            name : '净水器',
            href : '#'
        },{
            name : '除湿机',
            href : '#'
        },{
            name : '挂烫机/熨斗',
            href : '#'
        },{
            name : '加湿器',
            href : '#'
        },{
            name : '电风扇',
            href : '#'
        },{
            name : '冷风扇',
            href : '#'
        },{
            name : '毛球修剪器',
            href : '#'
        },{
            name : '生活电器配件',
            href : '#'
        }]
    },{
        title : '个护健康&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '剃须刀',
            href : '#'
        },{
            name : '电动牙刷',
            href : '#'
        },{
            name : '电吹风',
            href : '#'
        },{
            name : '按摩器',
            href : '#'
        },{
            name : '健康秤',
            href : '#'
        },{
            name : '卷/直发器',
            href : '#'
        },{
            name : '剃/脱毛器',
            href : '#'
        },{
            name : '理发器',
            href : '#'
        },{
            name : '足浴盆',
            href : '#'
        },{
            name : '足疗机',
            href : '#'
        },{
            name : '美容器',
            href : '#'
        },{
            name : '洁面仪',
            href : '#'
        },{
            name : '按摩椅',
            href : '#'
        }]
    },{
        title : '家庭影音&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '家庭影院',
            href : '#'
        },{
            name : 'KTV音响',
            href : '#'
        },{
            name : '迷你音响',
            href : '#'
        },{
            name : 'DVD',
            href : '#'
        },{
            name : '功放',
            href : '#'
        },{
            name : '回音壁',
            href : '#'
        },{
            name : '影音配件',
            href : '#'
        }]
    },{
        title : '进口电器&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '进口电器',
            href : '#'
        }]
    }]
},{
    name : ['男装','/','女装','/','童装','/','内衣'],
    href : '#',
    Contentblack :[{
        name : '玩3C&nbsp&nbsp>',
        href : '#'
    },{
        name : '手机频道&nbsp&nbsp>',
        href : '#'
    },{
        name : '网上营业厅&nbsp&nbsp>',
        href : '#'
    },{
        name : '配件选购中心&nbsp&nbsp>',
        href : '#'
    },{
        name : '智能数码&nbsp&nbsp>',
        href : '#'
    }],

    imgs : {
        imgsTop : ['./src/img/ganggao/apple.jpg',
                   './src/img/ganggao/huawei.jpg',
                   './src/img/ganggao/rongyao.jpg',
                   './src/img/ganggao/xiaomi.jpg',
                   './src/img/ganggao/tengda.jpg',
                   './src/img/ganggao/TP.jpg',
                   './src/img/ganggao/SONY.jpg',
                   './src/img/ganggao/MEIGUO.jpg',],
        imgsButton : ['./src/img/ganggao/DDshouji.jpg',
                       './src/img/ganggao/DDYINGSHI.jpg',]
    },

    datali : [{
        title : '手机通讯&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '手机',
            href : '#'
        },{
            name : '游戏手机',
            href : '#'
        },{
            name : '老人机',
            href : '#'
        },{
            name : '对讲机',
            href : '#'
        },{
            name : '以旧换新',
            href : '#'
        },{
            name : '手机维修',
            href : '#'
        }]
    },{
        title : '运营商&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '合约机',
            href : '#'
        },{
            name : '选号码',
            href : '#'
        },{
            name : '固话宽带',
            href : '#'
        },{
            name : '办套餐',
            href : '#'
        },{
            name : '充话费/流量',
            href : '#'
        },{
            name : '中国电信',
            href : '#'
        },{
            name : '中国联通',
            href : '#'
        },{
            name : '京东通信',
            href : '#'
        },{
            name : '170选号',
            href : '#'
        }]
    },{
        title : '手机配件&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '手机壳',
            href : '#'
        },{
            name : '贴膜',
            href : '#'
        },{
            name : '手机存储卡',
            href : '#'
        },{
            name : '数据线',
            href : '#'
        },{
            name : '充电器',
            href : '#'
        },{
            name : '手机耳机',
            href : '#'
        },{
            name : '创意配件',
            href : '#'
        },{
            name : '手机饰品',
            href : '#'
        },{
            name : '手机电池',
            href : '#'
        },{
            name : '苹果周边',
            href : '#'
        },{
            name : '移动电源',
            href : '#'
        },{
            name : '蓝牙耳机',
            href : '#'
        },{
            name : '手机支架',
            href : '#'
        },{
            name : '车载配件',
            href : '#'
        },{
            name : '拍照配件',
            href : '#'
        }]
    },{
        title : '摄影摄像&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '数码相机',
            href : '#'
        },{
            name : '单电/微单相机',
            href : '#'
        },{
            name : '单反相机',
            href : '#'
        },{
            name : '拍立得',
            href : '#'
        },{
            name : '运动相机',
            href : '#'
        },{
            name : '摄像机',
            href : '#'
        },{
            name : '镜头',
            href : '#'
        },{
            name : '户外器材',
            href : '#'
        },{
            name : '影棚器材',
            href : '#'
        },{
            name : '冲印服务',
            href : '#'
        },{
            name : '数码相框',
            href : '#'
        }]
    },{
        title : '数码配件&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '存储卡',
            href : '#'
        },{
            name : '三脚架/云台',
            href : '#'
        },{
            name : '相机包',
            href : '#'
        },{
            name : '滤镜',
            href : '#'
        },{
            name : '闪光灯/手柄',
            href : '#'
        },{
            name : '相机清洁/贴膜',
            href : '#'
        },{
            name : '机身附件',
            href : '#'
        },{
            name : '镜头附件',
            href : '#'
        },{
            name : '读卡器',
            href : '#'
        },{
            name : '支架',
            href : '#'
        },{
            name : '电池/充电器',
            href : '#'
        }]
    },{
        title : '影音娱乐&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '耳机/耳麦',
            href : '#'
        },{
            name : '音箱/音响',
            href : '#'
        },{
            name : '智能音箱',
            href : '#'
        },{
            name : '便携/无线音箱',
            href : '#'
        },{
            name : '收音机',
            href : '#'
        },{
            name : '麦克风',
            href : '#'
        },{
            name : 'MP3/MP4',
            href : '#'
        },{
            name : '专业音频',
            href : '#'
        },{
            name : '音频线',
            href : '#'
        }]
    },{
        title : '数码配件&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '存储卡',
            href : '#'
        },{
            name : '三脚架/云台',
            href : '#'
        },{
            name : '相机包',
            href : '#'
        },{
            name : '滤镜',
            href : '#'
        },{
            name : '闪光灯/手柄',
            href : '#'
        },{
            name : '相机清洁/贴膜',
            href : '#'
        },{
            name : '机身附件',
            href : '#'
        },{
            name : '镜头附件',
            href : '#'
        },{
            name : '读卡器',
            href : '#'
        },{
            name : '支架',
            href : '#'
        },{
            name : '电池/充电器',
            href : '#'
        }]
    },{
        title : '智能设备&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '智能手环',
            href : '#'
        },{
            name : '智能手表',
            href : '#'
        },{
            name : '智能眼镜',
            href : '#'
        },{
            name : '智能机器人',
            href : '#'
        },{
            name : '运动跟踪器',
            href : '#'
        },{
            name : '健康监测',
            href : '#'
        },{
            name : '智能配饰',
            href : '#'
        },{
            name : '智能家居',
            href : '#'
        },{
            name : '体感车',
            href : '#'
        },{
            name : '无人机',
            href : '#'
        }]
    },{
        title : '电子教育&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '学生平板',
            href : '#'
        },{
            name : '点读机/笔',
            href : '#'
        },{
            name : '早教益智',
            href : '#'
        },{
            name : '录音笔',
            href : '#'
        },{
            name : '电纸书',
            href : '#'
        },{
            name : '电子词典',
            href : '#'
        },{
            name : '复读机',
            href : '#'
        },{
            name : '翻译机',
            href : '#'
        }]
    }]
},{
    name : ['美妆','/','个护清洁','/','宠物'],
    href : '#',
    Contentblack :[{
        name : '玩3C&nbsp&nbsp>',
        href : '#'
    },{
        name : '本周热卖&nbsp&nbsp>',
        href : '#'
    },{
        name : '企业采购&nbsp&nbsp>',
        href : '#'
    },{
        name : 'GAME+&nbsp&nbsp>',
        href : '#'
    },{
        name : '装机大师&nbsp&nbsp>',
        href : '#'
    },{
        name : '私人定制&nbsp&nbsp>',
        href : '#'
    }],

    imgs : {
        imgsTop : ['./src/img/ganggao/D1.jpg',
                   './src/img/ganggao/D2.jpg',
                   './src/img/ganggao/D3.jpg',
                   './src/img/ganggao/D4.jpg',
                   './src/img/ganggao/D5.jpg',
                   './src/img/ganggao/D6.jpg',
                   './src/img/ganggao/D7.jpg',
                   './src/img/ganggao/D8.jpg',],
        imgsButton : ['./src/img/ganggao/DDD1.jpg',
                       './src/img/ganggao/DDD2.jpg',]
    },


    datali : [{
        title : '电脑整机&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '笔记本',
            href : '#'
        },{
            name : '游戏本',
            href : '#'
        },{
            name : '平板电脑',
            href : '#'
        },{
            name : '平板电脑配件',
            href : '#'
        },{
            name : '台式机',
            href : '#'
        },{
            name : '一体机',
            href : '#'
        },{
            name : '服务器/工作站',
            href : '#'
        },{
            name : '笔记本配件',
            href : '#'
        }]
    },{
        title : '电脑配件&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '显示器',
            href : '#'
        },{
            name : '柜式空调',
            href : '#'
        },{
            name : 'CPU',
            href : '#'
        },{
            name : '主板',
            href : '#'
        },{
            name : '显卡',
            href : '#'
        },{
            name : '硬盘',
            href : '#'
        },{
            name : '内存',
            href : '#'
        },{
            name : '机箱',
            href : '#'
        },{
            name : '电源',
            href : '#'
        },{
            name : '散热器',
            href : '#'
        },{
            name : '刻录机/光驱',
            href : '#'
        },{
            name : '声卡/扩展卡',
            href : '#'
        },{
            name : '装机配件',
            href : '#'
        },{
            name : 'SSD固态硬盘',
            href : '#'
        },{
            name : '组装电脑',
            href : '#'
        },{
            name : 'HUB/集线器',
            href : '#'
        }]
    },{
        title : '外设产品&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '网络仪表仪器',
            href : '#'
        },{
            name : 'U盘',
            href : '#'
        },{
            name : '移动硬盘',
            href : '#'
        },{
            name : '鼠标垫',
            href : '#'
        },{
            name : '摄像头',
            href : '#'
        },{
            name : '线缆',
            href : '#'
        },{
            name : '手写板',
            href : '#'
        },{
            name : '硬盘盒',
            href : '#'
        },{
            name : '电脑工具',
            href : '#'
        },{
            name : '电脑清洁',
            href : '#'
        },{
            name : 'UPS电源',
            href : '#'
        },{
            name : '插座',
            href : '#'
        }]
    },{
        title : '游戏设备&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '游戏机',
            href : '#'
        },{
            name : '游戏耳机',
            href : '#'
        },{
            name : '手柄/方向盘',
            href : '#'
        },{
            name : '游戏软件',
            href : '#'
        },{
            name : '游戏周边',
            href : '#'
        }]
    },{
        title : '网络产品&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '路由器',
            href : '#'
        },{
            name : '网络机顶盒',
            href : '#'
        },{
            name : '交换机',
            href : '#'
        },{
            name : '网络存储',
            href : '#'
        },{
            name : '网卡',
            href : '#'
        },{
            name : '4G/3G上网',
            href : '#'
        },{
            name : '网线',
            href : '#'
        },{
            name : '网络配件',
            href : '#'
        }]
    },{
        title : '办公设备&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '投影机',
            href : '#'
        },{
            name : '投影配件',
            href : '#'
        },{
            name : '多功能一体机',
            href : '#'
        },{
            name : '打印机',
            href : '#'
        },{
            name : '传真设备',
            href : '#'
        },{
            name : '验钞/点钞机',
            href : '#'
        },{
            name : '扫描设备',
            href : '#'
        },{
            name : '复合机',
            href : '#'
        },{
            name : '碎纸机',
            href : '#'
        },{
            name : '考勤门禁',
            href : '#'
        },{
            name : '收银机',
            href : '#'
        },{
            name : '会议音频视频',
            href : '#'
        },{
            name : '保险柜',
            href : '#'
        },{
            name : '装订/封装机',
            href : '#'
        },{
            name : '安防监控',
            href : '#'
        },{
            name : '办公家具',
            href : '#'
        },{
            name : '白板',
            href : '#'
        }]
    },{
        title : '文具&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '笔类',
            href : '#'
        },{
            name : '本册/便签',
            href : '#'
        },{
            name : '办公文具',
            href : '#'
        },{
            name : '文件收纳',
            href : '#'
        },{
            name : '学生文具',
            href : '#'
        },{
            name : '计算器',
            href : '#'
        },{
            name : '画具画材',
            href : '#'
        },{
            name : '财会用品',
            href : '#'
        }]
    },{
        title : '耗材&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '硒鼓/墨粉',
            href : '#'
        },{
            name : '墨盒',
            href : '#'
        },{
            name : '色带',
            href : '#'
        },{
            name : '纸类',
            href : '#'
        },{
            name : '网卡',
            href : '#'
        },{
            name : '刻录光盘',
            href : '#'
        }]
    },{
        title : '服务产品&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '延保服务',
            href : '#'
        },{
            name : '上门安装',
            href : '#'
        },{
            name : '维修保养',
            href : '#'
        },{
            name : '电脑软件',
            href : '#'
        }]
    }]
},{
    name : ['女鞋','/','箱包','/','钟表','/','珠宝'],
    href : '#',
    Contentblack :[{
        name : '家电馆&nbsp&nbsp>',
        href : '#'
    },{
        name : '乡镇专卖店&nbsp&nbsp>',
        href : '#'
    },{
        name : '家电服务&nbsp&nbsp>',
        href : '#'
    },{
        name : '家电企业购&nbsp&nbsp>',
        href : '#'
    },{
        name : '商用电器&nbsp&nbsp>',
        href : '#'
    }],

    imgs : {
        imgsTop : ['./src/img/ganggao/meidi.jpg',
                   './src/img/ganggao/haier.jpg',
                   './src/img/ganggao/geli.jpg',
                   './src/img/ganggao/haixin.jpg',
                   './src/img/ganggao/vatti.jpg',
                   './src/img/ganggao/supor.jpg',
                   './src/img/ganggao/konka.jpg',
                   './src/img/ganggao/sanling.jpg',],
        imgsButton : ['./src/img/ganggao/DDbingxiang.jpg',
                       './src/img/ganggao/DDdianshi.jpg',]
    },

    datali : [{
        title : '电视&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '曲面电视',
            href : '#'
        },{
            name : '超薄电视',
            href : '#'
        },{
            name : 'OLED电视',
            href : '#'
        },{
            name : '4K超清电视',
            href : '#'
        },{
            name : '55英寸',
            href : '#'
        },{
            name : '65英寸',
            href : '#'
        },{
            name : '电视配件',
            href : '#'
        }]
    },{
        title : '空调&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '壁挂式空调',
            href : '#'
        },{
            name : '柜式空调',
            href : '#'
        },{
            name : '中央空调',
            href : '#'
        },{
            name : '一级能效空调',
            href : '#'
        },{
            name : '变频空调',
            href : '#'
        },{
            name : '1.5匹空调',
            href : '#'
        },{
            name : '以旧换新',
            href : '#'
        }]
    },{
        title : '洗衣机&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '滚筒洗衣机',
            href : '#'
        },{
            name : '洗烘一体机',
            href : '#'
        },{
            name : '波轮洗衣机',
            href : '#'
        },{
            name : '迷你洗衣机',
            href : '#'
        },{
            name : '烘干机',
            href : '#'
        },{
            name : '洗衣机配件',
            href : '#'
        }]
    },{
        title : '冰箱&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '多门',
            href : '#'
        },{
            name : '对开门',
            href : '#'
        },{
            name : '三门',
            href : '#'
        },{
            name : '双门',
            href : '#'
        },{
            name : '冷柜/冰吧',
            href : '#'
        },{
            name : '酒柜',
            href : '#'
        },{
            name : '冰箱配件',
            href : '#'
        }]
    },{
        title : '厨卫大件&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '油烟机',
            href : '#'
        },{
            name : '燃气灶',
            href : '#'
        },{
            name : '烟灶套装',
            href : '#'
        },{
            name : '集成灶',
            href : '#'
        },{
            name : '消毒柜',
            href : '#'
        },{
            name : '洗碗机',
            href : '#'
        },{
            name : '电热水器',
            href : '#'
        },{
            name : '燃气热水器',
            href : '#'
        },{
            name : '嵌入式厨电',
            href : '#'
        }]
    },{
        title : '厨房小电&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '破壁机',
            href : '#'
        },{
            name : '电烤箱',
            href : '#'
        },{
            name : '电饭煲',
            href : '#'
        },{
            name : '电压力锅',
            href : '#'
        },{
            name : '咖啡机',
            href : '#'
        },{
            name : '豆浆机',
            href : '#'
        },{
            name : '料理机',
            href : '#'
        },{
            name : '电炖锅',
            href : '#'
        },{
            name : '电饼铛',
            href : '#'
        },{
            name : '多用途锅',
            href : '#'
        },{
            name : '电水壶/热水瓶',
            href : '#'
        },{
            name : '微波炉',
            href : '#'
        },{
            name : '榨汁机/原汁机',
            href : '#'
        },{
            name : '养生壶',
            href : '#'
        },{
            name : '电磁炉',
            href : '#'
        },{
            name : '面包机',
            href : '#'
        },{
            name : '空气炸锅',
            href : '#'
        },{
            name : '面条机',
            href : '#'
        },{
            name : '电陶炉',
            href : '#'
        },{
            name : '煮蛋器',
            href : '#'
        },{
            name : '电烧烤炉',
            href : '#'
        }]
    },{
        title : '生活电器&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '吸尘器/除螨仪',
            href : '#'
        },{
            name : '空气净化器',
            href : '#'
        },{
            name : '扫地机器人',
            href : '#'
        },{
            name : '蒸汽拖把/拖地机',
            href : '#'
        },{
            name : '干衣机',
            href : '#'
        },{
            name : '电话机',
            href : '#'
        },{
            name : '饮水机',
            href : '#'
        },{
            name : '净水器',
            href : '#'
        },{
            name : '除湿机',
            href : '#'
        },{
            name : '挂烫机/熨斗',
            href : '#'
        },{
            name : '加湿器',
            href : '#'
        },{
            name : '电风扇',
            href : '#'
        },{
            name : '冷风扇',
            href : '#'
        },{
            name : '毛球修剪器',
            href : '#'
        },{
            name : '生活电器配件',
            href : '#'
        }]
    },{
        title : '个护健康&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '剃须刀',
            href : '#'
        },{
            name : '电动牙刷',
            href : '#'
        },{
            name : '电吹风',
            href : '#'
        },{
            name : '按摩器',
            href : '#'
        },{
            name : '健康秤',
            href : '#'
        },{
            name : '卷/直发器',
            href : '#'
        },{
            name : '剃/脱毛器',
            href : '#'
        },{
            name : '理发器',
            href : '#'
        },{
            name : '足浴盆',
            href : '#'
        },{
            name : '足疗机',
            href : '#'
        },{
            name : '美容器',
            href : '#'
        },{
            name : '洁面仪',
            href : '#'
        },{
            name : '按摩椅',
            href : '#'
        }]
    },{
        title : '家庭影音&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '家庭影院',
            href : '#'
        },{
            name : 'KTV音响',
            href : '#'
        },{
            name : '迷你音响',
            href : '#'
        },{
            name : 'DVD',
            href : '#'
        },{
            name : '功放',
            href : '#'
        },{
            name : '回音壁',
            href : '#'
        },{
            name : '影音配件',
            href : '#'
        }]
    },{
        title : '进口电器&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '进口电器',
            href : '#'
        }]
    }]
},{
    name : ['男鞋','/','运动','/','户外'],
    href : '#',
    Contentblack :[{
        name : '玩3C&nbsp&nbsp>',
        href : '#'
    },{
        name : '手机频道&nbsp&nbsp>',
        href : '#'
    },{
        name : '网上营业厅&nbsp&nbsp>',
        href : '#'
    },{
        name : '配件选购中心&nbsp&nbsp>',
        href : '#'
    },{
        name : '智能数码&nbsp&nbsp>',
        href : '#'
    }],

    imgs : {
        imgsTop : ['./src/img/ganggao/apple.jpg',
                   './src/img/ganggao/huawei.jpg',
                   './src/img/ganggao/rongyao.jpg',
                   './src/img/ganggao/xiaomi.jpg',
                   './src/img/ganggao/tengda.jpg',
                   './src/img/ganggao/TP.jpg',
                   './src/img/ganggao/SONY.jpg',
                   './src/img/ganggao/MEIGUO.jpg',],
        imgsButton : ['./src/img/ganggao/DDshouji.jpg',
                       './src/img/ganggao/DDYINGSHI.jpg',]
    },

    datali : [{
        title : '手机通讯&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '手机',
            href : '#'
        },{
            name : '游戏手机',
            href : '#'
        },{
            name : '老人机',
            href : '#'
        },{
            name : '对讲机',
            href : '#'
        },{
            name : '以旧换新',
            href : '#'
        },{
            name : '手机维修',
            href : '#'
        }]
    },{
        title : '运营商&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '合约机',
            href : '#'
        },{
            name : '选号码',
            href : '#'
        },{
            name : '固话宽带',
            href : '#'
        },{
            name : '办套餐',
            href : '#'
        },{
            name : '充话费/流量',
            href : '#'
        },{
            name : '中国电信',
            href : '#'
        },{
            name : '中国联通',
            href : '#'
        },{
            name : '京东通信',
            href : '#'
        },{
            name : '170选号',
            href : '#'
        }]
    },{
        title : '手机配件&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '手机壳',
            href : '#'
        },{
            name : '贴膜',
            href : '#'
        },{
            name : '手机存储卡',
            href : '#'
        },{
            name : '数据线',
            href : '#'
        },{
            name : '充电器',
            href : '#'
        },{
            name : '手机耳机',
            href : '#'
        },{
            name : '创意配件',
            href : '#'
        },{
            name : '手机饰品',
            href : '#'
        },{
            name : '手机电池',
            href : '#'
        },{
            name : '苹果周边',
            href : '#'
        },{
            name : '移动电源',
            href : '#'
        },{
            name : '蓝牙耳机',
            href : '#'
        },{
            name : '手机支架',
            href : '#'
        },{
            name : '车载配件',
            href : '#'
        },{
            name : '拍照配件',
            href : '#'
        }]
    },{
        title : '摄影摄像&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '数码相机',
            href : '#'
        },{
            name : '单电/微单相机',
            href : '#'
        },{
            name : '单反相机',
            href : '#'
        },{
            name : '拍立得',
            href : '#'
        },{
            name : '运动相机',
            href : '#'
        },{
            name : '摄像机',
            href : '#'
        },{
            name : '镜头',
            href : '#'
        },{
            name : '户外器材',
            href : '#'
        },{
            name : '影棚器材',
            href : '#'
        },{
            name : '冲印服务',
            href : '#'
        },{
            name : '数码相框',
            href : '#'
        }]
    },{
        title : '数码配件&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '存储卡',
            href : '#'
        },{
            name : '三脚架/云台',
            href : '#'
        },{
            name : '相机包',
            href : '#'
        },{
            name : '滤镜',
            href : '#'
        },{
            name : '闪光灯/手柄',
            href : '#'
        },{
            name : '相机清洁/贴膜',
            href : '#'
        },{
            name : '机身附件',
            href : '#'
        },{
            name : '镜头附件',
            href : '#'
        },{
            name : '读卡器',
            href : '#'
        },{
            name : '支架',
            href : '#'
        },{
            name : '电池/充电器',
            href : '#'
        }]
    },{
        title : '影音娱乐&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '耳机/耳麦',
            href : '#'
        },{
            name : '音箱/音响',
            href : '#'
        },{
            name : '智能音箱',
            href : '#'
        },{
            name : '便携/无线音箱',
            href : '#'
        },{
            name : '收音机',
            href : '#'
        },{
            name : '麦克风',
            href : '#'
        },{
            name : 'MP3/MP4',
            href : '#'
        },{
            name : '专业音频',
            href : '#'
        },{
            name : '音频线',
            href : '#'
        }]
    },{
        title : '数码配件&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '存储卡',
            href : '#'
        },{
            name : '三脚架/云台',
            href : '#'
        },{
            name : '相机包',
            href : '#'
        },{
            name : '滤镜',
            href : '#'
        },{
            name : '闪光灯/手柄',
            href : '#'
        },{
            name : '相机清洁/贴膜',
            href : '#'
        },{
            name : '机身附件',
            href : '#'
        },{
            name : '镜头附件',
            href : '#'
        },{
            name : '读卡器',
            href : '#'
        },{
            name : '支架',
            href : '#'
        },{
            name : '电池/充电器',
            href : '#'
        }]
    },{
        title : '智能设备&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '智能手环',
            href : '#'
        },{
            name : '智能手表',
            href : '#'
        },{
            name : '智能眼镜',
            href : '#'
        },{
            name : '智能机器人',
            href : '#'
        },{
            name : '运动跟踪器',
            href : '#'
        },{
            name : '健康监测',
            href : '#'
        },{
            name : '智能配饰',
            href : '#'
        },{
            name : '智能家居',
            href : '#'
        },{
            name : '体感车',
            href : '#'
        },{
            name : '无人机',
            href : '#'
        }]
    },{
        title : '电子教育&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '学生平板',
            href : '#'
        },{
            name : '点读机/笔',
            href : '#'
        },{
            name : '早教益智',
            href : '#'
        },{
            name : '录音笔',
            href : '#'
        },{
            name : '电纸书',
            href : '#'
        },{
            name : '电子词典',
            href : '#'
        },{
            name : '复读机',
            href : '#'
        },{
            name : '翻译机',
            href : '#'
        }]
    }]
},{
    name : ['房产','/','汽车','/','汽车用品'],
    href : '#',
    Contentblack :[{
        name : '玩3C&nbsp&nbsp>',
        href : '#'
    },{
        name : '本周热卖&nbsp&nbsp>',
        href : '#'
    },{
        name : '企业采购&nbsp&nbsp>',
        href : '#'
    },{
        name : 'GAME+&nbsp&nbsp>',
        href : '#'
    },{
        name : '装机大师&nbsp&nbsp>',
        href : '#'
    },{
        name : '私人定制&nbsp&nbsp>',
        href : '#'
    }],

    imgs : {
        imgsTop : ['./src/img/ganggao/D1.jpg',
                   './src/img/ganggao/D2.jpg',
                   './src/img/ganggao/D3.jpg',
                   './src/img/ganggao/D4.jpg',
                   './src/img/ganggao/D5.jpg',
                   './src/img/ganggao/D6.jpg',
                   './src/img/ganggao/D7.jpg',
                   './src/img/ganggao/D8.jpg',],
        imgsButton : ['./src/img/ganggao/DDD1.jpg',
                       './src/img/ganggao/DDD2.jpg',]
    },


    datali : [{
        title : '电脑整机&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '笔记本',
            href : '#'
        },{
            name : '游戏本',
            href : '#'
        },{
            name : '平板电脑',
            href : '#'
        },{
            name : '平板电脑配件',
            href : '#'
        },{
            name : '台式机',
            href : '#'
        },{
            name : '一体机',
            href : '#'
        },{
            name : '服务器/工作站',
            href : '#'
        },{
            name : '笔记本配件',
            href : '#'
        }]
    },{
        title : '电脑配件&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '显示器',
            href : '#'
        },{
            name : '柜式空调',
            href : '#'
        },{
            name : 'CPU',
            href : '#'
        },{
            name : '主板',
            href : '#'
        },{
            name : '显卡',
            href : '#'
        },{
            name : '硬盘',
            href : '#'
        },{
            name : '内存',
            href : '#'
        },{
            name : '机箱',
            href : '#'
        },{
            name : '电源',
            href : '#'
        },{
            name : '散热器',
            href : '#'
        },{
            name : '刻录机/光驱',
            href : '#'
        },{
            name : '声卡/扩展卡',
            href : '#'
        },{
            name : '装机配件',
            href : '#'
        },{
            name : 'SSD固态硬盘',
            href : '#'
        },{
            name : '组装电脑',
            href : '#'
        },{
            name : 'HUB/集线器',
            href : '#'
        }]
    },{
        title : '外设产品&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '网络仪表仪器',
            href : '#'
        },{
            name : 'U盘',
            href : '#'
        },{
            name : '移动硬盘',
            href : '#'
        },{
            name : '鼠标垫',
            href : '#'
        },{
            name : '摄像头',
            href : '#'
        },{
            name : '线缆',
            href : '#'
        },{
            name : '手写板',
            href : '#'
        },{
            name : '硬盘盒',
            href : '#'
        },{
            name : '电脑工具',
            href : '#'
        },{
            name : '电脑清洁',
            href : '#'
        },{
            name : 'UPS电源',
            href : '#'
        },{
            name : '插座',
            href : '#'
        }]
    },{
        title : '游戏设备&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '游戏机',
            href : '#'
        },{
            name : '游戏耳机',
            href : '#'
        },{
            name : '手柄/方向盘',
            href : '#'
        },{
            name : '游戏软件',
            href : '#'
        },{
            name : '游戏周边',
            href : '#'
        }]
    },{
        title : '网络产品&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '路由器',
            href : '#'
        },{
            name : '网络机顶盒',
            href : '#'
        },{
            name : '交换机',
            href : '#'
        },{
            name : '网络存储',
            href : '#'
        },{
            name : '网卡',
            href : '#'
        },{
            name : '4G/3G上网',
            href : '#'
        },{
            name : '网线',
            href : '#'
        },{
            name : '网络配件',
            href : '#'
        }]
    },{
        title : '办公设备&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '投影机',
            href : '#'
        },{
            name : '投影配件',
            href : '#'
        },{
            name : '多功能一体机',
            href : '#'
        },{
            name : '打印机',
            href : '#'
        },{
            name : '传真设备',
            href : '#'
        },{
            name : '验钞/点钞机',
            href : '#'
        },{
            name : '扫描设备',
            href : '#'
        },{
            name : '复合机',
            href : '#'
        },{
            name : '碎纸机',
            href : '#'
        },{
            name : '考勤门禁',
            href : '#'
        },{
            name : '收银机',
            href : '#'
        },{
            name : '会议音频视频',
            href : '#'
        },{
            name : '保险柜',
            href : '#'
        },{
            name : '装订/封装机',
            href : '#'
        },{
            name : '安防监控',
            href : '#'
        },{
            name : '办公家具',
            href : '#'
        },{
            name : '白板',
            href : '#'
        }]
    },{
        title : '文具&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '笔类',
            href : '#'
        },{
            name : '本册/便签',
            href : '#'
        },{
            name : '办公文具',
            href : '#'
        },{
            name : '文件收纳',
            href : '#'
        },{
            name : '学生文具',
            href : '#'
        },{
            name : '计算器',
            href : '#'
        },{
            name : '画具画材',
            href : '#'
        },{
            name : '财会用品',
            href : '#'
        }]
    },{
        title : '耗材&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '硒鼓/墨粉',
            href : '#'
        },{
            name : '墨盒',
            href : '#'
        },{
            name : '色带',
            href : '#'
        },{
            name : '纸类',
            href : '#'
        },{
            name : '网卡',
            href : '#'
        },{
            name : '刻录光盘',
            href : '#'
        }]
    },{
        title : '服务产品&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '延保服务',
            href : '#'
        },{
            name : '上门安装',
            href : '#'
        },{
            name : '维修保养',
            href : '#'
        },{
            name : '电脑软件',
            href : '#'
        }]
    }]
},{
    name : ['母婴','/','玩具乐器'],
    href : '#',
    Contentblack :[{
        name : '家电馆&nbsp&nbsp>',
        href : '#'
    },{
        name : '乡镇专卖店&nbsp&nbsp>',
        href : '#'
    },{
        name : '家电服务&nbsp&nbsp>',
        href : '#'
    },{
        name : '家电企业购&nbsp&nbsp>',
        href : '#'
    },{
        name : '商用电器&nbsp&nbsp>',
        href : '#'
    }],

    imgs : {
        imgsTop : ['./src/img/ganggao/meidi.jpg',
                   './src/img/ganggao/haier.jpg',
                   './src/img/ganggao/geli.jpg',
                   './src/img/ganggao/haixin.jpg',
                   './src/img/ganggao/vatti.jpg',
                   './src/img/ganggao/supor.jpg',
                   './src/img/ganggao/konka.jpg',
                   './src/img/ganggao/sanling.jpg',],
        imgsButton : ['./src/img/ganggao/DDbingxiang.jpg',
                       './src/img/ganggao/DDdianshi.jpg',]
    },

    datali : [{
        title : '电视&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '曲面电视',
            href : '#'
        },{
            name : '超薄电视',
            href : '#'
        },{
            name : 'OLED电视',
            href : '#'
        },{
            name : '4K超清电视',
            href : '#'
        },{
            name : '55英寸',
            href : '#'
        },{
            name : '65英寸',
            href : '#'
        },{
            name : '电视配件',
            href : '#'
        }]
    },{
        title : '空调&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '壁挂式空调',
            href : '#'
        },{
            name : '柜式空调',
            href : '#'
        },{
            name : '中央空调',
            href : '#'
        },{
            name : '一级能效空调',
            href : '#'
        },{
            name : '变频空调',
            href : '#'
        },{
            name : '1.5匹空调',
            href : '#'
        },{
            name : '以旧换新',
            href : '#'
        }]
    },{
        title : '洗衣机&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '滚筒洗衣机',
            href : '#'
        },{
            name : '洗烘一体机',
            href : '#'
        },{
            name : '波轮洗衣机',
            href : '#'
        },{
            name : '迷你洗衣机',
            href : '#'
        },{
            name : '烘干机',
            href : '#'
        },{
            name : '洗衣机配件',
            href : '#'
        }]
    },{
        title : '冰箱&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '多门',
            href : '#'
        },{
            name : '对开门',
            href : '#'
        },{
            name : '三门',
            href : '#'
        },{
            name : '双门',
            href : '#'
        },{
            name : '冷柜/冰吧',
            href : '#'
        },{
            name : '酒柜',
            href : '#'
        },{
            name : '冰箱配件',
            href : '#'
        }]
    },{
        title : '厨卫大件&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '油烟机',
            href : '#'
        },{
            name : '燃气灶',
            href : '#'
        },{
            name : '烟灶套装',
            href : '#'
        },{
            name : '集成灶',
            href : '#'
        },{
            name : '消毒柜',
            href : '#'
        },{
            name : '洗碗机',
            href : '#'
        },{
            name : '电热水器',
            href : '#'
        },{
            name : '燃气热水器',
            href : '#'
        },{
            name : '嵌入式厨电',
            href : '#'
        }]
    },{
        title : '厨房小电&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '破壁机',
            href : '#'
        },{
            name : '电烤箱',
            href : '#'
        },{
            name : '电饭煲',
            href : '#'
        },{
            name : '电压力锅',
            href : '#'
        },{
            name : '咖啡机',
            href : '#'
        },{
            name : '豆浆机',
            href : '#'
        },{
            name : '料理机',
            href : '#'
        },{
            name : '电炖锅',
            href : '#'
        },{
            name : '电饼铛',
            href : '#'
        },{
            name : '多用途锅',
            href : '#'
        },{
            name : '电水壶/热水瓶',
            href : '#'
        },{
            name : '微波炉',
            href : '#'
        },{
            name : '榨汁机/原汁机',
            href : '#'
        },{
            name : '养生壶',
            href : '#'
        },{
            name : '电磁炉',
            href : '#'
        },{
            name : '面包机',
            href : '#'
        },{
            name : '空气炸锅',
            href : '#'
        },{
            name : '面条机',
            href : '#'
        },{
            name : '电陶炉',
            href : '#'
        },{
            name : '煮蛋器',
            href : '#'
        },{
            name : '电烧烤炉',
            href : '#'
        }]
    },{
        title : '生活电器&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '吸尘器/除螨仪',
            href : '#'
        },{
            name : '空气净化器',
            href : '#'
        },{
            name : '扫地机器人',
            href : '#'
        },{
            name : '蒸汽拖把/拖地机',
            href : '#'
        },{
            name : '干衣机',
            href : '#'
        },{
            name : '电话机',
            href : '#'
        },{
            name : '饮水机',
            href : '#'
        },{
            name : '净水器',
            href : '#'
        },{
            name : '除湿机',
            href : '#'
        },{
            name : '挂烫机/熨斗',
            href : '#'
        },{
            name : '加湿器',
            href : '#'
        },{
            name : '电风扇',
            href : '#'
        },{
            name : '冷风扇',
            href : '#'
        },{
            name : '毛球修剪器',
            href : '#'
        },{
            name : '生活电器配件',
            href : '#'
        }]
    },{
        title : '个护健康&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '剃须刀',
            href : '#'
        },{
            name : '电动牙刷',
            href : '#'
        },{
            name : '电吹风',
            href : '#'
        },{
            name : '按摩器',
            href : '#'
        },{
            name : '健康秤',
            href : '#'
        },{
            name : '卷/直发器',
            href : '#'
        },{
            name : '剃/脱毛器',
            href : '#'
        },{
            name : '理发器',
            href : '#'
        },{
            name : '足浴盆',
            href : '#'
        },{
            name : '足疗机',
            href : '#'
        },{
            name : '美容器',
            href : '#'
        },{
            name : '洁面仪',
            href : '#'
        },{
            name : '按摩椅',
            href : '#'
        }]
    },{
        title : '家庭影音&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '家庭影院',
            href : '#'
        },{
            name : 'KTV音响',
            href : '#'
        },{
            name : '迷你音响',
            href : '#'
        },{
            name : 'DVD',
            href : '#'
        },{
            name : '功放',
            href : '#'
        },{
            name : '回音壁',
            href : '#'
        },{
            name : '影音配件',
            href : '#'
        }]
    },{
        title : '进口电器&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '进口电器',
            href : '#'
        }]
    }]
},{
    name : ['食品','/','酒类','/','生鲜','/','特产'],
    href : '#',
    Contentblack :[{
        name : '玩3C&nbsp&nbsp>',
        href : '#'
    },{
        name : '本周热卖&nbsp&nbsp>',
        href : '#'
    },{
        name : '企业采购&nbsp&nbsp>',
        href : '#'
    },{
        name : 'GAME+&nbsp&nbsp>',
        href : '#'
    },{
        name : '装机大师&nbsp&nbsp>',
        href : '#'
    },{
        name : '私人定制&nbsp&nbsp>',
        href : '#'
    }],

    imgs : {
        imgsTop : ['./src/img/ganggao/D1.jpg',
                   './src/img/ganggao/D2.jpg',
                   './src/img/ganggao/D3.jpg',
                   './src/img/ganggao/D4.jpg',
                   './src/img/ganggao/D5.jpg',
                   './src/img/ganggao/D6.jpg',
                   './src/img/ganggao/D7.jpg',
                   './src/img/ganggao/D8.jpg',],
        imgsButton : ['./src/img/ganggao/DDD1.jpg',
                       './src/img/ganggao/DDD2.jpg',]
    },


    datali : [{
        title : '电脑整机&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '笔记本',
            href : '#'
        },{
            name : '游戏本',
            href : '#'
        },{
            name : '平板电脑',
            href : '#'
        },{
            name : '平板电脑配件',
            href : '#'
        },{
            name : '台式机',
            href : '#'
        },{
            name : '一体机',
            href : '#'
        },{
            name : '服务器/工作站',
            href : '#'
        },{
            name : '笔记本配件',
            href : '#'
        }]
    },{
        title : '电脑配件&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '显示器',
            href : '#'
        },{
            name : '柜式空调',
            href : '#'
        },{
            name : 'CPU',
            href : '#'
        },{
            name : '主板',
            href : '#'
        },{
            name : '显卡',
            href : '#'
        },{
            name : '硬盘',
            href : '#'
        },{
            name : '内存',
            href : '#'
        },{
            name : '机箱',
            href : '#'
        },{
            name : '电源',
            href : '#'
        },{
            name : '散热器',
            href : '#'
        },{
            name : '刻录机/光驱',
            href : '#'
        },{
            name : '声卡/扩展卡',
            href : '#'
        },{
            name : '装机配件',
            href : '#'
        },{
            name : 'SSD固态硬盘',
            href : '#'
        },{
            name : '组装电脑',
            href : '#'
        },{
            name : 'HUB/集线器',
            href : '#'
        }]
    },{
        title : '外设产品&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '网络仪表仪器',
            href : '#'
        },{
            name : 'U盘',
            href : '#'
        },{
            name : '移动硬盘',
            href : '#'
        },{
            name : '鼠标垫',
            href : '#'
        },{
            name : '摄像头',
            href : '#'
        },{
            name : '线缆',
            href : '#'
        },{
            name : '手写板',
            href : '#'
        },{
            name : '硬盘盒',
            href : '#'
        },{
            name : '电脑工具',
            href : '#'
        },{
            name : '电脑清洁',
            href : '#'
        },{
            name : 'UPS电源',
            href : '#'
        },{
            name : '插座',
            href : '#'
        }]
    },{
        title : '游戏设备&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '游戏机',
            href : '#'
        },{
            name : '游戏耳机',
            href : '#'
        },{
            name : '手柄/方向盘',
            href : '#'
        },{
            name : '游戏软件',
            href : '#'
        },{
            name : '游戏周边',
            href : '#'
        }]
    },{
        title : '网络产品&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '路由器',
            href : '#'
        },{
            name : '网络机顶盒',
            href : '#'
        },{
            name : '交换机',
            href : '#'
        },{
            name : '网络存储',
            href : '#'
        },{
            name : '网卡',
            href : '#'
        },{
            name : '4G/3G上网',
            href : '#'
        },{
            name : '网线',
            href : '#'
        },{
            name : '网络配件',
            href : '#'
        }]
    },{
        title : '办公设备&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '投影机',
            href : '#'
        },{
            name : '投影配件',
            href : '#'
        },{
            name : '多功能一体机',
            href : '#'
        },{
            name : '打印机',
            href : '#'
        },{
            name : '传真设备',
            href : '#'
        },{
            name : '验钞/点钞机',
            href : '#'
        },{
            name : '扫描设备',
            href : '#'
        },{
            name : '复合机',
            href : '#'
        },{
            name : '碎纸机',
            href : '#'
        },{
            name : '考勤门禁',
            href : '#'
        },{
            name : '收银机',
            href : '#'
        },{
            name : '会议音频视频',
            href : '#'
        },{
            name : '保险柜',
            href : '#'
        },{
            name : '装订/封装机',
            href : '#'
        },{
            name : '安防监控',
            href : '#'
        },{
            name : '办公家具',
            href : '#'
        },{
            name : '白板',
            href : '#'
        }]
    },{
        title : '文具&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '笔类',
            href : '#'
        },{
            name : '本册/便签',
            href : '#'
        },{
            name : '办公文具',
            href : '#'
        },{
            name : '文件收纳',
            href : '#'
        },{
            name : '学生文具',
            href : '#'
        },{
            name : '计算器',
            href : '#'
        },{
            name : '画具画材',
            href : '#'
        },{
            name : '财会用品',
            href : '#'
        }]
    },{
        title : '耗材&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '硒鼓/墨粉',
            href : '#'
        },{
            name : '墨盒',
            href : '#'
        },{
            name : '色带',
            href : '#'
        },{
            name : '纸类',
            href : '#'
        },{
            name : '网卡',
            href : '#'
        },{
            name : '刻录光盘',
            href : '#'
        }]
    },{
        title : '服务产品&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '延保服务',
            href : '#'
        },{
            name : '上门安装',
            href : '#'
        },{
            name : '维修保养',
            href : '#'
        },{
            name : '电脑软件',
            href : '#'
        }]
    }]
},{
    name : ['艺术','/','礼品鲜花','/','农资绿植'],
    href : '#',
    Contentblack :[{
        name : '家电馆&nbsp&nbsp>',
        href : '#'
    },{
        name : '乡镇专卖店&nbsp&nbsp>',
        href : '#'
    },{
        name : '家电服务&nbsp&nbsp>',
        href : '#'
    },{
        name : '家电企业购&nbsp&nbsp>',
        href : '#'
    },{
        name : '商用电器&nbsp&nbsp>',
        href : '#'
    }],

    imgs : {
        imgsTop : ['./src/img/ganggao/meidi.jpg',
                   './src/img/ganggao/haier.jpg',
                   './src/img/ganggao/geli.jpg',
                   './src/img/ganggao/haixin.jpg',
                   './src/img/ganggao/vatti.jpg',
                   './src/img/ganggao/supor.jpg',
                   './src/img/ganggao/konka.jpg',
                   './src/img/ganggao/sanling.jpg',],
        imgsButton : ['./src/img/ganggao/DDbingxiang.jpg',
                       './src/img/ganggao/DDdianshi.jpg',]
    },

    datali : [{
        title : '电视&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '曲面电视',
            href : '#'
        },{
            name : '超薄电视',
            href : '#'
        },{
            name : 'OLED电视',
            href : '#'
        },{
            name : '4K超清电视',
            href : '#'
        },{
            name : '55英寸',
            href : '#'
        },{
            name : '65英寸',
            href : '#'
        },{
            name : '电视配件',
            href : '#'
        }]
    },{
        title : '空调&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '壁挂式空调',
            href : '#'
        },{
            name : '柜式空调',
            href : '#'
        },{
            name : '中央空调',
            href : '#'
        },{
            name : '一级能效空调',
            href : '#'
        },{
            name : '变频空调',
            href : '#'
        },{
            name : '1.5匹空调',
            href : '#'
        },{
            name : '以旧换新',
            href : '#'
        }]
    },{
        title : '洗衣机&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '滚筒洗衣机',
            href : '#'
        },{
            name : '洗烘一体机',
            href : '#'
        },{
            name : '波轮洗衣机',
            href : '#'
        },{
            name : '迷你洗衣机',
            href : '#'
        },{
            name : '烘干机',
            href : '#'
        },{
            name : '洗衣机配件',
            href : '#'
        }]
    },{
        title : '冰箱&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '多门',
            href : '#'
        },{
            name : '对开门',
            href : '#'
        },{
            name : '三门',
            href : '#'
        },{
            name : '双门',
            href : '#'
        },{
            name : '冷柜/冰吧',
            href : '#'
        },{
            name : '酒柜',
            href : '#'
        },{
            name : '冰箱配件',
            href : '#'
        }]
    },{
        title : '厨卫大件&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '油烟机',
            href : '#'
        },{
            name : '燃气灶',
            href : '#'
        },{
            name : '烟灶套装',
            href : '#'
        },{
            name : '集成灶',
            href : '#'
        },{
            name : '消毒柜',
            href : '#'
        },{
            name : '洗碗机',
            href : '#'
        },{
            name : '电热水器',
            href : '#'
        },{
            name : '燃气热水器',
            href : '#'
        },{
            name : '嵌入式厨电',
            href : '#'
        }]
    },{
        title : '厨房小电&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '破壁机',
            href : '#'
        },{
            name : '电烤箱',
            href : '#'
        },{
            name : '电饭煲',
            href : '#'
        },{
            name : '电压力锅',
            href : '#'
        },{
            name : '咖啡机',
            href : '#'
        },{
            name : '豆浆机',
            href : '#'
        },{
            name : '料理机',
            href : '#'
        },{
            name : '电炖锅',
            href : '#'
        },{
            name : '电饼铛',
            href : '#'
        },{
            name : '多用途锅',
            href : '#'
        },{
            name : '电水壶/热水瓶',
            href : '#'
        },{
            name : '微波炉',
            href : '#'
        },{
            name : '榨汁机/原汁机',
            href : '#'
        },{
            name : '养生壶',
            href : '#'
        },{
            name : '电磁炉',
            href : '#'
        },{
            name : '面包机',
            href : '#'
        },{
            name : '空气炸锅',
            href : '#'
        },{
            name : '面条机',
            href : '#'
        },{
            name : '电陶炉',
            href : '#'
        },{
            name : '煮蛋器',
            href : '#'
        },{
            name : '电烧烤炉',
            href : '#'
        }]
    },{
        title : '生活电器&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '吸尘器/除螨仪',
            href : '#'
        },{
            name : '空气净化器',
            href : '#'
        },{
            name : '扫地机器人',
            href : '#'
        },{
            name : '蒸汽拖把/拖地机',
            href : '#'
        },{
            name : '干衣机',
            href : '#'
        },{
            name : '电话机',
            href : '#'
        },{
            name : '饮水机',
            href : '#'
        },{
            name : '净水器',
            href : '#'
        },{
            name : '除湿机',
            href : '#'
        },{
            name : '挂烫机/熨斗',
            href : '#'
        },{
            name : '加湿器',
            href : '#'
        },{
            name : '电风扇',
            href : '#'
        },{
            name : '冷风扇',
            href : '#'
        },{
            name : '毛球修剪器',
            href : '#'
        },{
            name : '生活电器配件',
            href : '#'
        }]
    },{
        title : '个护健康&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '剃须刀',
            href : '#'
        },{
            name : '电动牙刷',
            href : '#'
        },{
            name : '电吹风',
            href : '#'
        },{
            name : '按摩器',
            href : '#'
        },{
            name : '健康秤',
            href : '#'
        },{
            name : '卷/直发器',
            href : '#'
        },{
            name : '剃/脱毛器',
            href : '#'
        },{
            name : '理发器',
            href : '#'
        },{
            name : '足浴盆',
            href : '#'
        },{
            name : '足疗机',
            href : '#'
        },{
            name : '美容器',
            href : '#'
        },{
            name : '洁面仪',
            href : '#'
        },{
            name : '按摩椅',
            href : '#'
        }]
    },{
        title : '家庭影音&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '家庭影院',
            href : '#'
        },{
            name : 'KTV音响',
            href : '#'
        },{
            name : '迷你音响',
            href : '#'
        },{
            name : 'DVD',
            href : '#'
        },{
            name : '功放',
            href : '#'
        },{
            name : '回音壁',
            href : '#'
        },{
            name : '影音配件',
            href : '#'
        }]
    },{
        title : '进口电器&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '进口电器',
            href : '#'
        }]
    }]
},{
    name : ['医药保健','/','计生情趣'],
    href : '#',
    Contentblack :[{
        name : '玩3C&nbsp&nbsp>',
        href : '#'
    },{
        name : '手机频道&nbsp&nbsp>',
        href : '#'
    },{
        name : '网上营业厅&nbsp&nbsp>',
        href : '#'
    },{
        name : '配件选购中心&nbsp&nbsp>',
        href : '#'
    },{
        name : '智能数码&nbsp&nbsp>',
        href : '#'
    }],

    imgs : {
        imgsTop : ['./src/img/ganggao/apple.jpg',
                   './src/img/ganggao/huawei.jpg',
                   './src/img/ganggao/rongyao.jpg',
                   './src/img/ganggao/xiaomi.jpg',
                   './src/img/ganggao/tengda.jpg',
                   './src/img/ganggao/TP.jpg',
                   './src/img/ganggao/SONY.jpg',
                   './src/img/ganggao/MEIGUO.jpg',],
        imgsButton : ['./src/img/ganggao/DDshouji.jpg',
                       './src/img/ganggao/DDYINGSHI.jpg',]
    },

    datali : [{
        title : '手机通讯&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '手机',
            href : '#'
        },{
            name : '游戏手机',
            href : '#'
        },{
            name : '老人机',
            href : '#'
        },{
            name : '对讲机',
            href : '#'
        },{
            name : '以旧换新',
            href : '#'
        },{
            name : '手机维修',
            href : '#'
        }]
    },{
        title : '运营商&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '合约机',
            href : '#'
        },{
            name : '选号码',
            href : '#'
        },{
            name : '固话宽带',
            href : '#'
        },{
            name : '办套餐',
            href : '#'
        },{
            name : '充话费/流量',
            href : '#'
        },{
            name : '中国电信',
            href : '#'
        },{
            name : '中国联通',
            href : '#'
        },{
            name : '京东通信',
            href : '#'
        },{
            name : '170选号',
            href : '#'
        }]
    },{
        title : '手机配件&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '手机壳',
            href : '#'
        },{
            name : '贴膜',
            href : '#'
        },{
            name : '手机存储卡',
            href : '#'
        },{
            name : '数据线',
            href : '#'
        },{
            name : '充电器',
            href : '#'
        },{
            name : '手机耳机',
            href : '#'
        },{
            name : '创意配件',
            href : '#'
        },{
            name : '手机饰品',
            href : '#'
        },{
            name : '手机电池',
            href : '#'
        },{
            name : '苹果周边',
            href : '#'
        },{
            name : '移动电源',
            href : '#'
        },{
            name : '蓝牙耳机',
            href : '#'
        },{
            name : '手机支架',
            href : '#'
        },{
            name : '车载配件',
            href : '#'
        },{
            name : '拍照配件',
            href : '#'
        }]
    },{
        title : '摄影摄像&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '数码相机',
            href : '#'
        },{
            name : '单电/微单相机',
            href : '#'
        },{
            name : '单反相机',
            href : '#'
        },{
            name : '拍立得',
            href : '#'
        },{
            name : '运动相机',
            href : '#'
        },{
            name : '摄像机',
            href : '#'
        },{
            name : '镜头',
            href : '#'
        },{
            name : '户外器材',
            href : '#'
        },{
            name : '影棚器材',
            href : '#'
        },{
            name : '冲印服务',
            href : '#'
        },{
            name : '数码相框',
            href : '#'
        }]
    },{
        title : '数码配件&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '存储卡',
            href : '#'
        },{
            name : '三脚架/云台',
            href : '#'
        },{
            name : '相机包',
            href : '#'
        },{
            name : '滤镜',
            href : '#'
        },{
            name : '闪光灯/手柄',
            href : '#'
        },{
            name : '相机清洁/贴膜',
            href : '#'
        },{
            name : '机身附件',
            href : '#'
        },{
            name : '镜头附件',
            href : '#'
        },{
            name : '读卡器',
            href : '#'
        },{
            name : '支架',
            href : '#'
        },{
            name : '电池/充电器',
            href : '#'
        }]
    },{
        title : '影音娱乐&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '耳机/耳麦',
            href : '#'
        },{
            name : '音箱/音响',
            href : '#'
        },{
            name : '智能音箱',
            href : '#'
        },{
            name : '便携/无线音箱',
            href : '#'
        },{
            name : '收音机',
            href : '#'
        },{
            name : '麦克风',
            href : '#'
        },{
            name : 'MP3/MP4',
            href : '#'
        },{
            name : '专业音频',
            href : '#'
        },{
            name : '音频线',
            href : '#'
        }]
    },{
        title : '数码配件&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '存储卡',
            href : '#'
        },{
            name : '三脚架/云台',
            href : '#'
        },{
            name : '相机包',
            href : '#'
        },{
            name : '滤镜',
            href : '#'
        },{
            name : '闪光灯/手柄',
            href : '#'
        },{
            name : '相机清洁/贴膜',
            href : '#'
        },{
            name : '机身附件',
            href : '#'
        },{
            name : '镜头附件',
            href : '#'
        },{
            name : '读卡器',
            href : '#'
        },{
            name : '支架',
            href : '#'
        },{
            name : '电池/充电器',
            href : '#'
        }]
    },{
        title : '智能设备&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '智能手环',
            href : '#'
        },{
            name : '智能手表',
            href : '#'
        },{
            name : '智能眼镜',
            href : '#'
        },{
            name : '智能机器人',
            href : '#'
        },{
            name : '运动跟踪器',
            href : '#'
        },{
            name : '健康监测',
            href : '#'
        },{
            name : '智能配饰',
            href : '#'
        },{
            name : '智能家居',
            href : '#'
        },{
            name : '体感车',
            href : '#'
        },{
            name : '无人机',
            href : '#'
        }]
    },{
        title : '电子教育&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '学生平板',
            href : '#'
        },{
            name : '点读机/笔',
            href : '#'
        },{
            name : '早教益智',
            href : '#'
        },{
            name : '录音笔',
            href : '#'
        },{
            name : '电纸书',
            href : '#'
        },{
            name : '电子词典',
            href : '#'
        },{
            name : '复读机',
            href : '#'
        },{
            name : '翻译机',
            href : '#'
        }]
    }]
},{
    name : ['图书','/','音像','/','电子书'],
    href : '#',
    Contentblack :[{
        name : '玩3C&nbsp&nbsp>',
        href : '#'
    },{
        name : '本周热卖&nbsp&nbsp>',
        href : '#'
    },{
        name : '企业采购&nbsp&nbsp>',
        href : '#'
    },{
        name : 'GAME+&nbsp&nbsp>',
        href : '#'
    },{
        name : '装机大师&nbsp&nbsp>',
        href : '#'
    },{
        name : '私人定制&nbsp&nbsp>',
        href : '#'
    }],

    imgs : {
        imgsTop : ['./src/img/ganggao/D1.jpg',
                   './src/img/ganggao/D2.jpg',
                   './src/img/ganggao/D3.jpg',
                   './src/img/ganggao/D4.jpg',
                   './src/img/ganggao/D5.jpg',
                   './src/img/ganggao/D6.jpg',
                   './src/img/ganggao/D7.jpg',
                   './src/img/ganggao/D8.jpg',],
        imgsButton : ['./src/img/ganggao/DDD1.jpg',
                       './src/img/ganggao/DDD2.jpg',]
    },


    datali : [{
        title : '电脑整机&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '笔记本',
            href : '#'
        },{
            name : '游戏本',
            href : '#'
        },{
            name : '平板电脑',
            href : '#'
        },{
            name : '平板电脑配件',
            href : '#'
        },{
            name : '台式机',
            href : '#'
        },{
            name : '一体机',
            href : '#'
        },{
            name : '服务器/工作站',
            href : '#'
        },{
            name : '笔记本配件',
            href : '#'
        }]
    },{
        title : '电脑配件&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '显示器',
            href : '#'
        },{
            name : '柜式空调',
            href : '#'
        },{
            name : 'CPU',
            href : '#'
        },{
            name : '主板',
            href : '#'
        },{
            name : '显卡',
            href : '#'
        },{
            name : '硬盘',
            href : '#'
        },{
            name : '内存',
            href : '#'
        },{
            name : '机箱',
            href : '#'
        },{
            name : '电源',
            href : '#'
        },{
            name : '散热器',
            href : '#'
        },{
            name : '刻录机/光驱',
            href : '#'
        },{
            name : '声卡/扩展卡',
            href : '#'
        },{
            name : '装机配件',
            href : '#'
        },{
            name : 'SSD固态硬盘',
            href : '#'
        },{
            name : '组装电脑',
            href : '#'
        },{
            name : 'HUB/集线器',
            href : '#'
        }]
    },{
        title : '外设产品&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '网络仪表仪器',
            href : '#'
        },{
            name : 'U盘',
            href : '#'
        },{
            name : '移动硬盘',
            href : '#'
        },{
            name : '鼠标垫',
            href : '#'
        },{
            name : '摄像头',
            href : '#'
        },{
            name : '线缆',
            href : '#'
        },{
            name : '手写板',
            href : '#'
        },{
            name : '硬盘盒',
            href : '#'
        },{
            name : '电脑工具',
            href : '#'
        },{
            name : '电脑清洁',
            href : '#'
        },{
            name : 'UPS电源',
            href : '#'
        },{
            name : '插座',
            href : '#'
        }]
    },{
        title : '游戏设备&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '游戏机',
            href : '#'
        },{
            name : '游戏耳机',
            href : '#'
        },{
            name : '手柄/方向盘',
            href : '#'
        },{
            name : '游戏软件',
            href : '#'
        },{
            name : '游戏周边',
            href : '#'
        }]
    },{
        title : '网络产品&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '路由器',
            href : '#'
        },{
            name : '网络机顶盒',
            href : '#'
        },{
            name : '交换机',
            href : '#'
        },{
            name : '网络存储',
            href : '#'
        },{
            name : '网卡',
            href : '#'
        },{
            name : '4G/3G上网',
            href : '#'
        },{
            name : '网线',
            href : '#'
        },{
            name : '网络配件',
            href : '#'
        }]
    },{
        title : '办公设备&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '投影机',
            href : '#'
        },{
            name : '投影配件',
            href : '#'
        },{
            name : '多功能一体机',
            href : '#'
        },{
            name : '打印机',
            href : '#'
        },{
            name : '传真设备',
            href : '#'
        },{
            name : '验钞/点钞机',
            href : '#'
        },{
            name : '扫描设备',
            href : '#'
        },{
            name : '复合机',
            href : '#'
        },{
            name : '碎纸机',
            href : '#'
        },{
            name : '考勤门禁',
            href : '#'
        },{
            name : '收银机',
            href : '#'
        },{
            name : '会议音频视频',
            href : '#'
        },{
            name : '保险柜',
            href : '#'
        },{
            name : '装订/封装机',
            href : '#'
        },{
            name : '安防监控',
            href : '#'
        },{
            name : '办公家具',
            href : '#'
        },{
            name : '白板',
            href : '#'
        }]
    },{
        title : '文具&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '笔类',
            href : '#'
        },{
            name : '本册/便签',
            href : '#'
        },{
            name : '办公文具',
            href : '#'
        },{
            name : '文件收纳',
            href : '#'
        },{
            name : '学生文具',
            href : '#'
        },{
            name : '计算器',
            href : '#'
        },{
            name : '画具画材',
            href : '#'
        },{
            name : '财会用品',
            href : '#'
        }]
    },{
        title : '耗材&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '硒鼓/墨粉',
            href : '#'
        },{
            name : '墨盒',
            href : '#'
        },{
            name : '色带',
            href : '#'
        },{
            name : '纸类',
            href : '#'
        },{
            name : '网卡',
            href : '#'
        },{
            name : '刻录光盘',
            href : '#'
        }]
    },{
        title : '服务产品&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '延保服务',
            href : '#'
        },{
            name : '上门安装',
            href : '#'
        },{
            name : '维修保养',
            href : '#'
        },{
            name : '电脑软件',
            href : '#'
        }]
    }]
},{
    name : ['机票','/','酒店','/','旅游','/','生活'],
    href : '#',
    Contentblack :[{
        name : '家电馆&nbsp&nbsp>',
        href : '#'
    },{
        name : '乡镇专卖店&nbsp&nbsp>',
        href : '#'
    },{
        name : '家电服务&nbsp&nbsp>',
        href : '#'
    },{
        name : '家电企业购&nbsp&nbsp>',
        href : '#'
    },{
        name : '商用电器&nbsp&nbsp>',
        href : '#'
    }],

    imgs : {
        imgsTop : ['./src/img/ganggao/meidi.jpg',
                   './src/img/ganggao/haier.jpg',
                   './src/img/ganggao/geli.jpg',
                   './src/img/ganggao/haixin.jpg',
                   './src/img/ganggao/vatti.jpg',
                   './src/img/ganggao/supor.jpg',
                   './src/img/ganggao/konka.jpg',
                   './src/img/ganggao/sanling.jpg',],
        imgsButton : ['./src/img/ganggao/DDbingxiang.jpg',
                       './src/img/ganggao/DDdianshi.jpg',]
    },

    datali : [{
        title : '电视&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '曲面电视',
            href : '#'
        },{
            name : '超薄电视',
            href : '#'
        },{
            name : 'OLED电视',
            href : '#'
        },{
            name : '4K超清电视',
            href : '#'
        },{
            name : '55英寸',
            href : '#'
        },{
            name : '65英寸',
            href : '#'
        },{
            name : '电视配件',
            href : '#'
        }]
    },{
        title : '空调&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '壁挂式空调',
            href : '#'
        },{
            name : '柜式空调',
            href : '#'
        },{
            name : '中央空调',
            href : '#'
        },{
            name : '一级能效空调',
            href : '#'
        },{
            name : '变频空调',
            href : '#'
        },{
            name : '1.5匹空调',
            href : '#'
        },{
            name : '以旧换新',
            href : '#'
        }]
    },{
        title : '洗衣机&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '滚筒洗衣机',
            href : '#'
        },{
            name : '洗烘一体机',
            href : '#'
        },{
            name : '波轮洗衣机',
            href : '#'
        },{
            name : '迷你洗衣机',
            href : '#'
        },{
            name : '烘干机',
            href : '#'
        },{
            name : '洗衣机配件',
            href : '#'
        }]
    },{
        title : '冰箱&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '多门',
            href : '#'
        },{
            name : '对开门',
            href : '#'
        },{
            name : '三门',
            href : '#'
        },{
            name : '双门',
            href : '#'
        },{
            name : '冷柜/冰吧',
            href : '#'
        },{
            name : '酒柜',
            href : '#'
        },{
            name : '冰箱配件',
            href : '#'
        }]
    },{
        title : '厨卫大件&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '油烟机',
            href : '#'
        },{
            name : '燃气灶',
            href : '#'
        },{
            name : '烟灶套装',
            href : '#'
        },{
            name : '集成灶',
            href : '#'
        },{
            name : '消毒柜',
            href : '#'
        },{
            name : '洗碗机',
            href : '#'
        },{
            name : '电热水器',
            href : '#'
        },{
            name : '燃气热水器',
            href : '#'
        },{
            name : '嵌入式厨电',
            href : '#'
        }]
    },{
        title : '厨房小电&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '破壁机',
            href : '#'
        },{
            name : '电烤箱',
            href : '#'
        },{
            name : '电饭煲',
            href : '#'
        },{
            name : '电压力锅',
            href : '#'
        },{
            name : '咖啡机',
            href : '#'
        },{
            name : '豆浆机',
            href : '#'
        },{
            name : '料理机',
            href : '#'
        },{
            name : '电炖锅',
            href : '#'
        },{
            name : '电饼铛',
            href : '#'
        },{
            name : '多用途锅',
            href : '#'
        },{
            name : '电水壶/热水瓶',
            href : '#'
        },{
            name : '微波炉',
            href : '#'
        },{
            name : '榨汁机/原汁机',
            href : '#'
        },{
            name : '养生壶',
            href : '#'
        },{
            name : '电磁炉',
            href : '#'
        },{
            name : '面包机',
            href : '#'
        },{
            name : '空气炸锅',
            href : '#'
        },{
            name : '面条机',
            href : '#'
        },{
            name : '电陶炉',
            href : '#'
        },{
            name : '煮蛋器',
            href : '#'
        },{
            name : '电烧烤炉',
            href : '#'
        }]
    },{
        title : '生活电器&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '吸尘器/除螨仪',
            href : '#'
        },{
            name : '空气净化器',
            href : '#'
        },{
            name : '扫地机器人',
            href : '#'
        },{
            name : '蒸汽拖把/拖地机',
            href : '#'
        },{
            name : '干衣机',
            href : '#'
        },{
            name : '电话机',
            href : '#'
        },{
            name : '饮水机',
            href : '#'
        },{
            name : '净水器',
            href : '#'
        },{
            name : '除湿机',
            href : '#'
        },{
            name : '挂烫机/熨斗',
            href : '#'
        },{
            name : '加湿器',
            href : '#'
        },{
            name : '电风扇',
            href : '#'
        },{
            name : '冷风扇',
            href : '#'
        },{
            name : '毛球修剪器',
            href : '#'
        },{
            name : '生活电器配件',
            href : '#'
        }]
    },{
        title : '个护健康&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '剃须刀',
            href : '#'
        },{
            name : '电动牙刷',
            href : '#'
        },{
            name : '电吹风',
            href : '#'
        },{
            name : '按摩器',
            href : '#'
        },{
            name : '健康秤',
            href : '#'
        },{
            name : '卷/直发器',
            href : '#'
        },{
            name : '剃/脱毛器',
            href : '#'
        },{
            name : '理发器',
            href : '#'
        },{
            name : '足浴盆',
            href : '#'
        },{
            name : '足疗机',
            href : '#'
        },{
            name : '美容器',
            href : '#'
        },{
            name : '洁面仪',
            href : '#'
        },{
            name : '按摩椅',
            href : '#'
        }]
    },{
        title : '家庭影音&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '家庭影院',
            href : '#'
        },{
            name : 'KTV音响',
            href : '#'
        },{
            name : '迷你音响',
            href : '#'
        },{
            name : 'DVD',
            href : '#'
        },{
            name : '功放',
            href : '#'
        },{
            name : '回音壁',
            href : '#'
        },{
            name : '影音配件',
            href : '#'
        }]
    },{
        title : '进口电器&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '进口电器',
            href : '#'
        }]
    }]
},{
    name : ['理财','/','众筹','/','白条','/','保险'],
    href : '#',
    Contentblack :[{
        name : '玩3C&nbsp&nbsp>',
        href : '#'
    },{
        name : '手机频道&nbsp&nbsp>',
        href : '#'
    },{
        name : '网上营业厅&nbsp&nbsp>',
        href : '#'
    },{
        name : '配件选购中心&nbsp&nbsp>',
        href : '#'
    },{
        name : '智能数码&nbsp&nbsp>',
        href : '#'
    }],

    imgs : {
        imgsTop : ['./src/img/ganggao/apple.jpg',
                   './src/img/ganggao/huawei.jpg',
                   './src/img/ganggao/rongyao.jpg',
                   './src/img/ganggao/xiaomi.jpg',
                   './src/img/ganggao/tengda.jpg',
                   './src/img/ganggao/TP.jpg',
                   './src/img/ganggao/SONY.jpg',
                   './src/img/ganggao/MEIGUO.jpg',],
        imgsButton : ['./src/img/ganggao/DDshouji.jpg',
                       './src/img/ganggao/DDYINGSHI.jpg',]
    },

    datali : [{
        title : '手机通讯&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '手机',
            href : '#'
        },{
            name : '游戏手机',
            href : '#'
        },{
            name : '老人机',
            href : '#'
        },{
            name : '对讲机',
            href : '#'
        },{
            name : '以旧换新',
            href : '#'
        },{
            name : '手机维修',
            href : '#'
        }]
    },{
        title : '运营商&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '合约机',
            href : '#'
        },{
            name : '选号码',
            href : '#'
        },{
            name : '固话宽带',
            href : '#'
        },{
            name : '办套餐',
            href : '#'
        },{
            name : '充话费/流量',
            href : '#'
        },{
            name : '中国电信',
            href : '#'
        },{
            name : '中国联通',
            href : '#'
        },{
            name : '京东通信',
            href : '#'
        },{
            name : '170选号',
            href : '#'
        }]
    },{
        title : '手机配件&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '手机壳',
            href : '#'
        },{
            name : '贴膜',
            href : '#'
        },{
            name : '手机存储卡',
            href : '#'
        },{
            name : '数据线',
            href : '#'
        },{
            name : '充电器',
            href : '#'
        },{
            name : '手机耳机',
            href : '#'
        },{
            name : '创意配件',
            href : '#'
        },{
            name : '手机饰品',
            href : '#'
        },{
            name : '手机电池',
            href : '#'
        },{
            name : '苹果周边',
            href : '#'
        },{
            name : '移动电源',
            href : '#'
        },{
            name : '蓝牙耳机',
            href : '#'
        },{
            name : '手机支架',
            href : '#'
        },{
            name : '车载配件',
            href : '#'
        },{
            name : '拍照配件',
            href : '#'
        }]
    },{
        title : '摄影摄像&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '数码相机',
            href : '#'
        },{
            name : '单电/微单相机',
            href : '#'
        },{
            name : '单反相机',
            href : '#'
        },{
            name : '拍立得',
            href : '#'
        },{
            name : '运动相机',
            href : '#'
        },{
            name : '摄像机',
            href : '#'
        },{
            name : '镜头',
            href : '#'
        },{
            name : '户外器材',
            href : '#'
        },{
            name : '影棚器材',
            href : '#'
        },{
            name : '冲印服务',
            href : '#'
        },{
            name : '数码相框',
            href : '#'
        }]
    },{
        title : '数码配件&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '存储卡',
            href : '#'
        },{
            name : '三脚架/云台',
            href : '#'
        },{
            name : '相机包',
            href : '#'
        },{
            name : '滤镜',
            href : '#'
        },{
            name : '闪光灯/手柄',
            href : '#'
        },{
            name : '相机清洁/贴膜',
            href : '#'
        },{
            name : '机身附件',
            href : '#'
        },{
            name : '镜头附件',
            href : '#'
        },{
            name : '读卡器',
            href : '#'
        },{
            name : '支架',
            href : '#'
        },{
            name : '电池/充电器',
            href : '#'
        }]
    },{
        title : '影音娱乐&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '耳机/耳麦',
            href : '#'
        },{
            name : '音箱/音响',
            href : '#'
        },{
            name : '智能音箱',
            href : '#'
        },{
            name : '便携/无线音箱',
            href : '#'
        },{
            name : '收音机',
            href : '#'
        },{
            name : '麦克风',
            href : '#'
        },{
            name : 'MP3/MP4',
            href : '#'
        },{
            name : '专业音频',
            href : '#'
        },{
            name : '音频线',
            href : '#'
        }]
    },{
        title : '数码配件&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '存储卡',
            href : '#'
        },{
            name : '三脚架/云台',
            href : '#'
        },{
            name : '相机包',
            href : '#'
        },{
            name : '滤镜',
            href : '#'
        },{
            name : '闪光灯/手柄',
            href : '#'
        },{
            name : '相机清洁/贴膜',
            href : '#'
        },{
            name : '机身附件',
            href : '#'
        },{
            name : '镜头附件',
            href : '#'
        },{
            name : '读卡器',
            href : '#'
        },{
            name : '支架',
            href : '#'
        },{
            name : '电池/充电器',
            href : '#'
        }]
    },{
        title : '智能设备&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '智能手环',
            href : '#'
        },{
            name : '智能手表',
            href : '#'
        },{
            name : '智能眼镜',
            href : '#'
        },{
            name : '智能机器人',
            href : '#'
        },{
            name : '运动跟踪器',
            href : '#'
        },{
            name : '健康监测',
            href : '#'
        },{
            name : '智能配饰',
            href : '#'
        },{
            name : '智能家居',
            href : '#'
        },{
            name : '体感车',
            href : '#'
        },{
            name : '无人机',
            href : '#'
        }]
    },{
        title : '电子教育&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '学生平板',
            href : '#'
        },{
            name : '点读机/笔',
            href : '#'
        },{
            name : '早教益智',
            href : '#'
        },{
            name : '录音笔',
            href : '#'
        },{
            name : '电纸书',
            href : '#'
        },{
            name : '电子词典',
            href : '#'
        },{
            name : '复读机',
            href : '#'
        },{
            name : '翻译机',
            href : '#'
        }]
    }]
},{
    name : ['安装','/','维修','/','清洗保养'],
    href : '#',
    Contentblack :[{
        name : '玩3C&nbsp&nbsp>',
        href : '#'
    },{
        name : '手机频道&nbsp&nbsp>',
        href : '#'
    },{
        name : '网上营业厅&nbsp&nbsp>',
        href : '#'
    },{
        name : '配件选购中心&nbsp&nbsp>',
        href : '#'
    },{
        name : '智能数码&nbsp&nbsp>',
        href : '#'
    }],

    imgs : {
        imgsTop : ['./src/img/ganggao/apple.jpg',
                   './src/img/ganggao/huawei.jpg',
                   './src/img/ganggao/rongyao.jpg',
                   './src/img/ganggao/xiaomi.jpg',
                   './src/img/ganggao/tengda.jpg',
                   './src/img/ganggao/TP.jpg',
                   './src/img/ganggao/SONY.jpg',
                   './src/img/ganggao/MEIGUO.jpg',],
        imgsButton : ['./src/img/ganggao/DDshouji.jpg',
                       './src/img/ganggao/DDYINGSHI.jpg',]
    },

    datali : [{
        title : '手机通讯&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '手机',
            href : '#'
        },{
            name : '游戏手机',
            href : '#'
        },{
            name : '老人机',
            href : '#'
        },{
            name : '对讲机',
            href : '#'
        },{
            name : '以旧换新',
            href : '#'
        },{
            name : '手机维修',
            href : '#'
        }]
    },{
        title : '运营商&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '合约机',
            href : '#'
        },{
            name : '选号码',
            href : '#'
        },{
            name : '固话宽带',
            href : '#'
        },{
            name : '办套餐',
            href : '#'
        },{
            name : '充话费/流量',
            href : '#'
        },{
            name : '中国电信',
            href : '#'
        },{
            name : '中国联通',
            href : '#'
        },{
            name : '京东通信',
            href : '#'
        },{
            name : '170选号',
            href : '#'
        }]
    },{
        title : '手机配件&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '手机壳',
            href : '#'
        },{
            name : '贴膜',
            href : '#'
        },{
            name : '手机存储卡',
            href : '#'
        },{
            name : '数据线',
            href : '#'
        },{
            name : '充电器',
            href : '#'
        },{
            name : '手机耳机',
            href : '#'
        },{
            name : '创意配件',
            href : '#'
        },{
            name : '手机饰品',
            href : '#'
        },{
            name : '手机电池',
            href : '#'
        },{
            name : '苹果周边',
            href : '#'
        },{
            name : '移动电源',
            href : '#'
        },{
            name : '蓝牙耳机',
            href : '#'
        },{
            name : '手机支架',
            href : '#'
        },{
            name : '车载配件',
            href : '#'
        },{
            name : '拍照配件',
            href : '#'
        }]
    },{
        title : '摄影摄像&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '数码相机',
            href : '#'
        },{
            name : '单电/微单相机',
            href : '#'
        },{
            name : '单反相机',
            href : '#'
        },{
            name : '拍立得',
            href : '#'
        },{
            name : '运动相机',
            href : '#'
        },{
            name : '摄像机',
            href : '#'
        },{
            name : '镜头',
            href : '#'
        },{
            name : '户外器材',
            href : '#'
        },{
            name : '影棚器材',
            href : '#'
        },{
            name : '冲印服务',
            href : '#'
        },{
            name : '数码相框',
            href : '#'
        }]
    },{
        title : '数码配件&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '存储卡',
            href : '#'
        },{
            name : '三脚架/云台',
            href : '#'
        },{
            name : '相机包',
            href : '#'
        },{
            name : '滤镜',
            href : '#'
        },{
            name : '闪光灯/手柄',
            href : '#'
        },{
            name : '相机清洁/贴膜',
            href : '#'
        },{
            name : '机身附件',
            href : '#'
        },{
            name : '镜头附件',
            href : '#'
        },{
            name : '读卡器',
            href : '#'
        },{
            name : '支架',
            href : '#'
        },{
            name : '电池/充电器',
            href : '#'
        }]
    },{
        title : '影音娱乐&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '耳机/耳麦',
            href : '#'
        },{
            name : '音箱/音响',
            href : '#'
        },{
            name : '智能音箱',
            href : '#'
        },{
            name : '便携/无线音箱',
            href : '#'
        },{
            name : '收音机',
            href : '#'
        },{
            name : '麦克风',
            href : '#'
        },{
            name : 'MP3/MP4',
            href : '#'
        },{
            name : '专业音频',
            href : '#'
        },{
            name : '音频线',
            href : '#'
        }]
    },{
        title : '数码配件&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '存储卡',
            href : '#'
        },{
            name : '三脚架/云台',
            href : '#'
        },{
            name : '相机包',
            href : '#'
        },{
            name : '滤镜',
            href : '#'
        },{
            name : '闪光灯/手柄',
            href : '#'
        },{
            name : '相机清洁/贴膜',
            href : '#'
        },{
            name : '机身附件',
            href : '#'
        },{
            name : '镜头附件',
            href : '#'
        },{
            name : '读卡器',
            href : '#'
        },{
            name : '支架',
            href : '#'
        },{
            name : '电池/充电器',
            href : '#'
        }]
    },{
        title : '智能设备&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '智能手环',
            href : '#'
        },{
            name : '智能手表',
            href : '#'
        },{
            name : '智能眼镜',
            href : '#'
        },{
            name : '智能机器人',
            href : '#'
        },{
            name : '运动跟踪器',
            href : '#'
        },{
            name : '健康监测',
            href : '#'
        },{
            name : '智能配饰',
            href : '#'
        },{
            name : '智能家居',
            href : '#'
        },{
            name : '体感车',
            href : '#'
        },{
            name : '无人机',
            href : '#'
        }]
    },{
        title : '电子教育&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '学生平板',
            href : '#'
        },{
            name : '点读机/笔',
            href : '#'
        },{
            name : '早教益智',
            href : '#'
        },{
            name : '录音笔',
            href : '#'
        },{
            name : '电纸书',
            href : '#'
        },{
            name : '电子词典',
            href : '#'
        },{
            name : '复读机',
            href : '#'
        },{
            name : '翻译机',
            href : '#'
        }]
    }]
},{

    name : ['工业品'],
    href : '#',
    Contentblack :[{
        name : '玩3C&nbsp&nbsp>',
        href : '#'
    },{
        name : '本周热卖&nbsp&nbsp>',
        href : '#'
    },{
        name : '企业采购&nbsp&nbsp>',
        href : '#'
    },{
        name : 'GAME+&nbsp&nbsp>',
        href : '#'
    },{
        name : '装机大师&nbsp&nbsp>',
        href : '#'
    },{
        name : '私人定制&nbsp&nbsp>',
        href : '#'
    }],

    imgs : {
        imgsTop : ['./src/img/ganggao/D1.jpg',
                   './src/img/ganggao/D2.jpg',
                   './src/img/ganggao/D3.jpg',
                   './src/img/ganggao/D4.jpg',
                   './src/img/ganggao/D5.jpg',
                   './src/img/ganggao/D6.jpg',
                   './src/img/ganggao/D7.jpg',
                   './src/img/ganggao/D8.jpg',],
        imgsButton : ['./src/img/ganggao/DDD1.jpg',
                       './src/img/ganggao/DDD2.jpg',]
    },
    datali : [{
        title : '电脑整机&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '笔记本',
            href : '#'
        },{
            name : '游戏本',
            href : '#'
        },{
            name : '平板电脑',
            href : '#'
        },{
            name : '平板电脑配件',
            href : '#'
        },{
            name : '台式机',
            href : '#'
        },{
            name : '一体机',
            href : '#'
        },{
            name : '服务器/工作站',
            href : '#'
        },{
            name : '笔记本配件',
            href : '#'
        }]
    },{
        title : '电脑配件&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '显示器',
            href : '#'
        },{
            name : '柜式空调',
            href : '#'
        },{
            name : 'CPU',
            href : '#'
        },{
            name : '主板',
            href : '#'
        },{
            name : '显卡',
            href : '#'
        },{
            name : '硬盘',
            href : '#'
        },{
            name : '内存',
            href : '#'
        },{
            name : '机箱',
            href : '#'
        },{
            name : '电源',
            href : '#'
        },{
            name : '散热器',
            href : '#'
        },{
            name : '刻录机/光驱',
            href : '#'
        },{
            name : '声卡/扩展卡',
            href : '#'
        },{
            name : '装机配件',
            href : '#'
        },{
            name : 'SSD固态硬盘',
            href : '#'
        },{
            name : '组装电脑',
            href : '#'
        },{
            name : 'HUB/集线器',
            href : '#'
        }]
    },{
        title : '外设产品&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '网络仪表仪器',
            href : '#'
        },{
            name : 'U盘',
            href : '#'
        },{
            name : '移动硬盘',
            href : '#'
        },{
            name : '鼠标垫',
            href : '#'
        },{
            name : '摄像头',
            href : '#'
        },{
            name : '线缆',
            href : '#'
        },{
            name : '手写板',
            href : '#'
        },{
            name : '硬盘盒',
            href : '#'
        },{
            name : '电脑工具',
            href : '#'
        },{
            name : '电脑清洁',
            href : '#'
        },{
            name : 'UPS电源',
            href : '#'
        },{
            name : '插座',
            href : '#'
        }]
    },{
        title : '游戏设备&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '游戏机',
            href : '#'
        },{
            name : '游戏耳机',
            href : '#'
        },{
            name : '手柄/方向盘',
            href : '#'
        },{
            name : '游戏软件',
            href : '#'
        },{
            name : '游戏周边',
            href : '#'
        }]
    },{
        title : '网络产品&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '路由器',
            href : '#'
        },{
            name : '网络机顶盒',
            href : '#'
        },{
            name : '交换机',
            href : '#'
        },{
            name : '网络存储',
            href : '#'
        },{
            name : '网卡',
            href : '#'
        },{
            name : '4G/3G上网',
            href : '#'
        },{
            name : '网线',
            href : '#'
        },{
            name : '网络配件',
            href : '#'
        }]
    },{
        title : '办公设备&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '投影机',
            href : '#'
        },{
            name : '投影配件',
            href : '#'
        },{
            name : '多功能一体机',
            href : '#'
        },{
            name : '打印机',
            href : '#'
        },{
            name : '传真设备',
            href : '#'
        },{
            name : '验钞/点钞机',
            href : '#'
        },{
            name : '扫描设备',
            href : '#'
        },{
            name : '复合机',
            href : '#'
        },{
            name : '碎纸机',
            href : '#'
        },{
            name : '考勤门禁',
            href : '#'
        },{
            name : '收银机',
            href : '#'
        },{
            name : '会议音频视频',
            href : '#'
        },{
            name : '保险柜',
            href : '#'
        },{
            name : '装订/封装机',
            href : '#'
        },{
            name : '安防监控',
            href : '#'
        },{
            name : '办公家具',
            href : '#'
        },{
            name : '白板',
            href : '#'
        }]
    },{
        title : '文具&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '笔类',
            href : '#'
        },{
            name : '本册/便签',
            href : '#'
        },{
            name : '办公文具',
            href : '#'
        },{
            name : '文件收纳',
            href : '#'
        },{
            name : '学生文具',
            href : '#'
        },{
            name : '计算器',
            href : '#'
        },{
            name : '画具画材',
            href : '#'
        },{
            name : '财会用品',
            href : '#'
        }]
    },{
        title : '耗材&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '硒鼓/墨粉',
            href : '#'
        },{
            name : '墨盒',
            href : '#'
        },{
            name : '色带',
            href : '#'
        },{
            name : '纸类',
            href : '#'
        },{
            name : '网卡',
            href : '#'
        },{
            name : '刻录光盘',
            href : '#'
        }]
    },{
        title : '服务产品&nbsp&nbsp>',
        href : '#',
        items : [{
            name : '延保服务',
            href : '#'
        },{
            name : '上门安装',
            href : '#'
        },{
            name : '维修保养',
            href : '#'
        },{
            name : '电脑软件',
            href : '#'
        }]
    }]
}];
$('.fs .fs-menu').fsMenu({
    data:data, 
})

$('.fs .fs-slide').fsSlide({
    width: 590,
    height:470,
    buttonWidth:24,
    buttonHeight:40,
    buttonBackground:"#111",
    buttonColor:"#fff",
    direction: "next",
    autoTime: 2000,
    biaoji: [
        './src/img/lbT-1.png',
        './src/img/lbT-2.png',
    ],
    images: [
        './src/img/jin-1.jpg',
        './src/img/jin-2.jpg',
        './src/img/jin-3.jpg',
        './src/img/jin-4.jpg',
        './src/img/jin-5.jpg',
        './src/img/jin-6.jpg',
        './src/img/jin-7.jpg',
        './src/img/jin-8.jpg',
    ],
})


        








      


