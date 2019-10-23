import $ from 'jquery';

export function parallax() {
    if($(window).width() > 1025){
    $('.bg-parallax').mousemove(function (e) {
        $('.parallax').each(function () {
            $(this).css('margin-left', '-' + e.pageX / 10 + 'px'); //+ elem.offsetX() + 'px, ' +
        });
        $('.parallax-2').each(function () {
            $(this).css('margin-right',  e.pageX / 18 + 'px');      //+ elem.offsetX() + 'px, ' +
        });
        $('.parallax-3').each(function () {
            $(this).css('bottom', "-" + e.pageX / 8 + 'px');      //+ elem.offsetX() + 'px, ' +
        });
    });}
}