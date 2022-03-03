const menu = document.querySelector(".menu");
const navLink = document.querySelectorAll(".nav-link");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
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

navLink.forEach( 
  function(link) { 
    link.addEventListener("click", toggleMenu);
  }
)


// fetch('/home', {
//   method: 'POST',
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify("")
// })
//   .then(response => {
//     if (response.ok) {
//       return response.json("");
//     }
//     alert(`Error: ${response.statusText}`);
//   })
//   .then(postResponse => {
//     console.log(postResponse);
//     alert('Item ready for view');
//   });
