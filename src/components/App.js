import React, { useState } from 'react';
import CategoryFilter from './CategoryFilter';
import NewTaskForm from './NewTaskForm';
import TaskList from './TaskList';

import { CATEGORIES, TASKS } from '../data';

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState('All');

  function handleDeleteTask(taskToDelete) {
    const newTasks = tasks.filter((task) => task.text !== taskToDelete);
    setTasks(newTasks);
  }

  function handleChangeCategory(currentCategory) {
    console.log(currentCategory);
    currentCategory.className = 'selected';
    setSelectedCategory(currentCategory.innerHTML);
  }

  function onTaskFormSubmit(newTask) {
    setTasks([...tasks, newTask]);
  }

  const filteredTasks = tasks.filter(
    (task) => selectedCategory === 'All' || task.category === selectedCategory
  );

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        handleChangeCategory={handleChangeCategory}
      />
      <NewTaskForm
        onTaskFormSubmit={onTaskFormSubmit}
        categories={CATEGORIES}
      />
      <TaskList handleDeleteTask={handleDeleteTask} tasks={filteredTasks} />
    </div>
  );
}

export default App;
