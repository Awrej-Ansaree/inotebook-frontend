import React, { useContext, useEffect, useState } from "react";
import noteContext from "../context/notes/noteContext";
import AddNote from "./AddNote";
import NoteItem from "./NoteItem";
import NoteForm from "./NoteForm";

export default function Notes() {
  const { notes, fetchAllNotes, editNote, showLogout } =
    useContext(noteContext);
  useEffect(() => {
    fetchAllNotes();
  }, [notes]);

  // Edit Note Feature
  const [note, setNote] = useState({ title: "", tag: "", description: "" });
  const modalId = "editNoteModal";
  const handleEditNote = (currentNote) => {
    setNote(currentNote);
  };

  const handleOnSubmit = () => {
    editNote(note._id, note.title, note.tag, note.description);
    console.log("updating");
  };

  const handleOnChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <div className="user-notes mt-5">
      <AddNote />
      <NoteForm
        modalId={modalId}
        modalTitle="Edit Note"
        noteTitle={note.title}
        noteTag={note.tag}
        noteDescription={note.description}
        handleOnSubmit={handleOnSubmit}
        handleOnChange={handleOnChange}
        submitBtnName="Update Note"
      />
      <h2>Your Notes</h2>

      {showLogout && Object.keys(notes).length === 0 && (
        <h3 className="text-center">Please add notes to display here.</h3>
      )}

      {showLogout && Object.keys(notes).length !== 0 && (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {notes.map((note) => {
            return (
              <NoteItem
                key={note._id}
                note={note}
                handleEditNote={handleEditNote}
                modalId={modalId}
              />
            );
          })}
        </div>
      )}

      {!showLogout && (
        <h3 className="text-center">
          Please Login or SignUp to get your Notes
        </h3>
      )}
    </div>
  );
}
