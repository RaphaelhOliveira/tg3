document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Simulação de autenticação (substitua isso com sua lógica de autenticação real)
  if (username === 'usuario' && password === 'senha') {
    alert('Login bem-sucedido!');
    // Aqui você pode redirecionar o usuário para outra página
  } else {
    document.getElementById('error-msg').textContent = 'Credenciais inválidas. Por favor, tente novamente.';
  }
});
