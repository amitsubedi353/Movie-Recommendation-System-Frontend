document.getElementById("signup").onclick = function () {
  let userName = document.getElementById("userName").value;
  let userEmail = document.getElementById("userEmail").value;
  let userPassword = document.getElementById("userPassword").value;
  let confirmPassword = document.getElementById("confirm_password").value;

  function validateEmail(email) {
    // Regular expression for email validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  // Validate userName field
  if (userName.trim() === "") {
    alert("Please enter a username");
    return;
  }

  // Validate userEmail field
  if (userEmail.trim() === "") {
    alert("Please enter an email address");
    return;
  }
  // Validate email format
  if (!validateEmail(userEmail)) {
    alert("Please enter a valid email address");
    return;
  }

  // Validate userPassword field
  if (userPassword.trim() === "") {
    alert("Please enter a password");
    return;
  }

  // Validate confirmPassword field
  if (confirmPassword.trim() === "") {
    alert("Please confirm your password");
    return;
  }

  // Check if the passwords match
  if (userPassword !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  let params = {
    userName: userName,
    userEmail: userEmail,
    userPassword: userPassword,
    roleId: 2,
  };

  const signup = async () => {
    let req = await request("POST", "http://localhost:9595/user/create", false, params).then(
      (window.location.href = "login.html")
    );
    let status = req.status;
  };

  signup();
};
