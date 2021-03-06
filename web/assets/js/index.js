$(document).ready(function() {

    var buttonClicked = '';

    $(".button").mouseover(function () {
        var buttonType = $(this).attr('data-button-type');
        if(buttonType != buttonClicked){
            showElement(".background-" + buttonType);

            $(".background-main").hide();
        }
    });

    $(".button").mouseout(function () {
        $(".background-me").slideDown("slow");

        if(buttonClicked == ''){
            $(".background-main").fadeIn();
        }
        hideElement(".background-me, .background-work, .background-contact");
    });

    $(".button").click(function() {
        buttonClicked = $(this).attr('data-button-type');
        hideElement(".pageContent");
        showElement(".page-" + buttonClicked);
        $(".background-me, .background-work, .background-contact").slideUp( "fast" );
        $(".button").removeClass('active');
        $(this).addClass('active');
    });

    function showElement(selectorString){
        $(selectorString).css({'display' : 'flex', 'visibility' : 'visible' , 'opacity' : '1'});
        $(selectorString).show();
    }

    function hideElement(selectorString){
        $(selectorString).css({'display' : 'none', 'visibility' : 'hidden','opacity' : '0'});
        $(selectorString).hide();
    }

    $(".button-me").click(function() {
        $(".nav").css({'box-shadow' : '0px 2px springgreen'});
    });
    $(".button-work").click(function() {
        $(".nav").css({'box-shadow' : '0px 2px turquoise'});
    });
    $(".button-contact").click(function() {
        $(".nav").css({'box-shadow' : '0px 2px slateblue'});
    });

});
