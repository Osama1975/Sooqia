const navbarlink = document.querySelector(".navbarlink");
const bars = document.querySelector(".fa-bars");
const xmark = document.querySelector(".fa-xmark");
const humburger = document.querySelector(".humburger");

humburger.addEventListener("click", () => {
  bars.classList.toggle("active");
  xmark.classList.toggle("active");
  navbarlink.classList.toggle("active");
});
