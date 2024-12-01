// VIITAMINE - JAVASCRIPT ON KIRJUTATUD CHATGPT AI POOLT.

$(window).on('load', function () {
    var windowHeight = $(window).height();

    // Määrame päise ja sisu mõõtmed
    $('header').css({
        'height': windowHeight + 'px',
        'line-height': windowHeight + 'px'
    });

    $('.wrapper-parallax').css({
        'margin-top': windowHeight + 'px'
    });

    // Parallaksi efekt kerimisel
    window.onscroll = function () {
        var scroll = window.scrollY;

        $('header').css({
            'background-position-y': 50 - (scroll * 50 / windowHeight) + '%'
        });
    };
});
