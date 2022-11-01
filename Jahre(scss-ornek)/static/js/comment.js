$(document).ready(function() {

    var autoSkift = 5000;
    var skift = setInterval(rotate, autoSkift);
    var slides = $('.slide');
    var container = $('.slides ul');
    var elm = container.find(':first-child').prop("tagName");
    var item_width = container.width();
    var previous = 'prev';
    var next = 'next';
    slides.width(item_width);
    container.parent().width(item_width);
    container.width(slides.length * item_width);
    container.find(elm + ':first').before(container.find(elm + ':last'));
    resetSlides();


    $('#buttons a img').click(function(e) {
        //slide the item

        if (container.is(':animated')) {
            return false;
        }
        if ($(this).parent('a').attr('id') == previous) {
            container.stop().animate({
                'left': 0
            }, 500, function() {
                container.find(elm + ':first').before(container.find(elm + ':last'));
                resetSlides();
            });
        }
        if ($(this).parent('a').attr('id') == next) {
            container.stop().animate({
                'left': item_width * -2
            }, 500, function() {
                container.find(elm + ':last').after(container.find(elm + ':first'));
                resetSlides();
            });
        }
        //cancel the link behavior            
        return false;
    });

    container.parent().mouseenter(function() {
        clearInterval(skift);
    }).mouseleave(function() {
        skift = setInterval(rotate, autoSkift);
    });

    function resetSlides() {
        container.css({
            'left': -1 * item_width
        });
    }

});


function rotate() {
    $('#next').click();
}