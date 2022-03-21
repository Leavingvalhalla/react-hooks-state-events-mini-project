import React from 'react';
import Task from './Task';

function TaskList({ tasks, handleDeleteTask, selectedCategory }) {
  return (
    <div className="tasks">
      {tasks
        .filter(
          (task) =>
            selectedCategory === 'All' || task.category === selectedCategory
        )
        .map((task) => (
          <Task
            handleDeleteTask={handleDeleteTask}
            key={task.text}
            text={task.text}
            category={task.category}
          />
        ))}
    </div>
  );
}

export default TaskList;
