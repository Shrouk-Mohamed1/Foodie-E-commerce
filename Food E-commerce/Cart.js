const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const body = document.getElementById("cartBody");
  const totalEl = document.getElementById("grandTotal");
  let total = 0;
  function renderCart() {
    body.innerHTML = '';
    total = 0;
    cart.forEach((item, i) => {
      const itemTotal = item.price * item.quantity;
      total += itemTotal;
      const row = `
        <tr>
          <td>${item.name}</td>
          <td ><img src="${item.image}" alt="${item.name}"></td>
          <td>${item.quantity}</td>
          <td>$${item.price}</td>
          <td>$${itemTotal.toFixed(2)}</td>
          <td><button class="remove-btn" onclick="removeItem(${i})">remove</button></td>
        </tr>
      `;
      body.innerHTML += row;
    });
    totalEl.textContent = `Grand Total: $${total.toFixed(2)}`;
  }
  function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
  }
  function checkout() {
    if (cart.length === 0) {
      Swal.fire("Cart is empty!", "Add something first.", "warning");
    } else {
      window.location.href = 'CheckOut.html';
    }
  }
  renderCart();
  document.getElementById('logoutButton').addEventListener('click', function() {
    Swal.fire({
        title: 'Are you sure you want to log out?',
        text: "You will be redirected to the Login page.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, log me out!'
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = "index.html"; 
        }
    });
});