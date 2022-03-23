import React from "react";
import { useState, useEffect } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import "./NotePage.css";

const NotePage = ({ match, history }) => {
  let noteId = match.params.id;
  let [note, setNote] = useState(null);

  useEffect(() => {
    getNote();
  }, [noteId]);

  let getNote = async () => {
    let response = await fetch(`http://127.0.0.1:8000/api/notes/${noteId}/`);
    let data = await response.json();
    setNote(data);
  };

  let createNote = async () => {
    fetch(`http://127.0.0.1:8000/api/notes/create/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
  };

  let updateNote = async () => {
    fetch(`http://127.0.0.1:8000/api/notes/${noteId}/update/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
  };

  let deleteNote = async () => {
    fetch(`http://127.0.0.1:8000/api/notes/${noteId}/delete/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  let handelSubmit = () => {
    if (noteId !== "new" && note.body === "") {
      deleteNote();
    } else if (noteId !== "new") {
      updateNote();
    } else if (noteId === "new" && note.body !== null) {
      createNote();
    }
    history.push("/");
  };

  return (
    <div className="note">
      <div className="note-header">
        <h3 className="arrow">
          <button onClick={handelSubmit}>
            <AiOutlineArrowLeft />
          </button>
        </h3>
        {noteId !== "new" ? (
          <div className="delete">
            <button onClick={deleteNote}>DELETE</button>
          </div>
        ) : (
          <>
            <div className="delete">
              <button onClick={updateNote}>DONE</button>
            </div>
            <p>when you finish please press (DONE) befor you leave</p>
          </>
        )}
      </div>

      <textarea
        onChange={(e) => {
          setNote({ ...note, body: e.target.value });
        }}
        defaultValue={note?.body}
      ></textarea>
    </div>
  );
};

export default NotePage;
