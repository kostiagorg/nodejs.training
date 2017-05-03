var mname = "index.js";

var Student = require("./student");

var member1 = new Student("Kanstantsin", "Yermalovich", 220119);

member1.saySomething("Eeeee-eeee");

//let's try to work with functions. I think it is difficult theme because of
// we have deal with event-driven, non-blocking IO model
function log(fname, data) {
   console.log(fname + " : " + data);
};

console.log("Beging logging ..");

log(mname, "I am the best of the best");

console.log("End logging");

log(mname, "IO async train starts ...");




//let's try to use callback function
function display(data, callback) {
   var fname = "display";

   log(fname, "Start");

   var i = 5;
   //var i = 6;

   var err = i > 5 ? new Error("Oh no!!!") : null;

   //setTimeout(function() {
   setTimeout(() => {    
      callback(err, data);
   }, 0);

   log(fname, "End");
};

//invoke display function and provide other function as second parameter
display("invoke display function", function(err, data){
   
   if (err) throw err;
   console.log(data);
});

//############################################################################################
//work with files
var fs = require("fs");

var callbackReadFile = function(err, data) {
   
   var fname = "callbackReadFile";

   log(fname, "Starts async file reading ...");
   
   if (err) throw err;
   
   log(fname, "File content is :");
   console.log(data);
   log(fname, "Ends async file reading ...");
};

var fileName = "message.txt";
var encode = "utf8";

fs.readFile(fileName, encode, callbackReadFile);

//sync file reading
log(mname, "Starts sync file reading ...");
var fileContent = fs.readFileSync(fileName, encode);
log(mname, "File content is :");
console.log(fileContent);
log(mname, "Ends sync file reading ...");

//sync write to file
log(mname, "Starts sync file writing ...");
fs.appendFileSync(fileName, "New Line");
log(mname, "Ends sync file writing ...");

//async write to file
//IMPORTANT! log messages are displayed before async methods are invoked !!!
log(mname, "Starts async file writing ...");   // <=== incorrect logic !!! we have a deal with sync log and async write
fs.appendFile(fileName, "New Line", (err) => {
    if (err) throw err;
    log(mname, "async file writing ... OK!");
});
log(mname, "Ends async file writing ...");   // <=== incorrect logic !!! we have a deal with sync log and async write



//let's use piptes
log(mname, "Using pipes starts ..");
var readableStream = fs.createReadStream(fileName, encode);
var writableStream = fs.createWriteStream("newfile.txt", encode);

readableStream.pipe(writableStream);
readableStream.close();
writableStream.close();
log(mname, "Using pipes ends ..");


//let's use pipes together with archievation
log(mname, "Using pipes with gzip starts ..");
var zlib = require("zlib");
var readableStream2 = fs.createReadStream(fileName, encode);
var writableStream2 = fs.createWriteStream("newfile2.txt.gz", encode);

var gzip = zlib.createGzip();

readableStream2.pipe(gzip).pipe(writableStream2);   //Unfortunatelly, I can not open this file with 7-Zip

readableStream2.close();
writableStream2.close();

log(mname, "Using pipes with gzip ends ..");


