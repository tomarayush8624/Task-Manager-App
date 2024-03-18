import { useState, useEffect, useRef } from "react";
import styles from "./SideAction.module.css";

const SideAction = (props) => {
  const [task, setTask] = useState(props.task.currentTask.goal);
  const [description, setDescription] = useState(
    props.task.currentTask.description
  );
  const [dueDate, setDueDate] = useState(props.task.currentTask.dueDate);

  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target) &&
        event.target.className !== styles.saveChanges &&
        event.target.closest(`.${styles.container}`) === null
      ) {
        props.sideActionClickHandler({ task, isOpen: false });
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [props.task, props.setTomorrowSideAction]);

  const handleTaskChange = (event) => {
    setTask(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleDateChange = (event) => {
    console.log(event.target.value);
    setDueDate(event.target.value);
  };

  const closeSideBar = () => {
    props.sideActionClickHandler(task, !props.tomorrowSideAction.isOpen);
  };

  const saveChanges = () => {
    props.onSave({
      ...props.task.currentTask,
      goal: task,
      description: description,
      dueDate: dueDate,
    });

    closeSideBar();
  };

  const onDeleteTask = () => {
    props.onDel(props.task.currentTask);
    closeSideBar();
  };

  return (
    <div
      className={styles.container}
      style={{ right: props.task.isOpen ? "1vw" : "-50vw" }}
    >
      <div className={styles.containerItems} ref={containerRef}>
        <h1 className={styles.heading}>Task: </h1>

        <input
          type="text"
          className={styles.Task}
          placeholder={props.task.currentTask.goal}
          spellCheck="false"
          onChange={handleTaskChange}
        />

        <input
          type="text"
          className={styles.taskDescription}
          placeholder={props.task.currentTask.description}
          spellCheck="false"
          onChange={handleDescriptionChange}
        />
        <div className={styles.list}>
          <p>List</p>
          <select name="list" className={styles.listItems}>
            <option value="Personal">Personal</option>
            <option value="Work">Work</option>
            <option value="List1">List 1</option>
            <option value="List2">List 2</option>
          </select>
        </div>

        <div className={`${styles.dueDate} `}>
          <p>Due date</p>
          <input value={dueDate} type="date" onChange={handleDateChange} />
          {/* <DatePicker placeholder="" label="Birthday" width={300} /> */}
        </div>

        <div className={styles.tags}>
          <p>Tags</p>
          <div className={styles.allTags}>
            <div className={styles.item}>Tag 1</div>
          </div>
        </div>

        <div className={styles.footer}>
          <p className={styles.deleteButton} onClick={onDeleteTask}>
            Delete Task
          </p>
          <p className={styles.saveChanges} onClick={saveChanges}>
            Save Changes
          </p>
        </div>
      </div>
    </div>
  );
};

export default SideAction;
