var http = require('http').createServer(handler); //require http server, and create server with function handler()
var fs = require('fs'); //require filesystem module
var url = require('url');
var path = require('path');
var io = require('socket.io', 'net')(http) //require socket.io module and pass the http object (server)
var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO


//GPIO DEFAULT TUNR OFF LIGHT AND CURR

var GPIO4value = 0; // Turn off the LIzqNoche by default
var GPIO17value = 0; // Turn off the LDerNoche by default
var GPIO27value = 0; // Turn off the LMedio by default
var GPIO22value = 0; // Turn off the LBiblioteca by default
var GPIO5value = 0; // Turn off the LEstudio by default
var GPIO6value = 0; // Turn off the LBano by default
var GPIO13value = 0; // Turn off the LuzEspejoBano by default
var GPIO19value = 0; // Turn off the TIzq by default
var GPIO26value = 0; // Turn off the TDer by default
var GPIO18value = 0; // Turn off the LVirgen by default
var GPIO23value = 0; // Turn off the LPuertaPpl by default
var GPIO24value = 0; // Turn off the Reflectores by default
var GPIO25value = 0; // Turn off the Alarma by default
var GPIO12value = 0; // Turn off the LBTerraza by default
var GPIO16value = 0; // Turn off the LTTerraza by default
var GPIO20value = 0; // Turn off the LPCorredor by default
var GPIO21value = 0; // Turn off the LCorredores by default

//L - LUZ
//T - TOMA

//GPIO PARA HABITACION
var LIzqNoche = new Gpio(4, 'out'); //use GPIO pin 4 as output
var LDerNoche = new Gpio(17, 'out'); //use GPIO pin 17 as output
var LMedio = new Gpio(27, 'out'); //use GPIO pin 27 as output
var LBiblioteca = new Gpio(22, 'out'); //use GPIO pin 22 as output
var LEstudio = new Gpio(5, 'out'); //use GPIO pin 5 as output
var LBano = new Gpio(6, 'out'); //use GPIO pin 6 as output
var LuzEspejoBano = new Gpio(13, 'out'); //use GPIO pin 13 as output
var TIzq = new Gpio(19, 'out'); //use GPIO pin 19 as output
var TDer = new Gpio(26, 'out'); //use GPIO pin 26 as output
var LEstudioRGB = new Gpio(18, 'out'); //use GPIO pin 18 as output

