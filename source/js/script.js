var mainnav = document.querySelector(".main-nav");
var openButton = document.querySelector(".page-header__toggle");
var jsToggle = document.querySelector(".page-header__toggle--js");
var headerCont = document.querySelector(".page-header__container");
openButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (mainnav.classList.contains("main-nav-js")) {
    jsToggle.classList.remove("page-header__toggle-close");
    headerCont.classList.remove("page-header__container--fixed");
    mainnav.classList.remove("main-nav-js");


  } else {
    mainnav.classList.add("main-nav-js");
    headerCont.classList.add("page-header__container--fixed");
    jsToggle.classList.add("page-header__toggle--close");
  }
});


window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mainnav.classList.contains("main-nav-js")) {
      mainnav.classList.remove("main-nav-js");
    }
  }
});

var header = document.querySelector(".page-header");
var headerCont = document.querySelector(".page-header__container");
var topOfHeader = header.offsetTop;
function fixHeader() {
  if (window.scrollY > topOfHeader) {
    headerCont.classList.add("page-header__container--fixed");
  } else {
    headerCont.classList.remove("page-header__container--fixed");
  }
}
window.addEventListener("scroll", fixHeader);

var list = document.querySelector(".country-filter-popup__list");
var wrapper = document.querySelector(".country-filter-popup__alphabet-wrapper");
var openButton = document.querySelector(".country-filter__toggle");
var closeWrapButton = document.querySelector(".country-filter-popup__close-btn");


if (openButton) {
  openButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (wrapper.classList.contains("country-filter-popup__alphabet-wrapper--closed")) {
      wrapper.classList.remove("country-filter-popup__alphabet-wrapper--closed");
      wrapper.classList.add("country-filter-popup__alphabet-wrapper--open");
      list.classList.remove("country-filter-popup__list--closed");
      openButton.classList.add("country-filter__toggle--show");
    } else {
      wrapper.classList.add("country-filter-popup__alphabet-wrapper--closed");
      wrapper.classList.remove("country-filter-popup__alphabet-wrapper--open");
      list.classList.add("country-filter-popup__list--closed");
      openButton.classList.remove("country-filter__toggle--show");
    }
  });
}

if (closeWrapButton) {
  closeWrapButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    wrapper.classList.remove("country-filter-popup__alphabet-wrapper--open");
    wrapper.classList.add("country-filter-popup__alphabet-wrapper--closed");
  });
}


if (wrapper) {
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (wrapper.classList.contains("country-filter-popup__alphabet-wrapper--open")) {
        wrapper.classList.remove("country-filter-popup__alphabet-wrapper--open");
      }
    }
  });
}


var filterButton = document.querySelectorAll(".traveller-filter-list__toggle").forEach(button =>
  button.addEventListener("click", () => {
    var options = document.querySelectorAll(".traveller-filter__option").forEach(option => {
      if (option.classList.contains("traveller-filter__option--open")) {
        option.classList.remove("traveller-filter__option--open");
      } else {
        option.classList.add("traveller-filter__option--open");
      }
    })
  }))

const alphabetWrapper = document.querySelector(".alphabet__wrapper");
  wrapper.addEventListener("click", function () {
    if (wrapper.classList.contains("alphabet__wrapper--current")) {

      wrapper.classList.remove("alphabet__wrapper--current");
    } else {
      wrapper.classList.add("alphabet__wrapper--current");
    }
})



//counter

const btns = document.querySelectorAll(".plan-filters__toggle");
btns.forEach(btn => {
  btn.addEventListener("click", function () {
    const direction = this.dataset.direction;
    const input = this.parentElement.querySelector(".plan-filters__input");
    const currentValue = +input.value;
    let newValue;

    if (direction === "plus") {
      newValue = currentValue + 1;
    } else {
      newValue = currentValue - 1 > 0 ?
        currentValue - 1 : 0;
    }

    input.value = newValue;
  })
})


//calendar popup
var buttonChoose = document.querySelector(".plan-filters__select--choose-country");
var addPlanModal = document.querySelector(".add-plan-popup");
var closeButtonChoose = document.querySelector(".add-plan-popup__button-close");

if (buttonChoose) {
  buttonChoose.addEventListener("click", function (evt) {
    evt.preventDefault();
    addPlanModal.classList.add("add-plan-popup--open");
  });
}

if (closeButtonChoose) {
  closeButtonChoose.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (addPlanModal.classList.contains("add-plan-popup--open")) {
      addPlanModal.classList.remove("add-plan-popup--open");
    }
  });
}


if (addPlanModal) {
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (addPlanModal.classList.contains("add-plan-popup--open")) {
        addPlanModal.classList.remove("add-plan-popup--open");
      }
    }
  });
}


var form = document.querySelector(".plan-filters__comment");
var textarea = document.querySelector("[name=comments]");
var buttonSubmit = document.querySelector(".plan-filters__btn-submit");

if (buttonSubmit) {
  buttonSubmit.addEventListener("click", function (evt) {
    if (!textarea.value) {
      evt.preventDefault();
      form.classList.add("plan-filters__comment--error");
    } else {
      form.classList.remove("plan-filters__comment--error");
    }
  });
}

var tariffes = document.querySelector(".tariffes");
var closeButtonTariffes = document.querySelector(".tariffes__button");
var link = document.querySelector(".business-offer__link");

if (link) {
  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    tariffes.classList.add("tariffes--open");
  });
}

if (closeButtonTariffes) {
  closeButtonTariffes.addEventListener("click", function (evt) {
    evt.preventDefault();
    tariffes.classList.remove("tariffes--open");
  });
}


if (tariffes) {
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (tariffes.classList.contains("tariffes--open")) {
        tariffes.classList.remove("tariffes--open");
      }
    }
  });
}


var emailForm = document.querySelector(".promotion__form-field");
var emailValue = document.querySelector("[name=email]");
var buttonPromotion = document.querySelector(".promotion__button");

if (buttonPromotion) {
  buttonPromotion.addEventListener("click", function (evt) {
    if (!emailValue.value) {
      evt.preventDefault();
      emailForm.classList.add("promotion__form-field--error");
    } else {
      emailForm.classList.remove("promotion__form-field--error");
    }
  });
}

if (ymaps) {
  ymaps.ready(function () {
  var myMap = new ymaps.Map(
    "map",
    {
      center: [59.939346, 30.329383],
      zoom: 16,
      controls: []
    },
    {
      suppressMapOpenBlock: true
    },
    {
      searchControlProvider: "yandex#search"
    }
  ),
    myPlacemark = new ymaps.Placemark(
      [59.938669, 30.323057],
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "./img/map-marker.svg",
        iconImageSize: [54, 54],
        iconImageOffset: [-27, -27]
      }
    );

  myMap.geoObjects.add(myPlacemark);
  myMap.controls.remove("rulerControl");
  myMap.controls.remove("searchControl");
  myMap.controls.remove("trafficControl");
  myMap.controls.remove("typeSelector");
  myMap.controls.remove("zoomControl");
  myMap.controls.remove("geolocationControl");
  myMap.controls.remove("routeEditor")
});

}
