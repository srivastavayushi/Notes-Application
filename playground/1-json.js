const fs = require("fs");

const dataBuffer = fs.readFileSync("1-json.json");
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
data.name = "Ayushi";
data.age = "20";
const stringData = JSON.stringify(data);
fs.writeFileSync("1-json.json", stringData);
