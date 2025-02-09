import { useState } from "react";
import "./TaskForm.css";
import Tag from "./Tag";

const TaskForm = ({ setTasks }) => {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags: [],
  });

  const checkTag = (tag) => {
    return taskData.tags.some((item) => item === tag);
  };

  const selectTag = (tag) => {
    if (taskData.tags.some((item) => item === tag)) {
      const filterTags = taskData.tags.filter((item) => item !== tag);
      setTaskData((prev) => {
        return { ...prev, tags: filterTags };
      });
    } else {
      setTaskData((prev) => {
        return { ...prev, tags: [...prev.tags, tag] };
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskData);
    setTasks((prev) => {
      return [...prev, taskData];
    });
    setTaskData({
      task: "",
      status: "todo",
      tags: [],
    });
  };

  return (
    <header className="app_header">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          value={taskData.task}
          className="task_input"
          placeholder="Enter habit"
          onChange={handleChange}
        />
        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <div>
            <p className="md:py-1 py-2">Select habit category</p>
            <Tag
              tagName="Fair"
              selectTag={selectTag}
              selected={checkTag("Fair")}
            />
            <Tag
              tagName="Bad"
              selectTag={selectTag}
              selected={checkTag("Bad")}
            />
            <Tag
              tagName="Worse"
              selectTag={selectTag}
              selected={checkTag("Worse")}
            />
          </div>

          <div className="flex md:flex-row flex-col gap-x-5">
            <div>
              <p className="md:py-1 py-2">Select Status</p>
              <select
                name="status"
                value={taskData.status}
                className="task_status"
                onChange={handleChange}
              >
                <option value="todo">Habit</option>
                <option value="doing">In progress</option>
                <option value="done">Changed</option>
              </select>
            </div>
            <div>
              <p className="md:py-1 py-2">Now Add</p>
              <button type="submit" className="task_submit">
                + Add habit
              </button>
            </div>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
