function login() {
    // Get input values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Simulated authentication (replace this with your authentication logic)
    if (username === "user" && password === "pass") {
      document.getElementById("loginMessage").innerHTML = "Login successful!";
      // Redirect to user profile or dashboard
      // window.location.href = "dashboard.html";
    } else {
      document.getElementById("loginMessage").innerHTML = "Invalid username or password.";
    }
  }
  