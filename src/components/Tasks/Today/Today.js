import React from "react";

import SideAction from "../../sideAction/SideAction";

import plusIcon from "../../../assets/plusIcon.png";
import styles from "./Today.module.css";

const Today = (props) => {
  const todayTasks = () => {
    const temp = [...props.allTasks];

    const updatedTasks = temp.filter(
      (task) => task.dueDate <= new Date().toJSON().slice(0, 10)
    );
    return updatedTasks;
  };

  return (
    <div className={styles.todayBox}>
      <h1>Today</h1>
      <div className={styles.addNewTask} onClick={props.addNewTask}>
        <img src={plusIcon} alt="Add New Task" />
        <p>Add New Task</p>
      </div>

      <ul style={{ padding: "0px", listStyleType: "none" }}>
        <React.Fragment>
          {todayTasks().map((todayItem, index) => (
            <li key={index}>
              <input
                type="checkbox"
                id={`todayGoals${index}`}
                onChange={() => {
                  props.updateAllTasksDel(todayItem);
                }}
              />
              <label
                onClick={() =>
                  props.sideActionClickHandler(
                    todayItem,
                    !props.tomorrowSideAction.isOpen
                  )
                }
              >
                {todayItem.goal}
                <hr />
              </label>
            </li>
          ))}

          {props.tomorrowSideAction.isOpen && (
            <SideAction
              task={props.tomorrowSideAction}
              onSave={props.updateAllTasksAdd}
              setTomorrowSideAction={props.setTomorrowSideAction}
              onDel={props.updateAllTasksDel}
              tomorrowSideAction={props.tomorrowSideAction}
              sideActionClickHandler={props.sideActionClickHandler}
            />
          )}
        </React.Fragment>
      </ul>
    </div>
  );
};

export default Today;
