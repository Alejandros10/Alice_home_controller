// Definición de pines

const int sensorPin = 8;     // Pin digital utilizado para leer el sensor de movimiento

const int ledPin = 4;       // Pin digital utilizado para encender un LED cuando se detecte movimiento



void setup() {

  pinMode(sensorPin, INPUT); // Configura el pin del sensor como entrada

  pinMode(ledPin, OUTPUT);   // Configura el pin del LED como salida

  Serial.begin(9600);        // Inicia la comunicación serial a 9600 baudios

}



void loop() {

  int sensorValue = digitalRead(sensorPin); // Lee el valor del sensor de movimiento



  if (sensorValue == HIGH) {

    digitalWrite(ledPin, HIGH);   // Enciende el LED si se detecta movimiento

  } else {

    digitalWrite(ledPin, LOW);    // Apaga el LED si no se detecta movimiento

  }

  

  delay(100); // Pequeña pausa para evitar lecturas erráticas

}


