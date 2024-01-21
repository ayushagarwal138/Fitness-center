document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    // For demonstration purposes, hardcoding username and password
    var validUsername = 'user123';
    var validPassword = 'pass123';
    var validUsername1 = 'user1234';
    var validPassword1  = 'pass1234';
    
    if (username === validUsername && password === validPassword) {
      alert('Login successful!');
      window.location.href = "home.html";
     }
      else if (username === validUsername1 && password === validPassword1) {
         alert('Login successful!');
         window.location.href = "home.html";
      } 
     else {
      var errorMessage = document.getElementById('error-message');
      errorMessage.textContent = 'Invalid username or password';
    }
  });
//   password toggle
function myFunction() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  function redirect(){
    var target="index.html"
    window.location.href=target
}