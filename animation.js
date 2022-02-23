//Cache reference to window and animation items
var $window = $(window);

function check_if_in_view() {
    var $grid_elements = $('.inner-grid');
    var $products = $('.item');
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);


    // Animate all the item elements inside the3 product grid
    // intially they will be hidden and revealed one by one with an interval 
    $.each($products, function() {  
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);
        if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
            $element.removeClass('hidden');
            $element.addClass('fade-in-element');
        } else {
            $element.addClass('hidden');
            $element.removeClass('fade-in-element');
        }
    });

    $.each($grid_elements, function() { 
        var interval = 200;  
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);
        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
                    // identify the elements by ID
                    //console.log("The element is in view port window")
                    for (let i = 0; i < 5; i++) {
                        setTimeout(function () {
                            $( "#feature-grid" ).find( `#feature-grid-${i+1}` ).css({
                                '-webkit-transform' : 'translateX(0%)',
                                '-moz-transform'    : 'translateX(0%)',
                                '-ms-transform'     : 'translateX(0%)',
                                '-o-transform'      : 'translateX(0%)',
                                'transform'         : 'translateX(0%)'
                            });
                        }, i * interval) 
                    }
        } else {
            // Do nothing
        }
    });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');