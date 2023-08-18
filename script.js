document.getElementById('btn-submit').addEventListener('click', function(){
    const userEmail = document.getElementById('user-email').value;
    const userPassword = document.getElementById('user-password').value;

    if(userEmail==='drb@gmail.com' && userPassword==='nam amr klu'){
        window.location.href = 'bank.html';
    }
    else{
        alert('Invalid User.');
    }
})