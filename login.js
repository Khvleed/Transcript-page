document.addEventListener('DOMContentLoaded', () => {
  // Function to handle login
  const handleLogin = () => {
    const emailOrLoginID = document.querySelector('input[name="emailOrLoginID"]').value;
    const password = document.querySelector('input[name="password"]').value;

    // Check if both email/ID and password fields are non-empty
    if (emailOrLoginID.trim() !== "" && password.trim() !== "") {
      // Send a POST request to login.php to handle user authentication
      fetch('login.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          emailOrLoginID: emailOrLoginID,
          password: password
        })
      })
      .then(response => {
        if (response.ok) {
          // Redirect to registration.php upon successful login
          window.location.href = "registration.php";
        } else {
          alert("Invalid email or login ID or password.");
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
    } else {
      alert("Please enter both email or login ID and password.");
    }
  };

  const loginBtn = document.querySelector('.submit-btn');
  if (loginBtn) {
    loginBtn.addEventListener('click', event => {
      event.preventDefault();
      handleLogin(); 
    });

    // Add another event listener for navigation to dashboard.html
    loginBtn.addEventListener('click', function() {
      window.location.href = 'student.html';
    });
  } else {
    console.error("Login button not found.");
  }
});
