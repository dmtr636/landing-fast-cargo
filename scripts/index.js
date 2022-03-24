document.addEventListener( 'DOMContentLoaded', function() {
    const splide = new Splide('.splide', {
        perPage: 3,
        gap: '2rem',
        type: 'loop',
        pagination : false,
        arrows: false,
        drag: false,
        breakpoints: {
            800: {
                perPage: 1,
                gap: '.7rem',
                height: '6rem',
                arrows: true
            },
        },
    });

    splide.mount();
} );