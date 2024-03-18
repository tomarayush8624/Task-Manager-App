import React, { useState } from "react";
import styles from "./Note.module.css";
import delIcon from "../../../assets/delete.png";

function Note(props) {
  const [noteText, setNoteText] = useState(props.note.text);

  const formatDate = (value) => {
    if (!value) return "";

    const date = new Date(value);
    const monthNames = [
      "jan",
      "Feb",
      "March",
      "April",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];

    let hrs = date.getHours();
    let amPm = hrs > 12 ? "PM" : "AM";
    hrs = hrs ? hrs : "12";
    hrs = hrs > 12 ? hrs - 12 : hrs;

    let min = date.getMinutes();
    min = min < 10 ? "0" + min : min;

    let month = monthNames[date.getMonth()];

    let day = date.getDate();

    return `${hrs}:${min} ${amPm} ${day} ${month}`;
  };

  const handleTextChange = (event) => {
    const newText = event.target.value;
    setNoteText(newText);
    props.updateTextNote(props.note.id, newText);
  };

  return (
    <div className={styles.note} style={{ backgroundColor: props.note.color }}>
      <textarea
        className={styles.noteText}
        value={noteText}
        onChange={handleTextChange}
        spellCheck="false"
      />
      <div className={styles.noteFooter}>
        <p>{formatDate(props.note.time)}</p>
        <img
          src={delIcon}
          alt="delete the note"
          onClick={() => props.deleteNote(props.note.id)}
        />
      </div>
    </div>
  );
}

export default Note;
