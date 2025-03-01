
  
  function addHistoryComment(taskName) {
    const historySection = document.getElementById('history');  
    const newHistoryItem = document.createElement('div');   
    newHistoryItem.classList.add('p-4', 'border-b', 'border-gray-200');
    newHistoryItem.innerHTML = `
      <div class="flex gap-2">
        <div><img src="assets/activity.png" alt="Activity Icon" class="h-6 w-6"></div>
        <div>
          <p class="text-xl font-semibold">Task "${taskName}" marked as Completed</p>
        </div>
      </div>
    `;
    
    historySection.appendChild(newHistoryItem);
  }

  document.getElementById('first-btn').addEventListener('click', () => addHistoryComment('Fix Mobile Button Issue'));
  document.getElementById('second-btn').addEventListener('click', () => addHistoryComment('Add Dark Mode'));
  document.getElementById('third-btn').addEventListener('click', () => addHistoryComment('Optimize Home page'));
  document.getElementById('four-btn').addEventListener('click', () => addHistoryComment('Add new emoji 🤲'));
  document.getElementById('five-btn').addEventListener('click', () => addHistoryComment('Integrate OpenAI API'));
  document.getElementById('six-btn').addEventListener('click', () => addHistoryComment('Improve Job searching'));

  document.getElementById('history-clear').addEventListener('click', () => {
    const historySection = document.getElementById('history');
    historySection.innerHTML = '';  
  });


// Add comment functionality
document.querySelectorAll('.add-comment-btn').forEach(button => {
  button.addEventListener('click', function() {
    const taskSection = button.closest('section'); // Get the closest task section
    const commentInput = taskSection.querySelector('.comment-input'); // Find the comment input field
    const commentText = commentInput.value.trim(); // Get the comment value

    if (commentText) {
      const commentDiv = taskSection.querySelector('.comment'); // Find the comment div
      commentDiv.textContent = commentText; // Add the comment to the comment div

      commentInput.value = ''; // Clear the comment input field
    }
  });
});

// Clear comments when "Clear History" button is clicked
document.getElementById('history-clear').addEventListener('click', function() {
  // Select all elements with the class `comment` (where comments are stored)
  const commentSections = document.querySelectorAll('.comment');
  
  // Loop through all comment sections and clear their content
  commentSections.forEach(function(commentSection) {
    commentSection.textContent = ''; // Clear the comment text
  });
});

