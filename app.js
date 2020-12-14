//const validator = require("validator");
const chalk = require("chalk");
const yargs = require("yargs");

const getNotes = require("./notes");

//const message = getNotes();
//console.log(message);

//console.log(validator.isEmail("gmail.com"));
//console.log(validator.isURL("htps://mead.io"));
//console.log(chalk.black.bgRed("hey there"));
//console.log(process.argv[2]);

//const command = process.argv[2];
//console.log(process.argv);

// if (command === "add") {
//   console.log("Adding node");
// } else {
//   console.log("Enter the correct command");
// }

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
  },
  handler: function (argv) {
    console.log("Adding a new node", argv);
  },
});

// CREATE REMOVE COMMAND

yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: function () {
    console.log("Removing a node");
  },
});

// CREATE LIST COMMAND

yargs.command({
  command: "list",
  describe: "List Notes",

  handler: function () {
    console.log("Listing Notes");
  },
});

// CREATE READ COMMAND

yargs.command({
  command: "read",
  describe: "Read notes",
  handler: function () {
    console.log("Reading Notes");
  },
});
// Displaying Commands
console.log(yargs.argv);
