const menu = document.querySelector(".menu");
  const navLink = document.querySelectorAll(".nav-link");
  const hamburger = document.querySelector(".hamburger");
  const closeIcon = document.querySelector(".closeIcon");
  const menuIcon = document.querySelector(".menuIcon");

  // const size = {
  //   mobileS: '320px',
  //   mobileM: '375px',
  //   mobileL: '425px',
  //   tablet: '768px',
  //   laptop: '1024px',
  //   laptopL: '1440px',
  //   desktop: '2560px'
  // }

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

  // export const device = {
  //   mobileS: `(min-width: ${size.mobileS})`,
  //   mobileM: `(min-width: ${size.mobileM})`,
  //   mobileL: `(min-width: ${size.mobileL})`,
  //   tablet: `(min-width: ${size.tablet})`,
  //   laptop: `(min-width: ${size.laptop})`,
  //   laptopL: `(min-width: ${size.laptopL})`,
  //   desktop: `(min-width: ${size.desktop})`,
  //   desktopL: `(min-width: ${size.desktop})`
  // };

  // const App = () => (
  //   <>
  //     <Hello name="CodeSandbox" />
  //     <Card withPictureOf="cats" />
  //     <Card withPictureOf="coffee" />
  //     <Card withPictureOf="oranges" />
  //   </>
  // );