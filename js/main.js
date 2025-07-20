const leftButton = document.querySelector("#leftButton");
const rightButton = document.querySelector("#rightButton");
const items = document.querySelectorAll(".gallery__item");

function throttleHandler(fn, delay) {
  let isThrottled = false;
  return function (...args) {
    if (!isThrottled) {
      fn.apply(this, args);
      isThrottled = true;
      setTimeout(() => {
        isThrottled = false;
      }, delay);
    }
  };
}

const handleLeftClick = () => {
  items.forEach((item) => {
    if (item.classList.contains("galery__item--center")) {
      item.classList.add("galery__item--right");
      item.classList.remove("galery__item--center");
    } else if (item.classList.contains("galery__item--right")) {
      item.classList.add("galery__item--hidden");
      item.classList.add("galery__item--left");
      item.classList.remove("galery__item--right");
    } else {
      item.classList.remove("galery__item--hidden");
      item.classList.add("galery__item--center");
      item.classList.remove("galery__item--left");
    }
  });
};

const handleRightClick = () => {
  items.forEach((item) => {
    if (item.classList.contains("galery__item--center")) {
      item.classList.add("galery__item--left");
      item.classList.remove("galery__item--center");
    } else if (item.classList.contains("galery__item--right")) {
      item.classList.remove("galery__item--hidden");
      item.classList.add("galery__item--center");
      item.classList.remove("galery__item--right");
    } else {
      item.classList.add("galery__item--hidden");
      item.classList.add("galery__item--right");
      item.classList.remove("galery__item--left");
    }
  });
};

leftButton.addEventListener("click", throttleHandler(handleLeftClick, 700));
rightButton.addEventListener("click", throttleHandler(handleRightClick, 700));
