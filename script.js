const add = document.querySelector("#add");
const updateLSData = () => {
  const textAreaData = document.querySelectorAll("textarea");
  const notes = [];
  console.log(textAreaData);
  textAreaData.forEach((note) => {
    return notes.push(note.value);
  });
  console.log(notes);
  // localstorage takes 2 arguments one is key and second is a string which is a value.
  localStorage.setItem("notes", JSON.stringify(notes));
};
const addNewNote = (text = "") => {
  // now we will create a new div with the help of javascript.
  const note = document.createElement("div");
  note.classList.add("note");

  const htmlData = `
      <div class= "operation">
            <button class = "edit"> <i class = "fas fa-edit"></i></button>
            <button class = "delete"> <i class = "fas fa-trash-alt"></i></button> 
      </div>

      <div class = "main ${text ? "" : "hidden"}"></div>
      <textarea class = "${text ? "hidden" : ""}"></textarea>`;

  note.insertAdjacentHTML("afterbegin", htmlData);
  console.log(note);

  const editButton = note.querySelector(".edit");
  const delButton = note.querySelector(".delete");
  const mainDiv = note.querySelector(".main");
  const textArea = note.querySelector("textarea");
  // deleting a node
  delButton.addEventListener("click", () => {
    note.remove();
    updateLSData();
  });
  textArea.value = text;
  textArea.addEventListener("change", (event) => {
    const value = event.target.value;
    updateLSData();
  });
  //   mainDiv.innerHTML = text;

  document.body.appendChild(note); // it appends a node as the last child of a node
};

// data back from local storage
const notes = JSON.parse(localStorage.getItem("notes"));

if (notes) {
  notes.forEach((note) => addNewNote(note));
}
add.addEventListener("click", () => {
  addNewNote();
});
