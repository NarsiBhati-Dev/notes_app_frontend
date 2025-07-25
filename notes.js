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

  // show only last 5 notes
  const recentNotes = notes.slice(-5).reverse(); // get last 5 in reverse order (newest first)

  recentNotes.forEach((note) => {
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
