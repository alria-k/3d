let position = 0;
const toShow = 1;
const toScroll = 1;
const sliderContainer = document.querySelector(".works__slider__box");
const sliderTrack = document.querySelector(".works__slider");
const sliderItem = document.querySelectorAll(".works__slider__item");
const itemsCount = sliderItem.length;
const prevSlide = document.querySelector(".prev");
const nextSlide = document.querySelector(".next");
const itemWidth = sliderContainer.clientWidth / toShow;
const movePosition = toScroll * itemWidth;

sliderItem.forEach((item) => {
  item.style.minWidth = `${itemWidth}px`;
});

nextSlide.addEventListener("click", () => {
  const itemLeft =
    itemsCount - (Math.abs(position) + toScroll * itemWidth) / itemWidth;
  position -= itemLeft >= toScroll ? movePosition : itemLeft * itemWidth;

  setPosition();
  checkBtn();
});

prevSlide.addEventListener("click", () => {
  position += movePosition;

  setPosition();
  checkBtn();
});

const setPosition = function () {
  sliderTrack.style.transform = `translateX(${position}px)`;
};
const checkBtn = function () {
  prevSlide.disabled = position === 0;
  nextSlide.disabled = position <= -(itemsCount - toShow) * itemWidth;
};

const openBurger = document.querySelector(".burger__menu");
const burgerMenuModal = document.querySelector(".burger");
const closeBurger = document.querySelector(".burger__cross");
const overlay = document.querySelector(".overlay");

openBurger.addEventListener("click", () => {
  burgerMenuModal.classList.remove("hide__burger");
  overlay.classList.replace("hide", "overlay-scroll");
});
closeBurger.addEventListener("click", () => {
  burgerMenuModal.classList.add("hide__burger");
  overlay.classList.replace("overlay-scroll", "hide");
});
