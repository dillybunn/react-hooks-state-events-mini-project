import { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [tasks, setTasks] = useState(TASKS);

  const deleteTask = (task) => {
    setTasks(tasks.filter((t) => t !== task));
  };

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const filteredTasks =
    selectedCategory === "All"
      ? tasks
      : tasks.filter((task) => {
          return task.category === selectedCategory;
        });
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <NewTaskForm
        categories={CATEGORIES.slice(1)}
        onTaskFormSubmit={addTask}
      />
      <TaskList tasks={filteredTasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
