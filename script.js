const navLinks = document.querySelector(".nav-links");
const burger = document.querySelector(".burger");
const navList = document.querySelectorAll(".nav-links li");
const body = document.querySelector("body");
burger.addEventListener("click", () => {
  navLinks.classList.toggle("nav-active");
  if (body.style.overflowY) {
    body.style.overflowY = "";
  } else {
    body.style.overflowY = "hidden";
  }

  navList.forEach((list, index) => {
    if (list.style.animation) {
      list.style.animation = "";
    } else {
      list.style.animation = `listMove 1.5s ease-out`;
    }
  });

  burger.classList.toggle("toggle");
});
