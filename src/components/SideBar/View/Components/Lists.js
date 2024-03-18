import { useState } from "react";

import plusIcon from "../../../../assets/plusIcon.png";
import styles from "./Lists.module.css";

const Lists = (props) => {
  const addNewListItem = () => {
    // const newItem
    // props.updateListItems
  };

  return (
    <>
      <p className={styles.heading}>Lists</p>
      <ul style={{ padding: "0px", marginBottom: "0px" }}>
        {props.listItems.map((listItem, index) => (
          <li key={index} className={`${styles.item} ${styles.item1}`}>
            <div
              className={styles.colorbox}
              style={{
                backgroundColor: listItem.color,
              }}
            />
            {listItem.item}
          </li>
        ))}
      </ul>
      <div className={styles.addNewItem}>
        <div className={styles.addNewTask}>
          <img src={plusIcon} alt="Add New List" />
          <input type="text" placeholder="Add New List" />
        </div>
      </div>
    </>
  );
};

export default Lists;
