document.addEventListener( 'DOMContentLoaded', function() {
    const splide = new Splide('.splide', {
        perPage: 3,
        type: 'loop',
        pagination : false,
        arrows: false,
        drag: false,
        breakpoints: {
            1200: {
                perPage: 2,
                arrows: true
            },
            800: {
                perPage: 1,
                arrows: true
            }
        }
    });

    splide.mount();
} );