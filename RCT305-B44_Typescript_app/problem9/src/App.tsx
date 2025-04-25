

import "./App.css"

import React, { useState } from 'react';
import './App.css';
import { Task } from './types';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import FilterButtons from './components/FilterButtons';
import { Priority } from './types';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<'all' | 'completed' | 'incomplete'>('all');

  const addTask = (description: string, priority: Priority) => {
    const newTask: Task = {
      id: tasks.length + 1,
      description,
      priority,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTaskCompletion = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  const filteredTasks = () => {
    if (filter === 'completed') {
      return tasks.filter((task) => task.isCompleted);
    } else if (filter === 'incomplete') {
      return tasks.filter((task) => !task.isCompleted);
    }
    return tasks; // Show all tasks
  };

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <TaskForm addTask={addTask} />
      <FilterButtons setFilter={setFilter} />
      <TaskList tasks={filteredTasks()} toggleCompletion={toggleTaskCompletion} />
    </div>
  );
};

export default App;
