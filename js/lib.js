$(function () {
    /* Fullpage JS */
    var myFullpage = new fullpage('#fullpage', {
        verticalCentered: true,
        anchors: ['intro', 'about', 'work', 'contact'],
        menu: '#menu'
    });


    // owl JS
    $(".owl-carousel").owlCarousel({
        items: 1, // 화면에 표시할 개수 설정
        margin: 50, // 간격 설정
        loop: true, // 슬라이드 반복 유무
        center: false, // 중간 사진 확대 유무
        mouseDrag: true, // 마우스 드래그 사용 유무
        touchDrag: false, // 터치 사용 유무
        autoplay: false, // 자동 슬라이드 사용 유무
        autoplayTimeout: 5000, // 자동 슬라이드 시간 설정
        autoplayHoverPause: true, // 자동 슬라이드 마우스 hover시 pause 사용 유무
        autoWidth: false,
        // owl-theme 스타일 적용 옵션
        nav: true, // prev, next 버튼 사용 유무
        dots: false // 슬라이드 이동 버튼 사용 유무
    });
});