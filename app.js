const fs = require("fs");
const yargs = require("yargs");

const Notes = require("./notes");

//const command = process.argv[2];
//console.log(process.argv);

//notes application commands: add, remove, read, list

// CREATE ADD COMMAND
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Body of added note",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    Notes.addNote(argv.title, argv.body);
  },
});

// CREATE REMOVE COMMAND

yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Removed Note Title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    Notes.removeNote(argv.title);
  },
});

// CREATE LIST COMMAND

yargs.command({
  command: "list",
  describe: "List Notes",
  handler() {
    Notes.listNotes();
  },
});

// CREATE READ COMMAND

yargs.command({
  command: "read",
  describe: "Read notes",
  builder: {
    title: {
      describe: "Removed Note Title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    Notes.readNote(argv.title);
  },
});
// Displaying Commands
//console.log(yargs.argv);
yargs.parse();
