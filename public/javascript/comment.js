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



async function commentFormHandler(event) {
  event.preventDefault();

  const comment_text = document
    .querySelector('textarea[name="comments"]')
    .value.trim();
  const post_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  if (comment_text) {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({
        post_id,
        comment_text,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector("#comment-submit")
  .addEventListener("submit", commentFormHandler);
