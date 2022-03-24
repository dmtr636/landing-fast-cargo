document.addEventListener( 'DOMContentLoaded', function() {
    const splide = new Splide('.splide', {
        perPage: 3,
        gap: '2rem',
        type: 'loop',
        pagination : false,
        arrows: false,
        drag: false,
        breakpoints: {
            1200: {
                perPage: 2,
                arrows: true
            },
            700: {
                perPage: 1,
                arrows: true
            }
        }
    });

    splide.mount();
} );