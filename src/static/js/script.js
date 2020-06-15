$(document).ready(function(){
    $('.burger').click(function(){
        $(this).toggleClass('is-active');
        $('.dropdown-menu, .bg-dropdown, .bg-center').toggleClass('is-active');
    });

    $('.close-menu').click(function(){
        $('.dropdown-menu, .bg-dropdown, .burger, .bg-center').removeClass('is-active');
    });






});
