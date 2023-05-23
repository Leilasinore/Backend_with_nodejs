const url = "http://mylogger.io";
//exercise
const EventEmitter = require("events");

class Logger extends EventEmitter {
  logMe() {
    console.log("logging in ");

    //Raise an event
    this.emit("logging event raised", { id: 2, url: "http://handlingaction" });
  }
}

//module.exports.logMe=logMe; this is exportingit as an object
module.exports = Logger; //this is exporting it as a function
