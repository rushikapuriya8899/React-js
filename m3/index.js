// Get the necessary elements from the DOM
const counterElement = document.getElementById("counter");
const incrementButton = document.getElementById("incrementBtn");
const decrementButton = document.getElementById("decrementBtn");

// Initial counter value
let counter = 0;

// Function to update the counter display
function updateCounterDisplay() {
  counterElement.textContent = counter;
}

// Function to handle increment button click
function handleIncrement() {
  counter++;
  updateCounterDisplay();
}

// Function to handle decrement button click
function handleDecrement() {
  counter--;
  updateCounterDisplay();
}
// Function to handle restart button click
function handleRestart() {
    counter--;
    updateCounterDisplay();
  }
// Attach click event listeners to the buttons
incrementButton.addEventListener("click", handleIncrement);
decrementButton.addEventListener("click", handleDecrement);
restartButton.addEventListener("click",    handleRestart);

// Update the counter display initially
updateCounterDisplay();
