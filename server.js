var http = require("http");
//var data = require("./model");
var fs = require("fs");

var mname = "webserver";


//create simple http server
http.createServer(function(request, response) {

   log(mname, "Process request ...");

   log(mname, "url : " + request.url);
   log(mname, "method : " + request.method);
   log(mname, "user-agent : " + request.headers["user-agent"]);
   log(mname, "headers:");
   log(mname, request.headers);   

   log(mname, "Process request ... OK!");

   log(mname, "Write response ...");

   //determine if it is required to redirect to ./public/index.html
   if (request.url.startsWith("/public")) {
      log(mname, "Redirect to ./public/index.html");
      
      fs.readFile("public/index.html", (error, data) => {

          if (error) {
              log(mname, "Can not read ./public/index.html");
              response.statusCode = 404;
              response.end("Resource NOT found");
          } else {
             //response.write("New CustomPac service!!!"); 
             response.end(data);
          }
          //return;
      });

   } else {
      //write default response

      log(mname, "Default response");
      response.statusCode = 200;
      response.setHeader("Content-type", "text/html");
      response.setHeader("UserID", 194);
      response.write("<H1>Hello</H1>");
      response.end("It is just training, but I have to train my brain everyday, every minute, every second!");
   }   
   
   log(mname, "Write response ... OK!");

}).listen(10080, "127.0.0.1", function() {
   
   console.log("Server is started ...");

   //so it is possible to link my module here!
   //var data = require("./model");   <= some used files probably will not be found

});

//add logging
function log(fname, data) {
   console.log(fname + " : " + data);
};
