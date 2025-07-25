const notesList = document.getElementById("notes-list");

const renderNotes = () => {
  const notes = [
    {
      title: "Note 1",
      content: "This is the first note",
      date: new Date().toISOString(),
    },
    {
      title: "Note 2",
      content: "This is the second note",
      date: new Date().toISOString(),
    },
  ];

  notes.map((note) => {
    const li = document.createElement("li");
    const noteCard = document.createElement("div");
    noteCard.classList.add("note-card");
    noteCard.innerHTML = `
        <h2>${note.title}</h2>
        <p>${note.content}</p>
        <div class="note-footer">${note.date}</div>
    `;

    const removeBtn = document.createElement("button");
    removeBtn.classList.add("delete-btn");
    removeBtn.innerHTML = `<i class="fa-solid fa-trash">delete</i>`;
    removeBtn.onclick = () => li.remove();

    li.appendChild(noteCard);
    li.appendChild(removeBtn);
    notesList.appendChild(li);
  });
};

document.addEventListener("DOMContentLoaded", renderNotes);

// async function fetchNotes() {
//   try {
//     const response = await axios.get("/api/notes");
//     console.log("Fetched notes:", response.data);
//   } catch (error) {
//     console.error("Fetch failed:", error);
//   }
// }

// // Async function to post a new note
// async function addNote(note) {
//   try {
//     const response = await axios.post("/api/notes", note);
//     console.log("Note added:", response.data);
//   } catch (error) {
//     console.error("Post failed:", error);
//   }
// }
