console.log(House Always Wins!)

const idInput = document.getElementById('idInput');
console.log(idInput)

const colorInput = document.getElementById('colorInput');
console.log(colorInput)

function setCard () {
  const card = document.getElementById(idInput.value);
  card.style.color = colorInput.value;
}
console.log(card)

Function reset() {

  const button = document.createElement("button");
  button.innerHTML = "Reset";  

  button.addEventListener("click", function () {
    alert("Board Reset");
  });
}