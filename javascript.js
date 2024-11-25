$(window).on('load', function () {
    var windowHeight = $(window).height();

    // Set header and content dimensions
    $('header').css({
        'height': windowHeight + 'px',
        'line-height': windowHeight + 'px'
    });

    $('.wrapper-parallax').css({
        'margin-top': windowHeight + 'px'
    });

    // Parallax effect on scroll
    window.onscroll = function () {
        var scroll = window.scrollY;

        $('header').css({
            'background-position-y': 50 - (scroll * 50 / windowHeight) + '%'
        });
    };
});