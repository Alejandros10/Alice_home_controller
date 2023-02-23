const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const SerialPort = require('serialport');
const Readline = SerialPort.parsers.Readline;
const port = new SerialPort('/dev/ttyACM0', {
  baudRate: 9600
});
const parser = new Readline();
port.pipe(parser);

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/arduino.html');
});

io.on('connection', socket => {
  console.log('Client connected');
  socket.on('arduino', data => {
    port.write(data + '\n');
  });
  parser.on('data', data => {
    socket.emit('arduino', data);
  });
});

server.listen(3000, () => {
  console.log('Listening on *:3000');
});