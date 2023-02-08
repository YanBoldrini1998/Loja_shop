function Cliente() {
    var Id
    var NomeUsuario;
    var Idade;
    var Cpf;
    var Password;

    this.getId = function () {
        return Id;
    };
    this.setId = function () {
        //Nome = ClienteController;
        // validar como criar um metodo de auto-incremento para set no id do cliente(code ou Banco de dados).
    };
    this.getNomeUsuario = function () {
        return NomeUsuario;
    };
    this.setNomeUsuario = function (value) {
        NomeUsuario = value;
    };
    this.getIdade = function () {
        return Idade;
    };
    this.setIdade = function (value) {
        Idade = value;
    };
    this.getCpf = function (){
        return Cpf;
    }
    this.setCpf = function (value){
        Cpf = value;
    }
    this.getPassword = function (){
        return Password;
    }
    this.setPassword = function (value){
        Password = value;
    }

}