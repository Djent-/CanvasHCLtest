(def canvas (first (document.getElementsByTagName "canvas")))
(def context (canvas.getContext "2d"))
(set canvas.height window.innerHeight)
(set canvas.width window.innerWidth)

(set context.fillStyle "rgb(100,0,0)")
(context.fillRect 20 20 40 40)