function updateCartCount() {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const total = cart.reduce((sum, item) => sum + item.quantity, 0);
      document.querySelector('.cart-value').textContent = total;
}
