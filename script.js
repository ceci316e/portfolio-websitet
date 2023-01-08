window.addEventListener("load", sidenVises);

//Når man klikker på menu kommer nav op med alle punkterne //
function onClickMenu() {
  document.getElementById("menu").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
}
// opretter variabel minRand
let minRand;

function sidenVises() {
  //Tjekker siden vises og kodningen går igennem
  console.log("sidenVises");
}
// Laver et nyt random tal, og giver en random position til container
minRand = Math.floor(Math.random() * 9) + 1;
document.querySelector("#stjerne1_container").classList.add("pos" + minRand);
minRand = Math.floor(Math.random() * 9) + 1;
document.querySelector("#stjerne3_container").classList.add("pos" + minRand);
minRand = Math.floor(Math.random() * 9) + 1;
document.querySelector("#stjerne4_container").classList.add("pos" + minRand);
minRand = Math.floor(Math.random() * 9) + 1;
document.querySelector("#stjerne5_container").classList.add("pos" + minRand);
minRand = Math.floor(Math.random() * 9) + 1;
document.querySelector("#stjerne6_container").classList.add("pos" + minRand);
minRand = Math.floor(Math.random() * 9) + 1;
document.querySelector("#stjerne7_container").classList.add("pos" + minRand);
minRand = Math.floor(Math.random() * 9) + 1;
document.querySelector("#stjerne8_container").classList.add("pos" + minRand);
minRand = Math.floor(Math.random() * 9) + 1;
document.querySelector("#stjerne9_container").classList.add("pos" + minRand);
minRand = Math.floor(Math.random() * 9) + 1;
document.querySelector("#stjerne10_container").classList.add("pos" + minRand);
minRand = Math.floor(Math.random() * 9) + 1;
document.querySelector("#stjerne11_container").classList.add("pos" + minRand);
minRand = Math.floor(Math.random() * 9) + 1;
document.querySelector("#stjerne12_container").classList.add("pos" + minRand);

//Stjerner anvender fald -animationen
document.querySelector("#stjerne1_container").classList.add("fald1");
document.querySelector("#stjerne3_container").classList.add("fald2");
document.querySelector("#stjerne4_container").classList.add("fald3");
document.querySelector("#stjerne5_container").classList.add("fald4");
document.querySelector("#stjerne6_container").classList.add("fald5");
document.querySelector("#stjerne7_container").classList.add("fald1");
document.querySelector("#stjerne8_container").classList.add("fald2");
document.querySelector("#stjerne9_container").classList.add("fald3");
document.querySelector("#stjerne10_container").classList.add("fald4");
document.querySelector("#stjerne11_container").classList.add("fald5");
document.querySelector("#stjerne12_container").classList.add("fald1");

//Lyt efter flyv-animationer er færdig
document.querySelector("#stjerne1"), addEventListener("animationiteration", genstartStjerne1);
document.querySelector("#stjerne3"), addEventListener("animationiteration", genstartStjerne3);
document.querySelector("#stjerne4"), addEventListener("animationiteration", genstartStjerne4);
document.querySelector("#stjerne5"), addEventListener("animationiteration", genstartStjerne5);
document.querySelector("#stjerne6"), addEventListener("animationiteration", genstartStjerne6);
document.querySelector("#stjerne7"), addEventListener("animationiteration", genstartStjerne7);
document.querySelector("#stjerne8"), addEventListener("animationiteration", genstartStjerne8);
document.querySelector("#stjerne9"), addEventListener("animationiteration", genstartStjerne9);
document.querySelector("#stjerne10"), addEventListener("animationiteration", genstartStjerne10);
document.querySelector("#stjerne11"), addEventListener("animationiteration", genstartStjerne11);
document.querySelector("#stjerne12"), addEventListener("animationiteration", genstartStjerne12);

function genstartStjerne1() {
  console.log("genstartStjerne1");
  //For at kunne genstarte flyv animationen, da vi fjener og tilføjer den i samme function
  document.querySelector("#stjerne1_container").offsetLeft;

  //Giv en position til container
  document.querySelector("#stjerne1_container").classList.add("pos1");

  //Start flyv-animationer på element
  document.querySelector("#stjerne1_container").classList.add("fald1");
}
function genstartStjerne3() {
  console.log("genstartStjerne3");
  //For at kunne genstarte flyv animationen, da vi fjener og tilføjer den i samme function
  document.querySelector("#stjerne3_container").offsetLeft;

  //Giv en position til container
  document.querySelector("#stjerne3_container").classList.add("pos3");

  //Start flyv-animationer på element
  document.querySelector("#stjerne3_container").classList.add("fald2");
}

