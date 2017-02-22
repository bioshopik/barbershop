var mapOpen = document.querySelector(".js-open-map");
var mapPopUp = document.querySelector(".modal-content-map");
var mapClose = mapPopUp.querySelector(".modal-content-close");
var overlay = document.querySelector(".modal-overlay");

mapOpen.addEventListener("click", function(event) {
    event.preventDefault();
    mapPopUp.classList.add("show-content");
    overlay.classList.add("show-content");
});

mapClose.addEventListener("click", function(event) {
    event.preventDefault();
    mapPopUp.classList.remove("show-content");
    overlay.classList.remove("show-content");
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (mapPopUp.classList.contains("show-content")) {
        mapPopUp.classList.remove("show-content");
        overlay.classList.remove("show-content");
      }
    }
});