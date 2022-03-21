import React, { useState } from 'react';

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [details, setDetails] = useState('');
  const [category, setCategory] = useState('Code');

  function handleSubmit(e) {
    e.preventDefault();
    onTaskFormSubmit({
      text: details,
      category: category,
    });
  }

  return (
    <form onSubmit={handleSubmit} className="new-task-form">
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
        <select onChange={(e) => setCategory(e.target.value)} name={category}>
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
