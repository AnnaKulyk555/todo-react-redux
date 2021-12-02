import { createTask, deleteTask, fetchTasks, updateTask } from './tasks.gateway';
import { tasksListSelector } from './tasks.selectors';

export const TASKS_LIST_RECIEVED = 'TASKS_LIST_RECIEVED';

export const tasksListReceived = tasksList => ({
  type: TASKS_LIST_RECIEVED,
  payload: {
    tasksList,
  },
});

export const getTasksList = () => dispatch => {
  fetchTasks().then(tasksList => dispatch(tasksListReceived(tasksList)));
};

export const createTasksList = text => dispatch => {
  const newTask = {
    text,
    done: false,
  };

  createTask(newTask).then(() => dispatch(getTasksList()));
};

export const updateTasksList = taskId => (dispatch, getState) => {
  const state = getState();
  const tasks = tasksListSelector(state);
  const { done, text } = tasks.find(task => task.id === taskId);
  const updatedTasksList = {
    text,
    done: !done,
  };
  updateTask(updatedTasksList, taskId).then(() => dispatch(getTasksList()));
};

export const deleteTasksList = taskId => dispatch => {
  deleteTask(taskId).then(() => dispatch(getTasksList()));
};
