document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const product = button.parentElement;
        const id = product.getAttribute('data-id');
        const name = product.getAttribute('data-name');
        const price = parseFloat(product.getAttribute('data-price'));

        addToCart(id, name, price);
    });
});

function addToCart(id, name, price) {
    const existingProduct = cart.find(item => item.id === id);

    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({ id, name, price, quantity: 1 });
    }

    updateCart();
}

function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';

    let totalPrice = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        totalPrice += itemTotal;
        
        cartItemsContainer.innerHTML += `<div>${item.name} - ${item.quantity} шт. (Цена: ${itemTotal} руб.)</div>`;
    });

    document.getElementById('total-price').textContent = `Общая сумма: ${totalPrice} руб.`;
}