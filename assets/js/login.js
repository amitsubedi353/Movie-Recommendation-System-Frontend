document.getElementById("login").onclick = function () {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let params = {
    "username": email,
    "password": password,
  };

  validateForm();
  const login = async () => {
    let req = await request(
      "POST",
      "http://localhost:9595/user/login",
      false,
      params
    );
    let status = req.status;

    if (status === "200") {
      window.location.href = 'home.html'
      console.log('suc')
      localStorage.setItem('token', req.JwtToken)

    }
    else {
      window.alert('Cannot login')
    }
  }
  login();

  // console.log(email)++
  //
  // console.log('sh')
}

function validateForm() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var error = "";

  // Check if the email field is empty
  if (!email) {
    error = "Email is required";

  }
  // Check if the email field is a valid email
  else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    error = "Invalid email address";
  }
  // Check if the password field is empty
  else if (!password) {
    error = "Password is required";
  }
  // Check if the password length is less than 8
  else if (password.length < 8) {
    error = "Password must be at least 8 characters long";
  }
  // Check if the password has at least 1 uppercase letter, 1 lowercase letter, and 1 digit
  else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/.test(password)) {
    error =
      "Password must contain at least 1 uppercase letter, 1 lowercase letter, and 1 digit";
  }
  // Display an error message if the input is not valid
  if (error) {
    event.preventDefault();
    alert(error);
    return false;
  } else {
    return true;
  }
}

// function validateSignUp() {
//   var username = document.getElementById("Username").value;
//   var email = document.getElementById("email").value;
//   var password = document.getElementById("password").value;
//   var confirmPassword = document.getElementById("confirm_password").value;
//   var error = "";

//   // Check if the username field is empty
//   if (!username) {
//     error = "Username is required";
//   }
//   // Check if the email field is empty
//   else if (!email) {
//     error = "Email is required";
//   }
//   // Check if the email field is a valid email
//   else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
//     error = "Invalid email address";
//   }
//   // Check if the password field is empty
//   else if (!password) {
//     error = "Password is required";
//   }
//   // Check if the confirm password field is empty
//   else if (!confirmPassword) {
//     error = "Confirm Password is required";
//   }
//   // Check if the password and confirm password fields match
//   else if (password !== confirmPassword) {
//     error = "Passwords do not match";
//   }
//   // Check if the checkbox is not selected
//   else if (!document.getElementById("checkbox").checked) {
//     error = "Please accept the Term & Conditions";
//   }
//   // Display an error message if the input is not valid
//   if (error) {
//     event.preventDefault();

//     alert(error);
//     return false;
//   } else {
//     return true;
//   }
// }
