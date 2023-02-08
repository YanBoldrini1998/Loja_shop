import {LoginView} from "./View/loginView.js";

class loginController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
     
        this.view.onSubmit(this.handleLogin.bind(this));
    }
    async handleLogin(user, pass){
        try {
            this.view.hideErro();
            await this.model.login(user, pass);
            this.view.clearForm();
            window.location.href = '/home';
           } catch (error) {
            this.view.showError(error.message);
        }
    }
}

const loginModel = new LoginModel();
const loginView = new LoginView();
const loginController = new LoginController(loginModel, loginView);