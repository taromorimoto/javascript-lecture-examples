
// Setup Canvas
var canvas = document.getElementById('canvas1')
var ctx = canvas.getContext('2d')

canvas.width = 400
canvas.height = 400

// Clear background
ctx.fillStyle = 'rgb(255, 255, 255)'
ctx.fillRect(0, 0, canvas.width, canvas.height)

// Setup stroke style
ctx.strokeStyle = 'rgba(0,0,0,0.4)'
ctx.lineWidth = 2
ctx.lineCap = 'round



// Helpers
function line(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.stroke()


function dist(x1, y1, x2, y2) {
    var dx = x2 - x1
    var dy = y2 - y1
    return Math.sqrt(dx*dx + dy*dy)
}

// Handle Mouse
var drawing = false
var mx0, my0
var mx1, my1
var mx2, my2
var stroke = 0.5

// Handle stroke value change
$('#stroke').change(function(event) {
    stroke = parseFloat($(event.target).val())
})

// Setup color picker
$("#color").spectrum({
    color: "#f00",
    showAlpha: true
})

canvas.onmousedown = function() {
    drawing = true
    ctx.strokeStyle = $('#color').spectrum('get').toRgbString()
}

canvas.onmouseup = function() 
    drawing = false
}

canvas.onmousemove = function(event) {
    mx2 = mx1
    my2 = my1
    
    mx1 = mx0
    my1 = my0
    
    mx0 = event.offsetX
    my0 = event.offsetY
    
    if (drawing) {
        ctx.lineWidth = dist(mx1, my1, mx0, my0) * stroke
        //ctx.lineWidth = dist(mx1, my1, mx0, my0) * parseFloat($('#stroke').val())
        line(mx1, my1, mx0, my0)
        line(mx1, my1, mx2, my2)
    }
}












