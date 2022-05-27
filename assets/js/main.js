var plus = document.querySelector(".plus");
var search = document.querySelector("#search");

if (!localStorage.getItem("images")) {
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "/data.json", false);
  xhttp.send();

  var arr = JSON.parse(xhttp.responseText);

  localStorage.setItem("images", JSON.stringify(arr));
}

function isLoggedin() {
  var btns = document.querySelectorAll("li button");
  var user = localStorage.getItem("username");
  if (user) {
    document.querySelectorAll("li button")[0].style.display = "none";
    document.querySelectorAll("li button")[1].style.display = "none";
    document.querySelector("#showme").style.display = "";
    document.querySelector("#showme").innerHTML = user;
  }
}

var boxDom = document.querySelector(".wrapper");
var data = JSON.parse(localStorage.getItem("images"));
drawUI(data);
function drawUI(array) {
  boxDom.innerHTML = "";
  array.forEach((element) => {
    boxDom.innerHTML += `<div class="box"> <img src="${element.image}" alt="${element.keywords}" credit="${element.credit}" srcset=""></div>`;
  });
}

const redirect = () => {
  location.href = "/upload.html";
};

search.addEventListener("keyup", searchImage);

function searchImage(e) {
  var data = JSON.parse(localStorage.getItem("images"));
  var arr = data.filter(
    (item) =>
      item.keywords.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
  );
  drawUI(arr);
}

isLoggedin();
