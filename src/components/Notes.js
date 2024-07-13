import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";

export default function Notes() {
  const { notes, setNotes } = useContext(noteContext);
  return (
    <div className="user-notes mt-5">
      <h2>Your Notes</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {notes.map((note) => {
          return <NoteItem key={note._id} note={note} />;
        })}
      </div>
    </div>
  );
}
