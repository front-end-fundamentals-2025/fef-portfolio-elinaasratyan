document.addEventListener("DOMContentLoaded", function () {
    // Find the button and the page
    let button = document.getElementById("darkModeToggle");
    let body = document.body;
  
    // Check if Dark Mode was ON before (saved in localStorage)
    let darkMode = localStorage.getItem("darkMode");
  
    if (darkMode === "on") {
      body.classList.add("dark-mode"); // Apply dark mode by adding the class dark-mode to the body tag and activating the dark ode styles from the css file
    }
  
    // When button is clicked, switch colors AND save the setting
    button.addEventListener("click", function () {
      body.classList.toggle("dark-mode"); // Add/remove dark mode
  
      // If dark mode is now ON, save it as "on". Otherwise, save as "off"
      if (body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "on");
      } else {
        localStorage.setItem("darkMode", "off");
      }
    });
  });
