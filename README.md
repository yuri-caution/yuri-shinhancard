### 페이지 분할, 페이지 로드
```
    $('.header').load('../inc/header.html')
    $('.footer').load('../inc/footer.html')
```

### 화면 사이즈 변화에 새로고침(반응형)
```
    // resize, reload
    var resizeTimer;
    $(window).bind('resize', function( ) {
        window.clearTimeout( resizeTimer );
        resizeTimer = window.setTimeout( resizeFunction, 500 );
    });
    function resizeFunction(){
        location.reload()
    }
```

### 스크롤 이벤트
```
    // scroll event
    window.onload = function(){
        $('.search_icon').hide()
    }

    $(window).scroll(function(){
        if($(this).scrollTop() > 99){
            $('.search_icon').show()
        }else {
            $('.search_icon').hide()
        }
    })
```

### slick 재생/정지 버튼
```
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
```

### 아코디언
```
    $('.accordian h5').on('click', function(){
        if ($(this).hasClass('on')) {
            $('.accordian').find('div').hide()
            $(this).removeClass('on').next().hide()
        } else {
            $('.accordian h5').removeClass('on')
            $('.accordian').find('div').hide()
            $(this).addClass('on').next().show()
        }
    })
```

###  $(...).slick is not a function 에러 발생
#### 페이지 분할 사용에 따른 slick 불러오기 중복 문제
#### 충돌방지코드 사용으로 해결
```
<script type="text/javascript">
      $.noConflict();
</script>

```

### 스크롤바 없애기
```
body::-webkit-scrollbar {
    display: none;
}
```

### 스크롤바 넣기 & 커스텀
```

.mypage::-webkit-scrollbar {
    width: 8px;
}

.mypage::-webkit-scrollbar-thumb {
    background: #e5e5e5;
    border-radius: 10px;
}

.mypage::-webkit-scrollbar-thumb:hover {
    background: #7f7f7f;
}

```

### hover 애니메이션 만들기
```
@keyframes hover-ani {
    25% {
        transform: translateY(-2px);
    }

    50% {
        transform: translateY(2px);
    }

    75% {
        transform: translateY(-2px);
    }
}


.swiper-slide div:hover a img {
    animation: hover-ani 1s infinite alternate;
}

```

### css 그라데이션 
```
.menu_all .tabs::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: -40px;
    width: 100%;
    height: 40px;
    z-index: 50;
    background: linear-gradient(to bottom,rgba(255, 255, 255, 1) 20%, rgba(255, 255, 255, 0));
}
```

### css filter 사용
```
.mypage a img {
    width: 20px;
    filter: invert(57%) brightness(92%);
}

```

### page indicator 넣기
```
var str = location.pathname
console.log(str)

if(str.includes('cards')){
    $('.gnb li a').eq(3).addClass('active')
}
```
