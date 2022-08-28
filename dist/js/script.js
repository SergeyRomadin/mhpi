$(document).ready(function () {
  $(".slider").slick({
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 5,
    active: 3,
    responsive: [
      {
        breakpoint: 857,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  });
});

$(document).ready(function () {
  $(".slider2").slick({
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 5,
    arrows: false,
    responsive: [
      {
        breakpoint: 857,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  });
});
