$(document).ready(function() {

    $(".button-work, .button-me, .button-contact").hover(function() {
        $(".title").hide();
    });
    $(".button-work, .button-me, .button-contact").mouseout(function() {
        $(".title").show();
    });

});