const baseUrl = 'https://6151af974a5f22001701d380.mockapi.io/p1/tasks';

export const createTask = taskData =>
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(taskData),
  }).then(response => {
    if (!response.ok) {
      throw new Error('Failed to create task');
    }
  });

export const fetchTasks = () =>
  fetch(baseUrl)
    .then(res => {
      if (res.ok) {
        return res.json();
      }

      throw new Error();
    })
    .then(tasksList => tasksList.map(({ _id, ...task }) => ({ id: _id, ...task })));

export const updateTask = (taskData, taskId) =>
  fetch(`${baseUrl}/${taskId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(taskData),
  }).then(response => {
    if (!response.ok) {
      throw new Error('Failed to opdate task');
    }
  });

export const deleteTask = taskId =>
  fetch(`${baseUrl}/${taskId}`, {
    method: 'DELETE',
  }).then(response => {
    if (!response.ok) {
      throw new Error('Failed to delete task');
    }
  });
