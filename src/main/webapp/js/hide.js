var target = document.getElementById("target");

function hide() {
  target.setAttribute("class", "hide");
}

var button = document.getElementById("hide");
button.addEventListener("click", hide, false);
