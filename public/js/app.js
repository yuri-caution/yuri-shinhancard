$(function(){
    $('.header').load('../inc/header.html')
    $('.footer').load('../inc/footer.html')

    // resize, reload
    var resizeTimer;
    $(window).bind('resize', function( ) {
        window.clearTimeout( resizeTimer );
        resizeTimer = window.setTimeout( resizeFunction, 500 );
    });
    function resizeFunction(){
        location.reload()
    }



    // section1 tab
    $('.tab_btn a').click(function(){
        $('.tab_btn a').removeClass('on')
        $(this).addClass('on')
        $('.card_list').css('display', 'none')
        if($(this).hasClass('pop')){
            $('.card_list.pop').css('display', 'flex')
        }else if($(this).hasClass('reco')){
            $('.card_list.reco').css('display', 'flex')
        }else{
            $('.card_list.pre').css('display', 'flex')
        }
    })

    // section1 mobile slide
        $('.section1 ul').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: false,
            arrows: false,
            mobileFirst: true,
            responsive: [
                {
                    breakpoint: 767,
                    settings: 'unslick'
                }
            ]
        })

    // section1 hover
    $('.section1 ul li').hover(function(){
        $(this).find('.card_img img').css('top', '-5px')
    }, function(){
        $(this).find('.card_img img').css('top', 0)
    })

    // section2 hover
    $('.section2 ul li').hover(function(){
        $(this).find('div').css('top', '-5px')
    }, function(){
        $(this).find('div').css('top', 0)
    })

    // section2 slick
    $('.slide').slick({
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        draggable: false,
        dotsClass: 'dots_custom',
        prevArrow : $('.prevArrow'), 
        nextArrow : $('.nextArrow'),
        responsive: [{
            breakpoint: 1020,
            settings: {
                slidesToShow: 1,
            }
        }]
    });

    $('.pause').click(function(){
        $(this).hide()
        $('.play').show()
        $('.slide').slick('slickPause')
    })

    $('.play').click(function(){
        $(this).hide()
        $('.pause').show()
        $('.slide').slick('slickPlay')
    })

    // section4
    var swiper = new Swiper(".mySwiper", {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
          },
        },

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
    });


    // section5
    if (window.innerWidth < 1020){
        $('.tab_title h3').click(function(){
            $('.tab_title h3').removeClass('on')
            $(this).addClass('on')
            $('.section5 > div ul').css('display', 'none')
            if($(this).hasClass('1')){
                $('.section5 .notice ul').show()
            }else{
                $('.section5 .warning ul').show()
            }
        })
    } 


    // footer
    $('footer .arr').click(function(){
        $('.more_footer').slideToggle().css('display', 'flex')
        if($('footer .arr').hasClass('on')){
            $(this).removeClass('on')
        }else {
            $(this).addClass('on')
        }
    })

})