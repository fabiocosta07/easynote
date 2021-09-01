import './MyForm.css';
import React, { useState, useEffect } from 'react';

function MyForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [notes, setNotes] = useState([]);

  const handleSubmit = (evt) => {
      evt.preventDefault();
      
      const body = {
          "title": title,
          "content": content
      }

      fetch('http://localhost:8080/notes', {
        method: 'post',
        body:    JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
      })
      .then(res => res.json())
      .then(json => console.log(json));
  }
  
  useEffect( () =>  {
    fetch('http://localhost:8080/notes')
    .then(response => response.json())
    .then(data => setNotes(data));
  }, notes)

  return (
      <div className="center">
        <form onSubmit={handleSubmit} >
            <label>
                Title:
                <input type="text" value={title} onChange={e => setTitle(e.target.value)}/>
            </label>
            <label>
                Content:
                <input type="text" value={content} onChange={e => setContent(e.target.value)}/>
            </label>
            <input type="submit" value="Submit"/>
        </form>
        <p/>
        <div className="center">
            {notes.map( n =><p>{n.title}</p> )}            
        </div>
      </div>
  );
}

export default MyForm;