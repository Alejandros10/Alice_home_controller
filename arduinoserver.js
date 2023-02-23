const express = require('express');
const SerialPort = require('serialport');

// Configuración del puerto serie
const port = new SerialPort('/dev/ttyACM0', { baudRate: /dev/ttyACM0 });

// Creación del servidor Express
const app = express();

// Manejador de la ruta '/led/on'
app.get('/led/on', (req, res) => {
    port.write('1');
    res.send('LED encendido');
});

// Manejdor de la ruta '/led/off'
app.get('/led/off', (req, res) => {
port.write('0');
res.send('LED apagado');
});

// Inicio del servidor
app.listen(3000, () => {
console.log('Servidor web iniciado en el puerto 3000');
});