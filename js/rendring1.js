let sliderListRendring = document.querySelector(".rendring-slider-container"),
  sliderTrackRendring = document.querySelector(".rendring-slider-box"),
  slidesRendring = document.querySelectorAll(".rendring-slider-item"),
  arrowsRendring = document.querySelector(".rendring-slider-arrows"),
  prevRendring = arrowsRendring.children[0],
  nextRendring = arrowsRendring.children[2],
  slidersRendringCount = slidesRendring.length,
  rendringPosition = 0,
  currentLimit = 4,
  currentIndex = 0,
  slideIndexRendring = 0,
  slidesToScrollRender = 1,
  slidesToShowRender = 5,
  sliderListScalp = document.querySelector(".scalp-slider-container"),
  sliderTrackScalp = document.querySelector(".scalp-slider-box"),
  slidesScalp = document.querySelectorAll(".scalp-slider-item"),
  prevScalp = document.querySelector(".scalp__prev"),
  nextScalp = document.querySelector(".scalp__next"),
  slidersScalpCount = slidesScalp.length,
  ScalpPosition = 0,
  currentLimitScalp = 3,
  currentIndexScalp = 0,
  slideIndexScalp = 0,
  slidesToScrollRenderScalp = 1,
  slidesToShowRenderScalp = 4;

window.onload = function () {
  widthRendring = sliderListRendring.clientWidth / slidesToShowRender;
  moveRendring = slidesToScrollRender * widthRendring;

  const checkSlider = () => {
    prevRendring.disabled = slideIndexRendring === 0;
    nextRendring.disabled = slideIndexRendring === 4;
  };

  for (i = 0; i < slidesRendring.length; i++) {}

  const styleChange = () => {
    if (slideIndexRendring === 0) {
      slidesRendring[0].classList.remove("slider-first");
      slidesRendring[1].classList.add("slider-first");
      slidesRendring[2].classList.replace("slider-first", "slider-second");
      slidesRendring[3].classList.replace("slider-second", "slider-third");
      slidesRendring[4].classList.replace("slider-third", "slider-fourth");
    } else if (slideIndexRendring === 1) {
      slidesRendring[0].classList.add("slider-first");
      slidesRendring[1].classList.replace("slider-first", "ppp");
      slidesRendring[2].classList.replace("slider-second", "slider-first");
      slidesRendring[2].classList.replace("ppp", "slider-first");
      slidesRendring[3].classList.replace("slider-third", "slider-second");
      slidesRendring[3].classList.replace("slider-first", "slider-second");
      slidesRendring[4].classList.replace("slider-fourth", "slider-third");
    } else if (slideIndexRendring === 2) {
      slidesRendring[1].classList.replace("ppp", "slider-first");
      slidesRendring[2].classList.replace("slider-first", "ppp");
      slidesRendring[3].classList.replace("ppp", "slider-first");
      slidesRendring[3].classList.replace("slider-second", "slider-first");
      slidesRendring[4].classList.replace("slider-third", "slider-second");
      slidesRendring[4].classList.replace("slider-first", "slider-second");
    } else if (slideIndexRendring === 3) {
      slidesRendring[2].classList.replace("ppp", "slider-first");
      slidesRendring[3].classList.replace("slider-first", "ppp");
      slidesRendring[4].classList.replace("slider-second", "slider-first");
      slidesRendring[4].classList.replace("ppp", "slider-first");
    } else if (slideIndexRendring === 4) {
      slidesRendring[3].classList.replace("ppp", "slider-first");
      slidesRendring[4].classList.replace("slider-first", "ppp");
    }
  };

  nextRendring.addEventListener("click", () => {
    slideIndexRendring++;
    rendringPosition -= moveRendring;
    sliderTrackRendring.style.transform = `translateX(${rendringPosition}px)`;
    checkSlider();
    styleChange();
    for (
      ;
      currentIndex < currentLimit && currentIndex < slidesRendring.length;
      currentIndex++
    );
  });

  prevRendring.addEventListener("click", () => {
    slideIndexRendring--;
    rendringPosition += moveRendring;
    sliderTrackRendring.style.transform = `translateX(${rendringPosition}px)`;
    checkSlider();
    styleChange();
    for (
      ;
      currentIndex > currentLimit && currentIndex > slidesRendring.length;
      currentIndex--
    );
  });

  widthScalp = sliderListScalp.clientWidth / slidesToShowRenderScalp;
  moveScalp = slidesToScrollRenderScalp * widthScalp;

  const checkSliderScalp = () => {
    prevScalp.disabled = slideIndexScalp === 0;
    nextScalp.disabled = slideIndexScalp === 3;
  };

  for (i = 0; i < slidesScalp.length; i++) {}

  const styleChangeScalp = () => {
    if (slideIndexScalp === 0) {
      slidesScalp[0].classList.remove("slider-first");
      slidesScalp[1].classList.add("slider-first");
      slidesScalp[2].classList.replace("slider-first", "slider-second");
      slidesScalp[3].classList.replace("slider-second", "slider-third");
    } else if (slideIndexScalp === 1) {
      slidesScalp[0].classList.add("slider-first");
      slidesScalp[1].classList.replace("slider-first", "ppp");
      slidesScalp[2].classList.replace("slider-second", "slider-first");
      slidesScalp[2].classList.replace("ppp", "slider-first");
      slidesScalp[3].classList.replace("slider-third", "slider-second");
      slidesScalp[3].classList.replace("slider-first", "slider-second");
    } else if (slideIndexScalp === 2) {
      slidesScalp[1].classList.replace("ppp", "slider-first");
      slidesScalp[2].classList.replace("slider-first", "ppp");
      slidesScalp[3].classList.replace("ppp", "slider-first");
      slidesScalp[3].classList.replace("slider-second", "slider-first");
    } else if (slideIndexScalp === 3) {
      slidesScalp[2].classList.replace("ppp", "slider-first");
      slidesScalp[3].classList.replace("slider-first", "ppp");
    }
  };

  nextScalp.addEventListener("click", () => {
    slideIndexScalp++;
    ScalpPosition -= moveScalp;
    sliderTrackScalp.style.transform = `translateX(${ScalpPosition}px)`;
    checkSliderScalp();
    styleChangeScalp();
    for (
      ;
      currentIndexScalp < currentLimitScalp &&
      currentIndexScalp < slidesScalp.length;
      currentIndexScalp++
    );
  });

  prevScalp.addEventListener("click", () => {
    slideIndexScalp--;
    ScalpPosition += moveScalp;
    sliderTrackScalp.style.transform = `translateX(${ScalpPosition}px)`;
    checkSliderScalp();
    styleChangeScalp();
    for (
      ;
      currentIndexScalp > currentLimitScalp &&
      currentIndexScalp > slidesScalp.length;
      currentIndexScalp--
    );
  });
};
