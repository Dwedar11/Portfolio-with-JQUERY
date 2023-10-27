
$(function () {
    // scroll
    let sectionTop = $("#about").offset().top
    // sidebar default
    let sideWidth = $(".innerbox").innerWidth();
    $(".sidebar").animate({ left: -sideWidth });


    $(window).scroll(function () {
        let top = $(window).scrollTop()
        if (top >= sectionTop - 20) {
            $(".navbar").css("backgroundColor", "rgba(0, 0, 0, .9)")
            $(".icoTop").fadeIn(1000)
        }
        else {
            $(".navbar").css("background-color", "transparent");
            $(".icoTop").fadeOut(1000);
        }
    });
    // scroll button
    $(".icoTop").click(function () {
        $("html,body").animate({ scrollTop: 0 }, 1000);
    });
    // niceScroll   
    $("a[href^='#']").click(function (eventInfo) {
        let aHref = eventInfo.target.getAttribute('href');
        let sectionOffSet = $(aHref).offset().top;
        $("body,html").animate({ scrollTop: sectionOffSet }, 1000);
    });
    // color-box
    $(".box").click(function (eventInfo) {
        let bgColor = $(eventInfo.target).css('backgroundColor');
        $("h1 , h3 , a  ").css('color', bgColor)
    })
    // box-img
    $(".box-img").click(function (eventInfo) {
        let imgSrc = eventInfo.target.getAttribute('src');
        $("#home").css('backgroundImage', `url(${imgSrc})`);
    });
    // sidebar
    $(".sidebar i").click(function () {
        if ($(".sidebar").css('left') == '0px') {
            $(".sidebar").animate({ left: -sideWidth }, 1000);
        } else {
            $(".sidebar").animate({ left: '0px' }, 1000);
        }
    });
    //loading
    $(".loading").fadeOut(3000, function () {
        $(".loading").removeClass("d-flex");
        $("body").css("overflow", "auto");
    });
});




