
const defaultFoods = [
  {
    id: 1,
    name: "Chicken Burger",
    price: 59.99,
    image: "images/Chicken hamburger.jpg"
  },
  {
    id: 2,
    name: "Fried Chicken",
    price: 129.99,
    image: "images/fried chicken.jpg"
  },
  {
    id: 3,
    name: "French Fries",
    price: 39.99,
    image: "images/French Fries.jpg"
  },
  {
    id: 4,
    name: "Friends Meal",
    price: 149.99,
    image: "images/friends_meal.jpg"
  },
  {
    id: 5,
    name: "Mozzarella Sticks",
    price: 49.99,
    image: "images/Mozzarella Sticks.jpg"
  },
  {
    id: 6,
    name: "Beef Burger",
    price: 79.99,
    image: "images/meat hamburger.jpg"
  },
  {
    id: 7,
    name: "Spaghetti",
    price: 69.99,
    image: "images/Spaghetti.jpg"
  },
  {
    id: 8,
    name: "Italian Pizza",
    price: 89.99,
    image: "images/Italian pizza.jpg"
  },
  {
    id: 9,
    name: "Special Meal",
    price: 119.99,
    image: "images/Special dish.jpg"
  }
];


const savedMenu = JSON.parse(localStorage.getItem("menu")) || [];
const foods = [...defaultFoods, ...savedMenu];

const container = document.getElementById("menuContainer");


foods.forEach((item) => {
  const div = document.createElement("div");
  div.classList.add("card");

  
  const itemStr = JSON.stringify(item).replace(/"/g, '&quot;');

  div.innerHTML = `
    <img src="${item.image}" alt="${item.name}" />
    <h3>${item.name}</h3>
    <p>$${parseFloat(item.price).toFixed(2)}</p>
    <button onclick="addToCart(${itemStr})">Add to Cart</button>
    <button class="remove-btn" onclick="removeFromMenu(this, ${itemStr})">Remove</button>
  `;
  container.appendChild(div);
});


function addToCart(item) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existing = cart.find(i => i.name === item.name);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...item, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();

  Swal.fire({
    title: `${item.name} added to cart!`,
    icon: 'success',
    timer: 1500,
    showConfirmButton: false
  });
}


function removeFromMenu(button, item) {
  Swal.fire({
    title: `Remove ${item.name} from menu?`,
    text: "This will also remove it from the cart if it was added.",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#aaa',
    confirmButtonText: 'Yes, remove it!'
  }).then((result) => {
    if (result.isConfirmed) {
      
      const card = button.closest('.card');
      if (card) {
        card.remove();
      }

      
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart = cart.filter(i => i.name !== item.name);
      localStorage.setItem("cart", JSON.stringify(cart));

      updateCartCount();
      Swal.fire(`${item.name} removed from menu and cart.`, '', 'success');
    }
  });
}


function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const total = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartValueElement = document.querySelector('.cart-value');
  if (cartValueElement) {
    cartValueElement.textContent = total;
  }
}


updateCartCount();


document.getElementById('logoutButton').addEventListener('click', function () {
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
