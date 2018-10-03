$(function(){
    new WOW().init();
    
    $('.owl-carousel').owlCarousel({
        items:1,
        loop:true,
        pagination:false,
        dnavigation:true
    })

    $('.menu-burger').on('click', function(){
        $('.menu').slideToggle(300, function(){
            if($(this).css('display')==='none'){
                $(this).removeAttr('style');
            }
        });
    });
});