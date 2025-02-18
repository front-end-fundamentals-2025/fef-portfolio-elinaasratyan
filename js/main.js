const button = document.getElementById("darkModeToggle");
const body = document.querySelector("body")

button.addEventListener("click", function () {
  // This is one adds a dark mode when it is not present and removes it if it is present
  // It is taken from here: https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/toggle
  body.classList.toggle("dark-mode");
  
  // Changing button text
  if (body.classList.contains("dark-mode")) {
    button.textContent = "☀️ Light Mode";
  } else {
    button.textContent = "🌙 Dark Mode";
  }
});
