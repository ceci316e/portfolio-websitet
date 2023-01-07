window.addEventListener("load", sidenVises);

//Når man klikker på menu kommer nav op med alle punkterne //
function onClickMenu() {
  document.getElementById("menu").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
}
// opretter variabel minRand
let minRand;

const stjerne1 = document.querySelector("#stjerne1_container");
const stjerne2 = document.querySelector("#stjerne2_container");
const stjerne3 = document.querySelector("#stjerne3_container");

function sidenVises() {
  //Tjekker siden vises og kodningen går igennem
  console.log("sidenVises");
}
// Laver et nyt random tal, og giver en random position til container
minRand = Math.floor(Math.random() * 9) + 1;
document.querySelector("#stjerne1_container").classList.add("pos" + minRand);
minRand = Math.floor(Math.random() * 9) + 1;
document.querySelector("#stjerne2_container").classList.add("pos" + minRand);
minRand = Math.floor(Math.random() * 9) + 1;
document.querySelector("#stjerne3_container").classList.add("pos" + minRand);

//Stjerner anvender fald -animationen
document.querySelector("#stjerne1_container").classList.add("fald");
document.querySelector("#stjerne2_container").classList.add("fald");
document.querySelector("#stjerne3_container").classList.add("fald");

//Lyt efter flyv-animationer er færdig
document.querySelector("#stjerne1"), addEventListener("animationiteration", genstartStjerne1);
document.querySelector("#stjerne2"), addEventListener("animationiteration", genstartStjerne2);
document.querySelector("#stjerne3"), addEventListener("animationiteration", genstartStjerne3);

function genstartStjerne1() {
  console.log("genstartStjerne1");
  //For at kunne genstarte flyv animationen, da vi fjener og tilføjer den i samme function
  document.querySelector("#stjerne1_container").offsetLeft;

  //Giv en position til container
  document.querySelector("#stjerne1_container").classList.add("pos1");

  //Start flyv-animationer på element
  document.querySelector("#stjerne1_container").classList.add("fald");
}

function genstartStjerne2() {
  console.log("genstartStjerne2");
  //For at kunne genstarte flyv animationen, da vi fjener og tilføjer den i samme function
  document.querySelector("#stjerne2_container").offsetLeft;

  //Giv en position til container
  document.querySelector("#stjerne2_container").classList.add("pos2");

  //Start flyv-animationer på element
  document.querySelector("#stjerne2_container").classList.add("fald");
}
function genstartStjerne3() {
  console.log("genstartStjerne3");
  //For at kunne genstarte flyv animationen, da vi fjener og tilføjer den i samme function
  document.querySelector("#stjerne3_container").offsetLeft;

  //Giv en position til container
  document.querySelector("#stjerne3_container").classList.add("pos3");

  //Start flyv-animationer på element
  document.querySelector("#stjerne3_container").classList.add("fald");
}
