//slider js==================start==========================
$('.banner_slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    //    fade:true,
});
//slider js==================end=============================


// screenshots slider js=================start===============
$('.screenshots_slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
});
// screenshots slider js================end==================


//video part======================== start===================

$(document).ready(function () {
    $('.venobox').venobox();
});

//video part========================= end====================


//feedback slider================ start======================

$('.top_slider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    //    autoplay: true,
        fade:true,
    asNavFor: '.bottom_slider',
});

$('.bottom_slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: 0,
    //    autoplay: true,
    //    fade:true,
    asNavFor: '.top_slider',
    focusOnSelect: true,
});

//feedback slider====================== end===================
