const button = document.querySelector("button");
const result = document.querySelector("#result");

button.addEventListener("click", bin2Decimal);

function bin2Decimal() {
  const inputValue = document.querySelector("input").value;
  const output = parseInt(inputValue, 2);
  result.textContent = output;
}


