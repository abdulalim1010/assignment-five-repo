// A function to update values for all buttons
function updateValue(buttonId, changeFirst, changeSecond) {
  // Get the elements for 'main-first' and 'main-second'
  let mainFirst = document.getElementById('main-first');
  let mainSecond = document.getElementById('main-second');

  // Get the current values as integers
  let currentFirstValue = parseInt(mainFirst.textContent);
  let currentSecondValue = parseInt(mainSecond.textContent);

  // Update the values based on the passed parameters
  mainFirst.textContent = currentFirstValue + changeFirst;
  mainSecond.textContent = currentSecondValue + changeSecond;

  // Disable the clicked button
  document.getElementById(buttonId).disabled = true;

  // Optionally show a success message
  alert(buttonId + ' updated successfully');
}

// Add event listeners to each button
document.getElementById('first-btn').addEventListener('click', function() {
  updateValue('first-btn', 1, -1); // Increment main-first by 1, decrement main-second by 1
});

document.getElementById('second-btn').addEventListener('click', function() {
  updateValue('second-btn', 1, -1); // Increment main-first by 1, decrement main-second by 1
});

document.getElementById('third-btn').addEventListener('click', function() {
  updateValue('third-btn', 1, -1); // Increment main-first by 1, decrement main-second by 1
});

document.getElementById('four-btn').addEventListener('click', function() {
  updateValue('four-btn', 1, -1); // Increment main-first by 1, decrement main-second by 1
});

document.getElementById('five-btn').addEventListener('click', function() {
  updateValue('five-btn', 1, -1); // Increment main-first by 1, decrement main-second by 1
});

document.getElementById('six-btn').addEventListener('click', function() {
  updateValue('six-btn', 1, -1); // Increment main-first by 1, decrement main-second by 1
});

 