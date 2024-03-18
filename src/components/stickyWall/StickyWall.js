import { useState, useEffect } from "react";

import NoteContainer from "./NoteContainer/NoteContainer";
import Styles from "./StickyWall.module.css";

const StickyWall = () => {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes
      ? JSON.parse(savedNotes)
      : [
          {
            id: Date.now() + "" + Math.floor(Math.random() * 78),
            text: "ayush",
            time: 1710065744748,
            color: "cyan",
          },
        ];
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNotes = () => {
    const newNote = {
      id: Date.now() + "" + Math.floor(Math.random() * 78),
      text: "",
      time: Date.now(),
      color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
    };

    const updatedNotes = [newNote, ...notes];

    setNotes(updatedNotes);
  };

  const deleteNote = (id) => {
    const tempNotes = [...notes];
    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;

    tempNotes.splice(index, 1);
    setNotes(tempNotes);
  };

  const updateTextNote = (id, newNote) => {
    const tempNotes = notes.map((note) => {
      if (note.id === id) {
        return {
          ...note,
          text: newNote,
          time: Date.now(),
        };
      }
      return note;
    });
    setNotes(tempNotes);
  };

  return (
    <div className={`${Styles.StickyWall} ${Styles.customScroll}`}>
      <NoteContainer
        notes={notes}
        addNote={addNotes}
        deleteNote={deleteNote}
        updateTextNote={updateTextNote}
      />
    </div>
  );
};

export default StickyWall;
