document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
if (email === '' || password === '') {
        Swal.fire({
            icon: 'warning',
            title: 'Empty Fields!',
            text: 'Please enter both email and password.',
            confirmButtonColor: '#f77c02'
            });
}else if(email!=='Shrouk@gmail.com' || password!=='123'){
        Swal.fire({
            icon: 'warning',
            title: 'Incorrect data ',
            text: 'Please check your email and password',
            confirmButtonColor: '#f77c02'
        });  
        } else {
            localStorage.setItem("isLoggedIn", "true");
        window.location.href = "home.html";
        Swal.fire({
            icon: 'success',
            title: 'Login Successful!',
            text: 'Redirecting to homepage...',
            showConfirmButton: false,
            timer: 1500
        }).then(() => {
            window.location.href ='home.html'; 
        });
    }
});
