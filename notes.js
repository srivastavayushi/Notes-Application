const fs = require("fs");
const chalk = require("chalk");

function getNotes() {
  return "Your notes ...";
}

/// ADDING NOTES

const addNote = function (title, body) {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(function (note) {
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.yellow.bgBlack.bold("New Note Added"));
  } else {
    console.log("This title is already in use");
  }
};
/// REMOVE NOTES

const removeNote = function (title) {
  const notes = loadNotes();
  const notesToKeep = notes.filter(function (note) {
    return note.title !== title;
  });
  if (notes.length > notesToKeep.length) {
    console.log(chalk.white.bgGreen.bold("Note Removed"));
    saveNotes(notesToKeep);
  } else {
    return console.log(chalk.white.bgRed.bold("No Note Found"));
  }
};
const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};
const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
};
