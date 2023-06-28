document.getElementById("admin_login").onclick = function () {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let params = {
    "username": email,
    "password": password,
  };

  const adminLogin = async () => {
    let req = await request(
      "POST",
      "http://localhost:9595/user/login",
      false,
      params
    );
    let status = req.status;

    if (Number(status) === 200) {
      localStorage.setItem('token', req.JwtToken)
      window.location.href = 'admin.html'
    }
    else {
      alert('Cannot login')
    }
  }
  adminLogin();

}
