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

document.addEventListener('DOMContentLoaded', () => {
    const accordions = document.querySelectorAll('.accordion');

    accordions.forEach((accordion) => {
        accordion.addEventListener('click', function () {
            // Toggle active class for clicked accordion
            this.classList.toggle('active');
            const panel = this.nextElementSibling;

            // Open or close the panel
            if (panel.classList.contains('open')) {
                panel.classList.remove('open');
            } else {
                // Close all other panels
                document.querySelectorAll('.panel').forEach((p) => p.classList.remove('open'));
                panel.classList.add('open');
            }
        });
    });
});