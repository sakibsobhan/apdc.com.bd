// scroll animation
AOS.init();



// banner slider
$(".banner-slider").slick({
    prevArrow: '<i class="fa-solid fa-angle-left prev"></i>',
    nextArrow: '<i class="fa-solid fa-angle-right next"></i>',
    responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
          }
        },
        {
          breakpoint: 576,
          settings: {
            arrows: false,
          }
        }
      ]
})


