import { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const initialData = { text: "", category: "Code" };
  const [newTask, setNewTask] = useState(initialData);

  const handleChange = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setTask((tasks) => [...tasks, newTask]);
    onTaskFormSubmit(newTask);
    console.log(newTask);
    setNewTask(initialData);
  };
  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input
          onChange={handleChange}
          value={newTask.text}
          type="text"
          name="text"
        />
      </label>
      <label>
        Category
        <select
          onChange={handleChange}
          value={newTask.category}
          name="category"
        >
          {categories.map((category) => (
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
