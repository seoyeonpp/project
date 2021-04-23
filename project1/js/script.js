$(document).ready(function () {
    // 탭메뉴
    $('ul.tab_menu_tit li').click(function () {
        var on = $(this).attr('data-tab');

        $('ul.tab_menu_tit li').removeClass('on');
        $('.tab_contents').removeClass('on');

        $(this).addClass('on');
        $("#" + on).addClass('on');
        return false;
    })
    // 상단메뉴
    $('.rollover').each(function () {
        var a = $(this);
        a.hover(function () {
            a.css('color', '#005fca')
        }, function () {
            a.css('color', '#000000')
        })
    })
});

// #contents_bottom 슬라이드
const slides = document.querySelector('#contents_bottom .slides'),
    slide = document.querySelectorAll('.slides li'),
    slideCount = slide.length,
    prevBtn = document.querySelector('.control_box>.slide_prev'),
    nextBtn = document.querySelector('.control_box>.slide_next'),
    slideWidth = 260
let currentIdx = 0;
slides.style.width = (slideWidth * slideCount) + 'px';

function moveSlide(num) {
    slides.style.left = -num * slideWidth + 'px';
    currentIdx = num;
};
nextBtn.addEventListener('click', function () {
    if (currentIdx < slideCount - 5) {
        moveSlide(currentIdx + 1);
    } else {
        moveSlide(0);
    }
});
prevBtn.addEventListener('click', function () {
    if (currentIdx > 0) {
        moveSlide(currentIdx - 1);
    } else {
        moveSlide(slideCount - 5);
    }
});

// #article3 뉴스슬라이더
const newsSlider = document.querySelector('.wrapper .newsletter'),
    slideLi = document.querySelectorAll('.newsletter>li'),
    newsCount = slideLi.length,
    newsprev = document.querySelector('.news_control>.news_control_prev'),
    newsnext = document.querySelector('.news_control>.news_control_next'),
    sWidth = 210,
    sPadding = 40
let currentnews = 0;

function newsMove(list) {
    newsSlider.style.left = -list * (sWidth + sPadding) + 'px';
    currentnews = list;
}

newsnext.addEventListener('click', function () {
    if (currentnews < newsCount - 4) {
        newsMove(currentnews + 1);
    } else {
        newsMove(0);
    }
})

newsprev.addEventListener('click', function () {
    if (currentnews > 0) {
        newsMove(currentnews - 1);
    } else {
        newsMove(newsCount - 4);
    }
})



// 푸터 관련사이트
const siteBtn = document.querySelector('.site button');
const siteList = document.querySelector('.site .site_select');
siteBtn.addEventListener('click', function () {
    siteList.classList.toggle('active');
});

// 탑버튼
let Top = document.querySelector('#top_btn');

window.addEventListener('scroll', function () {
    if (this.scrollY > 400) {
        Top.classList.add('on');
    } else {
        Top.classList.remove('on');
    }
});

Top.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});