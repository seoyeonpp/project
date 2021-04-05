jQuery(document).ready(function () {
    //탭메뉴
    var tab_list = $('.tab_menu');
    var btn = tab_list.find('>li');
    btn.click(function () {
        var tg = $(this);
        btn.removeClass('on');
        tg.addClass('on');
        return false;
    });
    //사이트맵
    var sitemap = $('.site_map');
    sitemap.click(function () {
        $('#site_map_menu').show();
        $('#site_map_menu .bg100').click(function () {
            $('#site_map_menu').hide();
        });
        return false;
    });
});