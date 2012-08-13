$(document).ready(function() {  
console.log(map_width)
console.log(square_width)
    resizer();
    tipPosition();
<<<<<<< HEAD
    contact_pos();
    dropper();
=======
>>>>>>> 9e18735d586b1f126232ef57e4bbbba8f1b46876

    $('#cal_wrapper').cycle({ 
        fx:     'scrollUp', 
        speed:  'slow', 
        timeout: 0, 
        sync: true,
        pager:  '#cal_nav', 
            pagerAnchorBuilder: function(idx, slide) { 
            // return selector string for existing anchor 
            return '#cal_nav li:eq(' + idx + ') a'; 
            } ,

        delay:    -1000,
        before: function(curr, next, opts) {
            opts.animOut.opacity = 0;
        }
    }); 

    $('.img').cycle({ 
        fx:     'fade', 
        speed:  '1000',
        random:  1 
    }); 


<<<<<<< HEAD
$('.home').click(function () {
         goToByScroll("#banner")
        });

=======
>>>>>>> 9e18735d586b1f126232ef57e4bbbba8f1b46876
$(".facility").hoverIntent(config)
});
     

$(window).resize(function() {  
<<<<<<< HEAD
var contact_top = ((window_height / 2) - 240);
    resizer();
    contact_pos();
=======

    resizer();
>>>>>>> 9e18735d586b1f126232ef57e4bbbba8f1b46876
    function resizer() {
    $("#map").css({
        "height": map_height + "px",
        "width": map_width + "px"
    });
    $(".square").css({
        "width": square_width + "px"
    });
};
});

<<<<<<< HEAD
// $(window).scroll(function scroller() {
//     if ($(window).scrollTop() > 453) {
//         $('#nav').css({
//             position: 'fixed',
//             top: '0px',
//             background: 'none',
//             paddingTop: '0px'
//                     });
//         $('#intro').css({
            
//             paddingTop: '70px'
            
//                     });
       
//     } else {
//         $('#nav').css({
//             position: 'relative',
//             background: ' #93c471',
//             paddingTop: '30px'
//         });
//          $('#intro').css({
            
//             paddingTop: '40px'
            
//                     });
       
//     }

// });

=======
>>>>>>> 9e18735d586b1f126232ef57e4bbbba8f1b46876


