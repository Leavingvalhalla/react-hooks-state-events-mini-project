import React from 'react';
import Task from './TaskList';

function TaskList({ tasks }) {
  return (
    <div className="tasks">
      {/* {tasks.map((task) => console.log(task.category))} */}
      {tasks.map((task) => (
        <Task key={task.text} text={task.text} category={task.category} />
      ))}
    </div>
  );
}

export default TaskList;
