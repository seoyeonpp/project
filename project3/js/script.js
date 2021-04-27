$(function () {
    // 배너슬라이드
    $('.main_slide>ul').bxSlider({
        auto: true,
        stopAutoOnClick: true,
        speed: 1500,
        pause: 3000,
        autoHover: true,
        infiniteLoop: true,
        pager: true,
        controls: false,
    })
})

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