var http = require("http").createServer(handler); //require http server, and create server with function handler()
var fs = require("fs"); //require filesystem module
var url = require("url");
var path = require("path");
var io = require("socket.io", "net")(http); //require socket.io module and pass the http object (server)
var Gpio = require("onoff").Gpio; //include onoff to interact with the GPIO

var LED5 = new Gpio(5, "out"); //use GPIO pin 5 as output
var LED6 = new Gpio(6, "out"); //use GPIO pin 6 as output
var LED7 = new Gpio(7, "out"); //use GPIO pin 7 as output
var LED8 = new Gpio(8, "out"); //use GPIO pin 8 as output
var LED9 = new Gpio(9, "out"); //use GPIO pin 9 as output
var LED10 = new Gpio(10, "out"); //use GPIO pin 10 as output
var LED11 = new Gpio(11, "out"); //use GPIO pin 11 as output
var LED12 = new Gpio(12, "out"); //use GPIO pin 12 as output
var LED13 = new Gpio(13, "out"); //use GPIO pin 13 as output --
var LED14 = new Gpio(14, "out"); //use GPIO pin 14 as output
var LED15 = new Gpio(15, "out"); //use GPIO pin 15 as output
var LED16 = new Gpio(16, "out"); //use GPIO pin 16 as output
var LED17 = new Gpio(17, "out"); //use GPIO pin 17 as output
var LED18 = new Gpio(18, "out"); //use GPIO pin 18 as output
var LED19 = new Gpio(19, "out"); //use GPIO pin 19 as output
var LED20 = new Gpio(20, "out"); //use GPIO pin 20 as output
var LED21 = new Gpio(21, "out"); //use GPIO pin 21 as output
var LED22 = new Gpio(22, "out"); //use GPIO pin 22 as output --
var LED23 = new Gpio(23, "out"); //use GPIO pin 23 as output
var LED24 = new Gpio(24, "out"); //use GPIO pin 24 as output
var LED25 = new Gpio(25, "out"); //use GPIO pin 25 as output
var LED26 = new Gpio(26, "out"); //use GPIO pin 26 as output

var GPIO5value = 0; // Turn on the LED by default
var GPIO6value = 0; // Turn on the LED by default
var GPIO7value = 0; // Turn on the LED by default
var GPIO8value = 0; // Turn on the LED by default
var GPIO9value = 0; // Turn on the LED by default
var GPIO10value = 0; // Turn on the LED by default
var GPIO11value = 0; // Turn on the LED by default
var GPIO12value = 0; // Turn on the LED by default
var GPIO13value = 0; // Turn on the LED by default
var GPIO14value = 0; // Turn on the LED by default
var GPIO15value = 0; // Turn on the LED by default
var GPIO16value = 0; // Turn on the LED by default
var GPIO17value = 0; // Turn on the LED by default
var GPIO18value = 0; // Turn on the LED by default
var GPIO19value = 0; // Turn on the LED by default
var GPIO20value = 0; // Turn on the LED by default
var GPIO21value = 0; // Turn on the LED by default
var GPIO22value = 0; // Turn on the LED by default
var GPIO23value = 0; // Turn on the LED by default
var GPIO24value = 0; // Turn on the LED by default
var GPIO25value = 0; // Turn on the LED by default
var GPIO26value = 0; // Turn on the LED by default

/****** CONSTANTS******************************************************/

const WebPort = 80;

/* if you want to run WebPort on a port lower than 1024 without running
 * node as root, you need to run following from a terminal on the pi
 * sudo apt update
 * sudo apt install libcap2-bin
 * sudo setcap cap_net_bind_service=+ep /usr/local/bin/node
 */

/*************** Web Browser Communication ****************************/

