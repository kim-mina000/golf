let swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,

    autoplay : true,

    // If we need pagination
    // pagination: {
    //     el: '.swiper-pagination'
    // },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar'
    }
});

function slide_pause(element) {  
    if (swiper.autoplay.running == true) {
        swiper.autoplay.stop();
        element.textContent = ">";
        
    } else {
        swiper.autoplay.start();    
        element.textContent = "||";
    }
}

function scroll_up() {
    window.scrollTo({
        top: 100,
        left: 0,
        behavior: 'smooth'
    });
}

window.addEventListener('scroll', function(){
    let scroll = window.scrollY;
    console.log( window.scrollY )

    if (scroll > 0) {
        
    }
});