const btnnav = document.querySelector(".btn-mobile-menu");
const openheader = document.querySelector(".header");

btnnav.addEventListener("click", function () {
  openheader.classList.toggle(
    "nav-open"
  ); /*if after clicking,nav-open class is not there with header class then add it.And if present then remove it(toggling)*/
});
