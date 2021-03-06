var brush = {
    stroke: 0.5,
    drawing: false,
    style: 'original'
}

brush.trackPosition = function(x, y) {
    this.mx2 = this.mx1
    this.my2 = this.my1
    
    this.mx1 = this.mx0
    this.my1 = this.my0
    
    this.mx0 = x
    this.my0 = y
}


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
ctx.lineCap = 'round'

// Helpers
function line(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.stroke()
}

function dist(x1, y1, x2, y2) {
    var dx = x2 - x1
    var dy = y2 - y1
    return Math.sqrt(dx*dx + dy*dy)
}

// Handle stroke value change
$('#stroke').change(function(event) {
    brush.stroke = parseFloat($(event.target).val())
})

// Change brush drawing style
$('#brushStyle').change(function(event) {
    brush.style = $(this).val()
})

// Setup color picker
$("#color").spectrum({
    color: "#f00",
    showAlpha: true
})

canvas.onmousedown = function() {
    brush.drawing = true
    ctx.strokeStyle = $('#color').spectrum('get').toRgbString()
}

canvas.onmouseup = function() {
    brush.drawing = false
}

canvas.onmousemove = function(event) {
    
    // Let brush object take care of tracking the mouse position
    brush.trackPosition(event.offsetX, event.offsetY)
    
    if (brush.drawing) {
        
        // Draw with original style brush
        if (brush.style == 'original') {
            ctx.lineWidth = dist(brush.mx1, brush.my1, brush.mx0, brush.my0) * brush.stroke
            line(brush.mx1, brush.my1, brush.mx0, brush.my0)
            line(brush.mx1, brush.my1, brush.mx2, brush.my2)
        }

        // Draw with star style brush
        if (brush.style == 'star') {
            ctx.lineWidth = brush.stroke
            for (var i = 0; i < 10; i++) {
                var x = Math.random()*100 - 50
                var y = Math.random()*100 - 50
                x = x * Math.random()
                y = y * Math.random()
                line(brush.mx0 + x, brush.my0 + y, brush.mx0 - x, brush.my0 - y)
            }
        }

    }
}












