var navbar=document.querySelector('.header.navbar')
var menu=document.querySelector('#menu')

menu.onclick =() =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
};

window.onscroll =() =>{
menu.classList.remove('fa-times');
navbar.classList.remove('active')
};


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


    $(document).ready(function () {
        $("#searchButton").click(function () {
            var searchTerm = $("#searchInput").val().toLowerCase();

            // Perform your search logic here
            // You can use the searchTerm to filter or search content on your page

            // For example, you can highlight matching text or show/hide elements based on the search term
            // Here's a simple example that hides non-matching elements
            $(".content").each(function () {
                var contentText = $(this).text().toLowerCase();
                if (contentText.includes(searchTerm)) {
                    $(this).show();
                } else {
                    $(this).hide();
                }
            });
        });
    });
