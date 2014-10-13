
$(document).ready(function() {
    
    var img = $('#targetImage')
    var thumbnails = $('.thumbnails img')
    
    thumbnails.click(function(event) {
        //console.log('clicked: ' + $(this).attr('src'))
        var url = $(event.target).attr('src')
        console.log('clicked: ' + url)
        img.attr('src', url)
    })

    
})






