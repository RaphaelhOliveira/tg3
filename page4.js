document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form');
  const stars = document.querySelectorAll('.star');
  
  // Adiciona evento de clique para as estrelas
  stars.forEach(star => {
    star.addEventListener('click', function () {
      stars.forEach(s => s.classList.remove('rated'));
      this.classList.add('rated');
      const rating = this.parentElement.querySelector('input[type="radio"]');
      rating.checked = true;
    });
  });

  // Adiciona evento de envio do formulário
  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Impede o envio padrão do formulário

    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const rating = form.querySelector('input[name="rating"]:checked');
    const comment = form.querySelector('textarea').value;

    // Aqui você pode enviar os dados para o backend ou fazer qualquer outra coisa com eles
    console.log('Nome:', name);
    console.log('Email:', email);
    console.log('Avaliação:', rating ? rating.value : 'Não avaliado');
    console.log('Comentário:', comment);
    
    // Resetando o formulário
    form.reset();
    stars.forEach(star => star.classList.remove('rated'));
  });
});

  
