function myFunction() {
  var element = document.querySelector(".modal");
  if (element.style.display === "flex") {
    element.style.display = "none";
  } else {
    element.style.display = "flex";
  }
}
