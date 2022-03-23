import React, { useState, useEffect } from "react";
import "./NoteListPage.css";
import { IoMdAddCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { BsFacebook } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const NotesListPage = () => {
  let [notes, setNotes] = useState([]);
  useEffect(() => {
    getNotes();
  }, []);

  let getNotes = async () => {
    let response = await fetch("http://127.0.0.1:8000/api/notes/");
    let data = await response.json();
    console.log(data);
    setNotes(data);
  };

  return (
    <div className="notes">
      <div className="notes-header">
        <h2 className="notes-title">&#9782; Notes</h2>
        <p className="notes-count">
          you have: <span style={{ color: "#EED6C4" }}>{notes.length}</span> of
          notes
        </p>
      </div>
      <div className="notes-list">
        {notes.map((note, index) => (
          <Link to={`/note/${note.id}`} style={{ textDecoration: "none" }}>
            <div className="notes-list-item">
              <h3>{note.body}</h3>
            </div>
          </Link>
        ))}
      </div>
      <Link style={{ textDecoration: "none", color: "white" }} to="/note/new">
        <div className="create-note">
          CREATE
          <span>
            <IoMdAddCircleOutline />
          </span>
        </div>
      </Link>
      <div className="icons">
        <a href="https://www.instagram.com/_mullet__daddy__/">
          <span className="ig">
            <BsInstagram />
          </span>
        </a>
        <a href="tel:+201147121515">
          <span className="wp">
            {" "}
            <BsWhatsapp />
          </span>
        </a>
        <a href="https://www.facebook.com/profile.php?id=100073300005507">
          <span className="fb">
            {" "}
            <BsFacebook />
          </span>
        </a>
      </div>
    </div>
  );
};

export default NotesListPage;
