console.log("Hello Wolrd!");

const myName = "moses mwangi";
const h1 = document.querySelector(".heading-primary");
console.log(myName);
console.log(h1);

// h1.addEventListener("click", function () {
//   h1.textContent = myName;
//   h1.style.backgroundColor = "red";
//   h1.style.padding = "5rem";
// });
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
console.log(currentYear);
yearEl.textContent = currentYear;

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector("header");
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
// ////////////////////smooth scrolling on animation
