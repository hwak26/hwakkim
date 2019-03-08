// JavaScript Document

$("button").click(function() {
    $('html,body').animate({
        scrollTop: $(".firstdirect").offset().top},
        'slow');
});