//GPIO PARA EXTERIORES
var LVirgen = new Gpio(23, 'out'); //use GPIO pin 23 as output
var Reflectores = new Gpio(24, 'out'); //use GPIO pin 24 as output
var Alarma = new Gpio(25, 'out'); //use GPIO pin 25 as output
var LBTerraza = new Gpio(12, 'out'); //use GPIO pin 12 as output
var LTTerraza = new Gpio(16, 'out'); //use GPIO pin 26 as output
var LPCorredor = new Gpio(20, 'out'); //use GPIO pin 20 as output
var LCorredores = new Gpio(21, 'out'); //use GPIO pin 21 as output

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
http.listen(WebPort, function() { // This gets call when the web server is first started. GPIO status Off
    LIzqNoche.writeSync(GPIO4value);
    LDerNoche.writeSync(GPIO17value);
    LMedio.writeSync(GPIO27value);
    LBiblioteca.writeSync(GPIO22value);
    LEstudio.writeSync(GPIO5value);
    LBano.writeSync(GPIO6value);
    LuzEspejoBano.writeSync(GPIO13value);
    TIzq.writeSync(GPIO19value);
    TDer.writeSync(GPIO26value);
    LEstudioRGB.writeSync(GPIO18value);
    LVirgen.writeSync(GPIO23value);
    Reflectores.writeSync(GPIO24value);
    Alarma.writeSync(GPIO25value);
    LBTerraza.writeSync(GPIO12value);
    LTTerraza.writeSync(GPIO16value);
    LPCorredor.writeSync(GPIO20value);
    LCorredores.writeSync(GPIO21value);

    console.log('Server running on Port ' + WebPort);
    console.log('LIzqNoche = ' + GPIO4value);
    console.log('LDerNoche = ' + GPIO17value);
    console.log('LMedio = ' + GPIO27value);
    console.log('LBiblioteca = ' + GPIO22value);
    console.log('LEstudio = ' + GPIO5value);
    console.log('LBano = ' + GPIO6value);
    console.log('LuzEspejoBano = ' + GPIO13value);
    console.log('TIzq = ' + GPIO19value);
    console.log('TDer = ' + GPIO26value);
    console.log('LEstudioRGB = ' + GPIO18value);
    console.log('LVirgen = ' + GPIO23value);
    console.log('Reflectores = ' + GPIO24value);
    console.log('Alarma = ' + GPIO25value);
    console.log('LBTerraza = ' + GPIO12value);
    console.log('LTTerraza = ' + GPIO16value);
    console.log('LPCorredor = ' + GPIO20value);
    console.log('LCorredores = ' + GPIO21value);
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

    LIzqNoche.writeSync(0); // Turn  off
    LIzqNoche.unexport(); // Unexport  GPIO to free resources

    LDerNoche.writeSync(0); // Turn  off
    LDerNoche.unexport(); // Unexport  GPIO to free resources

    LMedio.writeSync(0); // Turn  off
    LMedio.unexport(); // Unexport  GPIO to free resources

    LBiblioteca.writeSync(0); // Turn  off
    LBiblioteca.unexport(); // Unexport  GPIO to free resources

    LEstudio.writeSync(0); // Turn  off
    LEstudio.unexport(); // Unexport  GPIO to free resources

    LBano.writeSync(0); // Turn  off
    LBano.unexport(); // Unexport  GPIO to free resources

    LuzEspejoBano.writeSync(0); // Turn  off
    LuzEspejoBano.unexport(); // Unexport  GPIO to free resources

    TIzq.writeSync(0); // Turn  off
    TIzq.unexport(); // Unexport  GPIO to free resources

    TDer.writeSync(0); // Turn  off
    TDer.unexport(); // Unexport  GPIO to free resources

    LEstudioRGB.writeSync(0); // Turn  off
    LEstudioRGB.unexport(); // Unexport  GPIO to free resources

    LVirgen.writeSync(0); // Turn  off
    LVirgen.unexport(); // Unexport  GPIO to free resources

    Reflectores.writeSync(0); // Turn  off
    Reflectores.unexport(); // Unexport  GPIO to free resources

    Alarma.writeSync(0); // Turn  off
    Alarma.unexport(); // Unexport  GPIO to free resources

    LBTerraza.writeSync(0); // Turn  off
    LBTerraza.unexport(); // Unexport  GPIO to free resources

    LTTerraza.writeSync(0); // Turn  off
    LTTerraza.unexport(); // Unexport  GPIO to free resources

    LPCorredor.writeSync(0); // Turn  off
    LPCorredor.unexport(); // Unexport  GPIO to free resources

    LCorredores.writeSync(0); // Turn  off
    LCorredores.unexport(); // Unexport  GPIO to free resources

    process.exit(); //exit completely
});


/****** io.socket is the websocket connection to the client's browser********/

