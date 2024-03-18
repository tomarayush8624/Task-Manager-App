// import { useState } from "react";

import Tasks from "./Components/Tasks";
import Lists from "./Components/Lists";
import Tags from "./Components/Tags";

import styles from "./SideBar.module.css";

const Menu = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.upperSection}>
        <p className={styles.mainHeading}>Menu</p>
        <input
          className={styles.mainSearch}
          placeholder={"Search"}
          type="search"
        />
        <Tasks setFunction={props.setFunction} />
        <hr />
        <Lists
          listItems={props.listItems}
          updateListItems={props.updateListItems}
        />
        <hr />
        <Tags />
      </div>
    </div>
  );
};

export default Menu;
