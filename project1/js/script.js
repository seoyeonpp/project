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

let Top = document.querySelector('#top_btn');

window.addEventListener('scroll', function () {
    if (this.scrollY > 400) {
        Top.classList.add('on');
    } else {
        Top.classList.remove('on');
    }
})

Top.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
})