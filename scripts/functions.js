var window_height = $(window).height();
var window_width = $(window).width();
var map_height = window_height - 100;
var map_width = window_width - 90;
var square_width = ((map_width / 3));
var square_height = ((map_height / 3));
var content_width = $('.calendar').outerWidth(true);
var content_height = 200;
var config = {    
     over: showTip,   
     timeout: 0 ,    
     out: hideTip
};

<<<<<<< HEAD
var contact_top = ((window_height / 2) - 240);
var bg_top = ((window_height / 2) - 240);
=======
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

function tipPosition() {
    var totalHeight = 0;
       $(".tip").each(function() { 
            var totalWidth = 120; 
            var finalPos = 35;
            totalHeight = $(this).outerHeight();
            console.log('height' + totalHeight);
            $(this).css({
            'marginLeft': ( '-' + (finalPos) + 'px'),
        });
    }); 

      
};


function showTip() {
      $(this).find('.tip').animate({
        opacity: "1", 
        marginTop: "70px"
        }, 300);
};

function hideTip() {
      $(this).find('.tip').animate({
        opacity: "0",
        marginTop: "80px"
        }, 300);
<<<<<<< HEAD
};

function contact_pos() {
    $(".contact").css({
        "top": contact_top
    });
    $(".contact_bg").css({
        "top": bg_top
    });
};

function goToByScroll(id){

      $('html,body').animate({scrollTop: $("#"+id).offset().top},'slow');

}

function dropper() {
      $('.dropper').delay(500).animate({
        top: "0"
        }, 600);
};
=======
};
>>>>>>> 9e18735d586b1f126232ef57e4bbbba8f1b46876
