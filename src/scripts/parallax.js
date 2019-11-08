import $ from 'jquery';

export function parallax() {
    if ($(window).width() > 1025) {
        $('.bg-parallax').mousemove(function (e) {
            $('.parallax').each(function () {
                $(this).css('margin-left', '-' + e.pageX / 10 + 'px'); //+ elem.offsetX() + 'px, ' +
            });
            $('.parallax-2').each(function () {
                $(this).css('margin-right', e.pageX / 18 + 'px');      //+ elem.offsetX() + 'px, ' +
            });
            $('.parallax-3').each(function () {
                $(this).css('bottom', "-" + e.pageX / 8 + 'px');      //+ elem.offsetX() + 'px, ' +
            });
            $('.parallax-3').each(function () {
                $(this).css('bottom', "-" + e.pageX / 8 + 'px');      //+ elem.offsetX() + 'px, ' +
            });
            $('.parallax-4').each(function () {
                let a = $(this).css('top');
                let b = Math.round(a.substr(0, a.length - 2)) / 10;
                $(this)
                    .css('top', (b + (Math.round(e.pageX / 1000)) + '%'))
                    .css('left', e.pageY / 10 + 'px');      //+ elem.offsetX() + 'px, ' +
            });
            $('.parallax-5').each(function () {
                $(this).css('top', e.pageX / 28 + '%');      //+ elem.offsetX() + 'px, ' +
            });
        });
        
    }
}