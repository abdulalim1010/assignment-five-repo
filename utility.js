
function updateValue(buttonId, changeFirst, changeSecond) {
  
  let mainFirst = document.getElementById('main-first');
  let mainSecond = document.getElementById('main-second');

  let currentFirstValue = parseInt(mainFirst.textContent);
  let currentSecondValue = parseInt(mainSecond.textContent);

  
  mainFirst.textContent = currentFirstValue - changeFirst;
  mainSecond.textContent = currentSecondValue - changeSecond;

  document.getElementById(buttonId).disabled = true;

  alert(buttonId - ' updated successfully');
  
}


document.getElementById('first-btn').addEventListener('click', function() {
  updateValue('first-btn', 1, -1); 
});

document.getElementById('second-btn').addEventListener('click', function() {
  updateValue('second-btn', 1, -1); 
});

document.getElementById('third-btn').addEventListener('click', function() {
  updateValue('third-btn', 1, -1); 
});

document.getElementById('four-btn').addEventListener('click', function() {
  updateValue('four-btn', 1, -1); 
});

document.getElementById('five-btn').addEventListener('click', function() {
  updateValue('five-btn', 1, -1); 
});

document.getElementById('six-btn').addEventListener('click', function() {
  updateValue('six-btn', 1, -1); 
});

 