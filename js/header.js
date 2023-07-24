$(function(){

    // menu window
    $('.menu_bar').click(function(){
        $('.menu_more').show()
    })
    
    $('.close_menu').click(function(){
        $('.menu_more').hide()
    })
    
    // header menu view
    if (window.innerWidth < 1020){
        $(document).ready(function(){
            $('.menu_more').hide()
        });


        $('.tabs').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: false,
            variableWidth: true,
        })
    }

    // gnb slick
    if (window.innerWidth < 1020){
        $('header .gnb').slick({
            slidesToShow: 'auto',
            slidesToScroll: 1,
            infinite: false,
            variableWidth: true,
        })
    }

    // page navi
    var str = location.pathname
    console.log(str)

    if(str.includes('cards')){
      $('.gnb li a').eq(3).addClass('active')
    }

})