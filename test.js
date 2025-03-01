document.getElementById('first-btn').addEventListener('click', function() {
  // Get the elements for 'main-first' and 'main-second'
  let mainFirst = document.getElementById('main-first');
  let mainSecond = document.getElementById('main-second');

  // Get the current values as integers
  let currentFirstValue = parseInt(mainFirst.textContent);
  let currentSecondValue = parseInt(mainSecond.textContent);

  // Update the values: increase 'main-first' by 1 and decrease 'main-second' by 1
  mainFirst.textContent = currentFirstValue + 1;
  mainSecond.textContent = currentSecondValue - 1;

  // Disable the button after the click
  document.getElementById('first-btn').disabled = true;

  // Optionally show a success message
  alert('Board updated successfully');
});