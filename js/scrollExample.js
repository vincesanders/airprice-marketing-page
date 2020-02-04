$(".owl-carousel").owlCarousel({
  center: true,
  loop: true,
  margin: 10,
  nav: true,
  autoplay: true,
  autoplayTimeout: 3500,
  autoplayHoverPause: true,

  responsive: {
    0: {
      items: 1
    },
    500: {
      items: 3
    },
    800: {
      items: 5
    },
    1000: {
      items: 5
    }
  }
});
