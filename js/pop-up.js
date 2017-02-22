var link = document.querySelector(".login");
var popup = document.querySelector(".modal-content");
var form = popup.querySelector("form");
var close = popup.querySelector(".modal-content-close");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");
var storage = localStorage.getItem("login");


link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("modal-content-show");
    if (storage) {
        login.value = storage;
        password.focus();
    } else {
        login.focus();
    }
});

close.addEventListener("click", function() {
    event.preventDefault();
    popup.classList.remove("modal-content-show");
    popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(event) {
   if (!login.value || !password.value) {
        event.preventDefault();
        popup.classList.add("modal-error");
    } else {
        localStorage.setItem("login", login.value);
        
    }
});

window.addEventListener("keydown", function() {
    if (event.keyCode === 27) {
      if (popup.classList.contains("modal-content-show")) {
        popup.classList.remove("modal-content-show");
        popup.classList.remove("modal-error");
      }
    }
});