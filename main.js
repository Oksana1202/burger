document.addEventListener("click", function (el) {
  if (el.target.classList.contains("menu_item")) {
    let menu = document.querySelectorAll(".border-left");
    menu.forEach(function (elem) {
      elem.classList.remove("border-left");
    });

    el.target.classList.add("border-left");
  }
});
