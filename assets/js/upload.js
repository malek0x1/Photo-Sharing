var db_user = localStorage.getItem("username");
var db_pwd = localStorage.getItem("password");
if (!db_user && !db_pwd) {
  window.location = "login.html";
}

var form = document.querySelector("form");
var img_b64;

form.addEventListener("submit", func);

function func() {
  var credit = document.querySelector("#credit").value;
  var desc = document.querySelector("#desc").value;
  var file_upload = document.querySelector("#upload");

  var file = file_upload.files[0];
  let types = ["image/jpeg", "image/png", "image/svg"];

  if (types.indexOf(file.type) == -1) {
    alert("Type not Supported");
    return;
  }

  if (file.size > 2 * 1024 * 1024) {
    alert("Big Image");
    return;
  }

  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    img_b64 = reader.result;
    var old = JSON.parse(localStorage.getItem("images"));
    var new_data = [{ credit: credit, keywords: desc, image: img_b64 }, ...old];

    localStorage.setItem("images", JSON.stringify(new_data));
    location.href = "index.html";
  };
}

function isLoggedin() {
  var user = localStorage.getItem("username");
  if (user) {
    document.querySelectorAll(".upload-header li")[0].innerHTML = user;
  } else {
    window.location = "login.html";
  }
}

isLoggedin();
