 /************PROCESS DATA TO/FROM Client****************************/


 var socket = io(); //load socket.io-client and connect to the host that serves the page
 window.addEventListener("load", function() { //when page loads
     if (isMobile.any()) {
         //    alert('Mobile');  
         document.addEventListener("touchstart", ReportTouchStart, false);
         document.addEventListener("touchend", ReportTouchEnd, false);
         document.addEventListener("touchmove", TouchMove, false);
     } else {
         //    alert('Desktop');  
         document.addEventListener("mouseup", ReportMouseUp, false);
         document.addEventListener("mousedown", ReportMouseDown, false);
     }

 });




 //Update gpio feedback when server changes LED state
 socket.on('GPIO4', function(data) {
     //  console.log('GPIO26 function called');
     //  console.log(data);
     var myJSON = JSON.stringify(data);
     //  console.log(myJSON);
     document.getElementById('GPIO4').checked = data;
     //  console.log('GPIO26: '+data.toString());
 });


 //Update gpio feedback when server changes LED state
 socket.on('GPIO17', function(data) {
     //  console.log('GPIO20 function called');
     //  console.log(data);
     var myJSON = JSON.stringify(data);
     // console.log(myJSON);
     document.getElementById('GPIO17').checked = data;
     //  console.log('GPIO20: '+data.toString());
 });



 //Update gpio feedback when server changes LED state
 socket.on('GPIO27', function(data) {
     //  console.log('GPIO21 function called');
     // console.log(data);
     var myJSON = JSON.stringify(data);
     // console.log(myJSON);
     document.getElementById('GPIO27').checked = data;
     // console.log('GPIO21: '+data.toString());
 });



 //Update gpio feedback when server changes LED state
 socket.on('GPIO22', function(data) {
     //  console.log('GPIO16 function called');
     //  console.log(data);
     var myJSON = JSON.stringify(data);
     //  console.log(myJSON);
     document.getElementById('GPIO22').checked = data;
     //  console.log('GPIO16: '+data.toString());
 });


 function ReportTouchStart(e) {
     var y = e.target.previousElementSibling;
     if (y !== null) var x = y.id;
     if (x !== null) {
         // Now we know that x is defined, we are good to go.
         if (x === "GPIO4") {
             //     console.log("GPIO26 toggle");
             socket.emit("GPIO4T"); // send GPIO button toggle to node.js server
         } else if (x === "GPIO17") {
             //     console.log("GPIO20 toggle");
             socket.emit("GPIO17T"); // send GPIO button toggle to node.js server
         } else if (x === "GPIO27") {
             //      console.log("GPIO21 toggle");
             socket.emit("GPIO27"); // send GPIO button toggle to node.js server
         } else if (x === "GPIO22") {
             //    console.log("GPIO16 toggle");
             socket.emit("GPIO22T"); // send GPIO button toggle to node.js server
         }
     }

     if (e.target.id === "GPIO4M") {
         socket.emit("GPIO4", 1);
         document.getElementById('GPIO4').checked = 1;
     } else if (e.target.id === "GPIO17M") {
         //   console.log("GPIO20 pressed");
         socket.emit("GPIO17", 1);
         document.getElementById('GPIO17').checked = 1;
     } else if (e.target.id === "GPIO27M") {
         //  console.log("GPIO21 pressed");
         socket.emit("GPIO27", 1);
         document.getElementById('GPIO27').checked = 1;
     } else if (e.target.id === "GPIO22M") {
         //    console.log("GPIO16 pressed");
         socket.emit("GPIO22", 1);
         document.getElementById('GPIO22').checked = 1;
     }
 }

 function ReportTouchEnd(e) {
     if (e.target.id === "GPIO4M") {
         socket.emit("GPIO4", 0);
         document.getElementById('GPIO4').checked = 0;
     } else if (e.target.id === "GPIO17M") {
         socket.emit("GPIO17", 0);
         document.getElementById('GPIO17').checked = 0;
     } else if (e.target.id === "GPIO27M") {
         socket.emit("GPIO27", 0);
         document.getElementById('GPIO21').checked = 0;
     } else if (e.target.id === "GPIO22M") {
         socket.emit("GPIO22", 0);
         document.getElementById('GPIO22').checked = 0;
     }
 }

 function ReportMouseDown(e) {

     var y = e.target.previousElementSibling;
     if (y !== null) var x = y.id;
     if (x !== null) {
         // Now we know that x is defined, we are good to go.
         if (x === "GPIO4") {
             //     console.log("GPIO26 toggle");
             socket.emit("GPIO4T"); // send GPIO button toggle to node.js server
         } else if (x === "GPIO17") {
             //     console.log("GPIO20 toggle");
             socket.emit("GPIO17T"); // send GPIO button toggle to node.js server
         } else if (x === "GPIO27") {
             //     console.log("GPIO21 toggle");
             socket.emit("GPIO27T"); // send GPIO button toggle to node.js server
         } else if (x === "GPIO21") {
             //     console.log("GPIO16 toggle");
             socket.emit("GPIO21T"); // send GPIO button toggle to node.js server
         }
     }

     if (e.target.id === "GPIO4M") {
         //   console.log("GPIO26 pressed");
         socket.emit("GPIO4", 1);
         document.getElementById('GPIO4').checked = 1;
     } else if (e.target.id === "GPIO17M") {
         //    console.log("GPIO20 pressed");
         socket.emit("GPIO17", 1);
         document.getElementById('GPIO17').checked = 1;
     } else if (e.target.id === "GPIO27M") {
         //    console.log("GPIO21 pressed");
         socket.emit("GPIO27", 1);
         document.getElementById('GPIO27').checked = 1;
     } else if (e.target.id === "GPIO21M") {
         //    console.log("GPIO16 pressed");
         socket.emit("GPIO21", 1);
         document.getElementById('GPIO21').checked = 1;

     }
 }


 function ReportMouseUp(e) {
     if (e.target.id === "GPIO4M") {
         socket.emit("GPIO4", 0);
         document.getElementById('GPIO4').checked = 0;
     } else if (e.target.id === "GPIO17M") {
         socket.emit("GPIO17", 0);
         document.getElementById('GPIO17').checked = 0;
     } else if (e.target.id === "GPIO27M") {
         socket.emit("GPIO27", 0);
         document.getElementById('GPIO27').checked = 0;
     } else if (e.target.id === "GPIO21M") {
         socket.emit("GPIO21", 0);
         document.getElementById('GPIO21').checked = 0;
     }
 }

 function TouchMove(e) {

 }



 /** function to sense if device is a mobile device ***/
 // Reference: https://stackoverflow.com/questions/11381673/detecting-a-mobile-browser

 var isMobile = {
     Android: function() {
         return navigator.userAgent.match(/Android/i);
     },
     BlackBerry: function() {
         return navigator.userAgent.match(/BlackBerry/i);
     },
     iOS: function() {
         return navigator.userAgent.match(/iPhone|iPad|iPod/i);
     },
     Opera: function() {
         return navigator.userAgent.match(/Opera Mini/i);
     },
     Windows: function() {
         return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
     },
     any: function() {
         return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
     }
 };