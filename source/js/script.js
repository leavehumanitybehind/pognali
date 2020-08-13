var mainnav = document.querySelector(".mobile-nav-popup");
var header = document.querySelector(".page-header__container");
var openButton = document.querySelector(".main-nav__toggle");
var closeButton = document.querySelector(".main-nav__toggle--close");

openButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  openButton.classList.add("main-nav__toggle--close");
  header.classList.add("page-header__container--fixed");
  mainnav.classList.add("mobile-nav-popup-open");
});

closeButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  mainnav.classList.remove("mobile-nav-popup-open");
  header.classList.remove("page-header__container--fixed");
  closeButton.classList.remove("main-nav__toggle--close");
});
