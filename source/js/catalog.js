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

//modal popup catalog-filter
var list = document.querySelector('.country-filter-popup__list');
var wrapper = document.querySelector('.country-filter-popup__alphabet-wrapper');
var openButton = document.querySelector('.country-filter__toggle');
var closeWrapButton = document.querySelector('.country-filter-popup__close-btn');

openButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  if (wrapper.classList.contains('country-filter-popup__alphabet-wrapper--closed')) {
    wrapper.classList.remove('country-filter-popup__alphabet-wrapper--closed');
    wrapper.classList.add('country-filter-popup__alphabet-wrapper--open');
    list.classList.remove('country-filter-popup__list--closed');
  } else {
    wrapper.classList.add('country-filter-popup__alphabet-wrapper--closed');
    wrapper.classList.remove('country-filter-popup__alphabet-wrapper--open');
    list.classList.add('country-filter-popup__list--closed');
  }
});

closeWrapButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  wrapper.classList.remove('country-filter-popup__alphabet-wrapper--open');
  wrapper.classList.add('country-filter-popup__alphabet-wrapper--closed');
});


window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (wrapper.classList.contains("country-filter-popup__alphabet-wrapper--open")) {
      wrapper.classList.remove("country-filter-popup__alphabet-wrapper--open");
    }
  }
});
//accordeon

var filterItem = document.querySelectorAll('.traveller-filter-list__item').forEach(item =>
  item.addEventListener('click', () => {
    var options = document.querySelectorAll('.traveller-filter__option').forEach(option => {
      if (option.classList.contains('traveller-filter__option--active')) {
      option.classList.remove('traveller-filter__option--active');
    } else {
      option.classList.toggle('traveller-filter__option--open');
    }
    })
  }))



const alphabetWrapper = document.querySelectorAll('.alphabet__wrapper');
alphabetWrapper.forEach(wrapper => {
  wrapper.addEventListener('click', function () {
    if (wrapper.classList.contains('alphabet__wrapper--current')) {
      wrapper.classList.remove('alphabet__wrapper--current');
    } else {
      wrapper.classList.add('alphabet__wrapper--current');
    }

  })
})
