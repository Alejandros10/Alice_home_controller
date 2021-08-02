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
socket.on('GPIO2', function(data) {
    //  console.log('GPIO2 function called');
    //  console.log(data);
    var myJSON = JSON.stringify(data);
    //  console.log(myJSON);
    document.getElementById('GPIO2').checked = data;
    //  console.log('GPIO26: '+data.toString());
});


function ReportTouchStart(e) {
    var y = e.target.previousElementSibling;
    if (y !== null) var x = y.id;
    if (x !== null) {
        // Now we know that x is defined, we are good to go.
        if (x === "GPIO2") {
            //     console.log("GPIO26 toggle");
            socket.emit("GPIO2T"); // send GPIO button toggle to node.js server
        }
    }

    if (e.target.id === "GPIO2M") {
        socket.emit("GPIO2", 1);
        document.getElementById('GPIO2').checked = 1;
    }
}

function ReportTouchEnd(e) {
    if (e.target.id === "GPIO2M") {
        socket.emit("GPIO2", 0);
        document.getElementById('GPIO2').checked = 0;
    }
}

function ReportMouseDown(e) {

    var y = e.target.previousElementSibling;
    if (y !== null) var x = y.id;
    if (x !== null) {
        // Now we know that x is defined, we are good to go.
        if (x === "GPIO2") {
            //     console.log("GPIO2 toggle");
            socket.emit("GPIO2T"); // send GPIO button toggle to node.js server
        }
    }

    if (e.target.id === "GPIO2M") {
        //   console.log("GPIO2 pressed");
        socket.emit("GPIO2", 1);
        document.getElementById('GPIO2').checked = 1;
    }
}


function ReportMouseUp(e) {
    if (e.target.id === "GPIO2M") {
        socket.emit("GPIO2", 0);
        document.getElementById('GPIO2').checked = 0;
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