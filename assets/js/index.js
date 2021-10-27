function toggleLinks() {
  var x = document.getElementById("top-nav__links");
  if (x.className === "header__top-nav") {
    x.className += " responsive";
  } else {
    x.className = "header__top-nav";
  }
}
