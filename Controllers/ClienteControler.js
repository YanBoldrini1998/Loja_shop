import {Cliente} from "./Models/cliente.js";
import { HomeController } from "./HomeController"
function ClienteController (){

    //Metodo Post Cliente.
    this.PostCliente = function (nome,Idade, Cpf){

    }
    // Metodo de Busca por id.
    this.GetCliente = function (id){

    }
    // metodo de buscar todos.
    this.GetAllCliente = function (){

    }
    this.DeleteCliente = function (id){
        
    }
    this.PutCliente = function (TextNome, txtIdade, txtCpf ){
        Cliente.nome = TextNome;
        Cliente.Cpf = txtCpf;
        Cliente.Idade = txtIdade;

        Save.arguments(Cliente);
    }
}