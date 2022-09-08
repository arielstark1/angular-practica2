class Calculadora{
        numero:number;
    constructor(valor:number){
        console.log("iniciando calculadora...")
        this.numero=valor;
    }
    sumar(){
        return this.numero + this.numero;
    }
}

let calcA = new Calculadora(10);
console.log(calcA.sumar())
let calcB= new Calculadora(15);
