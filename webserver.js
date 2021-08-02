var http = require('http').createServer(handler); //require http server, and create server with function handler()
var fs = require('fs'); //require filesystem module
var url = require('url');
var path = require('path');
var io = require('socket.io', 'net')(http) //require socket.io module and pass the http object (server)
var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO

//Interior vbls
var LDerNoche = new Gpio(2, 'out'); //use GPIO pin 26 as output
var GPIO2value = 0; // Turn off the LDerNoche by default

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
http.listen(WebPort, function() { // This gets call when the web server is first started.
    LDerNoche.writeSync(GPIO2value); //turn LDerNoche on or off
    console.log('GPIO2 = ' + GPIO2value);
    console.log('Server running on Port ' + WebPort);
    console.log('GPIO2 = ' + GPIO2value);
});



// function handler is called whenever a client makes an http request to the server
// such as requesting a web page.
function handler(req, res) {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    console.log('filename=' + filename);
    var extname = path.extname(filename);
    if (filename == './') {
        console.log('retrieving default index.html file');
        filename = './index.html';
    }

    // Initial content type
    var contentType = 'text/html';

    // Check ext and set content type
    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
        case '.ico':
            contentType = 'image/png';
            break;
    }



    fs.readFile(__dirname + '/public/' + filename, function(err, content) {
        if (err) {
            console.log('File not found. Filename=' + filename);
            fs.readFile(__dirname + '/public/404.html', function(err, content) {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                return res.end(content, 'utf'); //display 404 on error
            });
        } else {
            // Success
            res.writeHead(200, { 'Content-Type': contentType });
            return res.end(content, 'utf8');
        }

    });
}


// Execute this when web server is terminated
process.on('SIGINT', function() { //on ctrl+c
    LDerNoche.writeSync(0); // Turn LED off
    LDerNoche.unexport(); // Unexport LED GPIO to free resources
    process.exit(); //exit completely
});


/****** io.socket is the websocket connection to the client's browser********/

io.sockets.on('connection', function(socket) { // WebSocket Connection
    console.log('A new client has connectioned. Send LED status');
    console.log(GPIO2value);
    socket.emit('GPIO2', GPIO2value);

    // this gets called whenever client presses GPIO26 toggle light button
    socket.on('GPIO2T', function(data) {
        if (GPIO2value) GPIO2value = 0;
        else GPIO2value = 1;
        console.log('new GPIO2 value=' + GPIO2value);
        LDerNoche.writeSync(GPIO2value); //turn LED on or off
        console.log('Send new GPIO2 state to ALL clients');
        io.emit('GPIO2', GPIO2value); //send button status to ALL clients 
    });


    // this gets called whenever client presses GPIO26 momentary light button
    socket.on('GPIO2', function(data) {
        GPIO2value = data;
        if (GPIO2value != LDerNoche.readSync()) { //only change LED if status has changed
            LDerNoche.writeSync(GPIO2value); //turn LED on or off
            console.log('Send new GPIO2 state to ALL clients');
            io.emit('GPIO2', GPIO2value); //send button status to ALL clients 
        };
    });


    //Whenever someone disconnects this piece of code executed
    socket.on('disconnect', function() {
        console.log('A user disconnected');
    });


});