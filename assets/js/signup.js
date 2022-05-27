class Person {
  constructor(fullname, username, password) {
    this.fullname = fullname;
    this.username = username;
    this.password = password;
    localStorage.setItem("fullname", this.fullname);
    localStorage.setItem("username", this.username);
    localStorage.setItem("password", this.password);
  }
}
let username = document.querySelector("#username");
let fullname = document.querySelector("#fullname");
let password = document.querySelector("#pwd");

let registerBtn = document.querySelector("#submit");

registerBtn.addEventListener("click", register);

function register(e) {
  e.preventDefault();
  if (username.value === "" || fullname.value === "" || password.value === "") {
    alert("Please Fill Data");
  } else {
    var user = new Person(fullname.value, username.value, password.value);
    setTimeout(() => {
      window.location = "login.html";
    }, 1000);
  }
}
