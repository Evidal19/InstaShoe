// const menu = document.querySelector(".menu");
// const navLink = document.querySelectorAll(".nav-link");
// const hamburger = document.querySelector(".hamburger");
// const closeIcon = document.querySelector(".closeIcon");
// const menuIcon = document.querySelector(".menuIcon");

// function toggleMenu() {
//   if (menu.classList.contains("showMenu")) {
//     menu.classList.remove("showMenu");
//     closeIcon.style.display = "none";
//     menuIcon.style.display = "block";
//   } else {
//     menu.classList.add("showMenu");
//     closeIcon.style.display = "block";
//     menuIcon.style.display = "none";
//   }
// }

// hamburger.addEventListener("click", toggleMenu);

// navLink.forEach(function (link) {
//   link.addEventListener("click", toggleMenu);
// });

async function loginFormHandler(event) {
  event.preventDefault();

  console.log("login form handler");

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  console.log(username);
  console.log(password);

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
    console.log('username or password is incorrect');
  }
}

document.querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);
  // #submit-btn

