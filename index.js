// Função para alternar entre as imagens
var slides = document.querySelectorAll('.slideshow');
var currentSlide = 0;

function showSlide(index) {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[index].style.display = 'block';
}

// Inicia o slideshow
showSlide(currentSlide);

// Função para trocar as imagens a cada 3 segundos
setInterval(function() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 3000);

// Função para animar o redirecionamento do site
function animateRedirect(event) {
  event.preventDefault();
  document.querySelector('.container').classList.add('slideRight');
  setTimeout(function() {
    window.location.href = event.target.href;
  }, 1000);
}

// Adiciona um evento de clique aos links de login
document.querySelector('.login-link').addEventListener('click', animateRedirect);
