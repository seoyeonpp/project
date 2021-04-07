$(document).ready(function () {
    $('ul.tab_menu_tit li').click(function () {
        var on = $(this).attr('data-tab');

        $('ul.tab_menu_tit li').removeClass('on');
        $('.tab_contents').removeClass('on');

        $(this).addClass('on');
        $("#" + on).addClass('on');
        return false;
    })
});