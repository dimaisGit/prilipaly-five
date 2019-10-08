import React from 'react';
import $ from 'jquery';

export function parallax() {
    $('.Background-bot').mousemove(function (e) {
        let elem = $('.Background-bot'),
            pos = elem.offset(),
            elem_top = pos.top,
            elem_height = elem.height(),
            y_center;
        y_center = (elem_height / 2) - (e.pageY - elem_top);

        $('.parallax').each(function () {
            let speed = $(this).attr('data-speed'),
                xPos = 0,
                yPos = Math.round(y_center / 280 * speed);
            $(this).css('transform', 'translate3d(' + xPos + 'px, ' + yPos + 'px, 0px)');
        });
    });
}