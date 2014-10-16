
$(document).ready(function() {

    function bindClick() {
        var img = $('#targetImage')
        var thumbnails = $('.thumbnails img')
        thumbnails.click(function(event) {
            var url = $(event.target).attr('src')
            console.log('clicked: ' + url)
            img.attr('src', url)
        })
    }

    // Bind click for the existing default images
    bindClick()
    
    $('#loadMore').click(function() {
        
        // Get urls from a JSON file that is on the same server as this scripts.js file
        $.getJSON('image-urls.json', function(data) {
            
            // Add images from using all urls 
            for (var i = 0; i < data.imageUrls.length; i++) {
                $('.thumbnails').append('<img src="' + data.imageUrls[i] + '">')
            }
            
            // Bind click event for the loaded images
            bindClick()
        })
    })    
    
})




/*
function Car(manufacturer, model) {
    this.manufacturer = manufacturer
    this.model = model
    this.velocity = 0
}

Car.prototype.accelerate = function(amount) {
    this.velocity = this.velocity + amount
}

var audi = new Car('Audi', 'TT')
var lada = new Car('Lada', '2108')

audi.accelerate(100)
lada.accelerate(110)

console.log(audi)
console.log(lada)
*/










/*
var obj = { name: 'john', drink: 'milk' }
console.log(obj.name)
console.log(obj['name'])
console.log(obj.drink)

obj.litres = 10
obj.drink = 'wiskey'

obj.consumeDrink = function(amount) {
    this.litres = this.litres - amount
    console.log('******this', this)
    console.log('******obj', obj)
    console.log(this === obj)
}

console.log(obj)
obj.consumeDrink(2)
console.log(obj)

function test1() {
    var a = "hello"
    console.log(a)
    
    function inner() {
        var c = " flower"
        a = a + c
        console.log(a)
    }
    inner()
}

function test2() {
    var b = "moi"
    console.log(b)
}

test1()
test2()

function sum(num1, num2) {
    console.log(arguments)
    return num1 + num2
}

console.log(sum(1, 2))
*/

















