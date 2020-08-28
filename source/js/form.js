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


//counter

const btns = document.querySelectorAll('.plan-filters__toggle');
btns.forEach(btn => {
  btn.addEventListener('click', function() {
    const direction = this.dataset.direction;
    const input = this.parentElement.querySelector('.plan-filters__input');
    const currentValue = +input.value;
    let newValue;

    if (direction === 'plus') {
      newValue = currentValue + 1;
    } else {
      newValue = currentValue - 1 > 0 ?
      currentValue - 1 : 0;
    }

    input.value = newValue;
  })
})


//calendar popup
var button = document.querySelector('.plan-filters__button--choose');
var addPlanModal = document.querySelector('.add-plan-popup');
var closeButton = document.querySelector('.add-plan-popup__close');

button.addEventListener('click', function (evt) {
  evt.preventDefault();
  addPlanModal.classList.add('add-plan-popup--open');
});

closeButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  addPlanModal.classList.remove('add-plan-popup--open');
});
