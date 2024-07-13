/*=============== DARK LIGHT THEME ===============*/

const lightThemeSwitch = document.querySelector("#lightTheme"),
  darkThemeSwitch = document.querySelector("#darkTheme");
const darkTheme = "dark-theme";

//window.addEventListener("load", () => {
  const selectedThemeIndex = localStorage.getItem("selected-theme");

  if (selectedThemeIndex === "dark") {
    document.body.classList.add(darkTheme);
    if (darkThemeSwitch != null) {
      darkThemeSwitch.checked = true;
    }
  } else {
    if (lightThemeSwitch != null) {
      lightThemeSwitch.checked = true;
    }
  }
//});

// Activate / deactivate the theme manually with the button
if (darkThemeSwitch && lightThemeSwitch) {
  darkThemeSwitch.addEventListener("click", () => {
    document.body.classList.add(darkTheme);
    localStorage.setItem("selected-theme", "dark");

  });
  lightThemeSwitch.addEventListener("click", () => {
    document.body.classList.remove(darkTheme);
    localStorage.setItem("selected-theme", "light");
});
}
