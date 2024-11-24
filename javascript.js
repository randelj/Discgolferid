function scrollFooter(scrollY, heightFooter) {
    console.log(scrollY);
    console.log(heightFooter);

    if (scrollY >= heightFooter) {
        $('footer').css({
            'bottom': '0px'
        });
    } else {
        $('footer').css({
            'bottom': '-' + heightFooter + 'px'
        });
    }
}

$(window).on('load', function () {
    var windowHeight = $(window).height();
    var footerHeight = $('footer').height();
    var heightDocument = windowHeight + $('.content').height() + $('footer').height() - 20;

    // Set height for the scrollable container
    $('#scroll-animate, #scroll-animate-main').css({
        'height': heightDocument + 'px'
    });

    // Set header and content dimensions
    $('header').css({
        'height': windowHeight + 'px',
        'line-height': windowHeight + 'px'
    });

    $('.wrapper-parallax').css({
        'margin-top': windowHeight + 'px'
    });

    scrollFooter(window.scrollY, footerHeight);

    // Optimized scroll handling with requestAnimationFrame
    let ticking = false;

    function handleScroll() {
        var scroll = window.scrollY;

        // Update elements' styles
        $('#scroll-animate-main').css('top', `-${scroll}px`);
        $('header').css('background-position-y', `${50 - (scroll * 100 / heightDocument)}%`);

        scrollFooter(scroll, footerHeight);
        ticking = false; // Reset ticking
    }

    window.addEventListener('scroll', function () {
        if (!ticking) {
            window.requestAnimationFrame(handleScroll);
            ticking = true;
        }
    });
});

function scrollFooter(scrollY, heightFooter) {
    if (scrollY >= heightFooter) {
        $('footer').css('bottom', '0px');
    } else {
        $('footer').css('bottom', `-${heightFooter}px`);
    }
}

