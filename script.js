document.getElementById('add-btn').addEventListener('click', function() {
    let curse = document.getElementById('todo-input').value;
    if (curse) {
        addItem(curse);
        document.getElementById('todo-input').value = '';
    }
});

function addItem(text) {
    let list = document.getElementById('todo-items');
    let item = document.createElement('li');
    item.innerHTML = text;

  let deleteButton = document.createElement('button');
  deleteButton.innerHTML = 'Delete';
  deleteButton.classList.add('delete-button'); 
  deleteButton.addEventListener('click', function() {
        list.removeChild(item);
    });
  
  let completeButton = document.createElement('button');
  completeButton.innerHTML = 'Complete';
  completeButton.classList.add('complete-button');
  completeButton.addEventListener('click', function() {
      item.classList.add('complete');
  });

      item.appendChild(deleteButton);
      item.appendChild(completeButton);
      list.appendChild(item);
  }

// https://www.youtube.com/watch?v=IKzlUvYSZO4 
// I used this to help me add a class list for the buttons to include them in css to make it look appealing.
