$(document).ready(function(){
    $('.burger').click(function(){
        $(this).toggleClass('is-active');
        $('.dropdown-menu, .bg-dropdown').toggleClass('is-active');
    });

    $('.close-menu').click(function(){
        $('.dropdown-menu, .bg-dropdown, .burger').removeClass('is-active');
    });






});
