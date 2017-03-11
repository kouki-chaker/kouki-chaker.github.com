/*global $,console*/
$(document).ready(function () {
    "use strict";
    $("html").niceScroll({
        cursorwidth: 7,
        cursorcolor: "#fc252d"
    });
    /*scroll to top i*/
    $('.scroll-down i').click(function () {
        $('html,body').animate({
            scrollTop: $('.features').offset().top
        }, 1000);

        $(window).scroll(function () {
            $(".features").addClass("navbar-fixed-top");
                if ($(this).scrollTop() <= 690) {
                     $(".features").removeClass("navbar-fixed-top");

            }
            //            console.log($(this).scrollTop());
        });
    });
    $(window).scroll(function () {
        $(".features").addClass("navbar-fixed-top");
        if ($(this).scrollTop() <= 690) {
            $(".features").removeClass("navbar-fixed-top");

        }
        //            console.log($(this).scrollTop());
    });
    $('ul li a').click(function () {

        $('html,body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top

        }, 1000);

        $("ul li a").removeClass("active");
        $(this).addClass("active");

        $(window).scroll(function () {
            $(".features").addClass("navbar-fixed-top");
            if ($(this).scrollTop() <= 690) {
                $(".features").removeClass("navbar-fixed-top");


            }
            $('.container').each(function () {
                $(this).css('margin-top', 10);
            });
            //console.log($(this).scrollTop());
        });
    });
    /*end scroll to top i*/
   
    $('.fa-minus').hide();

    $('.right').click(function () {
        $('.coment').toggle();
        $(this).parent().find('.fa-minus').toggle();
        $(this).parent().find('.fa-plus').toggle();
        if ($('.fa-plus').click()) {
            $('.coment').toggle();
        }
    });
     //$('.coment').hide();

});
//end about