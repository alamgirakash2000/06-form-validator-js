const formId= document.getElementById('form')
const username= document.getElementById('username')
const email= document.getElementById('email')
const password= document.getElementById('password')
const password2= document.getElementById('password2')

// Function to the error message
function showError(input, message){
        const formControl= input.parentElement
        formControl.className='control error'
        formControl.querySelector('small').innerText= message
}
// Showing the  success message
function showSuccess(input){
    const formControl= input.parentElement
    formControl.className='control success'
}

// Check the required
function checkRequired(inputArr){
    inputArr.forEach(input => {
        if(input.value.trim() === ''){
            showError(input, `${input.id} is required`)
        }else{
            showSuccess(input)
        }
    })
}

// Validate the username
function inputValidator(input,min,max){
    if(input.value.trim().length < min){
        showError(input, `${input.id} must contain at least ${min} characters`)
    }else if(input.value.trim().length > max){
        showError(input, `${input.id} must contain maximumt ${max} characters`)
    }else{
        showSuccess(input)
    }
}

function emailValidator(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(String(email).toLowerCase())){
        showError(email, `Invalied email`)
    }else{
        showSuccess(email)
    }

}

// Validate the passwords match
function checkPasswordMatching(password,password2){
    if(passwod.value && password.value === password2.value){
        showSuccess(password2)
    }else{
        showError(password2, `Passwords aren't match`)
    }
}

// Work With the from
formId.addEventListener('submit', (e)=>{
    e.preventDefault()

    emailValidator(email)
    checkRequired([username, email, password, password2])
    inputValidator(username, 5, 20)
    inputValidator(password, 6, 12)
    checkPasswordMatching(password,password2)
})
// Submit form by pressing Enter
document.getElementById("form").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
    	document.getElementById("form").submit();
		return false;
    }
})