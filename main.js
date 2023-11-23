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
},
768:{
    slidesPerview:3
}
}
})


    $(document).ready(function () {
        $("#searchButton").click(function () {
            var searchTerm = $("#searchInput").val().toLowerCase();

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


    // Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

