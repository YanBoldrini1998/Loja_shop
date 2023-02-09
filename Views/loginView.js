class LoginView {
    constructor() {
        this.loginForm = document.getElementById('login-form');
        this.usernameInput = document.getElementById('user');
        this.passwordInput = document.getElementById('pass');
        this.erroMessage = document.getElementById('error-message');
    }
    showError(message) {
        this.erroMessage.textContent = message;
        this.erroMessage.style.display = 'block';
    }
    hideError() {
        this.erroMessage.style.display = 'nome';
    }
    clearForm() {
        this.usernameInput.value = '';
        this.passwordInput.value = '';
    }
    onSubmit(calback) {
        this.loginForm.addEventListener('submit', event => {
            event.preventDefault();
            const user = this.usernameInput.value;
            const pass = this.passwordInput.value;
            calback(user, pass);
        })
    }
    limpa_formulário_cep() {
        //Limpa valores do formulário de cep.
        document.getElementById('rua').value = ("");
        document.getElementById('bairro').value = ("");
        document.getElementById('cidade').value = ("");
        document.getElementById('uf').value = ("");
        document.getElementById('ibge').value = ("");
    }

    meu_callback(conteudo) {
        if (!("erro" in conteudo)) {
            //Atualiza os campos com os valores.
            document.getElementById('rua').value = (conteudo.logradouro);
            document.getElementById('bairro').value = (conteudo.bairro);
            document.getElementById('cidade').value = (conteudo.localidade);
            document.getElementById('uf').value = (conteudo.uf);
            document.getElementById('ibge').value = (conteudo.ibge);
        } //end if.
        else {
            //CEP não Encontrado.
            limpa_formulário_cep();
            alert("CEP não encontrado.");
        }
    }

    pesquisacep(valor) {

        //Nova variável "cep" somente com dígitos.
        var cep = valor.replace(/\D/g, '');

        //Verifica se campo cep possui valor informado.
        if (cep != "") {

            //Expressão regular para validar o CEP.
            var validacep = /^[0-9]{8}$/;

            //Valida o formato do CEP.
            if (validacep.test(cep)) {

                //Preenche os campos com "..." enquanto consulta webservice.
                document.getElementById('rua').value = "...";
                document.getElementById('bairro').value = "...";
                document.getElementById('cidade').value = "...";
                document.getElementById('uf').value = "...";
                document.getElementById('ibge').value = "...";

                //Cria um elemento javascript.
                var script = document.createElement('script');

                //Sincroniza com o callback.


                //Insere script no documento e carrega o conteúdo.
                document.body.appendChild(script);

            } //end if.
            else {
                //cep é inválido.
                limpa_formulário_cep();
                alert("Formato de CEP inválido.");
            }
        } //end if.
        else {
            //cep sem valor, limpa formulário.
            limpa_formulário_cep();
        }
    };

}