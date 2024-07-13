import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

export default function NoteItem(props) {
  const { deleteNote } = useContext(noteContext);
  const { note } = props;
  return (
    <div>
      <div className="col h-100">
        <div className="card shadow border-0 h-100 px-3 py-3">
          <div className="d-flex align-items-center justify-content-between">
            <span className="note-tag bg-primary"> {note.tag} </span>
            <div className="btn-group">
              <button type="button" className="btn">
                <i className="far fa-pen-to-square"></i>
              </button>
              <button
                type="button"
                className="btn"
                onClick={() => {
                  deleteNote(note._id);
                }}
              >
                <i className="fas fa-trash"></i>
              </button>
            </div>
          </div>
          <div className="card-body">
            <h5 className="card-title">{note.title}</h5>
            <p className="card-text">{note.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
