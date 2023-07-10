// classe é como um molde para objetos
class Receita {

    nome: string;
    ingredientes: string[];
    instrucoes: string[];

    // construtor de objetos 
    constructor(nome: string, ingredientes: string[], instrucoes: string[]) {
        this.nome = nome;
        this.ingredientes = ingredientes;
        this.instrucoes = instrucoes;
    }

    // método da classe
    imprimirReceita() {
        console.log(this.nome);
        console.log(this.ingredientes);
        console.log(this.instrucoes)
    }
}


const receita = new Receita("Omelete", ["2 ovos", "1 pitada de sal", "1 fatia de presunto", "2 fatias de queijo", "tempero verde a gosto", "caldo de galinha a gosto"],
    ["Bata os 2 ovos, pode ser na batedeira ou não.", "Após ter batido bem, coloque-o na frigideira já untada com óleo, acrescente o sal, o presunto picado em quadradinhos e as duas fatias de queijo (não precisa picar o queijo).", "Coloque os temperos a gosto, espere ficar firme, e vire o omelete.", "Está pronto um omelete delicioso, bom apetite!"]);

// executando um método da classe
console.log(receita.imprimirReceita());