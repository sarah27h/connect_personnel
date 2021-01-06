// initialize Owl Carousel
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: false,
      },
      990: {
        items: 2,
      },
      1025: {
        items: 3,
      },
    },
  });
});
