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

//modal popup catalog-filter

var wrapper = document.querySelector('.country-filter-popup__alphabet-wrapper');
var openButton = document.querySelector('.country-filter__toggle');
var closeWrapButton = document.querySelector('.country-filter-popup__close-btn');

openButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  if (wrapper.classList.contains('country-filter-popup__alphabet-wrapper--closed')) {
    wrapper.classList.remove('country-filter-popup__alphabet-wrapper--closed');
    wrapper.classList.add('country-filter-popup__alphabet-wrapper--open');
  } else {
    wrapper.classList.add('country-filter-popup__alphabet-wrapper--closed');
    wrapper.classList.remove('country-filter-popup__alphabet-wrapper--open');
  }
});

closeWrapButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  wrapper.classList.remove('country-filter-popup__alphabet-wrapper--open');
});

//accordeon

var filterItem = document.querySelectorAll('.traveller-filter-list__item');
var option = document.querySelectorAll(".traveller-filter__option");

filterItem.addEventListener('click', function () {
    option.classList.toggle('traveller-filter__option--open');
});

