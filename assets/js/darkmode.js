// Check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem('darkMode'); 
const themeToggle = document.getElementById('theme-toggle');

const enableDarkMode = () => {
  // Add the class 'darkmode' to the body
  document.body.classList.add('darkmode');
  // Update themeToggle text
  themeToggle.innerText = 'Switch to light mode';
  // Update darkMode in localStorage
  localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
  // Remove the class 'darkmode' from the body
  document.body.classList.remove('darkmode');
  // Update themeToggle text
  themeToggle.innerText = 'Switch to dark mode';
  // Update darkMode in localStorage
  localStorage.setItem('darkMode', null);
}
 
// Check if the user already visited and enabled darkMode
if (darkMode === 'enabled') {
  enableDarkMode();
}

// Add event listener to the theme toggle button
themeToggle.addEventListener('click', () => {
  // Get the current darkMode status from localStorage
  darkMode = localStorage.getItem('darkMode'); 
  
  // If it's not enabled, turn it on
  if (darkMode !== 'enabled') {
    enableDarkMode();
  // If it's enabled, turn it off  
  } else {  
    disableDarkMode();
  }
});
