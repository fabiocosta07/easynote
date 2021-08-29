package com.easynote.notes;

import com.easynote.notes.controllers.NotesController;
import com.easynote.notes.model.Note;
import com.easynote.notes.repository.NotesRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(NotesController.class)
class NotesApplicationTests {

	@Autowired
	private MockMvc mockMvc;

	@MockBean
	private NotesRepository notesRepository;

	@Autowired
	private ObjectMapper objectMapper;

	@Test
	public void getNotesShouldReturnNotes() throws Exception {
		List testList = Arrays.asList(new Note("noteTitle","noteContent"));
		final String expectedContent = objectMapper.writeValueAsString(testList);
		when(notesRepository.findAll()).thenReturn(testList);
		this.mockMvc.perform(get("/notes")).andDo(print())
				.andExpect(status().isOk())
				.andExpect(content().json(expectedContent));
		verify(notesRepository).findAll();
	}
	@Test
	public void getOneNoteShouldReturnOneNote() throws Exception {
		Note testNote = new Note("noteTitle", "noteContent");
		final String expectedContent = objectMapper.writeValueAsString(testNote);
		when(notesRepository.findById(1L)).thenReturn(Optional.of(testNote));
		this.mockMvc.perform(get("/notes/1")).andDo(print())
				.andExpect(status().isOk())
				.andExpect(content().json(expectedContent));
		verify(notesRepository).findById(1L);
	}
	@Test
	public void postNotesShouldCreateNewNote() throws Exception {
		Note testNote = new Note("noteTitle", "noteContent");
		String expectedContent = objectMapper.writeValueAsString(testNote);
		when(notesRepository.save(any())).thenReturn(testNote);
		this.mockMvc.perform(post("/notes")
						.content(expectedContent)
						.characterEncoding("UTF-8")
						.contentType(MediaType.APPLICATION_JSON)
						.accept(MediaType.APPLICATION_JSON)).andDo(print())
						.andExpect(status().isOk())
				        .andExpect(content().json(expectedContent));
		verify(notesRepository).save(any());
	}
	@Test
	public void putNotesShouldCreateNewNote() throws Exception {
		Note testNote = new Note("noteTitle", "noteContent");
		String expectedContent = objectMapper.writeValueAsString(testNote);
		when(notesRepository.findById(1L)).thenReturn(Optional.empty());
		when(notesRepository.save(any())).thenReturn(testNote);
		this.mockMvc.perform(put("/notes/1")
						.content(expectedContent)
						.characterEncoding("UTF-8")
						.contentType(MediaType.APPLICATION_JSON)
						.accept(MediaType.APPLICATION_JSON)).andDo(print())
				.andExpect(status().isOk())
				.andExpect(content().json(expectedContent));
		verify(notesRepository).save(any());
	}
	@Test
	public void putNotesShouldUpdateNote() throws Exception {
		Note testNote = new Note("noteTitle", "noteContent");
		String expectedContent = objectMapper.writeValueAsString(testNote);
		when(notesRepository.findById(1L)).thenReturn(Optional.of(testNote));
		when(notesRepository.save(any())).thenReturn(testNote);
		this.mockMvc.perform(put("/notes/1")
						.content(expectedContent)
						.characterEncoding("UTF-8")
						.contentType(MediaType.APPLICATION_JSON)
						.accept(MediaType.APPLICATION_JSON)).andDo(print())
				.andExpect(status().isCreated())
				.andExpect(content().json(expectedContent));
		verify(notesRepository).save(any());
	}
	@Test
	public void deleteNotesShouldDeleteNote() throws Exception {
		this.mockMvc.perform(delete("/notes/1"));
		verify(notesRepository).deleteById(1L);
	}
}
