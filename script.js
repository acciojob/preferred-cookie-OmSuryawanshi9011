document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector('form');
  
  if (!form) {
    console.error("Form element not found.");
    return;
  }

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload

    // Get values from input fields
    var fontSize = document.querySelector('#fontsize').value || '16'; // Default value
    var fontColor = document.querySelector('#fontcolor').value || '#000000'; // Default color

    // Save values in cookies
    setCookie('fontSize', fontSize);
    setCookie('fontColor', fontColor);

    // Apply styles
    applyStyles(fontSize, fontColor);
  });

  function setCookie(name, value) {
    var date = new Date();
    date.setFullYear(date.getFullYear() + 1); // Expire in 1 year
    document.cookie = name + '=' + encodeURIComponent(value) + ';expires=' + date.toUTCString() + ';path=/';
  }

  function getCookie(name) {
    var cookieArr = document.cookie.split("; ");

    for (var i = 0; i < cookieArr.length; i++) {
      var cookiePair = cookieArr[i].split("=");
      
      if (name === cookiePair[0]) {
        return decodeURIComponent(cookiePair[1]);
      }
    }
    return null;
  }

  function applyStyles(fontSize, fontColor) {
    if (fontSize) {
      document.body.style.fontSize = fontSize + 'px';
    }
    if (fontColor) {
      document.body.style.color = fontColor;
    }
  }

  window.onload = function() {
    var fontSize = getCookie('fontSize');
    var fontColor = getCookie('fontColor');

    if (fontSize && fontColor) {
      applyStyles(fontSize, fontColor);
    }
  };
});
