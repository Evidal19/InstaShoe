
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

// hamburger.addEventListener("click", mobileMenu);

// function mobileMenu() {
//     hamburger.classList.toggle("active");
//     navMenu.classList.toggle("active");
// }

// navLink.forEach(n => n.addEventListener("click", closeMenu));

// function closeMenu() {
//     hamburger.classList.remove("active");
//     navMenu.classList.remove("active");
// }
fetch('/home', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify("")
})
  .then(response => {
    if (response.ok) {
      return response.json("");
    }
    alert(`Error: ${response.statusText}`);
  })
  .then(postResponse => {
    console.log(postResponse);
    alert('Item ready for view');
  });
