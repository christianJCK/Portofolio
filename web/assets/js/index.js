$(document).ready(function() {

    $(".button-me").hover(function () {
        $(".background-me").css({
            'visibility' : 'visible',
            'opacity'    : '1',
            'font-size'  : '1.5em'
        });
    });

    $(".button-work").hover(function () {
        $(".background-work").css({
            'visibility' : 'visible',
            'opacity'    : '1',
            'font-size'  : '1.5em'
        });
    });

    $(".button-contact").hover(function () {
        $(".background-contact").css({
            'visibility' : 'visible',
            'opacity'    : '1',
            'font-size'  : '1.5em'
        });
    });

    $(".button-me, .button-work, .button-contact").mouseout(function () {
        $(".background-me, .background-work, .background-contact").css({
            'visibility' : 'hidden',
            'opacity'    : '0'
        });
    });

    /*
    $(".button-me").on('click', function () {
        $(this).data('clicked', true);
        if($(this).data('clicked')) {
            $('.background-me').html("<div class='test'> Hello ?? </div>");

        }
    });


    var navbar='';

    $(".button-work, .button-me, .button-contact").hover(function() {
        $(".title").hide();
        navbar = $(this).attr('class');
        if(navbar != 'button-me'){
            $('.background-me').css('visibility', '');
            $('.background-me').css('opacity', '');
        }
        if(navbar != 'button-work') {
            $('.background-work').css('visibility', '');
            $('.background-work').css('opacity', '');
        }
        if(navbar != 'button-contact') {
            $('.background-contact').css('visibility', '');
            $('.background-contact').css('opacity', '');
        }
    });

    $(".button-work, .button-me, .button-contact").mouseout(function() {
        alert($(".button-work").css('visibility'));
        if($(".button-work").css('visibility') === '' && $(".button-me").css('visibility') === '' && $(".button-contact").css('visibility') === '') {
            $(".title").css('visibility', 'visible');
            $(".title").show();
        }
    });

    $(".button-me").click(function() {
        $('.background-me').html("<div class='test'> Hello ?? </div>");
        $('.background-me').css('visibility', 'visible');
        $('.background-me').css('opacity', '1');
        $('.background-work').css('visibility', 'hidden');
        $('.background-work').css('opacity', '0');
        $('.background-contact').css('visibility', 'hidden');
        $('.background-contact').css('opacity', '0');
        $(".title").css('visibility', 'hidden');
    });

    $(".button-work").click(function() {
        $('.background-me').css('visibility', 'hidden');
        $('.background-me').css('opacity', '0');
        $('.background-work').html("<div class='test'> Hello ?? </div>");
        $('.background-work').css('visibility', 'visible');
        $('.background-work').css('opacity', '1');
        $('.background-contact').css('visibility', 'hidden');
        $('.background-contact').css('opacity', '0');
        $(".title").css('visibility', 'hidden');
    });

    $(".button-contact").click(function() {
        $('.background-me').css('visibility', 'hidden');
        $('.background-me').css('opacity', '0');
        $('.background-work').css('visibility', 'hidden');
        $('.background-work').css('opacity', '0');
        $('.background-contact').html("<div class='test'> Hello ?? </div>");
        $('.background-contact').css('visibility', 'visible');
        $('.background-contact').css('opacity', '1');
        $(".title").css('visibility', 'hidden');
    });
    */
});