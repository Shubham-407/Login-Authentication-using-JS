const form = document.getElementById("login-form");
const username = document.getElementById("username");
const password = document.getElementById("password");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  
  const users = [
    {username: "user1", password: "pass1"},
    {username: "user2", password: "pass2"},
    // ... add more users
  ];
  
  const user = users.find(function(user) {
    return user.username === username.value && user.password === password.value;
  });
  
  if (user) {
    // Authenticated
    // Do something after successful login
    console.log('successful');
    alert('successful login')
  } else {
    // Not authenticated
    alert("Incorrect username or password");
  }
});
