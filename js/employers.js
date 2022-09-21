let positionEmployers = 0;
const showEmployers = 1;
const scrollEmployers = 1;
const employersContainer = document.querySelector(".team__employers");
const employersTrack = document.querySelector(".team__employers-inner");
const employersItem = document.querySelectorAll(".team__employers-item");
const employersCount = employersItem.length;
const employersBtnBox = document.querySelector(".team__btns");
const employersBtnPrev = document.querySelector(".team__prev");
const employersBtnNext = document.querySelector(".team__next");
const employersWidth = employersContainer.clientWidth / showEmployers;
const moveEmployers = scrollEmployers * employersWidth;

if (document.documentElement.clientWidth < 593) {
  employersBtnBox.classList.remove("hide");

  employersItem.forEach((item) => {
    item.style.minWidth = `${employersWidth}px`;
  });

  employersBtnNext.addEventListener("click", () => {
    const employersLeft =
      employersCount -
      (Math.abs(positionEmployers) + scrollEmployers * employersWidth) /
        employersWidth;
    positionEmployers -=
      employersLeft >= scrollEmployers
        ? moveEmployers
        : employersLeft * employersWidth;
    setPositionEmployers();
    checkBtnEmployers();
  });

  employersBtnPrev.addEventListener("click", () => {
    positionEmployers += moveEmployers;

    setPositionEmployers();
    checkBtnEmployers();
  });

  const setPositionEmployers = function () {
    employersTrack.style.transform = `translateX(${positionEmployers}px)`;
  };
  const checkBtnEmployers = function () {
    employersBtnPrev.disabled = positionEmployers === 0;
    employersBtnNext.disabled =
      positionEmployers <= -(employersCount - showEmployers) * employersWidth;
  };
}
