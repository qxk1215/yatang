$(function() {
    //选项卡开始
    $("#liebiao01 li").hover(function () {
        var $index = $(this).index();
        console.log($index)
        $(".s-l-shangpin img").attr({src:"img/s"+($index+1)+".jpg"});
        $(".bigView img").attr({src:"img/s"+($index+1)+".jpg"});
        $(".liebiao01 img").eq($(this).index()).css({border: "solid 2px #000",width:"56px",height:"56px"})

    },function(){
        $("#liebiao01 img").eq($(this).index()).css({border: "0",width:"60px",height:"60px"})
    });
    //选项卡结束
    //放大镜开始
    $(".s-l-shangpin").mouseenter(function(){
        $(".smallView").css("display","block");
        $(".bigView").css("display","block");

        $(document).mousemove(function(e){
            var _left= e.pageX-$(".smallView").width()/2-$(".s-l-shangpin").offset().left;
            var _top= e.pageY-$(".smallView").height()/2-$(".s-l-shangpin").offset().top;
            if(_left<0){_left=0}
            if(_top<0){_top=0}
            if(_left>$(".s-l-shangpin").outerWidth()-$(".smallView").width()){
                _left=$(".s-l-shangpin").outerWidth()-$(".smallView").width()
            }
            if(_top>$(".s-l-shangpin").outerHeight()-$(".smallView").height()){
                _top=$(".s-l-shangpin").outerHeight()-$(".smallView").height()
            }
            $(".smallView").css({left:_left+"px",top:_top+"px"})

            var svWidth=$(".s-l-shangpin").width()*$(".bigView").width()/$("#bigImg").width()
            var svHeight=$(".s-l-shangpin").height()*$(".bigView").height()/$("#bigImg").height()
            $(".smallView").css({width:svWidth+"px",height:svHeight+"px"})

            var bigLeft=$("#bigImg").width()*_left/$(".s-l-shangpin").width();
            var bigTop=$("#bigImg").height()*_top/$(".s-l-shangpin").height();
            $("#bigImg").css({left:-bigLeft+"px",top:-bigTop+"px"})
        })
    })
    $(".s-l-shangpin").mouseleave(function(){
        $(".smallView").css("display","none");
        $(".bigView").css("display","none");
    })
    //放大镜结束
    //左右轮播
});



