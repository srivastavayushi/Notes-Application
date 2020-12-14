const fs = require("fs");
const chalk = require("chalk");

/// ADDING NOTES

const addNote = (title, body) => {
  const notes = loadNotes();
  // FIRST METHOD
  //const duplicateNotes = notes.filter((note) => note.title === title);

  // SECOND METHOD
  const duplicateNote = notes.find((note) => note.title === title);

  //FIRST METHOD

  //   if (duplicateNotes.length === 0) {
  //     notes.push({
  //       title: title,
  //       body: body,
  //     });
  //     saveNotes(notes);
  //     console.log(chalk.yellow.bgBlack.bold("New Note Added"));
  //   } else {
  //     console.log("This title is already in use");
  //   }
  // };

  // SECOND METHOD (MORE EFFICIENT)

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.yellow.bgBlack.bold("New Note Added"));
  } else {
    console.log(chalk.yellow.bgBlack.bold("This title is already in use"));
  }
};

/// REMOVE NOTES

const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => note.title !== title);

  if (notes.length > notesToKeep.length) {
    console.log(chalk.white.bgGreen.bold("Note Removed"));
    saveNotes(notesToKeep);
  } else {
    return console.log(chalk.white.bgRed.bold("No Note Found"));
  }
};

///  LIST NOTES

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.white.bgGreen.bold("YOUR NOTES"));
  const notesToDisplay = notes.forEach((note) =>
    console.log("title : " + chalk.white.bgRed(note.title))
  );
  console.log(notesToDisplay);
};

// READ NOTES

const readNote = (title) => {
  const notes = loadNotes();
  const searchedNote = notes.find((note) => note.title === title);
  if (searchedNote) {
    console.log(
      "title : " +
        chalk.white.bgMagenta.bold(searchedNote.title) +
        " , " +
        "body : " +
        chalk.black.bgGreen(searchedNote.body)
    );
  } else {
    console.log(
      chalk.white.bgMagenta.bold("Note with this title is not found")
    );
  }
};
// SAVE NOTES

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

// LOAD NOTES

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
};
