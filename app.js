const newTaskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task');
const todoList = document.getElementById('incompleteTasks');
const completedList = document.getElementById('completed-tasks');

const createElement = function (
  elementTag,
  elementClass = '',
  elementText = '',
) {
  const element = document.createElement(elementTag);
  element.className = elementClass;
  if (elementText) element.innerText = elementText;
  return element;
};

const createTaskElement = function (taskText) {
  const taskItem = createElement('li', 'task');
  const checkbox = createElement('input', 'task_checkbox');
  const taskLabel = createElement('label', 'task_label', taskText);
  const taskEditInput = createElement('input', 'task_input');
  const taskEditButton = createElement('button', 'task_edit', 'Edit');
  const deleteButton = createElement('button', 'task_delete');
  const deleteIcon = createElement('img');

  checkbox.type = 'checkbox';
  taskEditInput.type = 'text';
  deleteIcon.src = './remove.svg';
  deleteButton.appendChild(deleteIcon);

  taskItem.append(
    checkbox,
    taskLabel,
    taskEditInput,
    taskEditButton,
    deleteButton,
  );
  return taskItem;
};

const addTask = function () {
  // Skip empty input so blank tasks are not added.
  if (!newTaskInput.value) return;
  const taskItem = createTaskElement(newTaskInput.value);

  todoList.appendChild(taskItem);
  bindTaskEventHandlers(taskItem, moveTaskToCompleted);

  newTaskInput.value = '';
};

const editTask = function () {
  const taskItem = this.parentNode;

  const taskEditInput = taskItem.querySelector('.task_input');
  const taskLabel = taskItem.querySelector('.task_label');
  const editButton = taskItem.querySelector('.task_edit');
  const isEditing = taskItem.classList.contains('task_editing');
  if (isEditing) {
    taskLabel.innerText = taskEditInput.value;
    editButton.innerText = 'Edit';
  } else {
    taskEditInput.value = taskLabel.innerText;
    editButton.innerText = 'Save';
  }

  taskItem.classList.toggle('task_editing');
};

const deleteTask = function () {
  const taskItem = this.parentNode;
  const taskList = taskItem.parentNode;
  taskList.removeChild(taskItem);
};

const moveTaskToCompleted = function () {
  const taskItem = this.parentNode;
  completedList.appendChild(taskItem);
  bindTaskEventHandlers(taskItem, moveTaskToTodo);
};

const moveTaskToTodo = function () {
  const taskItem = this.parentNode;
  todoList.appendChild(taskItem);
  bindTaskEventHandlers(taskItem, moveTaskToCompleted);
};

addTaskButton.addEventListener('click', addTask);

const bindTaskEventHandlers = function (taskItem, checkboxChangeHandler) {
  const checkbox = taskItem.querySelector('.task_checkbox');
  const editButton = taskItem.querySelector('.task_edit');
  const deleteButton = taskItem.querySelector('.task_delete');

  editButton.onclick = editTask;
  deleteButton.onclick = deleteTask;
  checkbox.onchange = checkboxChangeHandler;
};

for (let taskIndex = 0; taskIndex < todoList.children.length; taskIndex++) {
  bindTaskEventHandlers(todoList.children[taskIndex], moveTaskToCompleted);
}

for (
  let taskIndex = 0;
  taskIndex < completedList.children.length;
  taskIndex++
) {
  bindTaskEventHandlers(completedList.children[taskIndex], moveTaskToTodo);
}
