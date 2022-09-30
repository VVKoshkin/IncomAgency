$(() => {
    $('.navbar-hamburger').click(() => {
        $('.navbar-elements').toggle();
    });

    if($(window).width() <= 770) {
        $('.advantage-description.ml50').removeClass('ml50')
    }
});