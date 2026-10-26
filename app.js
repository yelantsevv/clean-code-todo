const newTaskInput = document.getElementById('new-task');
const addTaskButton = document.getElementsByTagName('button')[0];
const todoList = document.getElementById('incompleteTasks');
const completedList = document.getElementById('completed-tasks');

const createElement = function (tagName, { className, type, text } = {}) {
  const element = document.createElement(tagName);
  if (className) element.className = className;
  if (type) element.type = type;
  if (text) {
    // Render task text without parsing it as HTML.
    element.innerText = text;
  }
  return element;
};

const createTaskElement = function (taskText) {
  const taskItem = createElement('li');
  const checkbox = createElement('input', { type: 'checkbox' });
  const taskLabel = createElement('label', {
    className: 'task',
    text: taskText,
  });
  const taskEditInput = createElement('input', {
    className: 'task',
    type: 'text',
  });
  const editButton = createElement('button', {
    className: 'edit',
    text: 'Edit',
  });
  const deleteButton = createElement('button', { className: 'delete' });
  const deleteIcon = createElement('img');

  deleteIcon.src = './remove.svg';
  deleteButton.appendChild(deleteIcon);

  taskItem.appendChild(checkbox);
  taskItem.appendChild(taskLabel);
  taskItem.appendChild(taskEditInput);
  taskItem.appendChild(editButton);
  taskItem.appendChild(deleteButton);
  return taskItem;
};

const addTask = function () {
  // Ignore empty names to enforce the task input rule.
  if (!newTaskInput.value) return;
  const taskItem = createTaskElement(newTaskInput.value);

  todoList.appendChild(taskItem);
  bindTaskEventHandlers(taskItem);

  newTaskInput.value = '';
};

const editTask = function () {
  const taskItem = this.parentNode;

  const taskEditInput = taskItem.querySelector('input[type=text]');
  const taskLabel = taskItem.querySelector('label');
  const editButton = taskItem.querySelector('.edit');
  const isEditing = taskItem.classList.contains('editMode');
  if (isEditing) {
    taskLabel.innerText = taskEditInput.value;
    editButton.innerText = 'Edit';
  } else {
    taskEditInput.value = taskLabel.innerText;
    editButton.innerText = 'Save';
  }

  taskItem.classList.toggle('editMode');
};

const deleteTask = function () {
  const taskItem = this.parentNode;
  const taskList = taskItem.parentNode;
  taskList.removeChild(taskItem);
};

const moveTaskByCompletionStatus = function () {
  const taskItem = this.parentNode;
  const destinationList = this.checked ? completedList : todoList;
  destinationList.appendChild(taskItem);
};

addTaskButton.addEventListener('click', addTask);

const bindTaskEventHandlers = function (taskItem) {
  const checkbox = taskItem.querySelector('input[type=checkbox]');
  const editButton = taskItem.querySelector('button.edit');
  const deleteButton = taskItem.querySelector('button.delete');

  editButton.onclick = editTask;
  deleteButton.onclick = deleteTask;
  checkbox.onchange = moveTaskByCompletionStatus;
};

for (let index = 0; index < todoList.children.length; index++) {
  bindTaskEventHandlers(todoList.children[index]);
}

for (let index = 0; index < completedList.children.length; index++) {
  bindTaskEventHandlers(completedList.children[index]);
}
