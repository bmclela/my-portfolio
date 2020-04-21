particlesJS.load('particles-js', 'particles.json');
const windowHeight = $(window).height();

window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop >= windowHeight - 51 ||
    document.documentElement.scrollTop >= windowHeight - 51
  ) {
    document.getElementById('navbar').style.top = '0';
  } else {
    document.getElementById('navbar').style.top = '-200px';
  }
}

$('#navbar a').on('click', smoothScroll);
$('.about-link').on('click', smoothScroll);

function smoothScroll(e) {
  if (this.hash !== '') {
    e.preventDefault();

    const hash = this.hash;
    console.log(hash);

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 50,
      },
      800
    );
  }
}
