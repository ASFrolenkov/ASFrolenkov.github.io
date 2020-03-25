$(document).ready(function(){
    $('.promo__carousel').slick({
        dots: true,
        infinite: true,
        speed: 1200,
        fade: true,
        cssEase: 'linear',
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left_arrow.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right_arrow.svg"></button>'
    });
});