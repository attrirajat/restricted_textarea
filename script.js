const textAreaContent = document.querySelector("textarea");
const currentLength = document.getElementById("current");
const maximumLength = document.getElementById("maximum");

let current = 0;
let maximum = 250;

textAreaContent.addEventListener("input", updateValue);

function updateValue(e) {
  const textLength = e.target.value.length;
  currentLength.textContent = textLength;
  maximumLength.textContent = maximum - textLength;
  if (textLength == 250) {
    textAreaContent.style.color = "red";
  } else {
    textAreaContent.style.color = "black";
  }
}
