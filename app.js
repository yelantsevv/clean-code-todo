//Document is the DOM can be accessed in the console with document.window.
// Tree is from the top, html, body, p etc.

//Problem: User interaction does not provide the correct results.
//Solution: Add interactivity so the user can manage daily tasks.
//Break things down into smaller steps and take each step at a time.

// Event handling, user interaction is what starts the code execution.

const newTaskInput = document.getElementById('new-task'); //Add a new task.
const addTaskButton = document.getElementsByTagName('button')[0]; //first button
const todoList = document.getElementById('incompleteTasks'); //ul of #incompleteTasks
const completedList = document.getElementById('completed-tasks'); //completed-tasks

//New task list item
const createTaskElement = function (taskText) {
  const taskItem = document.createElement('li');

  //input (checkbox)
  const checkbox = document.createElement('input'); //checkbx
  //label
  const taskLabel = document.createElement('label'); //label
  //input (text)
  const taskEditInput = document.createElement('input'); //text
  //button.edit
  const editButton = document.createElement('button'); //edit button

  //button.delete
  const deleteButton = document.createElement('button'); //delete button
  const deleteIcon = document.createElement('img'); //delete button image

  taskLabel.innerText = taskText;
  taskLabel.className = 'task';

  //Each elements, needs appending
  checkbox.type = 'checkbox';
  taskEditInput.type = 'text';
  taskEditInput.className = 'task';

  editButton.innerText = 'Edit'; //innerText encodes special characters, HTML does not.
  editButton.className = 'edit';

  deleteButton.className = 'delete';
  deleteIcon.src = './remove.svg';
  deleteButton.appendChild(deleteIcon);

  //and appending.
  taskItem.appendChild(checkbox);
  taskItem.appendChild(taskLabel);
  taskItem.appendChild(taskEditInput);
  taskItem.appendChild(editButton);
  taskItem.appendChild(deleteButton);
  return taskItem;
};

const addTask = function () {
  //Create a new list item with the text from the #new-task:
  if (!newTaskInput.value) return;
  const taskItem = createTaskElement(newTaskInput.value);

  //Append taskItem to todoList
  todoList.appendChild(taskItem);
  bindTaskEventHandlers(taskItem);

  newTaskInput.value = '';
};

//Edit an existing task.

const editTask = function () {
  const taskItem = this.parentNode;

  const taskEditInput = taskItem.querySelector('input[type=text]');
  const taskLabel = taskItem.querySelector('label');
  const editButton = taskItem.querySelector('.edit');
  const isEditing = taskItem.classList.contains('editMode');
  //If class of the parent is .editmode
  if (isEditing) {
    //switch to .editmode
    //label becomes the inputs value.
    taskLabel.innerText = taskEditInput.value;
    editButton.innerText = 'Edit';
  } else {
    taskEditInput.value = taskLabel.innerText;
    editButton.innerText = 'Save';
  }

  //toggle .editmode on the parent.
  taskItem.classList.toggle('editMode');
};

//Delete task.
const deleteTask = function () {
  const taskItem = this.parentNode;
  const taskList = taskItem.parentNode;
  //Remove the parent list item from the ul.
  taskList.removeChild(taskItem);
};

//Mark task completed
const moveTaskByCompletionStatus = function () {
  const taskItem = this.parentNode;
  const destinationList = this.checked ? completedList : todoList;
  destinationList.appendChild(taskItem);
};

//The glue to hold it all together.

//Set the click handler to the addTask function.
addTaskButton.addEventListener('click', addTask);

const bindTaskEventHandlers = function (taskItem) {
  //select ListItems children
  const checkbox = taskItem.querySelector('input[type=checkbox]');
  const editButton = taskItem.querySelector('button.edit');
  const deleteButton = taskItem.querySelector('button.delete');

  //Bind editTask to edit button.
  editButton.onclick = editTask;
  //Bind deleteTask to delete button.
  deleteButton.onclick = deleteTask;
  //Bind taskCompleted to checkboxEventHandler.
  checkbox.onchange = moveTaskByCompletionStatus;
};

//cycle over todoList ul list items
//for each list item
for (let index = 0; index < todoList.children.length; index++) {
  //bind events to list items chldren(tasksCompleted)
  bindTaskEventHandlers(todoList.children[index]);
}

//cycle over completedList ul list items
for (let index = 0; index < completedList.children.length; index++) {
  //bind events to list items chldren(tasksIncompleted)
  bindTaskEventHandlers(completedList.children[index]);
}

// Issues with usability don't get seen until they are in front of a human tester.

//prevent creation of empty tasks.

//Change edit to save when you are in edit mode.
