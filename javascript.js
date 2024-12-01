// VIITAMINE - JAVASCRIPT ON KIRJUTATUD CHATGPT AI POOLT.

$('header').css({
    'height': windowHeight + 'px', // Headeri kõrgus = akna kõrgus.
    'line-height': windowHeight + 'px' // Tekst joondatakse vertikaalselt keskele.
});

// Nihutame parallax-sisu algust.
$('.wrapper-parallax').css({
    'margin-top': windowHeight + 'px' // Nihkub täpselt ühe akna kõrguse võrra allapoole.
});

// Seadistame sündmuse, mis käivitub lehe kerimisel.
window.onscroll = function () { 
    var scroll = window.scrollY; 
    // Salvestame lehe kerimise kauguse ülevalt servast pikslites.

    // Muudame headeri taustapildi positsiooni vertikaalselt, et luua parallax-efekt.
    $('header').css({
        'background-position-y': 50 - (scroll * 50 / windowHeight) + '%' 
        // Arvutus:
        // 50% - Tausta algne positsioon (keskkoht).
        // (scroll * 50 / windowHeight) - Liikumise kiirus, mis sõltub kerimise kaugusest ja akna kõrgusest.
    });
};
