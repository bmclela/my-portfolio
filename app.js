particlesJS.load('particles-js', 'particles.json');

$(document).ready(function () {
  $('.slick-slider').slick({
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    mobileFirst: true,
    focusOnSelect: true,
  });
});
