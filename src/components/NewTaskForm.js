import React, { useState } from 'react';

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [details, setDetails] = useState('');
  const [category, setCategory] = useState('Code');

  function handleSubmit(e) {
    e.preventDefault();
    const text = e.target[0].value;
    const category = e.target[1].value;

    const newTask = {
      text: text,
      category: category,
    };
    onTaskFormSubmit(newTask);
    // console.log(e);
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="new-task-form">
      <label>
        Details
        <input
          onChange={(e) => setDetails(e.target.value)}
          type="text"
          name={details}
        />
      </label>
      <label>
        Category
        <select onChange={setCategory} name={category}>
          {categories
            .filter((category) => category !== 'All')
            .map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
