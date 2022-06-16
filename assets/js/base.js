/************************POPUP*****************************/

const popUp = document.querySelector(".popup");
const popUpContent = document.querySelector(".popup__info");
const buttonPopUp = document.querySelector(".info__text__button");
const popUpClose = document.querySelector(".popupclose");
const body = document.querySelector("body");

function open() {
  popupPaddingRight();
  popUp.classList.add("_open");
  popUpContent.classList.add("_open");
  document.body.classList.add("_lock");
}

function close() {
  popUp.classList.remove("_open");
  popUpContent.classList.remove("_open");
  document.body.classList.remove("_lock");
  body.style.paddingRight = 0 + "px";
}

//фикс на отступ
let popupPaddingRight = function () {
  let width = window.innerWidth - document.querySelector(".wrapper").clientWidth + "px";
  body.style.paddingRight = width;
};

buttonPopUp.addEventListener("click", (e) => {
  open();
  window.onclick = function (e) {
    if (e.target == popUp) {
      close();
    }
  };
});

popUpClose.addEventListener("click", (e) => {
  close();
});
