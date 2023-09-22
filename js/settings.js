function sOn() {
  document.querySelector(".set").style.visibility = "visible";
}
function sOff() {
  document.querySelector(".set").style.visibility = "hidden";
}
function sSave() {
  sT1 = document.getElementById("sI1").value;
  sT2 = document.getElementById("sI2").value;
  sT3 = document.getElementById("sI3").value;
  sT4 = document.getElementById("sI4").value;

  document.querySelector(".header").style.backgroundColor = sT1;
  document.querySelector(".main").style.backgroundColor = sT1;
  document.querySelector(".set").style.backgroundColor = sT1;
  document.querySelector(".BGabout").style.backgroundColor = sT1;
  document.querySelector(".BGpro").style.backgroundColor = sT1;
  document.querySelector(".BGver").style.backgroundColor = sT1;

  document.body.style.backgroundColor = sT2;
  document.querySelector(".mainBtD").style.backgroundColor = sT2;
  document.querySelector(".ABtitle").style.backgroundColor = sT2;
  document.querySelector(".Ptitle").style.backgroundColor = sT2;
  document.querySelector(".Vtitle").style.backgroundColor = sT2;
  document.querySelector(".sB1").style.backgroundColor = sT2;
  document.querySelector(".sB2").style.backgroundColor = sT2;

  document.querySelector(".header").style.borderColor = sT3;
  document.querySelector(".main").style.borderColor = sT3;
  document.querySelector(".mainBtD").style.borderColor = sT3;
  document.querySelector(".set").style.borderColor = sT3;
  document.querySelector(".BGabout").style.borderColor = sT3;
  document.querySelector(".ABtitle").style.borderColor = sT3;
  document.querySelector(".BGpro").style.borderColor = sT3;
  document.querySelector(".Ptitle").style.borderColor = sT3;
  document.querySelector(".BGver").style.borderColor = sT3;
  document.querySelector(".Vtitle").style.borderColor = sT3;
  document.querySelector(".sB1").style.borderColor = sT3;
  document.querySelector(".sB2").style.borderColor = sT3;

  document.body.style.color = sT4;
  document.querySelector(".PText1").style.color = sT4;
  document.querySelector(".PText2").style.color = sT4;
  document.querySelector(".PText3").style.color = sT4;
  document.querySelector(".sB1").style.color = sT4;
  document.querySelector(".sB2").style.color = sT4;
}
