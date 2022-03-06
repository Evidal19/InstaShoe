const menu = document.querySelector(".menu");
const navLink = document.querySelectorAll(".nav-link");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

navLink.forEach(function (link) {
  link.addEventListener("click", toggleMenu);
});

async function loginFormHandler(event) {
  event.preventDefault();

  console.log("login form handler");

  const username = document.querySelector("#username").value.trim();
  const password = document.querySelector("#password").value.trim();

  if (username && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/home");
    } else {
      alert(response.statusText);
    }
  } else {
    alert('username or password incorrect');
  }
}

document.querySelector("#submit-btn")
  .addEventListener("click", loginFormHandler);
