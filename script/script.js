$(document).ready(function () {
    $(".icon-hamburger").click(function () {
        $(".menu-container").stop();
        $(".menu-container").animate({
            top: '100px'
        }, 500);
        $(".icon-hamburger").css({
            display: "none"
        });
        $(".icon-close").css({
            display: "block"
        });
    });
    $(".icon-close").click(function () {
        $(".menu-container").stop();
        $(".menu-container").animate({
            top: '-100%'
        }, 500);
        $(".icon-hamburger").css({
            display: "block"
        });
        $(".icon-close").css({
            display: "none"
        });
    });
});