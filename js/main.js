$(function () {
    console.log("Connection...");


    setTimeout(function () {

        window.open("about:blank","_self").close();

    }, 600000);

    var $btn = $(".btn");

    var $menu = $(".menu");
    var $area = $menu.find(".area");
    var $menu_cancel = $area.find(".cancel");


    // 메뉴 트리거
    $btn.on("click", function () {
        $btn.addClass("on").hide();
        $menu.addClass("on").fadeIn(500);
    });

    $menu_cancel.on("click", function () {
        $menu.removeClass("on").hide();
        $btn.removeClass("on").show();
    });

    var li_index = $(".menu .container ul li");

    li_index.on("click", function () {
        $menu.removeClass("on").hide();
        $btn.removeClass("on");
    }); // 메뉴 트리거

    // work 슬라이드 이벤트
    $(".work .container").slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        swipeToSlide: true
    });

    // 슬라이드 이미지 호버
    var $work_content = $(".work .container .card .imgbox .content");
    $work_content.hide();
    $(".work .imgbox").on("mouseenter", function () {
        $(this).find(".content").show();
        $(this).find(".content").stop().animate({
            "bottom": "0px"
        });
        // $(this).stop().animate({
        //     'bottom': 0
        // }, 1000);
    }).on("mouseleave", function () {
        $(this).find(".content").slideDown();
        $(this).find(".content").stop().animate({
            "bottom": "-250px"
        });
    });
});