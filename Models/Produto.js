function Produto (){

    var Id;
    var Nome;
    var Marca;
    var QtdProduto;

    this.getId = function () {
        return Id;
    };
    this.setId = function () {
        //Nome = ClienteController;
        // validar como criar um metodo de auto-incremento para set no id do cliente(code ou Banco de dados).
    };
    this.getNome = function () {
        return Nome;
    };
    this.setNome = function (value) {
        Nome = value;
    };
    this.getQtdProduto = function () {
        return QtdProduto;
    };
    this.setQtdProduto = function (value) {
        QtdProduto = value;
    };

    this.getMarca = function () {
        return Marca;
    };
    this.setMarca = function (value) {
        Marca = value;
    };
}