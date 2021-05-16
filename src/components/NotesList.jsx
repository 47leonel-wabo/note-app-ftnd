import React, { useEffect, useState } from "react";
import NotesService from "../services/NotesService";
import "./NotesList.css";

const NotesList = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    NotesService.allNotes()
      .then((response) => {
        console.log(response.data);
        setNotes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="note-list">
      <div style={{ display: "flex" }}>
        <h1>List of Notes</h1>
        <div>
          <span className="badge badge-pill badge-warning">{notes.length}</span>
        </div>
      </div>
      {notes &&
        notes.map((note) => (
          <div className="note" key={note.id}>
            <p
              style={{ fontSize: "24px", fontWeight: "bold" }}
              className="text-capitalize"
            >
              {note.title}
            </p>
            <p>{note.body}</p>
          </div>
        ))}
    </div>
  );
};

export default NotesList;
