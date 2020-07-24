const menu_open = document.getElementById("menu");

// Event Listener
menu_open.addEventListener("click", myFunction);

// Functions
function myFunction() {
  anime({
    targets: "nav",
    translateX: -115,
  });
}
