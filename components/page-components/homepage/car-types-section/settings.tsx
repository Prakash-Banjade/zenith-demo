export const settings = {
  dots: false,
  arrows: false,
  speed: 500,
  slidesToShow: 5,
  swipeToSlide: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 5000,
  adaptiveHeight: true,
  centerPadding: "50px",

  responsive: [
    {
      breakpoint: 1240,
      settings: {
        arrows: false,
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 1040,
      settings: {
        arrows: false,
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        slidesToShow: 1,
      },
    },
  ],
};
