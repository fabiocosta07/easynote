package com.easynote.notes.controllers;

import com.easynote.notes.exceptions.NoteNofFoundException;
import com.easynote.notes.model.Note;
import com.easynote.notes.repository.NotesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;

@RestController
public class NotesController {

    @Autowired
    NotesRepository notesRepository;

    @GetMapping(value = "/notes")
    List<Note> all(){
        return notesRepository.findAll();
    }

    @GetMapping("/notes/{id}")
    Note one(@PathVariable Long id) {
        return notesRepository.findById(id).orElseThrow(() ->new NoteNofFoundException());
    }

    @PostMapping(value = "/notes")
    Note newNote(@RequestBody Note note) {
        return notesRepository.save(note);
    }

    @PutMapping(value = "/notes/{id}")
    ResponseEntity<Note> replaceNote(@RequestBody Note newNote, @PathVariable Long id){
        return notesRepository.findById(id).map(note -> {
            note.setTitle(newNote.getTitle());
            note.setContent(newNote.getContent());
            return new ResponseEntity<>(notesRepository.save(note), HttpStatus.CREATED);
        } ).orElseGet(() -> {
            newNote.setId(id);
            return new ResponseEntity<>(notesRepository.save(newNote), HttpStatus.OK);
        });
    }

    @DeleteMapping("/notes/{id}")
    void deleteUser(@PathVariable Long id) {
        notesRepository.deleteById(id);
    }

}
