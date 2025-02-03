document.querySelector('form').addEventListener('submit', function(event) {
  // Prevent the form from being submitted to avoid a page reload
  event.preventDefault();

  // Get the values from the font size and color input fields
  var fontSize = document.querySelector('#fontsize').value;
  var fontColor = document.querySelector('#fontcolor').value;

  // Save these values in cookies
  setCookie('fontSize', fontSize);
  setCookie('fontColor', fontColor);

  // Apply the font size and color to the page
  applyStyles(fontSize, fontColor);
});

function setCookie(name, value) {
  var date = new Date();
  date.setFullYear(date.getFullYear() + 1); // Cookie expires after one year
  document.cookie = name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
	console.log(document.cookie);  // Add this line

}

function getCookie(name) {
  var cookieArr = document.cookie.split(";");
  
  for(var i = 0; i < cookieArr.length; i++) {
    var cookiePair = cookieArr[i].split("=");
    
    if (name == cookiePair[0].trim()) {
      return decodeURIComponent(cookiePair[1]);
    }
  }
  
  return null;
}


function applyStyles(fontSize, fontColor) {
  document.body.style.fontSize = fontSize + 'px';
  document.body.style.color = fontColor;
}

window.onload = function() {
  if (document.cookie.split(';').some((item) => item.trim().startsWith('fontSize='))) {
    var fontSize = getCookie('fontSize');
	  console.log('fontSize', fontSize);  // Add this line
  }
  
  if (document.cookie.split(';').some((item) => item.trim().startsWith('fontColor='))) {
    var fontColor = getCookie('fontColor');
	  console.log('fontColor', fontColor);  // Add this line
  }

  if (fontSize && fontColor) {
    applyStyles(fontSize, fontColor);
  }
};
