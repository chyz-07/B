let slideIndex = 1;
const slides = document.querySelector('.pictures');
const totalSlides = document.querySelectorAll('.picture').length;
const slideWidth = document.querySelector('.picture').clientWidth;

function showSlides(){
    slideIndex++;

    // 設定轉場動畫
    slides.style.transition = 'transform 0.5s ease';
    slides.style.transform = `translateX(${-slideIndex * slideWidth}px)`;

    // 判斷是否到最後一張圖片，如果是，則切換到第一張圖片
    if(slideIndex === totalSlides - 1){
        setTimeout(() => {
            slides.style.transition = 'none';
            slideIndex = 1;
            slides.style.transform = `translateX(${-slideIndex * slideWidth}px)`;
        }, 500);
    }
}

// 初始設定，使圖片從中間開始輪播
slides.style.transform = `translateX(${-slideIndex * slideWidth}px)`;

// 設定定時器每兩秒輪播一次
setInterval(showSlides, 2000);


function openmenu() {
    const menuItems = document.getElementById('menuItem');
    const hamburgerIcon = document.querySelector('#icon');
    
    menuItems.classList.toggle('show');
    hamburgerIcon.classList.toggle('open');
}