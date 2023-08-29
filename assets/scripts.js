$(document).ready(function(){
  
    $(".slick-slider").slick({
        slidesToShow: 4,
        slidesToScroll: 2,
        infinite: false,
        dots: true,
        arrows: true,
        // autoplay: true,
        // autoplaySpeed: 1000,
        // centerMode: true,
        // centerPadding: '40px',
        // adaptiveHeight: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: false,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                dots: false
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

})