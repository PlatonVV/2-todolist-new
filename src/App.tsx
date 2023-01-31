import React, { useState } from "react";
import "./App.css";
import { Todolist } from "./Todolist";

export type FilterButtonNameType = "All" | "Active" | "Completed";

function App() {
  let [tasks1, setTasks] = useState([
    { id: 1, title: "HTML&CSS", isDone: true },
    { id: 2, title: "JS", isDone: true },
    { id: 3, title: "ReactJS", isDone: false },
    { id: 4, title: "AngularJS", isDone: false },
  ]);

  const removeTask = (tasksId: number) => {
    setTasks(tasks1.filter((t) => t.id !== tasksId));
  };
  // let [filterButtonTask, setFilterButtonTask] =
  //   useState<FilterButtonNameType>("All");
  //
  // let drushlaq = tasks1;
  //
  // if (filterButtonTask === "Active") {
  //   drushlaq = tasks1.filter((d) => !d.isDone);
  // }
  // if (filterButtonTask === "Completed") {
  //   drushlaq = tasks1.filter((d) => d.isDone);
  // }
  //
  // const filterCurrentTask = (buttonName: FilterButtonNameType) => {
  //   setFilterButtonTask(buttonName);
  // };

  return (
    <div className="App">
      <Todolist title="What to learn" removeTask={removeTask} tasks={tasks1} />
    </div>
  );
}

export default App;
