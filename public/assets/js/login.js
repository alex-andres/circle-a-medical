
$(document).ready(function() {
  
    var loginForm = $("form.login");
    var usernameInput = $("#username");
    var passwordInput = $("#pwd");
  
   
    $('#loginSubmit').on("click", function(event) {
      event.preventDefault();
      var userData = {
        username: usernameInput.val().trim(),
        password: passwordInput.val().trim()
      };
  
      if (!userData.username || !userData.password) {
        return;
      }
  
      loginUser(userData.username, userData.password);
      usernameInput.val("");
      passwordInput.val("");
    });
  
    function loginUser(username, password) {
      $.post("/users/login", {
        username: username,
        password: password
      }).then(function(data) {
        window.location.replace(data);
      }).catch(function(err) {
        console.log(err);
      });
    }
  
  });