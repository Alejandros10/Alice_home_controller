/************PROCESS DATA TO/FROM Client****************************/

var socket = io(); //load socket.io-client and connect to the host that serves the page
window.addEventListener("load", function () {
  
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
socket.on("GPIO0", function (data) {
  /*
    console.log('GPIO0 function called');
    console.log(data); 
  */
  var myJSON = JSON.stringify(data);
  /* console.log(myJSON); */
  document.getElementById("GPIO0").checked = data;
  /* console.log('GPIO0: '+ data.toString()); */
});

//Update gpio feedback when server changes LED state
socket.on("GPIO1", function (data) {
  var myJSON = JSON.stringify(data);
  document.getElementById("GPIO1").checked = data;
});

//Update gpio feedback when server changes LED state
socket.on("GPIO2", function (data) {
  var myJSON = JSON.stringify(data);
  document.getElementById("GPIO2").checked = data;
});

//Update gpio feedback when server changes LED state
socket.on("GPIO3", function (data) {
  var myJSON = JSON.stringify(data);
  document.getElementById("GPIO3").checked = data;
});

//Update gpio feedback when server changes LED state
socket.on("GPIO4", function (data) {
  var myJSON = JSON.stringify(data);
  document.getElementById("GPIO4").checked = data;
});

//Update gpio feedback when server changes LED state
socket.on("GPIO5", function (data) {
  var myJSON = JSON.stringify(data);
  document.getElementById("GPIO5").checked = data;
});

//Update gpio feedback when server changes LED state
socket.on("GPIO6", function (data) {
  var myJSON = JSON.stringify(data);
  document.getElementById("GPIO6").checked = data;
});

//Update gpio feedback when server changes LED state
socket.on("GPIO7", function (data) {
  var myJSON = JSON.stringify(data);
  document.getElementById("GPIO7").checked = data;
});

//Update gpio feedback when server changes LED state
socket.on("GPIO8", function (data) {
  var myJSON = JSON.stringify(data);
  document.getElementById("GPIO8").checked = data;
});

//Update gpio feedback when server changes LED state
socket.on("GPIO9", function (data) {
  var myJSON = JSON.stringify(data);
  document.getElementById("GPIO9").checked = data;
});

//Update gpio feedback when server changes LED state
socket.on("GPIO10", function (data) {
  var myJSON = JSON.stringify(data);
  document.getElementById("GPIO10").checked = data;
});

//Update gpio feedback when server changes LED state
socket.on("GPIO11", function (data) {
  var myJSON = JSON.stringify(data);
  document.getElementById("GPIO11").checked = data;
});

//Update gpio feedback when server changes LED state
socket.on("GPIO12", function (data) {
  var myJSON = JSON.stringify(data);
  document.getElementById("GPIO12").checked = data;
});

//Update gpio feedback when server changes LED state
socket.on("GPIO12", function (data) {
  console.log('gpio12',data)
  const time = new Date();
  const hour = time.getHours()
  console.log(hour);
  hour >= 18 && hour <= 6 ? console.log('en el rango') : console.log('fuera del rango');
});

//Update gpio feedback when server changes LED state
socket.on("GPIO13", function (data) {
  var myJSON = JSON.stringify(data);
  document.getElementById("GPIO13").checked = data;
});

//Update gpio feedback when server changes LED state
socket.on("GPIO14", function (data) {
  var myJSON = JSON.stringify(data);
  document.getElementById("GPIO14").checked = data;
});

//Update gpio feedback when server changes LED state
socket.on("GPIO15", function (data) {
  var myJSON = JSON.stringify(data);
  document.getElementById("GPIO15").checked = data;
});

//Update gpio feedback when server changes LED state
socket.on("GPIO16", function (data) {
  var myJSON = JSON.stringify(data);
  document.getElementById("GPIO16").checked = data;
});

//Update gpio feedback when server changes LED state
socket.on("GPIO17", function (data) {
  var myJSON = JSON.stringify(data);
  document.getElementById("GPIO17").checked = data;
});

//Update gpio feedback when server changes LED state
socket.on("GPIO18", function (data) {
  var myJSON = JSON.stringify(data);
  document.getElementById("GPIO18").checked = data;
});

//Update gpio feedback when server changes LED state
socket.on("GPIO19", function (data) {
  var myJSON = JSON.stringify(data);
  document.getElementById("GPIO19").checked = data;
});

//Update gpio feedback when server changes LED state
socket.on("GPIO20", function (data) {
  var myJSON = JSON.stringify(data);
  document.getElementById("GPIO20").checked = data;
});

//Update gpio feedback when server changes LED state
socket.on("GPIO21", function (data) {
  var myJSON = JSON.stringify(data);
  document.getElementById("GPIO21").checked = data;
});

//Update gpio feedback when server changes LED state
socket.on("GPIO22", function (data) {
  var myJSON = JSON.stringify(data);
  document.getElementById("GPIO22").checked = data;
});

//Update gpio feedback when server changes LED state
socket.on("GPIO23", function (data) {
  var myJSON = JSON.stringify(data);
  document.getElementById("GPIO23").checked = data;
});

//Update gpio feedback when server changes LED state
socket.on("GPIO24", function (data) {
  var myJSON = JSON.stringify(data);
  // console.log(myJSON);
  document.getElementById("GPIO24").checked = data;
});

//Update gpio feedback when server changes LED state
socket.on("GPIO25", function (data) {
  var myJSON = JSON.stringify(data);
  document.getElementById("GPIO25").checked = data;
});

//Update gpio feedback when server changes LED state
socket.on("GPIO26", function (data) {
  var myJSON = JSON.stringify(data);
  document.getElementById("GPIO26").checked = data;
});

function ReportTouchStart(e) {
  var y = e.target.previousElementSibling;
  if (y !== null) var x = y.id;
  if (x !== null) {
    // Now we know that x is defined, we are good to go.
    if (x === "GPIO26") {
      socket.emit("GPIO26T"); // send GPIO button toggle to node.js server
    } else if (x === "GPIO25") {
      socket.emit("GPIO25T"); // send GPIO button toggle to node.js server
    } else if (x === "GPIO24") {
      socket.emit("GPIO24T"); // send GPIO button toggle to node.js server
    } else if (x === "GPIO23") {
      socket.emit("GPIO23T"); // send GPIO button toggle to node.js server
    } else if (x === "GPIOW22") {
      socket.emit("GPIO22T"); // send GPIO button toggle to node.js server
    } else if (x === "GPIO21") {
      socket.emit("GPIO21T"); // send GPIO button toggle to node.js server
    } else if (x === "GPIO20") {
      socket.emit("GPIO20T"); // send GPIO button toggle to node.js server
    } else if (x === "GPIO19") {
      socket.emit("GPIO19T"); // send GPIO button toggle to node.js server
    } else if (x === "GPI18") {
      socket.emit("GPIO18T"); // send GPIO button toggle to node.js server
    } else if (x === "GPIO17") {
      socket.emit("GPIO17T"); // send GPIO button toggle to node.js server
    } else if (x === "GPIO16") {
      socket.emit("GPIO16T"); // send GPIO button toggle to node.js server
    } else if (x === "GPIO15") {
      socket.emit("GPIO15T"); // send GPIO button toggle to node.js server
    } else if (x === "GPIO14") {
      socket.emit("GPIO14T"); // send GPIO button toggle to node.js server
    } else if (x === "GPIO13") {
      socket.emit("GPIO13T"); // send GPIO button toggle to node.js server
    } else if (x === "GPIO12") {
      socket.emit("GPIO12T"); // send GPIO button toggle to node.js server
    } else if (x === "GPIO11") {
      socket.emit("GPIO11T"); // send GPIO button toggle to node.js server
    } else if (x === "GPIO10") {
      socket.emit("GPIO10T"); // send GPIO button toggle to node.js server
    } else if (x === "GPIO9") {
      socket.emit("GPIO9T"); // send GPIO button toggle to node.js server
    } else if (x === "GPIO8") {
      socket.emit("GPIO8T"); // send GPIO button toggle to node.js server
    } else if (x === "GPIO7") {
      socket.emit("GPIO7T"); // send GPIO button toggle to node.js server
    } else if (x === "GPIO6") {
      socket.emit("GPIO6T"); // send GPIO button toggle to node.js server
    } else if (x === "GPIO5") {
      socket.emit("GPIO5T"); // send GPIO button toggle to node.js server
    } else if (x === "GPIO4") {
      socket.emit("GPIO4T"); // send GPIO button toggle to node.js server
    } else if (x === "GPIO3") {
      socket.emit("GPIO3T"); // send GPIO button toggle to node.js server
    } else if (x === "GPIO2") {
      socket.emit("GPIO2T"); // send GPIO button toggle to node.js server
    } else if (x === "GPIO1") {
      socket.emit("GPIO1T"); // send GPIO button toggle to node.js server
    } else if (x === "GPIO0") {
      socket.emit("GPIO0T"); // send GPIO button toggle to node.js server
    }
  }

  if (e.target.id === "GPIO26M") {
    socket.emit("GPIO26", 1);
    document.getElementById("GPIO26").checked = 1;
  } else if (e.target.id === "GPIO25M") {
    socket.emit("GPIO25", 1);
    document.getElementById("GPIO25").checked = 1;
  } else if (e.target.id === "GPIO24M") {
    socket.emit("GPIO24", 1);
    document.getElementById("GPIO24").checked = 1;
  } else if (e.target.id === "GPIO23M") {
    socket.emit("GPIO23", 1);
    document.getElementById("GPIO23").checked = 1;
  } else if (e.target.id === "GPIO22M") {
    socket.emit("GPIO22", 1);
    document.getElementById("GPIO22").checked = 1;
  } else if (e.target.id === "GPIO21M") {
    socket.emit("GPIO21", 1);
    document.getElementById("GPIO21").checked = 1;
  } else if (e.target.id === "GPIO20M") {
    socket.emit("GPIO20", 1);
    document.getElementById("GPIO20").checked = 1;
  } else if (e.target.id === "GPIO19M") {
    socket.emit("GPIO19", 1);
    document.getElementById("GPIO19").checked = 1;
  } else if (e.target.id === "GPIO18M") {
    socket.emit("GPIO18", 1);
    document.getElementById("GPIO18").checked = 1;
  } else if (e.target.id === "GPIO17M") {
    socket.emit("GPIO17", 1);
    document.getElementById("GPIO17").checked = 1;
  } else if (e.target.id === "GPIO16M") {
    socket.emit("GPIO16", 1);
    document.getElementById("GPIO16").checked = 1;
  } else if (e.target.id === "GPIO15M") {
    socket.emit("GPIO15", 1);
    document.getElementById("GPIO15").checked = 1;
  } else if (e.target.id === "GPIO14M") {
    socket.emit("GPIO14", 1);
    document.getElementById("GPIO14").checked = 1;
  } else if (e.target.id === "GPIO13M") {
    socket.emit("GPIO13", 1);
    document.getElementById("GPIO13").checked = 1;
  } else if (e.target.id === "GPIO12M") {
    socket.emit("GPIO12", 1);
    document.getElementById("GPIO12").checked = 1;
  } else if (e.target.id === "GPIO11M") {
    socket.emit("GPIO11", 1);
    document.getElementById("GPIO11").checked = 1;
  } else if (e.target.id === "GPIO10M") {
    socket.emit("GPIO10", 1);
    document.getElementById("GPIO10").checked = 1;
  } else if (e.target.id === "GPIO9M") {
    socket.emit("GPIO9", 1);
    document.getElementById("GPIO9").checked = 1;
  } else if (e.target.id === "GPIO8M") {
    socket.emit("GPIO8", 1);
    document.getElementById("GPIO8").checked = 1;
  } else if (e.target.id === "GPIO7M") {
    socket.emit("GPIO7", 1);
    document.getElementById("GPIO7").checked = 1;
  } else if (e.target.id === "GPIO6M") {
    socket.emit("GPIO6", 1);
    document.getElementById("GPIO6").checked = 1;
  } else if (e.target.id === "GPIO5M") {
    socket.emit("GPIO5", 1);
    document.getElementById("GPIO5").checked = 1;
  } else if (e.target.id === "GPIO4M") {
    socket.emit("GPIO4", 1);
    document.getElementById("GPIO4").checked = 1;
  } else if (e.target.id === "GPIO3M") {
    socket.emit("GPIO3", 1);
    document.getElementById("GPIO3").checked = 1;
  } else if (e.target.id === "GPIO2M") {
    socket.emit("GPIO2", 1);
    document.getElementById("GPIO2").checked = 1;
  } else if (e.target.id === "GPIO1M") {
    socket.emit("GPIO1", 1);
    document.getElementById("GPIO1").checked = 1;
  } else if (e.target.id === "GPIO0M") {
    socket.emit("GPIO0", 1);
    document.getElementById("GPIO0").checked = 1;
  }
}

function ReportTouchEnd(e) {
  if (e.target.id === "GPIO26M") {
    socket.emit("GPIO26", 0);
    document.getElementById("GPIO26").checked = 0;
  } else if (e.target.id === "GPIO25M") {
    socket.emit("GPIO25", 0);
    document.getElementById("GPIO25").checked = 0;
  } else if (e.target.id === "GPIO24M") {
    socket.emit("GPIO24", 0);
    document.getElementById("GPIO24").checked = 0;
  } else if (e.target.id === "GPIO23M") {
    socket.emit("GPIO23", 0);
    document.getElementById("GPIO23").checked = 0;
  } else if (e.target.id === "GPIO22M") {
    socket.emit("GPIO22", 0);
    document.getElementById("GPIO22").checked = 0;
  } else if (e.target.id === "GPIO21M") {
    socket.emit("GPIO21", 0);
    document.getElementById("GPIO21").checked = 0;
  } else if (e.target.id === "GPIO20M") {
    socket.emit("GPIO20", 0);
    document.getElementById("GPIO20").checked = 0;
  } else if (e.target.id === "GPIO19M") {
    socket.emit("GPIO19", 0);
    document.getElementById("GPIO19").checked = 0;
  } else if (e.target.id === "GPIO18M") {
    socket.emit("GPIO18", 0);
    document.getElementById("GPIO18").checked = 0;
  } else if (e.target.id === "GPIO17M") {
    socket.emit("GPIO17", 0);
    document.getElementById("GPIO17").checked = 0;
  } else if (e.target.id === "GPIO16M") {
    socket.emit("GPIO16", 0);
    document.getElementById("GPIO16").checked = 0;
  } else if (e.target.id === "GPIO15M") {
    socket.emit("GPIO15", 0);
    document.getElementById("GPIO15").checked = 0;
  } else if (e.target.id === "GPIO14M") {
    socket.emit("GPIO14", 0);
    document.getElementById("GPIO14").checked = 0;
  } else if (e.target.id === "GPIO13M") {
    socket.emit("GPIO13", 0);
    document.getElementById("GPIO13").checked = 0;
  } else if (e.target.id === "GPIO12M") {
    socket.emit("GPIO12", 0);
    document.getElementById("GPIO12").checked = 0;
  } else if (e.target.id === "GPIO11M") {
    socket.emit("GPIO11", 0);
    document.getElementById("GPIO11").checked = 0;
  } else if (e.target.id === "GPIO10M") {
    socket.emit("GPIO10", 0);
    document.getElementById("GPIO10").checked = 0;
  } else if (e.target.id === "GPIO9M") {
    socket.emit("GPIO9", 0);
    document.getElementById("GPIO9").checked = 0;
  } else if (e.target.id === "GPIO8M") {
    socket.emit("GPIO8", 0);
    document.getElementById("GPIO8").checked = 0;
  } else if (e.target.id === "GPIO7M") {
    socket.emit("GPIO7", 0);
    document.getElementById("GPIO7").checked = 0;
  } else if (e.target.id === "GPIO6M") {
    socket.emit("GPIO6", 0);
    document.getElementById("GPIO6").checked = 0;
  } else if (e.target.id === "GPIO5M") {
    socket.emit("GPIO5", 0);
    document.getElementById("GPIO5").checked = 0;
  } else if (e.target.id === "GPIO4M") {
    socket.emit("GPIO4", 0);
    document.getElementById("GPIO4").checked = 0;
  } else if (e.target.id === "GPIO3M") {
    socket.emit("GPIO3", 0);
    document.getElementById("GPIO3").checked = 0;
  } else if (e.target.id === "GPIO2M") {
    socket.emit("GPIO2", 0);
    document.getElementById("GPIO2").checked = 0;
  } else if (e.target.id === "GPIO1M") {
    socket.emit("GPIO1", 0);
    document.getElementById("GPIO1").checked = 0;
  } else if (e.target.id === "GPIO0M") {
    socket.emit("GPIO0", 0);
    document.getElementById("GPIO0").checked = 0;
  }
}

function ReportMouseDown(e) {
  var y = e.target.previousElementSibling;
  if (y !== null) var x = y.id;
  if (x !== null) {
    // Now we know that x is defined, we are good to go.
    if (x === "GPIO26") {
      socket.emit("GPIO26T"); // send GPIO button toggle to node.js server
    } else if (x === "GPIO25") {
      socket.emit("GPIO25T"); // send GPIO button toggle to node.js server
    } else if (x === "GPIO24") {
      socket.emit("GPIO24T"); // send GPIO button toggle to node.js server
    } else if (x === "GPIO23") {
      socket.emit("GPIO23T"); // send GPIO button toggle to node.js server
    } else if (x === "GPIO22") {
      socket.emit("GPIO22T"); // send GPIO button toggle to node.js server
    } else if (x === "GPIO21") {
      socket.emit("GPIO21T"); // send GPIO button toggle to node.js server
    } else if (x === "GPIO20") {
      socket.emit("GPIO20T"); // send GPIO button toggle to node.js server
    }else if (x === "GPIO19") {
      socket.emit("GPIO19T"); // send GPIO button toggle to node.js server
    }else if (x === "GPIO18") {
      socket.emit("GPIO18T"); // send GPIO button toggle to node.js server
    }else if (x === "GPIO17") {
      socket.emit("GPIO17T"); // send GPIO button toggle to node.js server
    }else if (x === "GPIO16") {
      socket.emit("GPIO16T"); // send GPIO button toggle to node.js server
    }else if (x === "GPIO15") {
      socket.emit("GPIO15T"); // send GPIO button toggle to node.js server
    }else if (x === "GPIO14") {
      socket.emit("GPIO14T"); // send GPIO button toggle to node.js server
    } else if (x === "GPIO13") {
      socket.emit("GPIO13T"); // send GPIO button toggle to node.js server
    }else if (x === "GPIO12") {
      socket.emit("GPIO12T"); // send GPIO button toggle to node.js server
    }else if (x === "GPIO11") {
      socket.emit("GPIO11T"); // send GPIO button toggle to node.js server
    }else if (x === "GPIO10") {
      socket.emit("GPIO10T"); // send GPIO button toggle to node.js server
    }else if (x === "GPIO9") {
      socket.emit("GPIO9T"); // send GPIO button toggle to node.js server
    }else if (x === "GPIO8") {
      socket.emit("GPIO8T"); // send GPIO button toggle to node.js server
    } else if (x === "GPIO7") {
      socket.emit("GPIO7T"); // send GPIO button toggle to node.js server
    }else if (x === "GPIO6") {
      socket.emit("GPIO6T"); // send GPIO button toggle to node.js server
    }else if (x === "GPIO5") {
      socket.emit("GPIO5T"); // send GPIO button toggle to node.js server
    }else if (x === "GPIO4") {
      socket.emit("GPIO4T"); // send GPIO button toggle to node.js server
    }else if (x === "GPIO3") {
      socket.emit("GPIO3T"); // send GPIO button toggle to node.js server
    } else if (x === "GPIO2") {
      socket.emit("GPIO2T"); // send GPIO button toggle to node.js server
    }else if (x === "GPIO1") {
      socket.emit("GPIO1T"); // send GPIO button toggle to node.js server
    } else if (x === "GPIO0") {
      socket.emit("GPIO0T"); // send GPIO button toggle to node.js server
    }
  }

  if (e.target.id === "GPIO26M") {
    socket.emit("GPIO26", 1);
    document.getElementById("GPIO26").checked = 1;
  } else if (e.target.id === "GPIO25M") {
    socket.emit("GPIO25", 1);
    document.getElementById("GPIO25").checked = 1;
  } else if (e.target.id === "GPIO24M") {
    socket.emit("GPIO24", 1);
    document.getElementById("GPIO24").checked = 1;
  } else if (e.target.id === "GPIO23M") {
    socket.emit("GPIO23", 1);
    document.getElementById("GPIO23").checked = 1;
  } else if (e.target.id === "GPIO22M") {
    socket.emit("GPIO22", 1);
    document.getElementById("GPIO22").checked = 1;
  } else if (e.target.id === "GPIO21M") {
    socket.emit("GPIO21", 1);
    document.getElementById("GPIO21").checked = 1;
  } else if (e.target.id === "GPIO19M") {
    socket.emit("GPIO19", 1);
    document.getElementById("GPIO19").checked = 1;
  } else if (e.target.id === "GPIO18M") {
    socket.emit("GPIO18", 1);
    document.getElementById("GPIO18").checked = 1;
  } else if (e.target.id === "GPIO17M") {
    socket.emit("GPIO17", 1);
    document.getElementById("GPIO17").checked = 1;
  } else if (e.target.id === "GPIO16M") {
    socket.emit("GPIO16", 1);
    document.getElementById("GPIO16").checked = 1;
  } else if (e.target.id === "GPIO15M") {
    socket.emit("GPIO15", 1);
    document.getElementById("GPIO15").checked = 1;
  } else if (e.target.id === "GPIO14M") {
    socket.emit("GPIO14", 1);
    document.getElementById("GPIO14").checked = 1;
  } else if (e.target.id === "GPIO13M") {
    socket.emit("GPIO13", 1);
    document.getElementById("GPIO13").checked = 1;
  } else if (e.target.id === "GPIO12M") {
    socket.emit("GPIO12", 1);
    document.getElementById("GPIO12").checked = 1;
  } else if (e.target.id === "GPIO11M") {
    socket.emit("GPIO11", 1);
    document.getElementById("GPIO11").checked = 1;
  } else if (e.target.id === "GPIO10M") {
    socket.emit("GPIO10", 1);
    document.getElementById("GPIO10").checked = 1;
  }  else if (e.target.id === "GPIO9M") {
    socket.emit("GPIO9", 1);
    document.getElementById("GPIO9").checked = 1;
  } else if (e.target.id === "GPIO8M") {
    socket.emit("GPIO8", 1);
    document.getElementById("GPIO8").checked = 1;
  } else if (e.target.id === "GPIO7M") {
    socket.emit("GPIO7", 1);
    document.getElementById("GPIO7").checked = 1;
  } else if (e.target.id === "GPIO6M") {
    socket.emit("GPIO6", 1);
    document.getElementById("GPIO6").checked = 1;
  } else if (e.target.id === "GPIO5M") {
    socket.emit("GPIO5", 1);
    document.getElementById("GPIO5").checked = 1;
  } else if (e.target.id === "GPIO4M") {
    socket.emit("GPIO4", 1);
    document.getElementById("GPIO4").checked = 1;
  } else if (e.target.id === "GPIO3M") {
    socket.emit("GPIO3", 1);
    document.getElementById("GPIO3").checked = 1;
  } else if (e.target.id === "GPIO2M") {
    socket.emit("GPIO2", 1);
    document.getElementById("GPIO2").checked = 1;
  } else if (e.target.id === "GPIO1M") {
    socket.emit("GPIO1", 1);
    document.getElementById("GPIO1").checked = 1;
  } else if (e.target.id === "GPIO0M") {
    socket.emit("GPIO0", 1);
    document.getElementById("GPIO0").checked = 1;
  }
}

function ReportMouseUp(e) {
  if (e.target.id === "GPIO26M") {
    socket.emit("GPIO26", 0);
    document.getElementById("GPIO26").checked = 0;
  } else if (e.target.id === "GPIO25M") {
    socket.emit("GPIO25", 0);
    document.getElementById("GPIO25").checked = 0;
  } else if (e.target.id === "GPIO24M") {
    socket.emit("GPIO24", 0);
    document.getElementById("GPIO24").checked = 0;
  } else if (e.target.id === "GPIO23M") {
    socket.emit("GPIO23", 0);
    document.getElementById("GPIO23").checked = 0;
  } else if (e.target.id === "GPIO22M") {
    socket.emit("GPIO22", 0);
    document.getElementById("GPIO22").checked = 0;
  } else if (e.target.id === "GPIO21M") {
    socket.emit("GPIO21", 0);
    document.getElementById("GPIO21").checked = 0;
  } else if (e.target.id === "GPIO20M") {
    socket.emit("GPIO20", 0);
    document.getElementById("GPIO20").checked = 0;
  } else if (e.target.id === "GPIO19M") {
    socket.emit("GPIO19", 0);
    document.getElementById("GPIO19").checked = 0;
  } else if (e.target.id === "GPIO18M") {
    socket.emit("GPIO18", 0);
    document.getElementById("GPIO18").checked = 0;
  } else if (e.target.id === "GPIO17M") {
    socket.emit("GPIO17", 0);
    document.getElementById("GPIO17").checked = 0;
  } else if (e.target.id === "GPIO16M") {
    socket.emit("GPIO16", 0);
    document.getElementById("GPIO16").checked = 0;
  }  else if (e.target.id === "GPIO15M") {
    socket.emit("GPIO15", 0);
    document.getElementById("GPIO15").checked = 0;
  } else if (e.target.id === "GPIO14M") {
    socket.emit("GPIO14", 0);
    document.getElementById("GPIO14").checked = 0;
  } else if (e.target.id === "GPIO13M") {
    socket.emit("GPIO13", 0);
    document.getElementById("GPIO13").checked = 0;
  } else if (e.target.id === "GPIO12M") {
    socket.emit("GPIO12", 0);
    document.getElementById("GPIO12").checked = 0;
  } else if (e.target.id === "GPIO11M") {
    socket.emit("GPIO11", 0);
    document.getElementById("GPIO11").checked = 0;
  } else if (e.target.id === "GPIO10M") {
    socket.emit("GPIO10", 0);
    document.getElementById("GPIO10").checked = 0;
  } else if (e.target.id === "GPIO9M") {
    socket.emit("GPIO9", 0);
    document.getElementById("GPIO9").checked = 0;
  } else if (e.target.id === "GPIO8M") {
    socket.emit("GPIO8", 0);
    document.getElementById("GPIO8").checked = 0;
  } else if (e.target.id === "GPIO7M") {
    socket.emit("GPIO7", 0);
    document.getElementById("GPIO7").checked = 0;
  }  else if (e.target.id === "GPIO6M") {
    socket.emit("GPIO6", 0);
    document.getElementById("GPIO6").checked = 0;
  } else if (e.target.id === "GPIO5M") {
    socket.emit("GPIO5", 0);
    document.getElementById("GPIO5").checked = 0;
  } else if (e.target.id === "GPIO4M") {
    socket.emit("GPIO4", 0);
    document.getElementById("GPIO4").checked = 0;
  } else if (e.target.id === "GPIO3M") {
    socket.emit("GPIO3", 0);
    document.getElementById("GPIO3").checked = 0;
  } else if (e.target.id === "GPIO2M") {
    socket.emit("GPIO2", 0);
    document.getElementById("GPIO2").checked = 0;
  } else if (e.target.id === "GPIO1M") {
    socket.emit("GPIO1", 0);
    document.getElementById("GPIO1").checked = 0;
  } else if (e.target.id === "GPIO0M") {
    socket.emit("GPIO0", 0);
    document.getElementById("GPIO0").checked = 0;
  }
}

function TouchMove(e) { }

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