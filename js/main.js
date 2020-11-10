$(window).on('resize', () => {
    if ($(window).width() <= 600) {
        $('#menu').removeClass('menu');
        $('#menu').addClass('sidebar');
    } else {
        $('#menu').removeClass('sidebar');
        $('#menu').addClass('menu');        
    }
});