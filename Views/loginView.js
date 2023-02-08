export class LoginView{
    constructor() {
        this.loginForm = document.getElementById('login-form');
        this.usernameInput = document.getElementById('user');
        this.passwordInput = document.getElementById('pass');
        this.erroMessage = document.getElementById('error-message');
    }
    showError (message){
        this.erroMessage.textContent = message;
        this.erroMessage.style.display = 'block';
    }
    hideError (){
        this.erroMessage.style.display = 'nome';
    }
    clearForm(){
        this.usernameInput.value ='';
        this.passwordInput.value ='';
    }
    onSubmit (calback){
        this.loginForm.addEventListener('submit', event => {
            event.preventDefault();
            const user = this.usernameInput.value;
            const pass = this.passwordInput.value;
            calback(user,pass);
        })
    }
}