import styles from "./Tasks.module.css";

const Tasks = (props) => {
  return (
    <>
      <p className={styles.heading}>Tasks</p>
      <div className={styles.itemsList}>
        <div className={`${styles.item1} ${styles.item}`}>
          <img
            className={styles.icon}
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAtUlEQVR4nKWTPRIBQRBGH4lEYmOpmCNIhMRiToBUiCNwBhfgCi6xm8skJBRqqrrKjO02U/Zl8+qbn+rugQ9joOmtYz5gCbyAPVBL8CU6wEXCC8PPY68YAk/gAQwSvMpabjsDbc+vDF+iDhwkfAIaEa+SAbmEd55vGV6lC1wlPDX8hB/0gJsSTDogAwoJbb98rvgAV6xjlSJujHZZ7cVnJANzB/oJPsAaWd/PrM2Oyp/J8dd3fgOyK0bJkUHMoQAAAABJRU5ErkJggg=="
            alt="image1"
          ></img>
          <p onClick={() => props.setFunction("upcoming")}>Upcoming</p>
        </div>
        <div className={`${styles.item1} ${styles.item}`}>
          <img
            className={styles.icon}
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAYklEQVR4nGNgQAXMDAwM8xkYGBwYSAQVDAwMs6Ca/zMwMDxhYGBgJ1azHAMDw1eoRhD+yMDAYIam5j8eDAa2DAwMn6EG2TFgAoIGUA0wjwbiAIL/lMbtfwIGEExINDeAdgAAEjtP9zzcj/EAAAAASUVORK5CYII="
            alt="image1"
          ></img>{" "}
          <p onClick={() => props.setFunction("today")}>Today</p>
        </div>
        {/* <div className={`${styles.item1} ${styles.item}`}>
          <img
            className={styles.icon}
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAALUlEQVR4nGNgQAX/oRgXwCn/n0w8HA0gFgwxA/5jkR9iBmADtDPg/4ClRLIBAIgjgICxyl6rAAAAAElFTkSuQmCC"
            alt="image1"
          ></img>{" "}
          <p onClick={() => props.setFunction("calendar")}>Calendar</p>
          
        </div> */}
        <div className={`${styles.item4} ${styles.item}`}>
          <img
            className={styles.icon}
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAYUlEQVR4nGNgoAL4TyFmGDwGkApoZ8B/bM7EAlZQagAzAwPDYlK90ADFMMBCigENSGo7kCX+4/DCKpgNaJoxDPmPxQBCmkG4HpcBDDicjVUzIQMIasalCJcchmZSDMCqGQAX5IS+PEHVMwAAAABJRU5ErkJggg=="
            alt="image1"
          ></img>
          <p onClick={() => props.setFunction("stickyWall")}>Sticky Wall</p>
        </div>
      </div>
    </>
  );
};

export default Tasks;
