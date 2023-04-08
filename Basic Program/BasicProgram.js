// Declare Variables
const FPS = 30
let bs = 30
let bx, by
let xv, yv
let canvas, context

//Load Canvas
canvas = document.getElementById('gameCanvas')
context = canvas.getContext('2d')

//Set up Interval (Game Loop)
setInterval(update, 1000 / FPS)

//Ball Starting Position
bx = canvas.width / 2
by = canvas.height / 2

//Random Ball Starting Speed (Between 25 - 100 PPS)
xv = Math.floor(Math.random() * 76 + 25) / FPS
yv = Math.floor(Math.random() * 76 + 25) / FPS

//Random Ball Direction
if (Math.floor((Math.random() * 2)) == 0) {
    xv = -xv
}
if (Math.floor((Math.random() * 2)) == 0) {
    yv = -yv
}

context.fillStyle = 'black'
context.fillRect(0, 0, canvas.width, canvas.height)
//Update Function
function update() {
    debugger;
    //delete last ball
    context.fillStyle = 'black'
    context.fillRect((bx - bs / 2) - 5 / 2, (by - bs / 2) - 5 / 2, bs + 5, bs + 5)
    //Move the Ball

    bx += xv
    by += yv

    //Bounce the Ball Off Each Wall
    if (bx - bs / 2 < 0 && xv < 0) {
        xv = -xv
    }
    if (bx + bs / 2 > canvas.width && xv > 0) {
        xv = -xv
    }
    if (by - bs / 2 < 0 && yv < 0) {
        yv = -yv
    }
    if (by + bs / 2 > canvas.height && yv > 0) {
        yv = -yv
    }
    //Draw Background and Ball

    context.fillStyle = 'yellow'
    context.fillRect(bx - bs / 2, by - bs / 2, bs, bs)
}

