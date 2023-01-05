//Når man klikker på menu kommer nav op med alle punkterne //
function onClickMenu() {
  document.getElementById("menu").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
}
const stjerne1 = document.querySelector("#stjerne_container");
const stjerne2 = document.querySelector("#lillestjerne_container");
const cirkel = document.querySelector("#cirkel_container");

// Giver elementerne deres animation (flyv/svømme)
stjerne1.classList.add("flyv");
stjerne2.classList.add("flyv");
cirkel.classList.add("flyv");
