import React from 'react';
import $ from 'jquery';

export function parallax() {
    var elem = $('.Background-bot'),
        pos = elem.offset(),
        elem_left = pos.left,
        elem_top = pos.top,
        elem_width = elem.width(),
        elem_height = elem.height(),
        x_center,
        y_center;
    console.log(1)
    $('.Background-bot').mousemove(function (e) {

        y_center = (elem_height / 2) - (e.pageY - elem_top);

        $('.parallax').each(function () {
            var speed = $(this).attr('data-speed'),
                xPos = 0,
                yPos = Math.round(y_center / 280 * speed);

            if (yPos < 0)
                yPos = -2 * speed;

            $(this).css('transform', 'translate3d(' + xPos + 'px, ' + yPos + 'px, 0px)');
        });
    });
}