import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [currentTasks,setCurrentTasks]=useState(TASKS);
  const [classSelector,setClassSelector]=useState("All");
  function deleteTask(taskText) {
    console.log(taskText);
    const taskList = currentTasks.filter((task)=> task.text !== taskText);
    console.log(taskList);
    setCurrentTasks(taskList);
  }
  function categorySwitcher(catName) {
    console.log(catName);
    setClassSelector(catName);
  }
  function taskSubmit(newTask) {
    console.log(newTask);
    setCurrentTasks([...currentTasks, newTask])
  }
  const taskList = currentTasks.filter((task)=> task.category === classSelector || classSelector === "All");
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} classSelector={classSelector} catHandler={categorySwitcher}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={taskSubmit}/>
      <TaskList tasks={taskList} deleteTask={deleteTask}/>
    </div>
  );
}

export default App;
