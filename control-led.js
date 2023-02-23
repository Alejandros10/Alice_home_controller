const SerialPort = require('serialport');

// Configuración del puerto serie
const port = new SerialPort('/dev/ttyACM0', { baudRate: 9600 });

// Encender el LED conectado al pin 13
port.write('1');
setTimeout(() => {
    // Apagar el LED conectado al pin 13
    port.write('0');
}, 1000);