// Start http webserver
http.listen(WebPort, function () {
  // This gets call when the web server is first started.


  const localtunnel = require('localtunnel');

(async () => {
  const tunnel = await localtunnel({ port: WebPort });

  // the assigned public url for your tunnel
  // i.e. https://abcdefgjhij.localtunnel.me
  tunnel.url;

  console.log(tunnel.url);

  tunnel.on('close', () => {
    // tunnels are closed
  });
})();


  LED5.writeSync(GPIO5value); //turn LED on or off\
  LED6.writeSync(GPIO6value); //turn LED on or off
  LED7.writeSync(GPIO7value); //turn LED on or off
  LED8.writeSync(GPIO8value); //turn LED on or off
  LED9.writeSync(GPIO9value); //turn LED on or off
  LED10.writeSync(GPIO10value); //turn LED on or off
  LED11.writeSync(GPIO11value); //turn LED on or off
  LED12.writeSync(GPIO12value); //turn LED on or off
  LED13.writeSync(GPIO13value); //turn LED on or off
  LED14.writeSync(GPIO14value); //turn LED on or off
  LED15.writeSync(GPIO15value); //turn LED on or off
  LED16.writeSync(GPIO16value); //turn LED on or off
  LED17.writeSync(GPIO17value); //turn LED on or off
  LED18.writeSync(GPIO18value); //turn LED on or off
  LED19.writeSync(GPIO19value); //turn LED on or off
  LED20.writeSync(GPIO20value); //turn LED on or off
  LED21.writeSync(GPIO21value); //turn LED on or off
  LED22.writeSync(GPIO22value); //turn LED on or off
  LED23.writeSync(GPIO23value); //turn LED on or off
  LED24.writeSync(GPIO24value); //turn LED on or off
  LED25.writeSync(GPIO25value); //turn LED on or off
  LED26.writeSync(GPIO26value); //turn LED on or off

  console.log("Server running on Port " + WebPort);
  console.log("GPIO20 = " + GPIO20value);
  console.log("GPIO21 = " + GPIO21value);
  console.log("GPIO16 = " + GPIO16value);
  console.log("GPIO26 = " + GPIO26value);
});

// function handler is called whenever a client makes an http request to the server
// such as requesting a web page.
function handler(req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  console.log("filename=" + filename);
  var extname = path.extname(filename);
  if (filename == "./") {
    console.log("retrieving default index.html file");
    filename = "./index.html";
  }

  // Initial content type
  var contentType = "text/html";

  // Check ext and set content type
  switch (extname) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
    case ".ico":
      contentType = "image/png";
      break;
  }

  fs.readFile(__dirname + "/public/" + filename, function (err, content) {
    if (err) {
      console.log("File not found. Filename=" + filename);
      fs.readFile(__dirname + "/public/404.html", function (err, content) {
        res.writeHead(200, { "Content-Type": "text/html" });
        return res.end(content, "utf"); //display 404 on error
      });
    } else {
      // Success
      res.writeHead(200, { "Content-Type": contentType });
      return res.end(content, "utf8");
    }
  });
}

// Execute this when web server is terminated
process.on("SIGINT", function () {
  //on ctrl+c

  LED12.writeSync(0); // Turn LED off
  LED12.unexport(); // Unexport LED GPIO to free resources

  LED13.writeSync(0); // Turn LED off
  LED13.unexport(); // Unexport LED GPIO to free resources

  LED16.writeSync(0); // Turn LED off
  LED16.unexport(); // Unexport LED GPIO to free resources

  LED19.writeSync(0); // Turn LED off
  LED19.unexport(); // Unexport LED GPIO to free resources

  LED20.writeSync(0); // Turn LED off
  LED20.unexport(); // Unexport LED GPIO to free resources

  LED21.writeSync(0); // Turn LED off
  LED21.unexport(); // Unexport LED GPIO to free resources

  LED22.writeSync(0); // Turn LED off
  LED22.unexport(); // Unexport LED GPIO to free resources

  LED24.writeSync(0); // Turn LED off
  LED24.unexport(); // Unexport LED GPIO to free resources

  LED26.writeSync(0); // Turn LED off
  LED26.unexport(); // Unexport LED GPIO to free resources

  process.exit(); //exit completely
});

/****** io.socket is the websocket connection to the client's browser********/

