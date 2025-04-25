
import React from 'react';
import { Task } from '../types';

interface TaskItemProps {
  task: Task;
  toggleCompletion: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, toggleCompletion }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={task.isCompleted}
        onChange={() => toggleCompletion(task.id)}
      />
      <span>{task.description}</span> - <strong>{task.priority}</strong>
    </li>
  );
};

export default TaskItem;
