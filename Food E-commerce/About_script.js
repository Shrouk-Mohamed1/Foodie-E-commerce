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
