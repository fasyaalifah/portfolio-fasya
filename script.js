let menuIcon = document.querySelector("#menu-icon"); 
let navbar = document.querySelector(".navbar");       
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
        .querySelector("header nav a[href*=" + id + "]")

          .classList.add("active");
      });
    }
  });
};

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

const scriptURL =
  "https://script.google.com/macros/s/AKfycbyzmc94VogehQD6IVonKwwWzoldQ65gp-maqmkY6CqZA3cfMlPbvrGBM7R3rsvo0Jc/exec";

const form = document.forms["contact-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => alert("Thankyou! your form is submitted successfully."))
    .then(() => {
      window.location.reload();
    })
    .catch((error) => console.error("Error!", error.message));
});
