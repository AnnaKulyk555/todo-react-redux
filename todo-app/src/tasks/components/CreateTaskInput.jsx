import React, { useState } from 'react';
import propTypes from 'prop-types';

const CreateTaskInput = ({ onCreate }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = e => {
    setInputValue(e.target.value);
  };

  const handleCreate = () => {
    onCreate(inputValue);
    setInputValue('');
  };

  return (
    <div className="create-task">
      <input
        className="create-task__input"
        type="text"
        onChange={handleChange}
        value={inputValue}
      />
      <button className="btn create-task__btn" onClick={handleCreate}>
        Create
      </button>
    </div>
  );
};

CreateTaskInput.propTypes = {
  onCreate: propTypes.func.isRequired,
};

export default CreateTaskInput;