io.sockets.on("connection", function (socket) {
  // WebSocket Connection
  console.log("A new client has connectioned. Send LED status");
  socket.emit("GPIO12", GPIO12value);
  socket.emit("GPIO13", GPIO13value);
  socket.emit("GPIO16", GPIO16value);
  socket.emit("GPIO19", GPIO19value);
  socket.emit("GPIO20", GPIO20value);
  socket.emit("GPIO21", GPIO21value);
  socket.emit("GPIO22", GPIO22value);
  socket.emit("GPIO24", GPIO24value);
  socket.emit("GPIO26", GPIO26value);

  // this gets called whenever client presses GPIO12 toggle light button
  socket.on("GPIO12T", function (data) {
    if (GPIO12value) GPIO12value = 0;
    else GPIO12value = 1;
    console.log("new GPIO12 value=" + GPIO12value);
    LED12.writeSync(GPIO12value); //turn LED on or off
    console.log("Send new GPIO12 state to ALL clients");
    io.emit("GPIO12", GPIO12value); //send button status to ALL clients
  });

  // this gets called whenever client presses GPIO13 toggle light button
  socket.on("GPIO13T", function (data) {
    if (GPIO13value) GPIO13value = 0;
    else GPIO13value = 1;
    console.log("new GPIO13 value=" + GPIO13value);
    LED13.writeSync(GPIO13value); //turn LED on or off
    console.log("Send new GPIO13 state to ALL clients");
    io.emit("GPIO13", GPIO13value); //send button status to ALL clients
  });

  // this gets called whenever client presses GPIO16 toggle light button
  socket.on("GPIO16T", function (data) {
    if (GPIO16value) GPIO16value = 0;
    else GPIO16value = 1;
    console.log("new GPIO16 value=" + GPIO16value);
    LED16.writeSync(GPIO16value); //turn LED on or off
    console.log("Send new GPIO16 state to ALL clients");
    io.emit("GPIO16", GPIO16value); //send button status to ALL clients
  });

  // this gets called whenever client presses GPIO16 toggle light button
  socket.on("GPIO19T", function (data) {
    if (GPIO19value) GPIO19value = 0;
    else GPIO19value = 1;
    console.log("new GPIO19 value=" + GPIO19value);
    LED19.writeSync(GPIO19value); //turn LED on or off
    console.log("Send new GPIO19 state to ALL clients");
    io.emit("GPIO19", GPIO19value); //send button status to ALL clients
  });

  // this gets called whenever client presses GPIO20 toggle light button
  socket.on("GPIO20T", function (data) {
    if (GPIO20value) GPIO20value = 0;
    else GPIO20value = 1;
    console.log("new GPIO20 value=" + GPIO20value);
    LED20.writeSync(GPIO20value); //turn LED on or off
    console.log("Send new GPIO20 state to ALL clients");
    io.emit("GPIO20", GPIO20value); //send button status to ALL clients
  });

  // this gets called whenever client presses GPIO21 toggle light button
  socket.on("GPIO21T", function (data) {
    if (GPIO21value) GPIO21value = 0;
    else GPIO21value = 1;
    console.log("new GPIO21 value=" + GPIO21value);
    LED21.writeSync(GPIO21value); //turn LED on or off
    console.log("Send new GPIO21 state to ALL clients");
    io.emit("GPIO21", GPIO21value); //send button status to ALL clients
  });

  // this gets called whenever client presses GPIO22 toggle light button
  socket.on("GPIO22T", function (data) {
    if (GPIO22value) GPIO22value = 0;
    else GPIO22value = 1;
    console.log("new GPIO22 value=" + GPIO22value);
    LED22.writeSync(GPIO22value); //turn LED on or off
    console.log("Send new GPIO22 state to ALL clients");
    io.emit("GPIO22", GPIO22value); //send button status to ALL clients
  });

  // this gets called whenever client presses GPIO24 toggle light button
  socket.on("GPIO24T", function (data) {
    if (GPIO24value) GPIO24value = 0;
    else GPIO24value = 1;
    console.log("new GPIO24 value=" + GPIO24value);
    LED24.writeSync(GPIO24value); //turn LED on or off
    console.log("Send new GPIO24 state to ALL clients");
    io.emit("GPIO24", GPIO24value); //send button status to ALL clients
  });

  // this gets called whenever client presses GPIO26 toggle light button
  socket.on("GPIO26T", function (data) {
    if (GPIO26value) GPIO26value = 0;
    else GPIO26value = 1;
    console.log("new GPIO26 value=" + GPIO26value);
    LED26.writeSync(GPIO26value); //turn LED on or off
    console.log("Send new GPIO26 state to ALL clients");
    io.emit("GPIO26", GPIO26value); //send button status to ALL clients
  });

  // this gets called whenever client presses GPIO12 momentary light button
  socket.on("GPIO12", function (data) {
    GPIO12value = data;
    if (GPIO12value != LED12.readSync()) {
      //only change LED if status has changed
      LED12.writeSync(GPIO12value); //turn LED on or off
      console.log("Send new GPIO12 state to ALL clients");
      io.emit("GPIO12", GPIO12value); //send button status to ALL clients
    }
  });

    // this gets called whenever client presses GPIO13 momentary light button
	socket.on("GPIO13", function (data) {
		GPIO13value = data;
		if (GPIO13value != LED13.readSync()) {
		  //only change LED if status has changed
		  LED13.writeSync(GPIO13value); //turn LED on or off
		  console.log("Send new GPIO13 state to ALL clients");
		  io.emit("GPIO13", GPIO13value); //send button status to ALL clients
		}
	  });

  // this gets called whenever client presses GPIO16 momentary light button
  socket.on("GPIO16", function (data) {
    GPIO16value = data;
    if (GPIO16value != LED16.readSync()) {
      //only change LED if status has changed
      LED16.writeSync(GPIO16value); //turn LED on or off
      console.log("Send new GPIO16 state to ALL clients");
      io.emit("GPIO16", GPIO16value); //send button status to ALL clients
    }
  });

  // this gets called whenever client presses GPIO19 momentary light button
  socket.on("GPIO19", function (data) {
    GPIO19value = data;
    if (GPIO19value != LED19.readSync()) {
      //only change LED if status has changed
      LED19.writeSync(GPIO19value); //turn LED on or off
      console.log("Send new GPIO19 state to ALL clients");
      io.emit("GPIO19", GPIO19value); //send button status to ALL clients
    }
  });

  // this gets called whenever client presses GPIO20 momentary light button
  socket.on("GPIO20", function (data) {
    GPIO20value = data;
    if (GPIO20value != LED20.readSync()) {
      //only change LED if status has changed
      LED20.writeSync(GPIO20value); //turn LED on or off
      console.log("Send new GPIO20 state to ALL clients");
      io.emit("GPIO20", GPIO20value); //send button status to ALL clients
    }
  });

  // this gets called whenever client presses GPIO21 momentary light button
  socket.on("GPIO21", function (data) {
    GPIO21value = data;
    if (GPIO21value != LED21.readSync()) {
      //only change LED if status has changed
      LED21.writeSync(GPIO21value); //turn LED on or off
      console.log("Send new GPIO21 state to ALL clients");
      io.emit("GPIO21", GPIO21value); //send button status to ALL clients e
    }
  });

    // this gets called whenever client presses GPIO22 momentary light button
	socket.on("GPIO22", function (data) {
		GPIO22value = data;
		if (GPIO22value != LED22.readSync()) {
		  //only change LED if status has changed
		  LED22.writeSync(GPIO22value); //turn LED on or off
		  console.log("Send new GPIO22 state to ALL clients");
		  io.emit("GPIO22", GPIO22value); //send button status to ALL clients e
		}
	  });

  // this gets called whenever client presses GPIO24 momentary light button
  socket.on("GPIO24", function (data) {
    GPIO24value = data;
    if (GPIO24value != LED24.readSync()) {
      //only change LED if status has changed
      LED24.writeSync(GPIO24value); //turn LED on or off
      console.log("Send new GPIO24 state to ALL clients");
      io.emit("GPIO24", GPIO24value); //send button status to ALL clients e
    }
  });

  // this gets called whenever client presses GPIO26 momentary light button
  socket.on("GPIO26", function (data) {
    GPIO26value = data;
    if (GPIO26value != LED26.readSync()) {
      //only change LED if status has changed
      LED26.writeSync(GPIO26value); //turn LED on or off
      console.log("Send new GPIO26 state to ALL clients");
      io.emit("GPIO26", GPIO26value); //send button status to ALL clients
    }
  });

  //Whenever someone disconnects this piece of code executed
  socket.on("disconnect", function () {
    console.log("A user disconnected");
  });
});
