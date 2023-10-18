document.addEventListener("DOMContentLoaded", function(){
    let passwordInput = document.querySelector('#password');
    let confirmPasswordInput = document.querySelector('#confirm-password');
    let error = document.querySelector('#error');

    function checkPasswords() {
        if (passwordInput.value === confirmPasswordInput.value && passwordInput.value !== '' && confirmPasswordInput.value !== '') {
            error.textContent = '';
            passwordInput.style.backgroundColor = 'lightgreen';
            confirmPasswordInput.style.backgroundColor = 'lightgreen';
        } else {
            error.textContent = '*passwords do not match';
            passwordInput.style.backgroundColor = '';
            confirmPasswordInput.style.backgroundColor = '';
        }
    }

    passwordInput.addEventListener('input', checkPasswords);
    confirmPasswordInput.addEventListener('input', checkPasswords);
});