const darkModeToggle = document.getElementById('mode-toggle');
const body = document.body;
console.log("Checkbox element:", darkModeToggle);
// Function to set initial mode based on checkbox state
function setInitialMode() {
    body.classList.toggle('dark-mode', darkModeToggle.checked);
}

// Call the function to set initial mode
setInitialMode();

// Listen for changes in checkbox state
darkModeToggle.addEventListener('change', () => {
    body.classList.toggle('dark-mode', darkModeToggle.checked);
});
