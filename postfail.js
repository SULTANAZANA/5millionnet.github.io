"use strict";

Number.prototype.map = function ( in_min , in_max , out_min , out_max ) {
      return ( this - in_min ) * ( out_max - out_min ) / ( in_max - in_min ) + out_min;
};

var heightAllImages = 10458;
var maxScrollTop, textHeight, maxBottom, mapped = 0;

var setHeights = function (){
    textHeight = $(".panelText").height();
    maxBottom = heightAllImages - $(window).height();
    maxScrollTop = $(document).height() - $(window).height();
};

$(document).ready(function () {
    WebFont.load({
        google: {
            families: ['Fjord One']
        }
    });
});

$(window).bind("load", function() {
    setHeights();
    $("body").height(textHeight);
});

window.addEventListener('resize', function (event) {
    setHeights();
    $("body").height(textHeight);
});

$(window).on('scroll',function(){
    mapped = $(window).scrollTop().map( 0 , maxScrollTop, 0, maxBottom);
    $(".panelCon").css('bottom', -mapped);
});
