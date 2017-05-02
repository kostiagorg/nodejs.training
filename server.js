var http = require("http");
//var data = require("./model");


//create simple http server
http.createServer(function(request, response) {
   
   response.end("It is just training, but I have to train my brain everyday, every minute, every second!");


}).listen(10080, "127.0.0.1", function() {
   
   console.log("Server is started ...");

   //so it is possible to link my module here!
   var data = require("./model");

});