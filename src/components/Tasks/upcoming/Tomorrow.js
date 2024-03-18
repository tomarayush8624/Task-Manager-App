import React from "react";
import SideAction from "../../sideAction/SideAction";

import plusIcon from "../../../assets/plusIcon.png";
import styles from "./Tomorrow.module.css";

const Tomorrow = (props) => {
  const tomorrowTasks = () => {
    const temp = [...props.allTasks];

    const tomorrowDate = new Date();
    tomorrowDate.setDate(tomorrowDate.getDate() + 1);

    const updatedTasks = temp.filter((task) => {
      return (
        new Date(task.dueDate).toDateString() === tomorrowDate.toDateString()
      );
    });
    return updatedTasks;
  };

  return (
    <div className={styles.container}>
      <p className={styles.mainHeading}>Tomorrow</p>

      <div className={styles.addNewTask} onClick={props.addNewTask}>
        <img src={plusIcon} alt="Add New Task" />
        <p>Add New Task</p>
      </div>
      <ul className={styles.tomorrowList}>
        {tomorrowTasks().map((tomorrowItem, index) => (
          <li key={tomorrowItem.id}>
            <input
              type="checkbox"
              id={`tomorrowGoals${index}`}
              onChange={() => {
                props.onDel(tomorrowItem);
              }}
            />
            <label
              className={styles.tomorrowListItems}
              onClick={() =>
                props.sideActionClickHandler(
                  tomorrowItem,
                  !props.tomorrowSideAction.isOpen
                )
              }
            >
              {tomorrowItem.goal}
              <hr />
            </label>
          </li>
        ))}
      </ul>
      {props.tomorrowSideAction.isOpen && (
        <SideAction
          task={props.tomorrowSideAction}
          onSave={props.onSave}
          setTomorrowSideAction={props.setTomorrowSideAction}
          onDel={props.onDel}
          sideActionClickHandler={props.sideActionClickHandler}
          tomorrowSideAction={props.tomorrowSideAction}
        />
      )}
    </div>
  );
};

export default Tomorrow;
