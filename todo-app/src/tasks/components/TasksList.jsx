import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Task from './Task';
import CreateTaskInput from './CreateTaskInput';
import * as tasksActions from '../tasks.actions';
import { sortedTasksListSelector } from '../tasks.selectors';

const TasksList = ({ tasks, getTasksList, createTasksList, updateTasksList, deleteTasksList }) => {
  useEffect(() => {
    getTasksList();
  }, []);

  return (
    <>
      <CreateTaskInput onCreate={createTasksList} />
      <ul className="list">
        {tasks.map(task => (
          <Task key={task.id} {...task} onChange={updateTasksList} onDelete={deleteTasksList} />
        ))}
      </ul>
    </>
  );
};

const mapState = state => ({
  tasks: sortedTasksListSelector(state),
});

const mapDispatch = {
  getTasksList: tasksActions.getTasksList,
  createTasksList: tasksActions.createTasksList,
  updateTasksList: tasksActions.updateTasksList,
  deleteTasksList: tasksActions.deleteTasksList,
};

TasksList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape),
  getTasksList: PropTypes.func.isRequired,
  createTasksList: PropTypes.func.isRequired,
  updateTasksList: PropTypes.func.isRequired,
  deleteTasksList: PropTypes.func.isRequired,
};

export default connect(mapState, mapDispatch)(TasksList);
