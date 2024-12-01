// VIITAMINE - JAVASCRIPT ON KIRJUTATUD CHATGPT AI POOLT.

// Ootame, kuni aken on täielikult laadinud
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

// Ootame, kuni dokument on täielikult DOM-i laaditud
document.addEventListener('DOMContentLoaded', () => {
    const accordions = document.querySelectorAll('.accordion');

    accordions.forEach((accordion) => {
        accordion.addEventListener('click', function () {
            // Lülitame sisse või välja aktiivse klassi klõpsatud akordionil
            this.classList.toggle('active');
            const panel = this.nextElementSibling;

            // Avame või sulgeme paneeli
            if (panel.classList.contains('open')) {
                panel.classList.remove('open');
            } else {
                // Sulgeme kõik teised paneelid
                document.querySelectorAll('.panel').forEach((p) => p.classList.remove('open'));
                panel.classList.add('open');
            }
        });
    });
});