$(function() {
    console.log("Connection...");

    var $btn = $(".btn");

    var $menu = $(".menu");
    var $area = $menu.find(".area");
    var $menu_cancel = $area.find(".cancel");


    // 메뉴 트리거
    $btn.on("click", function() {
        $(this).addClass("on");
        $menu.addClass("on").fadeIn(500);
    });

    $menu_cancel.on("click", function() {
        $menu.removeClass("on").hide();
        $btn.removeClass("on");
    }); 

    var li_index = $(".menu .container ul li");

    li_index.on("click", function(){
        $menu.removeClass("on").hide();
        $btn.removeClass("on");
    }); // 메뉴 트리거
});

