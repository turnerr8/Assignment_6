
$(document).ready(function () {
    //gets data and destributes it
    $.getJSON("astros.json", function(data) {
        var number = data['number'];
        $('#num').html(number);

        //sets a randomly directioned astronaught with its name
        data['people'].forEach(function (d) {
            let randomInt =  Math.floor(Math.random() * 2);
            let flipClass
            if(randomInt==1) {
                flipClass= 'flipped'
            }
            $('#pics').append('<li class="l-items"> <img src="./media/astro.png" class="astro-list '+flipClass+'"> <h3 class="astro-name">'+d['name']+'</h3></li>');
        });

        //hides all names 
        $('.astro-name').hide();

        //names are shown when astronaut is hovered over
        $('.l-items').mouseenter(function(){
            $(this).children('.astro-name').show();

            $(this).children('.astro-list').css('animation', 'rotate 3s infinite linear' );
            $(this).children('.astro-list').css('webkitAnimationPlayState', 'running');
        });

         //names are shown when astronaut is hovered over
         $('.l-items').mouseleave(function(){
            $(this).children('.astro-name').hide();
            $(this).children('.astro-list').css('webkitAnimationPlayState', 'paused');

        });

        //astro rotates when hovered

     
    });

});