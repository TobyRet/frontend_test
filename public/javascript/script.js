$(window).scroll(function () {
    if ($(window).scrollTop() >= $(document).height() - $(window).height() - 10) {

        setTimeout(function() {
            $('.loader').css('display', 'initial');
        }, 1000);

        setTimeout(function() {
            $('.hidden_tweet').css('display', 'initial');

        }, 2000);

        setTimeout(function() {
            $('.loader').css('display', 'none');
        }, 2000);
    }
});


$(".compose_tweet").focusin(function() {
    $(".compose_extra_buttons").show();
    $("#tweet_input").animate({ height: 100 }, 'fast');
}).focusout(function () {
    $(".compose_extra_buttons").hide();
    $("#tweet_input").animate({ height: 30 }, 'fast');
});

