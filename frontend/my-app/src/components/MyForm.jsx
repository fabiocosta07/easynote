import './MyForm.css';
import React, { useState, useEffect } from 'react';

function MyForm() {
  const [note, setNote] = useState({});
  const [notes, setNotes] = useState([]);

  const handleSubmit = (evt) => {
      evt.preventDefault();
      if (note.id) {
        fetch(`http://localhost:8080/notes/${note.id}`, {
          method: 'put',
          body:    JSON.stringify(note),
          headers: { 'Content-Type': 'application/json' },
        })
      } else {
        fetch('http://localhost:8080/notes', {
          method: 'post',
          body:    JSON.stringify(note),
          headers: { 'Content-Type': 'application/json' },
        })
      }
      setNote({
        id: 0,
        title: '',
        content:''
      })
  }

  const handleDelete = (id) => {
    fetch(`http://localhost:8080/notes/${id}`, {
      method: 'delete',
    })
    .then(res => res.json())
  }

  const handleEdit = (id) => {
    fetch(`http://localhost:8080/notes/${id}`)
    .then(res => res.json())
    .then(data => {
      setNote(data)
    });
  }  
  useEffect( () =>  {
    fetch('http://localhost:8080/notes')
    .then(response => response.json())
    .then(data => setNotes(data));
  })

  return (
    <div class="container pt-3 my-3 border" >
      <form onSubmit={handleSubmit} >
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Title</label>
          <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="title" value={note.title} onChange={e => setNote({...note, title: e.target.value})}/>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">Content</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={note.content} onChange={e => setNote({...note, content: e.target.value})}></textarea>
        </div>
        <div class="mb-3">
          <input class="form-control" type="submit" value="Save"/>
        </div>
      </form>
        <div class="container p-3 my-3 border">
          <div class="d-flex justify-content-center">
            <label>Notes</label>
          </div>
        </div>        
        <div class="container-fluid p-3 my-3 border">
          <div class="d-flex flex-wrap">
            {notes.map(n => {
              return (
                <div key={n.id} class="card m-2" >
                  <div class="card-header">{n.title}</div>
                  <div class="card-body">{n.content}</div>
                  <div class="card-footer">
                    <div class="d-flex justify-content-around">
                      <i class="bi bi-pencil-square" onClick={ () => handleEdit(n.id)}></i>
                      <i class="bi bi-trash" onClick={ () => handleDelete(n.id)}></i>
                    </div>
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