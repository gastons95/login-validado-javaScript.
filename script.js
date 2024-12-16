document.addEventListener('DOMContentLoaded',function() {
    const loginForm = document.getElementById('loginform')
    const emailInput = document.getElementById('email')
    const passwordInput = document.getElementById('password')
    const confirmPasswordInput = document.getElementById('confirmPassword')
    const emailError = document.getElementById('emailError')
    const passwordError = document.getElementById('passwordError')
    const confirmPasswordError = document.getElementById('confirmPasswordError')
    const showHidenButton = this.document.getElementById('show- hide')



    loginForm.addEventListener('submit', function(event){
        event.preventDefault();
        validateForm();
    })

    emailInput.addEventListener('blur',function(){
        validateEmail ()
    })
    
    emailInput.addEventListener('change',function(){
        clearError(emailError)
    })

    passwordInput.addEventListener('change',function(){
        clearError(passwordError)   
    })

    confirmPasswordInput.addEventListener('change',function(){
        clearError(confirmPasswordError)  
    })

    showHidenButton.addEventListener('click', function(){
        if(passwordInput.type == 'password'){
            passwordInput.type = 'text'
            confirmPasswordInput.type = 'text'
        }else{
            passwordInput.type = 'password'
            confirmPasswordInput.type = 'password'

        }
    })
    
    function validateForm (){
        const isvalidEmail = validateEmail()
        const isvalidPassword = validatePassword()
        const passwordMach = validatePasswordMach()

        if(isValidEmail && isValidPassword && passwordMatch){
            saveToLocalStorage()
            alert('Has ingresado con exito')


        }

    }

    function validateEmail (){
        const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
        const emailValue = emailInput.value.trim() // el trim lo que hace es eliminar espacios vacios al comienzo y final del input

        if(!emailRegex.test(emailValue)){
           showError(emailError, 'ingrese un email valido')
            return false
        }

        return true

    }

    function validatePassword(){
        const passwordValue = passwordInput.value.trim()
        
        if(passwordValue.length < 6){
            showError(passwordError, 'ingrese una contraseña de almenos 6 caracteres')
            return false;
        }

        return true
    }


    function validatePasswordMach(){
        const passwordValue = passwordInput.value.trim()
        const confirmPasswordValue = confirmPasswordInput.value.trim();

        if(passwordValue != confirmPasswordValue){
            showError(confirmPasswordError, 'Las contraseñas no coinciden')
            return false;
        }

        return true;
    }

    function showError(errorElement, message){
        errorElement.innerHTML = message;
        errorElement.style.display = 'block';
    }


    function clearError(errorElement,) {
        errorElement.innerHTML = '';
        errorElement.style.display = 'none';
    }
    
    
    function saveToLocalStorage () {
        const emailValue = emailInput.value.trin();
        localStorage.setItem('email' , emailValue)
        const body = bodyBuilderJSON()
        console.log(body)
    }

    function bodyBuilderJSON () {// Esto gerena un JSON
        return {
            "email":emailInput.value,
            "password": passwordInput.value
        }
    }







})