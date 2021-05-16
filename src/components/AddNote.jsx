import React, { useState } from "react";
import { useHistory } from "react-router";
import NotesService from "../services/NotesService";
import "./AddNote.css";

const AddNote = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [category, setCategory] = useState("Programming");

  const history = useHistory();

  const saveNote = (e) => {
    e.preventDefault();
    const note = { title, body, category };
    // console.log("Received data ", note);
    NotesService.addNote(note)
      .then((response) => {
        // console.log("Note saved successfully ", response.data);
        // Went everything goes right, we redirect user to the note list page
        history.push("/");
      })
      .catch((error) => {
        console.log("An error occurred ", error);
      });
  };

  return (
    <div className="add-note" style={{ marginTop: "16px" }}>
      <h3 style={{ marginBottom: "16px" }}>Add new note</h3>
      <form>
        <div className="form-group">
          <label for="note-title">Title</label>
          <input
            type="text"
            className="form-control"
            id="note-title"
            value={title}
            onChange={($event) => setTitle($event.target.value)}
          />
        </div>
        <div className="form-group">
          <label id="description" for="note-body">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            rows="3"
            value={body}
            onChange={($event) => setBody($event.target.value)}
          ></textarea>
        </div>
        <div class="form-group">
          <label for="category">Category</label>
          <select
            class="form-control"
            id="category"
            value={category}
            onChange={($event) => setCategory($event.target.value)}
          >
            <option>Programming</option>
            <option>Art</option>
            <option>Sport</option>
            <option>Dish</option>
            <option>Divers</option>
          </select>
        </div>
        <button
          type="submit"
          className="btn btn-lg btn-block btn-primary"
          onClick={($event) => saveNote($event)}
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default AddNote;
