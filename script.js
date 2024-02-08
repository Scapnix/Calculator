let display = document.getElementById("screen");

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  display.value = eval(display.value);
}

function decimal() {
  display.value += ".";
}

function removeCharacter() {
  let str = display.value;
  str = str.slice(0, -1);
  display.value = str;
}
