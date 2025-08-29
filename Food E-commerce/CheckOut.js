document.getElementById("checkoutForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const address = document.getElementById("address").value.trim();
    const email = document.getElementById("email").value.trim();
    if (!name || !address || !email) {
        Swal.fire("Error", "Please fill all fields.", "error");
        return;
    }
    Swal.fire("Order Placed!", `Thanks ${name}, your food is on the way!`, "success")
        .then(() => {
        localStorage.removeItem("cart");
        window.location.href = "home.html";
        });
});
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