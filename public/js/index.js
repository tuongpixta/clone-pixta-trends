$(document).ready(function () {
  $(".creative-slider-2022").slick({
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerPadding: "0",
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerPadding: "5%",
        },
      },
    ],
  });
});