function genstartStjerne4() {
  console.log("genstartStjerne4");
  //For at kunne genstarte flyv animationen, da vi fjener og tilføjer den i samme function
  document.querySelector("#stjerne4_container").offsetLeft;

  //Giv en position til container
  document.querySelector("#stjerne4_container").classList.add("pos3");

  //Start flyv-animationer på element
  document.querySelector("#stjerne4_container").classList.add("fald3");
}

function genstartStjerne5() {
  console.log("genstartStjerne5");
  //For at kunne genstarte flyv animationen, da vi fjener og tilføjer den i samme function
  document.querySelector("#stjerne5_container").offsetLeft;

  //Giv en position til container
  document.querySelector("#stjerne5_container").classList.add("pos4");

  //Start flyv-animationer på element
  document.querySelector("#stjerne5_container").classList.add("fald4");
}

function genstartStjerne6() {
  console.log("genstartStjerne6");
  //For at kunne genstarte flyv animationen, da vi fjener og tilføjer den i samme function
  document.querySelector("#stjerne6_container").offsetLeft;

  //Giv en position til container
  document.querySelector("#stjerne6_container").classList.add("pos5");

  //Start flyv-animationer på element
  document.querySelector("#stjerne6_container").classList.add("fald5");
}

function genstartStjerne7() {
  console.log("genstartStjerne7");
  //For at kunne genstarte flyv animationen, da vi fjener og tilføjer den i samme function
  document.querySelector("#stjerne7_container").offsetLeft;

  //Giv en position til container
  document.querySelector("#stjerne7_container").classList.add("pos6");

  //Start flyv-animationer på element
  document.querySelector("#stjerne7_container").classList.add("fald1");
}
function genstartStjerne8() {
  console.log("genstartStjerne8");
  //For at kunne genstarte flyv animationen, da vi fjener og tilføjer den i samme function
  document.querySelector("#stjerne8_container").offsetLeft;

  //Giv en position til container
  document.querySelector("#stjerne8_container").classList.add("pos3");

  //Start flyv-animationer på element
  document.querySelector("#stjerne8_container").classList.add("fald2");
}

function genstartStjerne9() {
  console.log("genstartStjerne9");
  //For at kunne genstarte flyv animationen, da vi fjener og tilføjer den i samme function
  document.querySelector("#stjerne9_container").offsetLeft;

  //Giv en position til container
  document.querySelector("#stjerne9_container").classList.add("pos3");

  //Start flyv-animationer på element
  document.querySelector("#stjerne9_container").classList.add("fald3");
}

function genstartStjerne10() {
  console.log("genstartStjerne10");
  //For at kunne genstarte flyv animationen, da vi fjener og tilføjer den i samme function
  document.querySelector("#stjerne10_container").offsetLeft;

  //Giv en position til container
  document.querySelector("#stjerne10_container").classList.add("pos4");

  //Start flyv-animationer på element
  document.querySelector("#stjerne10_container").classList.add("fald4");
}

function genstartStjerne11() {
  console.log("genstartStjerne11");
  //For at kunne genstarte flyv animationen, da vi fjener og tilføjer den i samme function
  document.querySelector("#stjerne11_container").offsetLeft;

  //Giv en position til container
  document.querySelector("#stjerne11_container").classList.add("pos5");

  //Start flyv-animationer på element
  document.querySelector("#stjerne11_container").classList.add("fald5");
}

function genstartStjerne12() {
  console.log("genstartStjerne12");
  //For at kunne genstarte flyv animationen, da vi fjener og tilføjer den i samme function
  document.querySelector("#stjerne12_container").offsetLeft;

  //Giv en position til container
  document.querySelector("#stjerne12_container").classList.add("pos6");

  //Start flyv-animationer på element
  document.querySelector("#stjerne12_container").classList.add("fald1");
}
