import AddNote from "./AddNote";
import Notes from "./Notes";

export default function Home() {
  return (
    <div className="container my-5">
      <AddNote />
      <Notes />
    </div>
  );
}
