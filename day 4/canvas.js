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

brush.drawStar = function() {
    ctx.lineWidth = this.stroke
    for (var i = 0; i < 10; i++) {
        var x = Math.random()*100 - 50
        var y = Math.random()*100 - 50
        x = x * Math.random()
        y = y * Math.random()
        line(this.mx0 + x, this.my0 + y, this.mx0 - x, this.my0 - y)
    }
}

brush.drawOriginal = function() {
    ctx.lineWidth = dist(this.mx1, this.my1, this.mx0, this.my0) * this.stroke
    line(this.mx1, this.my1, this.mx0, this.my0)
    line(this.mx1, this.my1, this.mx2, this.my2)
}

brush.draw = function() {
    if (this.style == 'original')
        this.drawOriginal()
    if (this.style == 'star')
        this.drawStar()
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
ctx.lineWidth = 0.5
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
    brush.trackPosition(event.offsetX, event.offsetY)
    
    if (brush.drawing) {
        //brush.drawOriginal()
        //brush.drawStar()
        brush.draw()
    }
}












