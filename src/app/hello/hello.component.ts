import {Component}from '@angular/core'


@Component({
    selector: 'hello',
    templateUrl: './hello.component.html'
})
export class HelloComponent{

    nome: String
    clientes: Cliente[];


    constructor(){
    this.nome = 'Fulano'
    let fulano = new Cliente('Fulano' , 35);
    let cicrano = new Cliente('Cicrano' , 25);
    let beltrano = new Cliente('Beltrano' , 44);
   this.clientes=[fulano, cicrano, beltrano];
    }
}
class Cliente{
    constructor(
        public nome: string,
        public idade: number
    ){

    }
}