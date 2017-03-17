$(function(){
    //手机雅堂二维码
    $("#er").hover(function(){
        $("#pic01").css({display:"block"});
    },function(){
        $("#pic01").css({display:"none"});
    });
    //关注雅堂二维码
    $("#guan").hover(function(){
        $("#pic02").css({display:"block"});
    },function(){
        $("#pic02").css({display:"none"});
    });
    //切换全国站
    $(".city").eq(0).hover(function(){
            $("#city01").css({display:"block"})
        },
        function(){
            $("#city01").css({display:"none"})
        });
    //选项卡
    $(".general li").hover(function(){
        $(".extend").eq($(this).index()).css({display:"block"})
    },function(){
        $(".extend").eq($(this).index()).css({display:"none"})
    });
    //电视换台
    var _time=null;
    function outoplay(){
        var _index = 0;//显示当前索引
        _time = setInterval(function(){
            $("#TV>#item02").stop().animate({left:-_index*128},1000);
            _index>=$("#item02>li").size()-1?_index=0:_index++;
        },1500)
    }
    //鼠标滑过停止
    $(function(){
        $("#TV").hover(function(){
                clearInterval(_time);
            },
            function(){
                outoplay()
            })
    });
    //鼠标滑过会聚客厅
        cartoon($("#x-drawing a"));
        cartoon($("#x-bedroom a"));
        cartoon($("#x-eating a"));
        cartoon($("#x-book a"));
        cartoon($("#x-emblazonry a"));
        cartoon($("#x-kitchen a"));
    function cartoon(dom){
        dom.hover(function(){
            $(this).stop().animate({top:"-2px"},250);
            $(this).css("boxShadow","5px 5px 15px 5px rgba(0,0,0,0.1)");
            $(this).css("z-index","10");
        },function(){
            $(this).stop().animate({top:"-0px"},250);
            $(this).css("boxShadow","none");
            $(this).css("z-index","0");
        })
    }
    //鼠标滑过美家美饰出现字
    showTxt($("#x-emblazonry a:eq(0)"),"环保烤漆 精致布艺灯罩 简约复古");
    showTxt($("#x-emblazonry a:eq(1)"),"泰国进口 独特设计头部全乳胶屑填充 环保 安全");
    showTxt($("#x-emblazonry a:eq(2)"),"悬挂沥干 精致实用 太空铝材质 值得拥有");
    showTxt($("#x-emblazonry a:eq(3)"),"德国进口 无菌储存 绿色环保 只需四步锁住营养");
    showTxt($("#x-emblazonry a:eq(4)"),"浪漫温馨 创意无限 loft复古时尚设计");
    showTxt($("#x-emblazonry a:eq(5)"),"触控开关 智能定时 4USB快充 高端钢琴外形");
    showTxt($("#x-emblazonry a:eq(6)"),"款式经典 端庄大气 经典挂墙式浴室");
    //鼠标滑过天天集市出现字
    showTxt($("#x-kitchen a:eq(0)"),"流苏边时尚 新款男女情侣百搭 冬季保暖 多色可选");
    showTxt($("#x-kitchen a:eq(1)"),"房间小管家 精准测温 安全材质 物流感应 无需电池");
    showTxt($("#x-kitchen a:eq(2)"),"家用携带迷你机 卧室 办公室 香薰超声波超静音");
    showTxt($("#x-kitchen a:eq(3)"),"新型TPR、粘性强、可水洗重复使用");
    showTxt($("#x-kitchen a:eq(4)"),"H型创意伸缩书，材质密度板随意巧搭 多种组合");
    showTxt($("#x-kitchen a:eq(5)"),"随性有我 生活无忧 快乐跟随 精美印花 不易脱落");
    showTxt($("#x-kitchen a:eq(6)"),"优质矿山原生铸铁、无涂层、健康不粘、坚固耐用");
    function showTxt(dom,word) {
        var $p = $("<p>");
        $p.addClass("paragraph");
        $p.text(word);
        dom.hover(function () {
            $(this).append($p);
            $($p).stop(true,true).animate({height: "48px"},500)
        }, function () {
            $($p).stop(true,true).animate({height: "0"},500)
        });
    }
});
