jQuery(document).ready(function(){

    var header = $('.header');
    var nav = $('.nav--header');

    window.onscroll = function() {
        if(window.pageYOffset > header.height()) {
            nav.addClass('nav--move');
        } else {
            nav.removeClass('nav--move');
        }
    }

    $('#mc-form').ajaxChimp({                                      //рассылка
        url: 'https://gmail.us3.list-manage.com/subscribe/post?u=6af0f8becc5a4c2c68c111b2c&amp;id=dbbc9b77f2'
    });

$(document).on("click",".burger", function(){        //меняющийся бургер
  $(this).toggleClass('is-active');
  $('.header__nav-wrap').toggleClass('is-active');
})

});
