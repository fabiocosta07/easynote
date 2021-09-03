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
      .then(data => {
        setNotes(notes => [...notes, data])  
      });
  }

  const handleDelete = (id) => {
    fetch(`http://localhost:8080/notes/${id}`, {
      method: 'delete',
    })
    .then(res => res.json())

    const newNotes = notes.filter(note => note.id !== id)
    setNotes(newNotes)
  }
  
  useEffect( () =>  {
    fetch('http://localhost:8080/notes')
    .then(response => response.json())
    .then(data => setNotes(data));
  }, notes)

  return (
    <div class="container pt-3 my-3 border" >
      <form onSubmit={handleSubmit} >
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Title</label>
          <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="title" value={title} onChange={e => setTitle(e.target.value)}/>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">Content</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={content} onChange={e => setContent(e.target.value)}></textarea>
        </div>
        <div class="mb-3">
          <input class="form-control" type="submit" value="Submit"/>
        </div>
      </form>

        <div class="container-fluid p-3 my-3 border">
          <div class="d-flex flex-wrap">
            {notes.map(n => {
              return (
                <div key={n.id} class="card m-2" >
                  <div class="card-header">{n.title}</div>
                  <div class="card-body">{n.content}</div>
                  <div class="card-footer">
                     <i class="bi bi-pencil-square"></i>
                     <i class="bi bi-trash" onClick={ () => handleDelete(n.id)}></i>
                  </div>
                </div>              
              )
            })}
          </div>      
      </div>      
    </div>      
  );
}

export default MyForm;