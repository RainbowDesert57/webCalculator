const display = document.getElementById("display");
function appendDisplay(value) {
  display.value += value;
}
function displayClear() {
  display.value = "";
}
function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error!";
  }
}
function backspace() {
  var displayValue = display.value;
  var new_value = displayValue.substring(0, displayValue.length - 1);
  display.value = new_value;
}
