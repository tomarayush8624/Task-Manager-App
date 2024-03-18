import React from "react";

import SideAction from "../../sideAction/SideAction";

import plusIcon from "../../../assets/plusIcon.png";
import styles from "./ThisWeek.module.css";

const ThisWeek = (props) => {
  // const thisWeekTasks = [...props.allTasks];

  const thisWeekTasks = () => {
    const temp = [...props.allTasks];

    const tomorrowDate = new Date();
    tomorrowDate.setDate(tomorrowDate.getDate() + 1);

    const updatedTasks = temp.filter((task) => {
      return (
        new Date(task.dueDate).toDateString() > tomorrowDate.toDateString()
      );
    });
    return updatedTasks;
  };

  return (
    <div className={styles.container}>
      <p className={styles.mainHeading}>This Week</p>
      <div className={styles.addNewTask} onClick={props.addNewTask}>
        <img src={plusIcon} alt="Add New Task" />
        <p>Add New Task</p>
      </div>

      <ul className={styles.thisWeekItem}>
        {thisWeekTasks().map((thisWeekItem, index) => (
          <React.Fragment>
            <li key={thisWeekItem.id} className={styles.thisWeekList}>
              <input
                type="checkbox"
                id={`thisWeekGoals${index}`}
                onChange={() => {
                  props.onDel(thisWeekItem);
                }}
              />
              <label
                className={styles.thisWeekListItems}
                onClick={() =>
                  props.sideActionClickHandler(
                    thisWeekItem,
                    !props.tomorrowSideAction.isOpen
                  )
                }
              >
                {thisWeekItem.goal}
                <hr />
              </label>
            </li>

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
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default ThisWeek;
