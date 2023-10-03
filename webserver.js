//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 token 25/01/2023
/* import Tunnel from './tunnel'; */

var http = require("http").createServer(handler); //require http server, and create server with function handler()
var fs = require("fs"); //require filesystem module
var url = require("url");
var path = require("path");
var io = require("socket.io", "net")(http); //require socket.io module and pass the http object (server)
var Gpio = require("onoff").Gpio; //include onoff to interact with the GPIO


var LED0 = new Gpio(0, "out"); //use GPIO pin 0 as output
var LED1 = new Gpio(1, "out"); //use GPIO pin 1 as output
var LED2 = new Gpio(2, "out"); //use GPIO pin 2 as output
var LED3 = new Gpio(3, "out"); //use GPIO pin 3 as output
var LED4 = new Gpio(4, "out"); //use GPIO pin 4 as output
var LED5 = new Gpio(5, "out"); //use GPIO pin 5 as output
var LED6 = new Gpio(6, "out"); //use GPIO pin 6 as output
var LED7 = new Gpio(7, "out"); //use GPIO pin 7 as output
var LED8 = new Gpio(8, "out"); //use GPIO pin 8 as output
var LED9 = new Gpio(9, "out"); //use GPIO pin 9 as output
var LED10 = new Gpio(10, "out"); //use GPIO pin 10 as output
var LED11 = new Gpio(11, "out"); //use GPIO pin 11 as output
var LED12 = new Gpio(12, "out"); //use GPIO pin 12 as output
var LED13 = new Gpio(13, "out"); //use GPIO pin 13 as output
var LED14 = new Gpio(14, "out"); //use GPIO pin 14 as output
var LED15 = new Gpio(15, "out"); //use GPIO pin 15 as output
var LED16 = new Gpio(16, "out"); //use GPIO pin 16 as output
var LED17 = new Gpio(17, "out"); //use GPIO pin 17 as output
var LED18 = new Gpio(18, "out"); //use GPIO pin 18 as output
var LED19 = new Gpio(19, "out"); //use GPIO pin 19 as output
var LED20 = new Gpio(20, "out"); //use GPIO pin 20 as output
var LED21 = new Gpio(21, "out"); //use GPIO pin 21 as output
var LED22 = new Gpio(22, "out"); //use GPIO pin 22 as output
var LED23 = new Gpio(23, "out"); //use GPIO pin 23 as output
var LED24 = new Gpio(24, "out"); //use GPIO pin 24 as output
var LED25 = new Gpio(25, "out"); //use GPIO pin 25 as output
var LED26 = new Gpio(26, "out"); //use GPIO pin 26 as output

