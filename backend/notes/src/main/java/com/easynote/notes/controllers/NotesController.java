package com.easynote.notes.controllers;

import com.easynote.notes.model.Note;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;

@RestController
public class NotesController {

    @GetMapping(value = "/notes")
    List<Note> all(){
        return Collections.nCopies(3,new Note("fabio","fabiocosta07@gmail.com"));
    }

    @PostMapping(value = "/notes")
    Note newUser(@RequestBody Note user) {
        return user;
    }

    @PutMapping(value = "/notes/{id}")
    Note replaceUser(@RequestBody Note user, @PathVariable Long id){
        return user;
    }

    @DeleteMapping("/notes/{id}")
    void deleteUser(@PathVariable Long id) {
        System.out.println(id);
    }

}
