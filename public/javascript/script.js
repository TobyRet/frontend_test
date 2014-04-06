$(".compose_tweet").focusin(function() {
    $(".compose_extra_buttons").show();
    $("#tweet_input").animate({ height: 100 }, 'fast');
}).focusout(function () {
    $(".compose_extra_buttons").hide();
    $("#tweet_input").animate({ height: 30 }, 'fast');
});