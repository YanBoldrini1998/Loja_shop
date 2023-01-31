function Cliente() {
    var Id
    var Nome;
    var Idade;
    var Cpf;

    this.getId = function () {
        return Id;
    };
    this.setNome = function () {
        //Nome = ClienteController;
        // validar como criar um metodo de auto-incremento para set no id do cliente(code ou Banco de dados).
    };

    this.getNome = function () {
        return Nome;
    };
    this.setNome = function (value) {
        Nome = value;
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
}