io.sockets.on('connection', function(socket) { // WebSocket Connection
    console.log('A new client has connectioned. Send LED status');
    socket.emit('LIzqNoche', GPIO4value);
    socket.emit('LDerNoche', GPIO17value);
    socket.emit('LMedio', GPIO27value);
    socket.emit('LBiblioteca', GPIO22value);
    socket.emit('LEstudio', GPIO5value);
    socket.emit('LBano', GPIO6value);
    socket.emit('LuzEspejoBano', GPIO13value);
    socket.emit('TIzq', GPIO19value);
    socket.emit('TDer', GPIO26value);
    socket.emit('LEstudioRGB', GPIO18value);
    socket.emit('LVirgen', GPIO23value);
    socket.emit('Reflectores', GPIO24value);
    socket.emit('Alarma', GPIO25value);
    socket.emit('LBTerraza', GPIO12value);
    socket.emit('LTTerraza', GPIO16value);
    socket.emit('LPCorredor', GPIO20value);
    socket.emit('LCorredores', GPIO21value);


    // this gets called whenever client presses GPIO4 toggle light button
    socket.on('GPIO4T', function(data) {
        if (GPIO4value) GPIO4value = 1;
        else GPIO4value = 0;
        console.log('new GPIO4 value=' + GPIO4value);
        LIzqNoche.writeSync(GPIO4value); //turn on or off
        console.log('Send new GPIO4 state to ALL clients');
        io.emit('GPIO4', GPIO4value); //send button status to ALL clients 
    });

    // this gets called whenever client presses GPIO20 toggle light button
    socket.on('GPIO17T', function(data) {
        if (GPIO17value) GPIO17value = 1;
        else GPIO17value = 0;
        console.log('new GPIO17 value=' + GPIO17value);
        LDerNoche.writeSync(GPIO17value); //turn LED on or off
        console.log('Send new GPIO17 state to ALL clients');
        io.emit('GPIO17', GPIO17value); //send button status to ALL clients 
    });

    // this gets called whenever client zpresses GPIO21 toggle light button
    socket.on('GPIO27T', function(data) {
        if (GPIO27value) GPIO27value = 1;
        else GPIO27value = 0;
        console.log('new GPIO27 value=' + GPIO27value);
        LMedio.writeSync(GPIO27value); //turn LED on or off
        console.log('Send new GPIO27 state to ALL clients');
        io.emit('GPIO27', GPIO27value); //send button status to ALL clients 	
    });

    // this gets called whenever client presses GPIO16 toggle light button
    socket.on('GPIO22T', function(data) {
        if (GPIO22value) GPIO22value = 1;
        else GPIO22value = 0;
        console.log('new GPIO22 value=' + GPIO22value);
        LBiblioteca.writeSync(GPIO22value); //turn LED on or off
        console.log('Send new GPIO22 state to ALL clients');
        io.emit('GPIO22', GPIO22value); //send button status to ALL clients 	
    });

    // this gets called whenever client presses GPIO16 toggle light button
    socket.on('GPIO5T', function(data) {
        if (GPIO5value) GPIO5value = 1;
        else GPIO5value = 0;
        console.log('new GPIO5 value=' + GPIO5value);
        LEstudio.writeSync(GPIO5value); //turn LED on or off
        console.log('Send new GPIO5 state to ALL clients');
        io.emit('GPIO16', GPIO5value); //send button status to ALL clients 	
    });


    // this gets called whenever client presses GPIO16 toggle light button
    socket.on('GPIO6T', function(data) {
        if (GPIO6value) GPIO6value = 1;
        else GPIO6value = 0;
        console.log('new GPIO6 value=' + GPIO6value);
        LBano.writeSync(GPIO6value); //turn LED on or off
        console.log('Send new GPIO6 state to ALL clients');
        io.emit('GPIO6', GPIO6value); //send button status to ALL clients 	
    });


    // this gets called whenever client presses GPIO16 toggle light button
    socket.on('GPIO13T', function(data) {
        if (GPIO13value) GPIO13value = 1;
        else GPIO13value = 0;
        console.log('new GPIO13 value=' + GPIO13value);
        LuzEspejoBano.writeSync(GPIO13value); //turn LED on or off
        console.log('Send new GPIO13 state to ALL clients');
        io.emit('GPIO13', GPIO13value); //send button status to ALL clients 	
    });


    // this gets called whenever client presses GPIO16 toggle light button
    socket.on('GPIO19T', function(data) {
        if (GPIO19value) GPIO19value = 1;
        else GPIO19value = 0;
        console.log('new GPIO19 value=' + GPIO19value);
        TIzq.writeSync(GPIO19value); //turn LED on or off
        console.log('Send new GPIO19 state to ALL clients');
        io.emit('GPIO19', GPIO19value); //send button status to ALL clients 	
    });


    // this gets called whenever client presses GPIO16 toggle light button
    socket.on('GPIO26T', function(data) {
        if (GPIO26value) GPIO26value = 1;
        else GPIO26value = 0;
        console.log('new GPIO26 value=' + GPIO26value);
        TDer.writeSync(GPIO26value); //turn LED on or off
        console.log('Send new GPIO26 state to ALL clients');
        io.emit('GPIO26', GPIO26value); //send button status to ALL clients 	
    });


    // this gets called whenever client presses GPIO16 toggle light button
    socket.on('GPIO18T', function(data) {
        if (GPIO18value) GPIO18value = 1;
        else GPIO18value = 0;
        console.log('new GPIO18 value=' + GPIO18value);
        LEstudioRGB.writeSync(GPIO18value); //turn LED on or off
        console.log('Send new GPIO18 state to ALL clients');
        io.emit('GPIO18', GPIO18value); //send button status to ALL clients 	
    });


    // this gets called whenever client presses GPIO16 toggle light button
    socket.on('GPIO23T', function(data) {
        if (GPIO23value) GPIO23value = 1;
        else GPIO23value = 0;
        console.log('new GPIO23 value=' + GPIO23value);
        LVirgen.writeSync(GPIO23value); //turn LED on or off
        console.log('Send new GPIO23 state to ALL clients');
        io.emit('GPIO23', GPIO23value); //send button status to ALL clients 	
    });


    // this gets called whenever client presses GPIO16 toggle light button
    socket.on('GPIO24T', function(data) {
        if (GPIO24value) GPIO24value = 1;
        else GPIO24value = 0;
        console.log('new GPIO24 value=' + GPIO24value);
        Reflectores.writeSync(GPIO24value); //turn LED on or off
        console.log('Send new GPIO24 state to ALL clients');
        io.emit('GPIO24', GPIO24value); //send button status to ALL clients 	
    });


    // this gets called whenever client presses GPIO16 toggle light button
    socket.on('GPIO25T', function(data) {
        if (GPIO25value) GPIO25value = 1;
        else GPIO25value = 0;
        console.log('new GPIO25 value=' + GPIO25value);
        Alarma.writeSync(GPIO25value); //turn LED on or off
        console.log('Send new GPIO25 state to ALL clients');
        io.emit('GPIO25', GPIO25value); //send button status to ALL clients 	
    });


    // this gets called whenever client presses GPIO16 toggle light button
    socket.on('GPIO12T', function(data) {
        if (GPIO12value) GPIO12value = 1;
        else GPIO12value = 0;
        console.log('new GPIO12 value=' + GPIO12value);
        LBTerraza.writeSync(GPIO12value); //turn LED on or off
        console.log('Send new GPIO12 state to ALL clients');
        io.emit('GPIO12', GPIO12value); //send button status to ALL clients 	
    });


    // this gets called whenever client presses GPIO16 toggle light button
    socket.on('GPIO16T', function(data) {
        if (GPIO16value) GPIO16value = 1;
        else GPIO16value = 0;
        console.log('new GPIO16 value=' + GPIO16value);
        LTTerraza.writeSync(GPIO16value); //turn LED on or off
        console.log('Send new GPIO16 state to ALL clients');
        io.emit('GPIO16', GPIO16value); //send button status to ALL clients 	
    });


    // this gets called whenever client presses GPIO16 toggle light button
    socket.on('GPIO20T', function(data) {
        if (GPIO20value) GPIO20value = 1;
        else GPIO20value = 0;
        console.log('new GPIO20 value=' + GPIO20value);
        LPCorredor.writeSync(GPIO20value); //turn LED on or off
        console.log('Send new GPIO20 state to ALL clients');
        io.emit('GPIO20', GPIO20value); //send button status to ALL clients 	
    });


    // this gets called whenever client presses GPIO16 toggle light button
    socket.on('GPIO21T', function(data) {
        if (GPIO21value) GPIO21value = 1;
        else GPIO21value = 0;
        console.log('new GPIO21 value=' + GPIO21value);
        LCorredores.writeSync(GPIO21value); //turn LED on or off
        console.log('Send new GPIO21 state to ALL clients');
        io.emit('GPIO21', GPIO21value); //send button status to ALL clients 	
    });





    // this gets called whenever client presses GPIO26 momentary light button
    socket.on('GPIO4', function(data) {
        GPIO4value = data;
        if (GPIO4value != LIzqNoche.readSync()) { //only change LED if status has changed
            LIzqNoche.writeSync(GPIO4value); //turn LED on or off
            console.log('Send new GPIO4 state to ALL clients');
            io.emit('GPIO4', GPIO4value); //send button status to ALL clients 
        };
    });

    // this gets called whenever client presses GPIO20 momentary light button
    socket.on('GPIO17', function(data) {
        GPIO17value = data;
        if (GPIO17value != LDerNoche.readSync()) { //only change LED if status has changed
            LDerNoche.writeSync(GPIO17value); //turn LED on or off
            console.log('Send new GPIO17 state to ALL clients');
            io.emit('GPIO17', GPIO17value); //send button status to ALL clients 
        };

    });

    // this gets called whenever client presses GPIO21 momentary light button
    socket.on('GPIO27', function(data) {
        GPIO27value = data;
        if (GPIO27value != LMedio.readSync()) { //only change LED if status has changed
            LMedio.writeSync(GPIO27value); //turn LED on or off
            console.log('Send new GPIO27 state to ALL clients');
            io.emit('GPIO27', GPIO27value); //send button status to ALL clients e
        };

    });

    // this gets called whenever client presses GPIO16 momentary light button
    socket.on('GPIO22', function(data) {
        GPIO22value = data;
        if (GPIO22value != LBiblioteca.readSync()) { //only change LED if status has changed
            LBiblioteca.writeSync(GPIO22value); //turn LED on or off
            console.log('Send new GPIO22 state to ALL clients');
            io.emit('GPIO22', GPIO22value); //send button status to ALL clients 
        };

    });

    // this gets called whenever client presses GPIO26 momentary light button
    socket.on('GPIO5', function(data) {
        GPIO5value = data;
        if (GPIO5value != LEstudio.readSync()) { //only change LED if status has changed
            LEstudio.writeSync(GPIO5value); //turn LED on or off
            console.log('Send new GPIO5 state to ALL clients');
            io.emit('GPIO5', GPIO5value); //send button status to ALL clients 
        };
    });

    // this gets called whenever client presses GPIO26 momentary light button
    socket.on('GPIO6', function(data) {
        GPIO6value = data;
        if (GPIO6value != LBano.readSync()) { //only change LED if status has changed
            LBano.writeSync(GPIO6value); //turn LED on or off
            console.log('Send new GPIO6 state to ALL clients');
            io.emit('GPIO6', GPIO6value); //send button status to ALL clients 
        };
    });

    // this gets called whenever client presses GPIO26 momentary light button
    socket.on('GPIO13', function(data) {
        GPIO13value = data;
        if (GPIO13value != LuzEspejoBano.readSync()) { //only change LED if status has changed
            LuzEspejoBano.writeSync(GPIO13value); //turn LED on or off
            console.log('Send new GPIO13 state to ALL clients');
            io.emit('GPIO13', GPIO13value); //send button status to ALL clients 
        };
    });

    // this gets called whenever client presses GPIO26 momentary light button
    socket.on('GPIO19', function(data) {
        GPIO19value = data;
        if (GPIO19value != TIzq.readSync()) { //only change LED if status has changed
            TIzq.writeSync(GPIO19value); //turn LED on or off
            console.log('Send new GPIO19 state to ALL clients');
            io.emit('GPIO19', GPIO19value); //send button status to ALL clients 
        };
    });

    // this gets called whenever client presses GPIO26 momentary light button
    socket.on('GPIO26', function(data) {
        GPIO26value = data;
        if (GPIO26value != TDer.readSync()) { //only change LED if status has changed
            TDer.writeSync(GPIO26value); //turn LED on or off
            console.log('Send new GPIO26 state to ALL clients');
            io.emit('GPIO26', GPIO26value); //send button status to ALL clients 
        };
    });

    // this gets called whenever client presses GPIO26 momentary light button
    socket.on('GPIO18', function(data) {
        GPIO18value = data;
        if (GPIO18value != LEstudioRGB.readSync()) { //only change LED if status has changed
            LEstudioRGB.writeSync(GPIO18value); //turn LED on or off
            console.log('Send new GPIO18 state to ALL clients');
            io.emit('GPIO18', GPIO18value); //send button status to ALL clients 
        };
    });

    // this gets called whenever client presses GPIO26 momentary light button
    socket.on('GPIO23', function(data) {
        GPIO23value = data;
        if (GPIO23value != LVirgen.readSync()) { //only change LED if status has changed
            LVirgen.writeSync(GPIO23value); //turn LED on or off
            console.log('Send new GPIO23 state to ALL clients');
            io.emit('GPIO23', GPIO23value); //send button status to ALL clients 
        };
    });

    // this gets called whenever client presses GPIO26 momentary light button
    socket.on('GPIO24', function(data) {
        GPIO24value = data;
        if (GPIO24value != Reflectores.readSync()) { //only change LED if status has changed
            Reflectores.writeSync(GPIO24value); //turn LED on or off
            console.log('Send new GPIO24 state to ALL clients');
            io.emit('GPIO24', GPIO24value); //send button status to ALL clients 
        };
    });

    // this gets called whenever client presses GPIO26 momentary light button
    socket.on('GPIO25', function(data) {
        GPIO25value = data;
        if (GPIO25value != Alarma.readSync()) { //only change LED if status has changed
            Alarma.writeSync(GPIO25value); //turn LED on or off
            console.log('Send new GPIO25 state to ALL clients');
            io.emit('GPIO25', GPIO25value); //send button status to ALL clients 
        };
    });

    // this gets called whenever client presses GPIO26 momentary light button
    socket.on('GPIO12', function(data) {
        GPIO12value = data;
        if (GPIO12value != LBTerraza.readSync()) { //only change LED if status has changed
            LBTerraza.writeSync(GPIO12value); //turn LED on or off
            console.log('Send new GPIO12 state to ALL clients');
            io.emit('GPIO12', GPIO12value); //send button status to ALL clients 
        };
    });

    // this gets called whenever client presses GPIO26 momentary light button
    socket.on('GPIO16', function(data) {
        GPIO16value = data;
        if (GPIO16value != LTTerraza.readSync()) { //only change LED if status has changed
            LTTerraza.writeSync(GPIO16value); //turn LED on or off
            console.log('Send new GPIO16 state to ALL clients');
            io.emit('GPIO16', GPIO16value); //send button status to ALL clients 
        };
    });

    // this gets called whenever client presses GPIO26 momentary light button
    socket.on('GPIO20', function(data) {
        GPIO20value = data;
        if (GPIO20value != LPCorredor.readSync()) { //only change LED if status has changed
            LPCorredor.writeSync(GPIO20value); //turn LED on or off
            console.log('Send new GPIO20 state to ALL clients');
            io.emit('GPIO20', GPIO20value); //send button status to ALL clients 
        };
    });

    // this gets called whenever client presses GPIO26 momentary light button
    socket.on('GPIO21', function(data) {
        GPIO21value = data;
        if (GPIO21value != LCorredores.readSync()) { //only change LED if status has changed
            LCorredores.writeSync(GPIO21value); //turn LED on or off
            console.log('Send new GPIO21 state to ALL clients');
            io.emit('GPIO21', GPIO21value); //send button status to ALL clients 
        };
    });


    //Whenever someone disconnects this piece of code executed
    socket.on('disconnect', function() {
        console.log('A user disconnected');
    });


});