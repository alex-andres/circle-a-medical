$(document).ready(function() {
  $("#loginSubmit").on("click", function(event) {
    event.preventDefault();

      var userData = {
        username: $('#userName').val().trim(),
        password: $('#pwd').val().trim()
      };

      if (!userData.username || !userData.password) {
        return;
      }

      loginUser(userData.username, userData.password);
      usernameInput.val("");
      passwordInput.val("");
    });

    function loginUser(username, password) {

      $.post("/login", {
        username,
        password
      })
      .then(function(data) {
        window.location.replace(data);
      }).catch(function(err) {
        console.log(err);
      });

      //UNCOMMENT TO ADD NEW USER
    // $.post("/signup", {
    //   username: "akspellm",
    //   password: "CodeDragon2017"
    // })
    //   .then(function(data) {
    //     console.log("added!");
    //   })
    //   .catch(function(err) {
    //     console.log(err);
    //   });
    }
  });

