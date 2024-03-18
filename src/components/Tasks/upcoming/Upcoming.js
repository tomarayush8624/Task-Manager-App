import Tomorrow from "./Tomorrow";
import ThisWeek from "./ThisWeek";

import plusIcon from "../../../assets/plusIcon.png";
import styles from "./Upcoming.module.css";

const Upcoming = (props) => {
  const todayTasks = () => {
    const temp = [...props.allTasks];

    const updatedTasks = temp.filter(
      (task) => task.dueDate <= new Date().toJSON().slice(0, 10)
    );
    return updatedTasks;
  };

  return (
    <>
      <div className={styles.container}>
        <span className={styles.mainHeading}>Upcoming</span>

        <div className={styles.todaySection}>
          <p className={styles.todayHeading}>Today</p>
          <div className={styles.addNewTask} onClick={props.addNewTask}>
            <img src={plusIcon} alt="Add New Task" />
            <p>Add New Task</p>
          </div>
          <ul className={styles.upcomingList}>
            {todayTasks().map((todayItems, index) => (
              <li key={todayItems.id}>
                <input
                  type="checkbox"
                  id={`todayGoals${index}`}
                  onChange={() => {
                    props.updateAllTasksDel(todayItems);
                  }}
                />
                <label
                  className={styles.upcomingListItems}
                  onClick={() =>
                    props.sideActionClickHandler(
                      todayItems,
                      !props.tomorrowSideAction.isOpen
                    )
                  }
                >
                  {todayItems.goal}
                  <hr />
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Tomorrow
          allTasks={props.allTasks}
          onSave={props.updateAllTasksAdd}
          onDel={props.updateAllTasksDel}
          tomorrowSideAction={props.tomorrowSideAction}
          updateAllTasks={props.updateAllTasks}
          sideActionClickHandler={props.sideActionClickHandler}
          addNewTask={props.addNewTask}
        />
        <ThisWeek
          allTasks={props.allTasks}
          onSave={props.updateAllTasksAdd}
          onDel={props.updateAllTasksDel}
          tomorrowSideAction={props.tomorrowSideAction}
          sideActionClickHandler={props.sideActionClickHandler}
          addNewTask={props.addNewTask}
        />
      </div>
    </>
  );
};

export default Upcoming;
