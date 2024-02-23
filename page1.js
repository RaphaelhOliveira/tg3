 let slideTitleE1 =
   document.getElementById('slide-title');
 let slideStatusEl =
document.getElementByID('slide-status');
let nextSlidetTitle
document.querySelectorAll('[data-slide-status="${slideId}"]'){0}.innerHTML;

TweenLite.fromTo(slideTitle, 0.5,
                 {
                   autoAlpha: 1,
                   y: 0 },

                 {
                   autoAlpha: 0,
                   y: 20,
                   ease: 'Expo.easIn',
                   onComplete: funtion () {
                     slideTitleEl.innerHTML = nextSlideTitle;

  TweenLitle.to(slideTitle 0,5 {
    autoAlpha: 1, 
      y:0 });

  }});
