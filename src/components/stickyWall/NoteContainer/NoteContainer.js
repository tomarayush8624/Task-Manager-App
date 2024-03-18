import React from "react";
import Note from "../Note/Note";
import plusIcon from "../../../assets/plusIcon.png";
import styles from "./NoteContianer.module.css";

const NoteContainer = (props) => {
  return (
    <div className={styles.noteContainer}>
      <h1>Sticky Wall</h1>
      <div className={`${styles.noteContinerNotes} ${styles.customScroll}`}>
        {props.notes.map((item) => (
          <Note
            key={item.id}
            note={item}
            deleteNote={props.deleteNote}
            updateTextNote={props.updateTextNote}
          />
        ))}

        {/* Add new notes button */}
        <div
          className={styles.AddNote}
          onClick={() => {
            props.addNote();
          }}
        >
          <img src={plusIcon} alt="Add new note" />
        </div>
      </div>
    </div>
  );
};

export default NoteContainer;
