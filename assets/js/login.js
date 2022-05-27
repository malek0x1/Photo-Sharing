class Login {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  validation = () => {
    var user = this.username;
    var pwd = this.password;
    var db_user = localStorage.getItem("username");
    var db_pwd = localStorage.getItem("password");
    if (user === db_user && pwd === db_pwd) {
      setTimeout(() => {
        window.location = "index.html";
      }, 1000);
    } else {
      alert("Wrong");
    }
  };
}
let username = document.querySelector("#username");
let pwd = document.querySelector("#pwd");
let btn = document.querySelector("#submit");

btn.addEventListener("click", check);
function check(e) {
  e.preventDefault();
  if (username.value === "" || pwd.value === "") {
    alert("Please Fill Data");
  } else {
    var user = new Login(username.value, pwd.value).validation();
  }
}
