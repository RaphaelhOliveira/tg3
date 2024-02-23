let slideTitleEl = document.getElementById('slide-title');
let slideStatusEl = document.getElementById('slide-status');
let nextSlideTitle = document.querySelectorAll(`[data-slide-status="${slideId}"]`)[0].innerHTML;

TweenLite.fromTo(slideTitleEl, 0.5,
  {
    autoAlpha: 1,
    y: 0
  },
  {
    autoAlpha: 0,
    y: 20,
    ease: 'Expo.easeIn',
    onComplete: function () {
      slideTitleEl.innerHTML = nextSlideTitle;

      TweenLite.to(slideTitleEl, 0.5, {
        autoAlpha: 1,
        y: 0
      });
    }
  }
);
