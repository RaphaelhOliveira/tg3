document.addEventListener('DOMContentLoaded', function() {
    const carList = document.querySelector('#car-list ul');
    const cartItems = document.querySelector('#cart-items');
    const total = document.querySelector('#total');
  
    let cartTotal = 0;
  
    // Adicionar evento de clique para selecionar/deselecionar carros
    carList.addEventListener('click', function(e) {
      if (e.target.tagName === 'LI') {
        const carName = e.target.dataset.name;
        const carPrice = parseInt(e.target.dataset.price);
        
        // Verificar se o carro já está no carrinho
        const isInCart = [...cartItems.children].some(item => item.dataset.name === carName);
  
        // Se não estiver no carrinho, adicionar; caso contrário, remover
        if (!isInCart) {
          const listItem = document.createElement('li');
          listItem.dataset.name = carName;
          listItem.dataset.price = carPrice;
  
          listItem.innerHTML = `
            <img src="${e.target.querySelector('img').src}" alt="${carName}">
            <span>${carName}</span>
          `;
  
          const removeButton = document.createElement('button');
          removeButton.textContent = 'Remover';
          removeButton.addEventListener('click', function() {
            cartTotal -= carPrice;
            total.textContent = cartTotal;
            listItem.remove();
          });
  
          listItem.appendChild(removeButton);
          cartItems.appendChild(listItem);
          cartTotal += carPrice;
        } else {
          const selectedItem = [...cartItems.children].find(item => item.dataset.name === carName);
          const selectedPrice = parseInt(selectedItem.dataset.price);
          cartTotal -= selectedPrice;
          selectedItem.remove();
        }
  
        total.textContent = cartTotal;
      }
    });
  });
  
