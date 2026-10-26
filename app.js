const newTaskInput = document.getElementById('new_task_input');
const addTaskButton = document.getElementById('add_task_button');
const todoList = document.getElementById('todo_list');
const completedList = document.getElementById('completed_list');

const createDomElement = function (tagName, { className, type, text } = {}) {
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
  const taskItem = createDomElement('li', { className: 'task' });
  const taskCheckbox = createDomElement('input', {
    className: 'task_checkbox',
    type: 'checkbox',
  });
  const taskLabel = createDomElement('label', {
    className: 'task_label',
    text: taskText,
  });
  const taskEditInput = createDomElement('input', {
    className: 'task_edit_input',
    type: 'text',
  });
  const taskEditButton = createDomElement('button', {
    className: 'task_edit_button',
    type: 'button',
    text: 'Edit',
  });
  const taskDeleteButton = createDomElement('button', {
    className: 'task_delete_button',
    type: 'button',
  });
  const deleteIcon = createDomElement('img');

  deleteIcon.src = './remove.svg';
  deleteIcon.alt = '';
  taskDeleteButton.appendChild(deleteIcon);

  taskItem.appendChild(taskCheckbox);
  taskItem.appendChild(taskLabel);
  taskItem.appendChild(taskEditInput);
  taskItem.appendChild(taskEditButton);
  taskItem.appendChild(taskDeleteButton);
  return taskItem;
};

const addTask = function () {
  // Ignore empty names to enforce the task input rule.
  if (!newTaskInput.value) return;
  const taskItem = createTaskElement(newTaskInput.value);

  todoList.appendChild(taskItem);
  bindTaskControls(taskItem);

  newTaskInput.value = '';
};

const toggleTaskEditing = function () {
  const taskItem = this.parentNode;

  const taskEditInput = taskItem.querySelector('.task_edit_input');
  const taskLabel = taskItem.querySelector('.task_label');
  const taskEditButton = taskItem.querySelector('.task_edit_button');
  const isEditing = taskItem.classList.contains('task_editing');
  if (isEditing) {
    taskLabel.innerText = taskEditInput.value;
    taskEditButton.innerText = 'Edit';
  } else {
    taskEditInput.value = taskLabel.innerText;
    taskEditButton.innerText = 'Save';
  }

  taskItem.classList.toggle('task_editing');
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

const bindTaskControls = function (taskItem) {
  const taskCheckbox = taskItem.querySelector('.task_checkbox');
  const taskEditButton = taskItem.querySelector('.task_edit_button');
  const taskDeleteButton = taskItem.querySelector('.task_delete_button');

  taskEditButton.onclick = toggleTaskEditing;
  taskDeleteButton.onclick = deleteTask;
  taskCheckbox.onchange = moveTaskByCompletionStatus;
};

for (let taskIndex = 0; taskIndex < todoList.children.length; taskIndex++) {
  bindTaskControls(todoList.children[taskIndex]);
}

for (
  let taskIndex = 0;
  taskIndex < completedList.children.length;
  taskIndex++
) {
  bindTaskControls(completedList.children[taskIndex]);
}
