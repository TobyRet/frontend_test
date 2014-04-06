$('#tweet_input').focus(function()
{
    /*to make this flexible, I'm storing the current width in an attribute*/
    $(this).attr('data-default', $(this).height());
    $(this).animate({ height: 100 }, 'fast');
}).blur(function()
{
    /* lookup the original height */
    var h = $(this).attr('data-default');
    $(this).animate({ height: h }, 'fast');
});