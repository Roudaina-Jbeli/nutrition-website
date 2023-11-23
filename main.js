var navbar=document.querySelector('.header.navbar')
var menu=document.querySelector('#menu')
$(document).ready (function() {
    $('.buttons') .click(function(){
    $(this).addClass('active').siblings ().removeClass('active');
    var filter = $(this). attr('data-filter')
    if(filter == 'all') {
    $('.diet .box').show (400);
    }
    else{
    $('.diet .box').not('.'+ filter).hide (200);
    $('.diet .box').filter('.'+ filter).show(400);
    }
    });
    });
    var swiper =new Syiper('.review-slider',{
loop: true,
grabCursor : true ,
spaceCetveen ,
breakpoints:{
0:{
    slidesPerview:1,
},
640:{
    slidesPerview:2
}
768:{
    slidesPerview:3
}
}
})
