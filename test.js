// compiled from Hot Cocoa Lisp

var canvas, context;

// (def canvas (first (document.getElementsByTagName "canvas")))

canvas = document["getElementsByTagName"]("canvas")[0];

// (def context (canvas.getContext "2d"))

context = canvas["getContext"]("2d");

// (set canvas.height window.innerHeight)

(canvas["height"] = window["innerHeight"]);

// (set canvas.width window.innerWidth)

(canvas["width"] = window["innerWidth"]);

// (set context.fillStyle "rgb(100,0,0)")

(context["fillStyle"] = "rgb(100,0,0)");

// (context.fillRect 20 20 40 40)

context["fillRect"](20, 20, 40, 40);