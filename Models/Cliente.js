function Cliente() {
    var Nome;
    var Idade;
    var Cpf;


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