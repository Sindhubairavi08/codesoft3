window.addEventListener("scroll",function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY > 0);
});
var swiper = new Swiper(".client-swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  themeBtn.classList.toggle("sun");

  localStorage.setItem("saved-theme", getCurrentTheme());
  localStorage.setItem("saved-icon", getCurrentIcon());
});

const getCurrentTheme = () => (document.body.classList.contains("dark-theme") ? "dark" : "light");
const getCurrentIcon = () => (themeBtn.classList.contains("sun") ? "sun" : "moon");

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");

if (savedTheme) {
  document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
}

if (savedIcon) {
  themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}
ScrollReveal({
  reset:TextTrackCueList,
  distance: '60px',
  duration: 2500,
  delay:100
});
ScrollReveal().reveal('.home .info h2, .section-title-01,.section-title-02', {delay:500,origin:'left'});
ScrollReveal().reveal('.home .info h3 ,.home .info p,.about-info .btn', {delay:600,origin:'right'});
ScrollReveal().reveal('.home .info .btn', {delay:700,origin:'bottom'});        
ScrollReveal().reveal('.media-icons i,.contact-left li', {delay:500,origin:'left',interval:200});
ScrollReveal().reveal('.home-img,.about-img', {delay:500,origin:'bottom'});
ScrollReveal().reveal('.about-description ,.contact-right', {delay:600,origin:'right'});
ScrollReveal().reveal('.skills-description,.client-swiper,contact-left h2', {delay:700,origin:'left'});
ScrollReveal().reveal('.education', {delay:800,origin:'bottom',interval:200});
ScrollReveal().reveal('footer.group', {delay:500,origin:'top',interval:200});
