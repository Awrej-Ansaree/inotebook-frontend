import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";
import NoteForm from "./NoteForm";

export default function AddNote() {
  const { addNote } = useContext(noteContext);
  const [note, setNote] = useState({ title: "", tag: "", description: "" });
  const modalId = "addNoteModal";
  const handleOnSubmit = () => {
    addNote(note.title, note.tag, note.description);
  };
  const handleOnChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <>
      <NoteForm
        modalId={modalId}
        modalTitle="New Note"
        handleOnSubmit={handleOnSubmit}
        handleOnChange={handleOnChange}
        submitBtnName="Add Note"
      />
      <button
        type="button"
        className="btn btn-primary shadow"
        style={{ position: "fixed", bottom: 10 + "px", right: 10 + "px", zIndex: "1000" }}
        data-bs-toggle="modal"
        data-bs-target={"#" + modalId}
      >
        <i className="fa-solid fa-plus"></i>
      </button>
    </>
  );
}
