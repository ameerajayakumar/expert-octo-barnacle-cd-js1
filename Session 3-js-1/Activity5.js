let todoDB = [];

function addTodo(item, priority) {
  if (priority === 'high') {
    todoDB.unshift(item);
  } else todoDB.push(item);
}

function clearTodo(index) {
  todoDB[index] = null;
}

function updateTodo(index, newItem) {
  todoDB[index] = newItem;
}

function getTodo(index) {
  if (index) {
    return todoDB[index];
  } else return todoDB;
}
