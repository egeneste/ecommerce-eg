// Change header background on scroll

const inverted = "inverted";
const scrollTrigger = 60;

window.onscroll = function() {

  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.getElementsByTagName("header")[0].classList.add(inverted);
  } else {
    document.getElementsByTagName("header")[0].classList.remove(inverted);
  }
};
