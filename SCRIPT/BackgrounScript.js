var Cookies;
document.addEventListener('DOMContentLoaded', function () {
    var cookiePopup = document.getElementById('cookie-popup');
    var acceptCookiesBtn = document.getElementById('accept-cookies');
    var declineCookiesBtn = document.getElementById('decline-cookies');

    acceptCookiesBtn.addEventListener('click', function () {
        // Hide the cookie popup when the "Accept Cookies" button is clicked
        cookiePopup.style.display = 'none';
        // Set a cookie to remember the user's choice to accept cookies
        document.cookie = 'cookies_accepted=true; max-age=' + (365 * 24 * 60 * 60); // Expires in 1 year
        Cookies = true;
    });

    declineCookiesBtn.addEventListener('click', function () {
        // Hide the cookie popup when the "Decline Cookies" button is clicked
        cookiePopup.style.display = 'none';
        Cookies = false;
    });

    // Check if the user has already accepted or declined cookies
    if (document.cookie.indexOf('cookies_accepted=true') === -1 && document.cookie.indexOf('cookies_accepted=false') === -1) {
        // If not, show the cookie popup
        cookiePopup.style.display = 'block';
        Cookies = true;
    }
});



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
    if(Cookies == true){
        if (this.checked) {
            document.body.classList.add('dark-mode');
            setCookie('darkMode', 'true', 30); // Set cookie to expire in 30 days
        } else {
            document.body.classList.remove('dark-mode');
            setCookie('darkMode', 'false', 30); // Set cookie to expire in 30 days
        }
    }
    else{
        if (this.checked) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }
});
