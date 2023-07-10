// classe é como um molde para objetos
class Circulo{
    //propriedade
    raio: number;

    //construtor de objetos
    constructor(raio: number){
        this.raio = raio;
    }

    //metodo da classe
    calcularDiametro(): number{
        return (2 * this.raio);
    }
    calcularCircunferencia(): number{
        return (2 * Math.PI * this.raio)
    }
    calcularArea(): number{
        return (Math.PI * this.raio * this.raio)
    }
}
//fim da classe Circulo
//criando um novo objeto a partir da classe Circulo
//instanciar um objeto
const circulo1 = new Circulo(5);

// executando um método da classe
console.log(circulo1.calcularDiametro());
console.log(circulo1.calcularCircunferencia());
console.log(circulo1.calcularArea());

