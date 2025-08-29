  document.getElementById("addProductForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("productName").value.trim();
    const price = parseFloat(document.getElementById("productPrice").value);
    const image = document.getElementById("productImage").value.trim();

    if (!name) {
      Swal.fire("Error", "Product name is required.", "error");
      return;
    }
    if (isNaN(price) || price < 0) {
      Swal.fire("Error", "Please enter a valid price.", "error");
      return;
    }
    if (!image) {
      Swal.fire("Error", "Image URL is required.", "error");
      return;
    }

    // Get current menu from localStorage
    const menu = JSON.parse(localStorage.getItem("menu")) || [];

    // Generate unique ID
    const newId = menu.length > 0 ? Math.max(...menu.map(item => item.id || 0)) + 1 : 1;

    const newProduct = {
      id: newId,
      name: name,
      price: price.toFixed(2),
      image: image
    };

    // Add to menu array and save
    menu.push(newProduct);
    localStorage.setItem("menu", JSON.stringify(menu));

    Swal.fire({
      icon: 'success',
      title: 'Product Added!',
      text: `"${name}" has been added.`,
      confirmButtonText: 'Go to Products'
    }).then(() => {
      window.location.href = 'products.html';
    });
  });
