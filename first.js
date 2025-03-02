
function addComment(task) {
  
  const historySection = document.getElementById('history');
  
  const newComment = document.createElement('div');
  newComment.classList.add('comment-entry', 'mb-2');
  newComment.textContent = `${task} task marked as completed!`;

  historySection.appendChild(newComment);
}

function clearHistory() {
  const historySection = document.getElementById('history');
  
  historySection.innerHTML = `
    <div>
      <div class="flex gap-2">
        <div>
          <img src="assets/activity.png" alt="">
        </div>
        <div>
          <h6 class="text-2xl"> Activity Log </h6>
        </div>
      </div>
      <button id="history-clear" class="btn btn-primary">Clear History</button>
    </div>
  `;cleared

  
  alert('History has been cleared!');
}

document.getElementById('first-btn').addEventListener('click', function() {
  addComment('Fix Mobile Button Issue');
});
document.getElementById('second-btn').addEventListener('click', function() {
  addComment('Add Dark Mode');
});
document.getElementById('third-btn').addEventListener('click', function() {
  addComment('Optimize Home page');
});
document.getElementById('four-btn').addEventListener('click', function() {
  addComment('Add new emoji 🤲');
});
document.getElementById('five-btn').addEventListener('click', function() {
  addComment('Integrate OpenAI API');
});
document.getElementById('six-btn').addEventListener('click', function() {
  addComment('Improve Job searching');
});
document.getElementById('history-clear').addEventListener('click', function() {
  clearHistory();
});
document.getElementById('history').addEventListener('click', function() {
  alert('History button clicked!');
});

// Optional: Disable the buttons initially (if you want to disable them before any task completion)
function disableButtons() {
  const buttons = document.querySelectorAll('#first-btn, #second-btn, #third-btn, #four-btn, #five-btn, #six-btn');
  buttons.forEach(button => {
    button.active = true;
  });
}
