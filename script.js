const toggleBtn = document.getElementById('toggleBtn');
const body = document.body;
const darkModeStylesheet = document.getElementById('darkModeStylesheet');

// Check if dark mode is enabled in local storage
const darkModeEnabled = localStorage.getItem('darkModeEnabled');

// Apply dark mode styles if enabled
if (darkModeEnabled === 'true') {
  body.classList.add('dark-mode');
}

// Function to toggle dark mode
function toggleDarkMode() {
  body.classList.toggle('dark-mode');
  
  // Check if dark mode is enabled and store in local storage
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('darkModeEnabled', 'true');
  } else {
    localStorage.setItem('darkModeEnabled', 'false');
  }
}

// Add event listener to the toggle button
toggleBtn.addEventListener('click', toggleDarkMode);
