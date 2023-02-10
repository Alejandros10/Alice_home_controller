/************PROCESS DATA TO/FROM Client****************************/

var socket = io(); //load socket.io-client and connect to the host that serves the page
window.addEventListener("load", function () {
  //when page loads
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
socket.on("GPIO7", function (data) {
  //  console.log('GPIO7 function called');
  //  console.log(data);
  var myJSON = JSON.stringify(data);
  //  console.log(myJSON);
  document.getElementById("GPIO7").checked = data;
  //  console.log('GPIO7: '+data.toString());
});

//Update gpio feedback when server changes LED state
socket.on("GPIO12", function (data) {
  //  console.log('GPIO12 function called');
  //  console.log(data);
  var myJSON = JSON.stringify(data);
  //  console.log(myJSON);
  document.getElementById("GPIO12").checked = data;
  //  console.log('GPIO12: '+data.toString());
});

//Update gpio feedback when server changes LED state
socket.on("GPIO13", function (data) {
  //  console.log('GPIO13 function called');
  //  console.log(data);
  var myJSON = JSON.stringify(data);
  //  console.log(myJSON);
  document.getElementById("GPIO13").checked = data;
  //  console.log('GPIO13: '+data.toString());
});

//Update gpio feedback when server changes LED state
socket.on("GPIO16", function (data) {
  //  console.log('GPIO16 function called');
  //  console.log(data);
  var myJSON = JSON.stringify(data);
  //  console.log(myJSON);
  document.getElementById("GPIO16").checked = data;
  //  console.log('GPIO16: '+data.toString());
});

//Update gpio feedback when server changes LED state
socket.on("GPIO19", function (data) {
  //  console.log('GPIO19 function called');
  //  console.log(data);
  var myJSON = JSON.stringify(data);
  //  console.log(myJSON);
  document.getElementById("GPIO19").checked = data;
  //  console.log('GPIO19: '+data.toString());
});


//Update gpio feedback when server changes LED state
socket.on("GPIO20", function (data) {
  //  console.log('GPIO20 function called');
  //  console.log(data);
  var myJSON = JSON.stringify(data);
  // console.log(myJSON);
  document.getElementById("GPIO20").checked = data;
  //  console.log('GPIO20: '+data.toString());
});

//Update gpio feedback when server changes LED state
socket.on("GPIO21", function (data) {
  //  console.log('GPIO21 function called');
  // console.log(data);
  var myJSON = JSON.stringify(data);
  // console.log(myJSON);
  document.getElementById("GPIO21").checked = data;
  // console.log('GPIO21: '+data.toString());
});

//Update gpio feedback when server changes LED state
socket.on("GPIO24", function (data) {
  //  console.log('GPIO24 function called');
  // console.log(data);
  var myJSON = JSON.stringify(data);
  // console.log(myJSON);
  document.getElementById("GPIO24").checked = data;
  // console.log('GPIO24: '+data.toString());
});

//Update gpio feedback when server changes LED state
socket.on("GPIO26", function (data) {
  //  console.log('GPIO26 function called');
  //  console.log(data);
  var myJSON = JSON.stringify(data);
  //  console.log(myJSON);
  document.getElementById("GPIO26").checked = data;
  //  console.log('GPIO26: '+data.toString());
});

function ReportTouchStart(e) {
  var y = e.target.previousElementSibling;
  if (y !== null) var x = y.id;
  if (x !== null) {
    // Now we know that x is defined, we are good to go.
    if (x === "GPIO26") {
      //     console.log("GPIO26 toggle");
      socket.emit("GPIO26T"); // send GPIO button toggle to node.js server
    } else if (x === "GPIO20") {
      //     console.log("GPIO20 toggle");
      socket.emit("GPIO20T"); // send GPIO button toggle to node.js server
    } else if (x === "GPIO21") {
      //      console.log("GPIO21 toggle");
      socket.emit("GPIO21T"); // send GPIO button toggle to node.js server
    } else if (x === "GPIO16") {
      //    console.log("GPIO16 toggle");
      socket.emit("GPIO16T"); // send GPIO button toggle to node.js server
    } else if (x === "GPIO12") {
      //    console.log("GPIO12 toggle");
      socket.emit("GPIO12T"); // send GPIO button toggle to node.js server
    }
    else if (x === "GPIO19") {
      //    console.log("GPIO19 toggle");
      socket.emit("GPIO19T"); // send GPIO button toggle to node.js server
    }
    else if (x === "GPIO24") {
      //    console.log("GPIO24 toggle");
      socket.emit("GPIO24T"); // send GPIO button toggle to node.js server
    }
    else if (x === "GPIO13") {
      //    console.log("GPIO13 toggle");
      socket.emit("GPIO13T"); // send GPIO button toggle to node.js server
    }
    else if (x === "GPIO7") {
      //    console.log("GPIO7 toggle");
      socket.emit("GPIO7T"); // send GPIO button toggle to node.js server
    }
  }

  if (e.target.id === "GPIO26M") {
    socket.emit("GPIO26", 1);
    document.getElementById("GPIO26").checked = 1;
  } else if (e.target.id === "GPIO20M") {
    //   console.log("GPIO20 pressed");
    socket.emit("GPIO20", 1);
    document.getElementById("GPIO20").checked = 1;
  } else if (e.target.id === "GPIO21M") {
    //  console.log("GPIO21 pressed");
    socket.emit("GPIO21", 1);
    document.getElementById("GPIO21").checked = 1;
  } else if (e.target.id === "GPIO16M") {
    //    console.log("GPIO16 pressed");
    socket.emit("GPIO16", 1);
    document.getElementById("GPIO16").checked = 1;
  } else if (e.target.id === "GPIO12M") {
    //    console.log("GPIO16 pressed");
    socket.emit("GPIO12", 1);
    document.getElementById("GPIO12").checked = 1;
  }
  else if (e.target.id === "GPIO13M") {
    //    console.log("GPIO13 pressed");
    socket.emit("GPIO13", 1);
    document.getElementById("GPIO13").checked = 1;
  }
  else if (e.target.id === "GPIO19M") {
    //    console.log("GPIO19 pressed");
    socket.emit("GPIO19", 1);
    document.getElementById("GPIO19").checked = 1;
  }
  else if (e.target.id === "GPIO24M") {
    //    console.log("GPIO24 pressed");
    socket.emit("GPIO24", 1);
    document.getElementById("GPIO24").checked = 1;
  }
  else if (e.target.id === "GPIO7M") {
    //    console.log("GPIO24 pressed");
    socket.emit("GPIO7", 1);
    document.getElementById("GPIO7").checked = 1;
  }
}

function ReportTouchEnd(e) {
  if (e.target.id === "GPIO26M") {
    socket.emit("GPIO26", 0);
    document.getElementById("GPIO26").checked = 0;
  } else if (e.target.id === "GPIO20M") {
    socket.emit("GPIO20", 0);
    document.getElementById("GPIO20").checked = 0;
  } else if (e.target.id === "GPIO21M") {
    socket.emit("GPIO21", 0);
    document.getElementById("GPIO21").checked = 0;
  } else if (e.target.id === "GPIO16M") {
    socket.emit("GPIO16", 0);
    document.getElementById("GPIO16").checked = 0;
  } else if (e.target.id === "GPIO12M") {
    socket.emit("GPIO12", 0);
    document.getElementById("GPIO12").checked = 0;
  } else if (e.target.id === "GPIO19M") {
    socket.emit("GPIO19", 0);
    document.getElementById("GPIO19").checked = 0;
  } else if (e.target.id === "GPIO24M") {
    socket.emit("GPIO24", 0);
    document.getElementById("GPIO24").checked = 0;
  } else if (e.target.id === "GPIO13M") {
    socket.emit("GPIO13", 0);
    document.getElementById("GPIO13").checked = 0;
  } else if (e.target.id === "GPIO7M") {
    socket.emit("GPIO7", 0);
    document.getElementById("GPIO7").checked = 0;
  }
}

function ReportMouseDown(e) {
  var y = e.target.previousElementSibling;
  if (y !== null) var x = y.id;
  if (x !== null) {
    // Now we know that x is defined, we are good to go.
    if (x === "GPIO26") {
      //     console.log("GPIO26 toggle");
      socket.emit("GPIO26T"); // send GPIO button toggle to node.js server
    } else if (x === "GPIO20") {
      //     console.log("GPIO20 toggle");
      socket.emit("GPIO20T"); // send GPIO button toggle to node.js server
    } else if (x === "GPIO21") {
      //     console.log("GPIO21 toggle");
      socket.emit("GPIO21T"); // send GPIO button toggle to node.js server
    } else if (x === "GPIO16") {
      //     console.log("GPIO16 toggle");
      socket.emit("GPIO16T"); // send GPIO button toggle to node.js server
    } else if (x === "GPIO12") {
      //     console.log("GPIO12 toggle");
      socket.emit("GPIO12T"); // send GPIO button toggle to node.js server
    } else if (x === "GPIO19") {
      //     console.log("GPIO19 toggle");
      socket.emit("GPIO19T"); // send GPIO button toggle to node.js server
    } else if (x === "GPIO24") {
      //     console.log("GPIO24 toggle");
      socket.emit("GPIO24T"); // send GPIO button toggle to node.js server
    } else if (x === "GPIO13") {
      //     console.log("GPIO13 toggle");
      socket.emit("GPIO13T"); // send GPIO button toggle to node.js server
    } else if (x === "GPIO7") {
      //     console.log("GPIO7 toggle");
      socket.emit("GPIO7T"); // send GPIO button toggle to node.js server
    }
  }

  if (e.target.id === "GPIO26M") {
    //   console.log("GPIO26 pressed");
    socket.emit("GPIO26", 1);
    document.getElementById("GPIO26").checked = 1;
  } else if (e.target.id === "GPIO20M") {
    //    console.log("GPIO20 pressed");
    socket.emit("GPIO20", 1);
    document.getElementById("GPIO20").checked = 1;
  } else if (e.target.id === "GPIO21M") {
    //    console.log("GPIO21 pressed");
    socket.emit("GPIO21", 1);
    document.getElementById("GPIO21").checked = 1;
  } else if (e.target.id === "GPIO16M") {
    //    console.log("GPIO16 pressed");
    socket.emit("GPIO16", 1);
  } else if (e.target.id === "GPIO12M") {
    //    console.log("GPIO12 pressed");
    socket.emit("GPIO12", 1);
  } else if (e.target.id === "GPIO13M") {
    //    console.log("GPIO13 pressed");
    socket.emit("GPIO13", 1);
  } else if (e.target.id === "GPIO19M") {
    //    console.log("GPIO19 pressed");
    socket.emit("GPIO19", 1);
  } else if (e.target.id === "GPIO24M") {
    //    console.log("GPIO24 pressed");
    socket.emit("GPIO24", 1);
  } else if (e.target.id === "GPIO7M") {
    //    console.log("GPIO7 pressed");
    socket.emit("GPIO7", 1);
  }
}

function ReportMouseUp(e) {
  if (e.target.id === "GPIO26M") {
    socket.emit("GPIO26", 0);
    document.getElementById("GPIO26").checked = 0;
  } else if (e.target.id === "GPIO20M") {
    socket.emit("GPIO20", 0);
    document.getElementById("GPIO20").checked = 0;
  } else if (e.target.id === "GPIO21M") {
    socket.emit("GPIO21", 0);
    document.getElementById("GPIO21").checked = 0;
  } else if (e.target.id === "GPIO16M") {
    socket.emit("GPIO16", 0);
    document.getElementById("GPIO16").checked = 0;
  } else if (e.target.id === "GPIO12M") {
    socket.emit("GPIO12", 0);
    document.getElementById("GPIO12").checked = 0;
  } else if (e.target.id === "GPIO13M") {
    socket.emit("GPIO13", 0);
    document.getElementById("GPIO13").checked = 0;
  } else if (e.target.id === "GPIO19M") {
    socket.emit("GPIO19", 0);
    document.getElementById("GPIO19").checked = 0;
  } else if (e.target.id === "GPIO24M") {
    socket.emit("GPIO24", 0);
    document.getElementById("GPIO24").checked = 0;
  } else if (e.target.id === "GPIO7M") {
    socket.emit("GPIO7", 0);
    document.getElementById("GPIO7").checked = 0;
  }
}

function TouchMove(e) {}

/** function to sense if device is a mobile device ***/
// Reference: https://stackoverflow.com/questions/11381673/detecting-a-mobile-browser

var isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return (
      navigator.userAgent.match(/IEMobile/i) ||
      navigator.userAgent.match(/WPDesktop/i)
    );
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};
