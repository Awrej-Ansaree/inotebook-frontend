import React, { useState } from "react";
import noteContext from "./noteContext";

export default function NoteState(props) {
  const host = "http://localhost:5000";

  const [notes, setNotes] = useState([]);

  const fetchAllNotes = async () => {
    // API Call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYzZDA4MjY1YjgyYzFiYmVmNWViYzBlIn0sImlhdCI6MTcxNTI3NTgxNH0.A0oyjG48AC3i0ENLLRfRK0E241uQ_pED_pjtVrA4clk",
      },
    });

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    setNotes(json);
  };

  // Add Note Function
  const addNote = async (title, tag, description) => {
    // API Call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYzZDA4MjY1YjgyYzFiYmVmNWViYzBlIn0sImlhdCI6MTcxNTI3NTgxNH0.A0oyjG48AC3i0ENLLRfRK0E241uQ_pED_pjtVrA4clk",
      },
      body: JSON.stringify({ title, tag, description }),
    });

    // Logic to add new note on client side
    console.log("Adding a new Note...");
    const note = {
      _id: "666dcae43118c36a98c4b5376",
      user: "663d08265b82c1bbef5ebc0e",
      title: title,
      tag: tag,
      description: description,
      date: "2024-06-15T17:09:56.295Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  // Delete Note Function
  const deleteNote = (id) => {
    // TODO: API Call
    console.log("Deleting the note with id: " + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  // Edit Note Function
  const editNote = async (id, title, tag, description) => {
    // API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYzZDA4MjY1YjgyYzFiYmVmNWViYzBlIn0sImlhdCI6MTcxNTI3NTgxNH0.A0oyjG48AC3i0ENLLRfRK0E241uQ_pED_pjtVrA4clk",
      },
      body: JSON.stringify({ title, tag, description }),
    });

    const json = response.json();

    // Logic to edit on client side
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.tag = tag;
        element.description = description;
      }
    }
  };

  return (
    <noteContext.Provider
      value={{ notes, fetchAllNotes, addNote, deleteNote, editNote }}
    >
      {props.children}
    </noteContext.Provider>
  );
}
