$(document).ready(function () {
    $('.hamburger').click(function () {
        $(this).toggleClass('is-active');
        $('.menu').toggleClass('is-active');
    });
});

// Function to set a cookie
function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = name + '=' + value + ';expires=' + expires.toUTCString();
}

document.addEventListener("DOMContentLoaded", function() {
    // Check if cookies are accepted
    const acceptedCookies = localStorage.getItem("acceptedCookies");

    if (!acceptedCookies) {
        // Run this code if cookies are not accepted
        // Add your code here
        document.addEventListener("DOMContentLoaded", function() {
            const cookiePopup = document.getElementById("cookie-consent-popup");
            const acceptBtn = document.getElementById("accept-cookies-btn");
            const rejectBtn = document.getElementById("reject-cookies-btn");
        
            // Check if user has already accepted cookies
            const acceptedCookies = localStorage.getItem("acceptedCookies");
        
            if (!acceptedCookies) {
                cookiePopup.style.display = "block";
            }
        
            // Event listener for accept button
            acceptBtn.addEventListener("click", function() {
                localStorage.setItem("acceptedCookies", true);
                cookiePopup.style.display = "none";
            });
        
            // Event listener for reject button
            rejectBtn.addEventListener("click", function() {
                // You may want to handle rejection behavior here, such as blocking certain features
                localStorage.removeItem("acceptedCookies");
                cookiePopup.style.display = "none";
            });
        });
        
        // For example:
        console.log("Cookies are not accepted. Running code...");
    } else {
        // Run this code if cookies are accepted
        // Add your other code here
        
        // For example:
        console.log("Cookies are accepted. Running other code...");
    }
});

// Function to get a cookie value
function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim().split('=');
        if (cookie[0] === name) {
            return cookie[1];
        }
    }
    return null;
}

// Check if a dark mode cookie exists and apply dark mode if necessary
const darkModeCookie = getCookie('darkMode');
if (darkModeCookie && darkModeCookie === 'true') {
    document.body.classList.add('dark-mode');
    document.getElementById('mode-toggle').checked = true;
}

// Toggle mode when the checkbox is clicked
document.getElementById('mode-toggle').addEventListener('change', function() {
    if (this.checked) {
        document.body.classList.add('dark-mode');
        setCookie('darkMode', 'true', 30); // Set cookie to expire in 30 days
    } else {
        document.body.classList.remove('dark-mode');
        setCookie('darkMode', 'false', 30); // Set cookie to expire in 30 days
    }
});
