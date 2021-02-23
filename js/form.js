const buttonSearch = document.querySelector(".button-search");
const formHotelSearch = document.querySelector(".form-hotel-search");
const buttonSubmit = formHotelSearch.querySelector(".button-find");
const arrivalDate = formHotelSearch.querySelector(".input-arrival-date");
const departureDate = formHotelSearch.querySelector(".input-departure-date");
const adultCount = formHotelSearch.querySelector(".input-search-count-adult");
const childrenCount = formHotelSearch.querySelector(".input-search-count-children");

let isStorageSupport = true;
let adults = "";
let childrens = "";

try {
  adults = localStorage.getItem("adults");
  childrens = localStorage.getItem("childrens");
} catch (err) {
  isStorageSupport = false;
}

if (adults || childrens) {
  adultCount.value = adults;
  childrenCount.value = childrens;
}

buttonSearch.addEventListener("click", function () {
  formHotelSearch.classList.toggle("form-close");
  formHotelSearch.classList.toggle("form-open");
});

buttonSubmit.addEventListener("click", function () {
  if (arrivalDate.value && departureDate.value && adultCount.value && childrenCount.value) {
    formHotelSearch.classList.toggle("form-close");
    formHotelSearch.classList.toggle("form-open");
  }
});

formHotelSearch.addEventListener("submit", function (evt) {
  if (!arrivalDate.value && !departureDate.value && !adultCount.value && !childrenCount.value) {
    evt.preventDefault();
  } else {
    if (isStorageSupport) {
      localStorage.setItem("adults", adultCount.value);
      localStorage.setItem("childrens", childrenCount.value);
    }
  }
});
