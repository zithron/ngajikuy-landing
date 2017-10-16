$(window).scroll(function() {
    
    var wScroll = $(this).scrollTop();
    
    if(wScroll > $('#feature').offset().top) {
        $('#navbar').addClass('navbar-fixed');
    } else {
        $('#navbar').removeClass('navbar-fixed');
    }
    
})