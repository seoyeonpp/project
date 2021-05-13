/* jQuery */
$(function () {
    //모바일 메뉴
    var nav = $('.mobile_btn');
    nav.click(function () {
        $('#mobile').show();
        $('#mobile .bg100').click(function () {
            $('#mobile').hide();
        });
        return false;
    });


    // 배너슬라이드
    $('.main_slide>ul').bxSlider({
        auto: true,
        stopAutoOnClick: true,
        speed: 1500,
        pause: 3000,
        autoHover: true,
        pager: false,
        infiniteLoop: true,
        controls: false,
    })

})/* //jQuery */

/* javascript */
// 캐러셀슬라이드
const showingClass = "showing";
const firstSlide = document.querySelector(".slider_cont:first-child");
function slide() {
    const currentSlide = document.querySelector(`.${showingClass}`);
    if (currentSlide) {
        currentSlide.classList.remove(showingClass);
        const nextSlide = currentSlide.nextElementSibling;
        if (nextSlide) {
            nextSlide.classList.add(showingClass);
        } else {
            firstSlide.classList.add(showingClass);
        }
    } else {
        firstSlide.classList.add(showingClass);
    }
}
slide();
setInterval(slide, 4000);