var GPIO0value = 0; // Turn on the LED by default
var GPIO1value = 0; // Turn on the LED by default
var GPIO2value = 0; // Turn on the LED by default
var GPIO3value = 0; // Turn on the LED by default
var GPIO4value = 0; // Turn on the LED by default
var GPIO5value = 0; // Turn on the LED by default
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
  
  /*   Tunnel(WebPort); */

  LED0.writeSync(GPIO0value); //turn LED on or off
  LED1.writeSync(GPIO1value); //turn LED on or off
  LED2.writeSync(GPIO2value); //turn LED on or off
  LED3.writeSync(GPIO3value); //turn LED on or off
  LED4.writeSync(GPIO4value); //turn LED on or off
  LED5.writeSync(GPIO5value); //turn LED on or off
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

  LED0.writeSync(0); // Turn LED off
  LED0.unexport(); // Unexport LED GPIO to free resources

  LED1.writeSync(0); // Turn LED off
  LED1.unexport(); // Unexport LED GPIO to free resources

  LED2.writeSync(0); // Turn LED off
  LED2.unexport(); // Unexport LED GPIO to free resources

  LED3.writeSync(0); // Turn LED off
  LED3.unexport(); // Unexport LED GPIO to free resources

  LED4.writeSync(0); // Turn LED off
  LED4.unexport(); // Unexport LED GPIO to free resources

  LED5.writeSync(0); // Turn LED off
  LED5.unexport(); // Unexport LED GPIO to free resources

  LED6.writeSync(0); // Turn LED off
  LED6.unexport(); // Unexport LED GPIO to free resources

  LED7.writeSync(0); // Turn LED off
  LED7.unexport(); // Unexport LED GPIO to free resources

  LED8.writeSync(0); // Turn LED off
  LED8.unexport(); // Unexport LED GPIO to free resources

  LED9.writeSync(0); // Turn LED off
  LED9.unexport(); // Unexport LED GPIO to free resources

  LED10.writeSync(0); // Turn LED off
  LED10.unexport(); // Unexport LED GPIO to free resources

  LED11.writeSync(0); // Turn LED off
  LED11.unexport(); // Unexport LED GPIO to free resources

  LED12.writeSync(0); // Turn LED off
  LED12.unexport(); // Unexport LED GPIO to free resources

  LED13.writeSync(0); // Turn LED off
  LED13.unexport(); // Unexport LED GPIO to free resources

  LED14.writeSync(0); // Turn LED off
  LED14.unexport(); // Unexport LED GPIO to free resources

  LED15.writeSync(0); // Turn LED off
  LED15.unexport(); // Unexport LED GPIO to free resources

  LED16.writeSync(0); // Turn LED off
  LED16.unexport(); // Unexport LED GPIO to free resources

  LED17.writeSync(0); // Turn LED off
  LED17.unexport(); // Unexport LED GPIO to free resources

  LED18.writeSync(0); // Turn LED off
  LED18.unexport(); // Unexport LED GPIO to free resources

  LED19.writeSync(0); // Turn LED off
  LED19.unexport(); // Unexport LED GPIO to free resources

  LED20.writeSync(0); // Turn LED off
  LED20.unexport(); // Unexport LED GPIO to free resources

  LED21.writeSync(0); // Turn LED off
  LED21.unexport(); // Unexport LED GPIO to free resources

  LED22.writeSync(0); // Turn LED off
  LED22.unexport(); // Unexport LED GPIO to free resources

  LED23.writeSync(0); // Turn LED off
  LED23.unexport(); // Unexport LED GPIO to free resources

  LED24.writeSync(0); // Turn LED off
  LED24.unexport(); // Unexport LED GPIO to free resources

  LED25.writeSync(0); // Turn LED off
  LED25.unexport(); // Unexport LED GPIO to free resources

  LED26.writeSync(0); // Turn LED off
  LED26.unexport(); // Unexport LED GPIO to free resources

  process.exit(); //exit completely
});

/****** io.socket is the websocket connection to the client's browser********/

