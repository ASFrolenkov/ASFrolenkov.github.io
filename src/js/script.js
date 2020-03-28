//slider
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

$(document).ready(function(){
    $('.solution__carousel').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left_arrow_big.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right_arrow_big.svg"></button>',
        speed: 1200
    });
});
//modal
$('[data-modal=communictaion]').on('click', function() {
    $('.overlay, #communictaion').fadeIn('slow');
});

$('.modal__close').on('click', function() {
    $('.overlay, #communictaion').fadeOut('slow');
});
//validate and mask
function valideForms(form){
    $(form).validate({
        rules: {
            name: "required",
            phone: "required",
            email: {
                required: true,
                email: true
            },
        },
        messages: {
            name: "Введите имя",
            phone: "Введите номер телефона",
            email: {
              required: "Введите почту",
              email: "Неправильно введен адрес почты"
            }
        }
    });
};
valideForms('#communictaion form');
$('input[name=phone]').mask("+7 (999) 999-99-99");
//mailer
$('form').submit(function(e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");
        $('.overlay, #communictaion').fadeOut();
        $('form').trigger('reset');
    });
    return false;
});
