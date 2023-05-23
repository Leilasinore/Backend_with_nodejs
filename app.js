const http = require("http");

//listen and handle the event
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello world");
    res.end();
  }
  if (req.url === "/api/courses") {
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
  }
});

//create an event listener and handler
// server.addListener("connection", (socket)=>{
//   console.log("connection created successfully");
// });

//register or raise an event
server.listen(3000);

const os = require("os");
const machineObj = os.machine();
console.log(machineObj);
//loading the path module

const path = require("path");

var pathObj = path.parse(__filename);

console.log(pathObj);

const totalMemory = os.totalmem();
console.log(`total memory: ${totalMemory}`);

//synchronous code
const fs = require("fs");
const files = fs.readdirSync("./");
console.log(files);

//asychronous code
const myFiles = fs.readdir("./", function (err, myFiles) {
  if (err) console.log("error is:" + err);
  else console.log("your files are:" + myFiles);
});

//Working with the events module
const EventEmitter = require("events");
const emitter = new EventEmitter();
//Listen and handle the event.
emitter.addListener("Message Logged", (args) => {
  console.log("listener called", args);
});

//Raise an event
emitter.emit("Message Logged", { id: 1, url: "http://home" });

//raise and handle event exercise
const Logger = require("./logger.js");

const logger = new Logger();

//listen and handle the event
logger.addListener("logging event raised", function handleLoggingEvent(args) {
  console.log("handling logging event that was raised", args);
});

logger.logMe();
