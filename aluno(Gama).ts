// classe é como um molde para objetos
class Aluno {
    // propriedades
    nome: string;
    idade: number;
    notas: number[];

    // construtor de objetos 
    constructor(nome: string, idade: number, notas: number[]) {
        this.nome = nome;
        this.idade = idade;
        this.notas = notas;
    }

    // método da classe
    calcularMedia(): number {
        if (this.notas.length === 0) {
            return 0;
        }
        const soma = this.notas.reduce((total, nota) => total + nota, 0);
        return soma / this.notas.length;
    }
}

// fim da classe Aluno
// criando um novo objeto a partir da classe Aluno
// instanciar um objeto
const aluno1 = new Aluno("Hendy", 27, [5, 6.5, 9]);
const aluno2 = new Aluno("Meel", 20, [7, 4.5, 9]);
// imprimindo a propriedade do objeto
console.log(aluno1.nome);
// executando um método da classe
console.log(aluno1.calcularMedia());
console.log(aluno2.calcularMedia());