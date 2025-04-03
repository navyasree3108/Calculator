let display = document.getElementById("display");
let currentInput = "";

// Function to add numbers or operators to display
function appendValue(value) {
    currentInput += value;
    display.value = currentInput;
}

// Function to clear the display
function clearDisplay() {
    currentInput = "";
    display.value = "";
}

// Function to delete the last character
function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
}

// Function to calculate the result
function calculateResult() {
    try {
        currentInput = eval(currentInput); // Perform calculation
        display.value = currentInput;
    } catch {
        display.value = "Error";
        currentInput = "";
    }
}
