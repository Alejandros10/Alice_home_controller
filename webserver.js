// Importar los módulos necesarios
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const socketIO = require('socket.io');
const Gpio = require('onoff').Gpio;

// Crear objetos GPIO para controlar los pines de la Raspberry Pi
const gpioPins = [new Gpio(17, 'out'), new Gpio(18, 'out'), new Gpio(27, 'out')];

// Inicializar el estado de los pines GPIO
const gpioPinStates = [0, 0, 0];

// Puerto en el que se ejecutará el servidor web
const WebPort = 80;

// Crear un servidor HTTP
const server = http.createServer((req, res) => {
  // Obtener la URL solicitada
  const requestUrl = url.parse(req.url).pathname;
  // Ruta al directorio de archivos estáticos
  const staticDir = path.join(__dirname, 'public');
  // Ruta al archivo solicitado
  const filePath = path.join(staticDir, requestUrl === '/' ? 'index.html' : requestUrl);

  // Leer el archivo solicitado
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('File not found');
    } else {
      res.writeHead(200);
      res.end(data);
    }
  });
});

// Configurar el servidor para escuchar en el puerto especificado
server.listen(WebPort, () => {
  console.log(`Servidor web en ejecución en el puerto ${WebPort}`);
});

// Manejar la señal SIGINT (Ctrl+C) para apagar y liberar los pines GPIO antes de salir
process.on('SIGINT', () => {
  gpioPins.forEach((pin) => pin.unexport());
  process.exit();
});

// Crear una instancia de socket.io para la comunicación en tiempo real
const io = socketIO(server);

// Manejar la conexión de un cliente
io.on('connection', (socket) => {
  // Enviar los valores iniciales de los pines GPIO al cliente
  socket.emit('gpio-states', gpioPinStates);

  // Manejar eventos del cliente cuando se presionan botones
  socket.on('toggle-gpio', (index) => {
    // Cambiar el estado del pin GPIO correspondiente
    gpioPinStates[index] = 1 - gpioPinStates[index];
    gpioPins[index].writeSync(gpioPinStates[index]);

    // Enviar el nuevo estado a todos los clientes conectados
    io.emit('gpio-states', gpioPinStates);
  });
});