io.sockets.on("connection", function (socket) {
  // WebSocket Connection
  console.log("A new client has connectioned. Send LED status");

  socket.emit("GPIO0", GPIO0value);
  socket.emit("GPIO1", GPIO1value);
  socket.emit("GPIO2", GPIO2value);
  socket.emit("GPIO3", GPIO3value);
  socket.emit("GPIO4", GPIO4value);
  socket.emit("GPIO5", GPIO5value);
  socket.emit("GPIO6", GPIO6value);
  socket.emit("GPIO7", GPIO7value);
  socket.emit("GPIO8", GPIO8value);
  socket.emit("GPIO9", GPIO9value);
  socket.emit("GPIO10", GPIO10value);
  socket.emit("GPIO11", GPIO11value);
  socket.emit("GPIO12", GPIO12value);
  socket.emit("GPIO13", GPIO13value);
  socket.emit("GPIO14", GPIO14value);
  socket.emit("GPIO15", GPIO15value);
  socket.emit("GPIO16", GPIO16value);
  socket.emit("GPIO17", GPIO17value);
  socket.emit("GPIO18", GPIO18value);
  socket.emit("GPIO19", GPIO19value);
  socket.emit("GPIO20", GPIO20value);
  socket.emit("GPIO21", GPIO21value);
  socket.emit("GPIO22", GPIO22value);
  socket.emit("GPIO23", GPIO23value);
  socket.emit("GPIO24", GPIO24value);
  socket.emit("GPIO25", GPIO25value);
  socket.emit("GPIO26", GPIO26value);

  // this gets called whenever client presses GPIO12 toggle light button
  socket.on("GPIO0T", function (data) {
    if (GPIO0value) GPIO0value = 0;
    else GPIO0value = 1;
    LED0.writeSync(GPIO0value); //turn LED on or off
    io.emit("GPIO0", GPIO0value); //send button status to ALL clients
  });

  // this gets called whenever client presses GPIO12 toggle light button
  socket.on("GPIO1T", function (data) {
    if (GPIO1value) GPIO1value = 0;
    else GPIO1value = 1;
    LED1.writeSync(GPIO1value); //turn LED on or off
    io.emit("GPIO1", GPIO1value); //send button status to ALL clients
  });

  // this gets called whenever client presses GPIO12 toggle light button
  socket.on("GPIO2T", function (data) {
    if (GPIO2value) GPIO2value = 0;
    else GPIO2value = 1;
    LED2.writeSync(GPIO2value); //turn LED on or off
    io.emit("GPIO2", GPIO2value); //send button status to ALL clients
  });

    // this gets called whenever client presses GPIO13 toggle light button
    socket.on("GPIO3T", function (data) {
      if (GPIO3value) GPIO3value = 0;
      else GPIO3value = 1;
      LED3.writeSync(GPIO3value); //turn LED on or off
      io.emit("GPIO3", GPIO3value); //send button status to ALL clients
    });

      // this gets called whenever client presses GPIO14 toggle light button
  socket.on("GPIO4T", function (data) {
    if (GPIO4value) GPIO4value = 0;
    else GPIO4value = 1;
    LED4.writeSync(GPIO4value); //turn LED on or off
    io.emit("GPIO4", GPIO4value); //send button status to ALL clients
  });

    // this gets called whenever client presses GPIO15 toggle light button
    socket.on("GPIO5T", function (data) {
      if (GPIO5value) GPIO5value = 0;
      else GPIO5value = 1;
      LED5.writeSync(GPIO5value); //turn LED on or off
      io.emit("GPIO5", GPIO5value); //send button status to ALL clients
    });

      // this gets called whenever client presses GPIO16 toggle light button
  socket.on("GPIO6T", function (data) {
    if (GPIO6value) GPIO6value = 0;
    else GPIO6value = 1;
    LED6.writeSync(GPIO6value); //turn LED on or off
    io.emit("GPIO6", GPIO6value); //send button status to ALL clients
  });

  // this gets called whenever client presses GPIO12 toggle light button
  socket.on("GPIO7T", function (data) {
    if (GPIO7value) GPIO7value = 0;
    else GPIO7value = 1;
    LED7.writeSync(GPIO7value); //turn LED on or off
    io.emit("GPIO7", GPIO7value); //send button status to ALL clients
  });

    // this gets called whenever client presses GPIO18 toggle light button
    socket.on("GPIO8T", function (data) {
      if (GPIO8value) GPIO8value = 0;
      else GPIO8value = 1;
      LED8.writeSync(GPIO8value); //turn LED on or off
      io.emit("GPIO8", GPIO8value); //send button status to ALL clients
    });

      // this gets called whenever client presses GPIO19 toggle light button
  socket.on("GPIO9T", function (data) {
    if (GPIO9value) GPIO9value = 0;
    else GPIO9value = 1;
    LED9.writeSync(GPIO9value); //turn LED on or off
    io.emit("GPIO9", GPIO9value); //send button status to ALL clients
  });

    // this gets called whenever client presses GPIO110 toggle light button
    socket.on("GPIO10T", function (data) {
      if (GPIO10value) GPIO10value = 0;
      else GPIO10value = 1;
      LED10.writeSync(GPIO10value); //turn LED on or off
      io.emit("GPIO10", GPIO10value); //send button status to ALL clients
    });

      // this gets called whenever client presses GPIO111 toggle light button
  socket.on("GPIO11T", function (data) {
    if (GPIO11value) GPIO11value = 0;
    else GPIO11value = 1;
    LED11.writeSync(GPIO11value); //turn LED on or off
    io.emit("GPIO11", GPIO11value); //send button status to ALL clients
  });

  // this gets called whenever client presses GPIO12 toggle light button
  socket.on("GPIO12T", function (data) {
    if (GPIO12value) GPIO12value = 0;
    else GPIO12value = 1;
    LED12.writeSync(GPIO12value); //turn LED on or off
    io.emit("GPIO12", GPIO12value); //send button status to ALL clients
  });

  // this gets called whenever client presses GPIO13 toggle light button
  socket.on("GPIO13T", function (data) {
    if (GPIO13value) GPIO13value = 0;
    else GPIO13value = 1;
    LED13.writeSync(GPIO13value); //turn LED on or off
    io.emit("GPIO13", GPIO13value); //send button status to ALL clients
  });

    // this gets called whenever client presses GPIO141 toggle light button
    socket.on("GPIO14T", function (data) {
      if (GPIO14value) GPIO14value = 0;
      else GPIO14value = 1;
      LED14.writeSync(GPIO14value); //turn LED on or off
      io.emit("GPIO14", GPIO14value); //send button status to ALL clients
    });

      // this gets called whenever client presses GPIO151 toggle light button
  socket.on("GPIO15T", function (data) {
    if (GPIO15value) GPIO15value = 0;
    else GPIO15value = 1;
    LED15.writeSync(GPIO15value); //turn LED on or off
    io.emit("GPIO15", GPIO15value); //send button status to ALL clients
  });

  // this gets called whenever client presses GPIO16 toggle light button
  socket.on("GPIO16T", function (data) {
    if (GPIO16value) GPIO16value = 0;
    else GPIO16value = 1;
    LED16.writeSync(GPIO16value); //turn LED on or off
    io.emit("GPIO16", GPIO16value); //send button status to ALL clients
  });

    // this gets called whenever client presses GPIO171 toggle light button
    socket.on("GPIO17T", function (data) {
      if (GPIO17value) GPIO17value = 0;
      else GPIO17value = 1;
      LED17.writeSync(GPIO17value); //turn LED on or off
      io.emit("GPIO17", GPIO17value); //send button status to ALL clients
    });

      // this gets called whenever client presses GPIO181 toggle light button
  socket.on("GPIO18T", function (data) {
    if (GPIO18value) GPIO18value = 0;
    else GPIO18value = 1;
    LED18.writeSync(GPIO18value); //turn LED on or off
    io.emit("GPIO18", GPIO18value); //send button status to ALL clients
  });

  // this gets called whenever client presses GPIO16 toggle light button
  socket.on("GPIO19T", function (data) {
    if (GPIO19value) GPIO19value = 0;
    else GPIO19value = 1;
    LED19.writeSync(GPIO19value); //turn LED on or off
    io.emit("GPIO19", GPIO19value); //send button status to ALL clients
  });

  // this gets called whenever client presses GPIO20 toggle light button
  socket.on("GPIO20T", function (data) {
    if (GPIO20value) GPIO20value = 0;
    else GPIO20value = 1;
    LED20.writeSync(GPIO20value); //turn LED on or off
    io.emit("GPIO20", GPIO20value); //send button status to ALL clients
  });

  // this gets called whenever client presses GPIO21 toggle light button
  socket.on("GPIO21T", function (data) {
    if (GPIO21value) GPIO21value = 0;
    else GPIO21value = 1;
    LED21.writeSync(GPIO21value); //turn LED on or off
    io.emit("GPIO21", GPIO21value); //send button status to ALL clients
  });

  // this gets called whenever client presses GPIO22 toggle light button
  socket.on("GPIO22T", function (data) {
    if (GPIO22value) GPIO22value = 0;
    else GPIO22value = 1;
    LED22.writeSync(GPIO22value); //turn LED on or off
    io.emit("GPIO22", GPIO22value); //send button status to ALL clients
  });

    // this gets called whenever client presses GPIO231 toggle light button
    socket.on("GPIO23T", function (data) {
      if (GPIO23value) GPIO23value = 0;
      else GPIO23value = 1;
      LED23.writeSync(GPIO23value); //turn LED on or off
      io.emit("GPIO23", GPIO23value); //send button status to ALL clients
    });

  // this gets called whenever client presses GPIO24 toggle light button
  socket.on("GPIO24T", function (data) {
    if (GPIO24value) GPIO24value = 0;
    else GPIO24value = 1;
    LED24.writeSync(GPIO24value); //turn LED on or off
    io.emit("GPIO24", GPIO24value); //send button status to ALL clients
  });

    // this gets called whenever client presses GPIO251 toggle light button
    socket.on("GPIO25T", function (data) {
      if (GPIO25value) GPIO25value = 0;
      else GPIO25value = 1;
      LED25.writeSync(GPIO25value); //turn LED on or off
      io.emit("GPIO25", GPIO25value); //send button status to ALL clients
    });

  // this gets called whenever client presses GPIO26 toggle light button
  socket.on("GPIO26T", function (data) {
    if (GPIO26value) GPIO26value = 0;
    else GPIO26value = 1;
    LED26.writeSync(GPIO26value); //turn LED on or off
    io.emit("GPIO26", GPIO26value); //send button status to ALL clients
  });

//----------------------------------------------------------------------------------------------------------------

    // this gets called whenever client presses GPIO0 momentary light button
    socket.on("GPIO0", function (data) {
      GPIO0value = data;
      if (GPIO0value != LED0.readSync()) {
        //only change LED if status has changed
        LED0.writeSync(GPIO0value); //turn LED on or off
        io.emit("GPIO0", GPIO0value); //send button status to ALL clients
      }
    });

  // this gets called whenever client presses GPIO1 momentary light button
  socket.on("GPIO1", function (data) {
    GPIO1value = data;
    if (GPIO1value != LED1.readSync()) {
      //only change LED if status has changed
      LED1.writeSync(GPIO1value); //turn LED on or off
      io.emit("GPIO1", GPIO1value); //send button status to ALL clients
    }
  });

    // this gets called whenever client presses GPIO2 momentary light button
    socket.on("GPIO2", function (data) {
      GPIO2value = data;
      if (GPIO2value != LED2.readSync()) {
        //only change LED if status has changed
        LED2.writeSync(GPIO2value); //turn LED on or off
        io.emit("GPIO2", GPIO2value); //send button status to ALL clients
      }
    });

      // this gets called whenever client presses GPIO3 momentary light button
  socket.on("GPIO3", function (data) {
    GPIO3value = data;
    if (GPIO3value != LED3.readSync()) {
      //only change LED if status has changed
      LED3.writeSync(GPIO3value); //turn LED on or off
      io.emit("GPIO3", GPIO3value); //send button status to ALL clients
    }
  });

    // this gets called whenever client presses GPIO4 momentary light button
    socket.on("GPIO4", function (data) {
      GPIO4value = data;
      if (GPIO4value != LED4.readSync()) {
        //only change LED if status has changed
        LED4.writeSync(GPIO4value); //turn LED on or off
        io.emit("GPIO4", GPIO4value); //send button status to ALL clients
      }
    });

      // this gets called whenever client presses GPIO5 momentary light button
  socket.on("GPIO5", function (data) {
    GPIO5value = data;
    if (GPIO5value != LED5.readSync()) {
      //only change LED if status has changed
      LED5.writeSync(GPIO5value); //turn LED on or off
      io.emit("GPIO5", GPIO5value); //send button status to ALL clients
    }
  });

    // this gets called whenever client presses GPIO6 momentary light button
    socket.on("GPIO6", function (data) {
      GPIO6value = data;
      if (GPIO6value != LED6.readSync()) {
        //only change LED if status has changed
        LED6.writeSync(GPIO6value); //turn LED on or off
        io.emit("GPIO6", GPIO6value); //send button status to ALL clients
      }
    });

  // this gets called whenever client presses GPIO7 momentary light button
  socket.on("GPIO7", function (data) {
    GPIO7value = data;
    if (GPIO7value != LED7.readSync()) {
      //only change LED if status has changed
      LED7.writeSync(GPIO7value); //turn LED on or off
      io.emit("GPIO7", GPIO7value); //send button status to ALL clients
    }
  });

    // this gets called whenever client presses GPIO8 momentary light button
    socket.on("GPIO8", function (data) {
      GPIO8value = data;
      if (GPIO8value != LED8.readSync()) {
        //only change LED if status has changed
        LED8.writeSync(GPIO8value); //turn LED on or off
        io.emit("GPIO8", GPIO8value); //send button status to ALL clients
      }
    });

      // this gets called whenever client presses GPIO9 momentary light button
  socket.on("GPIO9", function (data) {
    GPIO9value = data;
    if (GPIO9value != LED9.readSync()) {
      //only change LED if status has changed
      LED9.writeSync(GPIO9value); //turn LED on or off
      io.emit("GPIO9", GPIO9value); //send button status to ALL clients
    }
  });

    // this gets called whenever client presses GPIO10 momentary light button
    socket.on("GPIO10", function (data) {
      GPIO10value = data;
      if (GPIO10value != LED10.readSync()) {
        //only change LED if status has changed
        LED10.writeSync(GPIO10value); //turn LED on or off
        io.emit("GPIO10", GPIO10value); //send button status to ALL clients
      }
    });

      // this gets called whenever client presses GPIO11 momentary light button
  socket.on("GPIO11", function (data) {
    GPIO11value = data;
    if (GPIO11value != LED11.readSync()) {
      //only change LED if status has changed
      LED11.writeSync(GPIO11value); //turn LED on or off
      io.emit("GPIO11", GPIO11value); //send button status to ALL clients
    }
  });

  // this gets called whenever client presses GPIO12 momentary light button
  socket.on("GPIO12", function (data) {
    GPIO12value = data;
    if (GPIO12value != LED12.readSync()) {
      //only change LED if status has changed
      LED12.writeSync(GPIO12value); //turn LED on or off
      io.emit("GPIO12", GPIO12value); //send button status to ALL clients
    }
  });

  // this gets called whenever client presses GPIO13 momentary light button
  socket.on("GPIO13", function (data) {
    GPIO13value = data;
    if (GPIO13value != LED13.readSync()) {
      //only change LED if status has changed
      LED13.writeSync(GPIO13value); //turn LED on or off
      io.emit("GPIO13", GPIO13value); //send button status to ALL clients
    }
  });

    // this gets called whenever client presses GPIO14 momentary light button
    socket.on("GPIO14", function (data) {
      GPIO14value = data;
      if (GPIO14value != LED14.readSync()) {
        //only change LED if status has changed
        LED14.writeSync(GPIO14value); //turn LED on or off
        io.emit("GPIO14", GPIO14value); //send button status to ALL clients
      }
    });

      // this gets called whenever client presses GPIO15 momentary light button
  socket.on("GPIO15", function (data) {
    GPIO15value = data;
    if (GPIO15value != LED15.readSync()) {
      //only change LED if status has changed
      LED15.writeSync(GPIO15value); //turn LED on or off
      io.emit("GPIO15", GPIO15value); //send button status to ALL clients
    }
  });

  // this gets called whenever client presses GPIO16 momentary light button
  socket.on("GPIO16", function (data) {
    GPIO16value = data;
    if (GPIO16value != LED16.readSync()) {
      //only change LED if status has changed
      LED16.writeSync(GPIO16value); //turn LED on or off
      io.emit("GPIO16", GPIO16value); //send button status to ALL clients
    }
  });

    // this gets called whenever client presses GPIO17 momentary light button
    socket.on("GPIO17", function (data) {
      GPIO17value = data;
      if (GPIO17value != LED17.readSync()) {
        //only change LED if status has changed
        LED17.writeSync(GPIO17value); //turn LED on or off
        io.emit("GPIO17", GPIO17value); //send button status to ALL clients
      }
    });

      // this gets called whenever client presses GPIO18 momentary light button
  socket.on("GPIO18", function (data) {
    GPIO18value = data;
    if (GPIO18value != LED18.readSync()) {
      //only change LED if status has changed
      LED18.writeSync(GPIO18value); //turn LED on or off
      io.emit("GPIO18", GPIO18value); //send button status to ALL clients
    }
  });

  // this gets called whenever client presses GPIO19 momentary light button
  socket.on("GPIO19", function (data) {
    GPIO19value = data;
    if (GPIO19value != LED19.readSync()) {
      //only change LED if status has changed
      LED19.writeSync(GPIO19value); //turn LED on or off
      io.emit("GPIO19", GPIO19value); //send button status to ALL clients
    }
  });

  // this gets called whenever client presses GPIO20 momentary light button
  socket.on("GPIO20", function (data) {
    GPIO20value = data;
    if (GPIO20value != LED20.readSync()) {
      //only change LED if status has changed
      LED20.writeSync(GPIO20value); //turn LED on or off
      io.emit("GPIO20", GPIO20value); //send button status to ALL clients
    }
  });

  // this gets called whenever client presses GPIO21 momentary light button
  socket.on("GPIO21", function (data) {
    GPIO21value = data;
    if (GPIO21value != LED21.readSync()) {
      //only change LED if status has changed
      LED21.writeSync(GPIO21value); //turn LED on or off
      io.emit("GPIO21", GPIO21value); //send button status to ALL clients e
    }
  });

  // this gets called whenever client presses GPIO22 momentary light button
  socket.on("GPIO22", function (data) {
    GPIO22value = data;
    if (GPIO22value != LED22.readSync()) {
      //only change LED if status has changed
      LED22.writeSync(GPIO22value); //turn LED on or off
      io.emit("GPIO22", GPIO22value); //send button status to ALL clients e
    }
  });

    // this gets called whenever client presses GPIO23 momentary light button
    socket.on("GPIO23", function (data) {
      GPIO23value = data;
      if (GPIO23value != LED23.readSync()) {
        //only change LED if status has changed
        LED23.writeSync(GPIO23value); //turn LED on or off
        io.emit("GPIO23", GPIO23value); //send button status to ALL clients
      }
    });
    

  // this gets called whenever client presses GPIO24 momentary light button
  socket.on("GPIO24", function (data) {
    GPIO24value = data;
    if (GPIO24value != LED24.readSync()) {
      //only change LED if status has changed
      LED24.writeSync(GPIO24value); //turn LED on or off
      io.emit("GPIO24", GPIO24value); //send button status to ALL clients e
    }
  });

    // this gets called whenever client presses GPIO25 momentary light button
    socket.on("GPIO25", function (data) {
      GPIO25value = data;
      if (GPIO25value != LED25.readSync()) {
        //only change LED if status has changed
        LED25.writeSync(GPIO25value); //turn LED on or off
        io.emit("GPIO25", GPIO25value); //send button status to ALL clients
      }
    });

  // this gets called whenever client presses GPIO26 momentary light button
  socket.on("GPIO26", function (data) {
    GPIO26value = data;
    if (GPIO26value != LED26.readSync()) {
      //only change LED if status has changed
      LED26.writeSync(GPIO26value); //turn LED on or off
      io.emit("GPIO26", GPIO26value); //send button status to ALL clients
    }
  });

  //Whenever someone disconnects this piece of code executed
  socket.on("disconnect", function () {
    console.log("A user disconnected");
  });
});
