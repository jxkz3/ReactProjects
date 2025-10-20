import React from "react";
import NoteImage from "../Images/note.png";

export default function Header() {
  return (
    <header>
      <img src={NoteImage} alt="note" />
      <h1>My Journal</h1>
    </header>
  );
}
