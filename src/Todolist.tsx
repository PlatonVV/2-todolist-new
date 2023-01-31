import React, { useState } from "react";
import { FilterButtonNameType } from "./App";

type TaskType = {
  id: number;
  title: string;
  isDone: boolean;
};

type PropsType = {
  title: string;
  tasks: Array<TaskType>;
  removeTask: (tasksId: number) => void;
  // filterCurrentTask: (buttonName: FilterButtonNameType) => void;
};

export function Todolist(props: PropsType) {
  let [filterButtonTask, setFilterButtonTask] =
    useState<FilterButtonNameType>("All");
  let tasks = props.tasks;

  if (filterButtonTask === "Active") {
    tasks = props.tasks.filter((d) => !d.isDone);
  }
  if (filterButtonTask === "Completed") {
    tasks = props.tasks.filter((d) => d.isDone);
  }

  const filterCurrentTask = (buttonName: FilterButtonNameType) => {
    setFilterButtonTask(buttonName);
  };

  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <input />
        <button>+</button>
      </div>
      <ul>
        {tasks.map((t) => {
          return (
            <li key={t.id}>
              <button onClick={() => props.removeTask(t.id)}>X</button>
              <input type="checkbox" checked={t.isDone} />
              <span>{t.title}</span>
            </li>
          );
        })}
      </ul>
      <div>
        <button onClick={() => filterCurrentTask("All")}>All</button>
        <button onClick={() => filterCurrentTask("Active")}>Active</button>
        <button onClick={() => filterCurrentTask("Completed")}>
          Completed
        </button>
      </div>
    </div>
  );
}
