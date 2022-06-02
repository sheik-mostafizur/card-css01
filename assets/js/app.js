// Dark Mode and Light Mode
let dark = document.getElementById("darkMode");
let logo = document.getElementById("logo");
dark.onclick = () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    dark.src = "./assets/images/brightness.png";
    logo.src = "./assets/images/logo-white.png";
  } else {
    dark.src = "./assets/images/night-mode.png";
    logo.src = "./assets/images/logo-dark.png";
  }
};
