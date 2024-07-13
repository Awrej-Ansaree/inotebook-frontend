import React, { useState } from "react";
import noteContext from "./noteContext";

export default function NoteState(props) {
  const initialNotes = [
    {
      _id: "663d0f593bf98d3844f0825f1",
      user: "663d08265b82c1bbef5ebc0e",
      title: "How to become a web developer",
      description: "Hello, I'm Awrej",
      tag: "Web Developer",
      date: "2024-05-09T18:00:57.820Z",
      __v: 0,
    },
    {
      _id: "666dcae43118c76a98c4b5372",
      user: "663d08265b82c1bbef5ebc0e",
      title: "How to become a doctor",
      description: "Hello, I'm Rahul",
      tag: "Doctor",
      date: "2024-06-15T17:09:56.295Z",
      __v: 0,
    },
    {
      _id: "663d0f593bf98d3844f0825f3",
      user: "663d08265b82c1bbef5ebc0e",
      title: "How to become a web developer",
      description: "Hello, I'm Awrej",
      tag: "Web Developer",
      date: "2024-05-09T18:00:57.820Z",
      __v: 0,
    },
    {
      _id: "666dcae43118c76a98c4b5374",
      user: "663d08265b82c1bbef5ebc0e",
      title: "How to become a doctor",
      description: "Hello, I'm Rahul",
      tag: "Doctor",
      date: "2024-06-15T17:09:56.295Z",
      __v: 0,
    },
    {
      _id: "663d0f593bf98d3844f0825f5",
      user: "663d08265b82c1bbef5ebc0e",
      title: "How to become a web developer",
      description: "Hello, I'm Awrej",
      tag: "Web Developer",
      date: "2024-05-09T18:00:57.820Z",
      __v: 0,
    },
    {
      _id: "666dcae43118c76a98c4b5376",
      user: "663d08265b82c1bbef5ebc0e",
      title: "How to become a doctor",
      description: "Hello, I'm Rahul",
      tag: "Doctor",
      date: "2024-06-15T17:09:56.295Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(initialNotes);
  return (
    <noteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </noteContext.Provider>
  );
}
