const form = document.querySelector('.form');

form.addEventListener('submit', function(event){
    const inputEmail = form.querySelector('.email-field');

    let  errorAlert = form.querySelector('.error-alert');

    event.preventDefault();

    if(inputEmail.value === ''){
    
        if(errorAlert.classList.contains('error-alert')){
            errorAlert.style.visibility = 'visible';
            inputEmail.style.borderColor = 'hsl(354, 100%, 66%)';
        }

    }else {
        errorAlert.style.visibility ='hidden';
        inputEmail.style.borderColor = 'hsl(109, 80%, 48%)';

        form.submit();
    }

    
});