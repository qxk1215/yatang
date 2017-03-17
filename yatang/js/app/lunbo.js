//轮播图
var _time = null;
var index = 1;
$(function(){
    showimg(index);
    //鼠标移入移出
    $("#banner").hover(function(){
        clearTimeout(_time);
    },function(){
            showimg(index);
        });
    $(".imgnum span").hover(function () {
        clearInterval(_time);
        var icon=$(this).index()+1;
        $(".imgnum span").removeClass("onselect").eq(icon-1).addClass("onselect");
        $("#item01 li").hide().stop(true,true).eq(icon-1).fadeIn("slow");
            },function () {
        index=$(this).index()+1> 4 ? 1 :parseInt($(this).index()+1)+1;
        _time = setTimeout("showimg(" + index + ")", 2500);
        });
});
function showimg(num) {
    index = num;
    $(".imgnum span").removeClass("onselect").eq(index-1).addClass("onselect");
    $("#item01 li").hide().stop(true,true).eq(index-1).fadeIn("slow");
    index = index + 1 > 5 ? 1 : index + 1;
    _time = setTimeout("showimg(" + index + ")", 3000);
}