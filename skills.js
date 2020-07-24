function check() {
  console.log("hey");
  gsap.to(".doo1", {
    color: "white",
  });
  gsap.reverse(".doo1", {
    color: "black",
  });
}

function rotate() {
  gsap.to(".doo2", {
    rotation: 360,
  });
}
