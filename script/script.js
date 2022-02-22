$(function(){
    // 로고 클릭 시 최상단으로
    $(".logo").on("click",function(){
        $("html, body").stop().animate({scrollTop:0},400)
    });
    // 하단 버튼 클릭 시 최상단으로
    $(".btn_top").on("click",function(){
        $("html, body").stop().animate({scrollTop:0},400)
    });
    // 하단 버튼이 스크롤 500px 도달 시 최상단으로
    $(window).scroll(function(){
        if($(this).scrollTop() > 500){
            $(".btn_top").fadeIn();
        } else {
            $(".btn_top").fadeOut();
        }
    });
    // 메뉴 클릭 시 애니메이션으로 각 컨텐츠 위치로 이동
    var menu =$(".menu>ul>li");
    var wrap =$("#center>div");
    menu.click(function(){
        var tg = $(this); // $(this) : 이벤트가 일어난 요소 선택
        var i = tg.index(); // .index() : 순서값 변환
        var section = wrap.eq(i); //eq() : 지정한 변수만 선택
        var top = section.offset().top; // .offset() : 전체 문서를 기준으로 선택한 요소의 가로 세로 떨어진 위치의 좌표값 변경시 사용 (top,left만 사용가능)
        $("html,body").stop().animate({scrollTop:top}) 
    });
});