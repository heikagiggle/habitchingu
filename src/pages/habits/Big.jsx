/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./Big.css";
import TaskForm from "./TaskForm";
import TaskColumn from "./TaskColumn";
import todoIcon from "/direct-hit.png";
import doingIcon from "/glowing-star.png";
import doneIcon from "/check-mark-button.png";
import Header from "../../components/header/Header";

const oldTasks = localStorage.getItem("tasks");
console.log(oldTasks);

function Big() {
  useEffect(() => {
    document.title = 'Habit';
  }, []);
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTasks);
  };

  return (
    <>
      <Header />
      <div>
        <h1 className="lg:text-[30px] text-center items-center m-9 primaryText">Record your habits daily</h1>
        <p className="lg:text-center text-left font-bold px-4 pb-4">Get rid of your bad habits today and embrace new ones for healthy living</p>
        <p className="lg:text-center text-left font-bold px-4">Examples of bad habits include bad slurs, cursings, fights, bulimic eating etc</p>
      </div>

      <div className="app">
        <TaskForm setTasks={setTasks} />
        <main className="app_main">
          <TaskColumn
            title="Bad habit"
            icon={todoIcon}
            tasks={tasks}
            status="todo"
            handleDelete={handleDelete}
          />
          <TaskColumn
            title="Work in progress"
            icon={doingIcon}
            tasks={tasks}
            status="doing"
            handleDelete={handleDelete}
          />
          <TaskColumn
            title="Changed"
            icon={doneIcon}
            tasks={tasks}
            status="done"
            handleDelete={handleDelete}
          />
        </main>
      </div>
    </>
  );
}

export default Big;
