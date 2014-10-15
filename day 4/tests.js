

// Testing Objects, Functions and Scope
var obj = { name: 'john', drink: 'milk' }
console.log(obj.name)
console.log(obj['name'])
console.log(obj)

obj.drink = 'wiskey'
console.log(obj.drink)

obj.litres = 10
obj.consumeDrink = function(amount) {
    this.litres = this.litres - amount
}
console.log(obj)

obj.consumeDrink(2)
console.log(obj)


// Global, local
function newDrinkTest() {
    var newDrink = 'water'
    obj.drink = newDrink
}

//console.log(newDrink)
newDrinkTest()
console.log(obj)

// More on functions
function sum(num1, num2) {
    console.log(num1 + ' and ' + num2)
    console.log(arguments)
    return num1 + num2
}

console.log(sum(1, 2))



// AJAX with jQuery
    $.getJSON('http://localhost:8000/image-urls.json', function(data) {
        console.log(data)

        for (var i = 0; i < data.imageUrls.length; i++) {
            var url = data.imageUrls[i]
            $('.thumbnails').append('<img src="' + url + '">')
        }

        // Moved
        var img = $('#targetImage')
        var thumbnails = $('.thumbnails img')
        thumbnails.click(function(event) {
            //console.log('clicked: ' + $(this).attr('src'))
            var url = $(event.target).attr('src')
            console.log('clicked: ' + url)
            img.attr('src', url)
        })
    })









