
$(document).ready(function () {
    $.getJSON('http://api.open-notify.org/astros.json?callback=?', function(data) {
    var number = data['number'];
    $('#num').html(number);

    data['people'].forEach(function (d) {
        let randomInt =  Math.floor(Math.random() * 2);
        let flipClass
        if(randomInt==1) {
            flipClass= 'flipped'
        }
        $('#pics').append('<li> <img src="./media/astro.png" class="astro-list '+flipClass+'"></li>');
        
        
    });

    
});
});