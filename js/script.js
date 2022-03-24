$.get("https://ssl.geoplugin.net/json.gp?k=292af9fb00c1353d", function (resp) {
    //var data = JSON.parse(resp);
    $("#locationJS").html(resp.geoplugin_city);
});


AOS.init({disable: 'mobile'});

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    //Mobile

   } else {
   //Desktop
    
   function createStars(type, quantity) {
    for(let i = 0; i < quantity; i++) {
        let star = document.createElement('div');
        star.classList.add('star', `type-${type}`);
        star.style.left = `${randomNumber(1, 99)}%`;
        star.style.bottom = `${randomNumber(1, 99)}%`;
        star.style.animationDuration = `${randomNumber(2, 60)}s`;
        document.body.appendChild(star);
    }
    }

    function randomNumber(min, max) {
        return Math.floor(Math.random() * max) + min;
    }

    createStars(1, 100);
    createStars(2, 85);
    createStars(3, 70);

}

$('.delay').hide();

setTimeout(function () {
    $('.delay').show();
}, 1000 * 2273);
//2273


document.getElementById("year").innerHTML = new Date().getFullYear();

$(document).ready(function () {
    $(".mask-cel-ddd").mask("(00) 00000-0000");
});