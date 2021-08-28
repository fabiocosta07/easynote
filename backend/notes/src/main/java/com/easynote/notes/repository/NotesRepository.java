package com.easynote.notes.repository;

import com.easynote.notes.model.Note;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NotesRepository extends JpaRepository<Note,Long> {
}
