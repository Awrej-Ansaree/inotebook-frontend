import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

export default function About() {
  const details = useContext(noteContext);
  return (
    <div className="container my-5">
      <h1 className="text-center mb-3">About Us</h1>
      <p className="text-center">
        This is about {details.name} and he is in class {details.class}. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Impedit esse
        reiciendis nesciunt nobis iusto officiis error beatae perspiciatis odio
        dolorum aspernatur cumque ullam dignissimos quidem itaque, deleniti
        sapiente eveniet, alias architecto expedita.
      </p>
    </div>
  );
}
