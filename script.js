let display = document.getElementById('display');

// Append to display and calculate immediately
function appendToDisplay(value) {
    display.value += value;
    calculateRealTime();
}
function calculate() {
  let result = eval(document.getElementById('display').value);
  document.getElementById('display').value = result;
}
// Clear the display
function clearDisplay() {
    display.value = '';
}

// Backspace function
function backspace() {
    display.value = display.value.slice(0, -1);
    calculateRealTime();
}

// Real-time calculation
function calculateRealTime() {
    try {
        // Don't evaluate empty or incomplete expressions
        if (display.value === '' || 
            ['+', '-', '*', '/', '.'].includes(display.value.slice(-1))) {
            return;
        }
        
        // Replace × and ÷ with * and / for evaluation
        let expression = display.value.replace(/×/g, '*').replace(/÷/g, '/');
        
        // Evaluate safely
        let result = eval(expression);
        
        // If the result is a number, show it (limit decimal places)
        if (!isNaN(result)) {
            // Show result in a separate line (optional)
            // display.value = `${expression}\n=${result}`;
        }
    } catch (error) {
        // Silently handle errors (invalid expressions)
    }
}

// Keyboard support
display.addEventListener('keydown', function(e) {
    // Allow only numbers, operators, and control keys
    if (!/[0-9+\-*/.()]|Backspace|Delete|Enter/.test(e.key)) {
        e.preventDefault();
    }
    
    // Calculate on Enter
    if (e.key === 'Enter') {
        calculateRealTime();
    }
});
