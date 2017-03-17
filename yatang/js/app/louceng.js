$(function(){
    var $index=0;

    $("#cont a").click(function(e) {
        e=e||window.event
        e.preventDefault();
        $(this).addClass("choose").siblings().removeClass("choose");
        $index =$(this).index()+1;
        var _top=$(".louceng").eq($index+1).offset().top;
        $(window).animate({scrollTop:_top},500);
    });
    var win=$(window);//得到窗口对象
    var sc=$(document);//得到document文档对象。
    var sTop =sc.scrollTop();
    console.log(sTop)
    win.scroll(function(){
        if(sc.scrollTop()>=$(".louceng").eq($(this).index()).height()) {
            $("#suspend").show();
            var _index=Math.floor((sc.scrollTop())/$(".louceng").eq($(this).index()).height());
            $("#suspend #cont a").eq(_index-1).addClass("choose").siblings().removeClass("choose");
            $("#suspend #cont a:last").removeClass("choose");
        }else{
            $("#suspend").hide();
        }
    });
});
/*//各个楼层
    var aDiv = $(".louceng");
    $(window).scroll(function () {
        //可视窗口高度
        var winH = $(window).height();
        //鼠标滚动的距离
        var iTop = $(window).scrollTop();
        if (iTop >= 500) {
            $("#suspend").show();
            //鼠标滑动式改变
            aDiv.each(function () {
                if (winH + iTop - $(this).offset().top >= winH/ 2){
                    $(this).find("a").addClass("choose").parent().siblings().find("a").removeClass("choose");
                }
            })
        }
        else {
            $("#suspend").hide()
        }
    })
});*/

