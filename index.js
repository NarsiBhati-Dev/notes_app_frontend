const Notes = [];
const noteTitleInput = document.getElementById("note-title");
const noteContentInput = document.getElementById("note-content");

const addNote = (event) => {
  event.preventDefault();

  const noteTitleValue = noteTitleInput.value.trim();
  const noteContentValue = noteContentInput.value.trim();

  if (noteTitleValue === "" || noteContentValue === "") {
    alert("Please Fill Form");
    return;
  }

  let newNote = {
    title: noteTitleValue,
    content: noteContentValue,
    date: new Date().toISOString(),
  };

  Notes.push(newNote);

  saveNoteToLocalStorage(newNote);

  addNoteToUI(newNote);

  noteTitleInput.value = "";
  noteContentInput.value = "";
};

const addNoteToUI = (note) => {
  const notesList = document.getElementById("notes-list");
  const noteCard = document.createElement("li");

  noteCard.classList.add("note-card");

  noteCard.innerHTML = `
    <h3>${note.title}</h3>
    <p>${note.content}</p>
  `;

  notesList.prepend(noteCard);

  if (notesList.children.length > 5) {
    notesList.lastElementChild.remove();
  }
};

const saveNoteToLocalStorage = (note) => {
  const notes = JSON.parse(localStorage.getItem("notes")) || [];
  notes.unshift(note);
  localStorage.setItem("notes", JSON.stringify(notes));
};
