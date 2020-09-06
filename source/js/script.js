
//open main-nav

var mainnav = document.querySelector('.mobile-popup');
var openButton = document.querySelector('.main-nav__toggle');

openButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  if (mainnav.classList.contains('mobile-popup--closed')) {
    mainnav.classList.remove('mobile-popup--closed');
    mainnav.classList.add('mobile-popup--open');
  } else {
    mainnav.classList.add('mobile-popup--closed');
    mainnav.classList.remove('mobile-popup--open');
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mainnav.classList.contains("mobile-popup--open")) {
      mainnav.classList.remove("mobile-popup--open");
    }
  }
});

//fix-header
var header = document.querySelector(".page-header");
var headerCont = document.querySelector('.page-header__container');
var topOfHeader = header.offsetTop;
function fixHeader() {
  if (window.scrollY > topOfHeader) {
    headerCont.classList.add("page-header__container--fixed");
  } else {
    headerCont.classList.remove("page-header__container--fixed");
  }
}
window.addEventListener("scroll", fixHeader);

//modal popup bussiness-offer

var tariffes = document.querySelector('.tariffes');
var closeButton = document.querySelector('.tariffes__button');
var link = document.querySelector('.business-offer__link');


link.addEventListener('click', function (evt) {
  evt.preventDefault();
  tariffes.classList.add('tariffes--open');
});

closeButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  tariffes.classList.remove('tariffes--open');
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (tariffes.classList.contains("tariffes--open")) {
      tariffes.classList.remove("tariffes--open");
    }
  }
});
