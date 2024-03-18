import { useState } from "react";

import SideBar from "../View/SideBar";
import Upcoming from "../../Tasks/upcoming/Upcoming";
import Today from "../../Tasks/Today/Today";
import StickyWall from "../../stickyWall/StickyWall";

import styles from "./Functionality.module.css";

const MainPage = (props) => {
  const [CurrentPage, SetCurrentPage] = useState("upcoming");

  //Side Action
  const [tomorrowSideAction, setTomorrowSideAction] = useState({
    isOpen: false,
    currentTask: props.allTasks[0],
  });

  const sideActionClickHandler = (task, currState) => {
    setTomorrowSideAction({
      isOpen: currState,
      currentTask: task,
    });
  };

  const updateAllTasksAdd = (updatedTask) => {
    const updatedTasks = props.allTasks.map((task) => {
      if (task.id === updatedTask.id) {
        return {
          ...task,
          goal: updatedTask.goal,
          description: updatedTask.description,
          dueDate: updatedTask.dueDate,
        };
      }
      return task;
    });
    props.updateAllTasks(updatedTasks);
  };

  const updateAllTasksDel = (updatedTask) => {
    const updatedTasks = props.allTasks.filter(
      (task) => task.id !== updatedTask.id
    );
    props.updateAllTasks(updatedTasks);
  };

  // Add New Task

  const addNewTask = () => {
    const temp = {
      goal: "New Task",
      description: "Description",
      dueDate: new Date().toJSON().slice(0, 10),
      date: Date.now(),
      id: Date.now() + "" + Math.floor(Math.random() * 78),
    };

    const updatedTasks = [...props.allTasks, temp];

    props.updateAllTasks(updatedTasks);

    setTomorrowSideAction({
      isOpen: true,
      currentTask: temp,
    });
  };

  return (
    <div className={styles.container}>
      <SideBar
        setFunction={SetCurrentPage}
        listItems={props.listItems}
        updateListItems={props.updateListItems}
      />
      <div>
        {CurrentPage === "upcoming" ? (
          <div>
            {
              <Upcoming
                updateAllTasks={props.updateAllTasks}
                allTasks={props.allTasks}
                tomorrowSideAction={tomorrowSideAction}
                sideActionClickHandler={sideActionClickHandler}
                updateAllTasksAdd={updateAllTasksAdd}
                updateAllTasksDel={updateAllTasksDel}
                addNewTask={addNewTask}
              />
            }
          </div>
        ) : CurrentPage === "today" ? (
          <div>
            {
              <Today
                allTasks={props.allTasks}
                tomorrowSideAction={tomorrowSideAction}
                sideActionClickHandler={sideActionClickHandler}
                updateAllTasksAdd={updateAllTasksAdd}
                updateAllTasksDel={updateAllTasksDel}
                addNewTask={addNewTask}
              />
            }{" "}
          </div>
        ) : CurrentPage === "calendar" ? (
          <div>calendar</div>
        ) : CurrentPage === "stickyWall" ? (
          <div>{<StickyWall />}</div>
        ) : (
          <div>somethign else0</div>
        )}
      </div>
    </div>
  );
};

export default MainPage;
