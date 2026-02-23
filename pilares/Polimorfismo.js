class NaveEspacial {
    // Atributos
    nome;
    #estaVoando;

    // Método
    constructor(nome) {
        this.nome = nome;
        this.#estaVoando = false;
    }

    voar() {
        if (!this.#estaVoando) {
            this.#estaVoando = true;
        }
        return `${this.nome} está voando pelo espaço 🚀`;
    }

    pousar() {
        if (this.#estaVoando) {
            this.#estaVoando = false;
        }
    }

    receberInfo() {
        return this.#estaVoando ? 'Sim' : 'Não';
    }
}

// Outra Classe
class NaveJedi extends NaveEspacial {
    constructor(nome, mestre) {
        super(nome);
        this.mestre = mestre;
    }

    ativarHiperespaco() {
        return `${this.nome} entrou no hiperespaço sob o comando de ${this.mestre}`;
    }
}

// Outra Classe
class NaveSith extends NaveEspacial {
    constructor(nome, mestre) {
        super(nome);
        this.mestre = mestre;
    }

    ativarHiperespaco() {
        return `${this.nome} entrou no hiperespaço sob o comando do craque de bola ${this.mestre}`;
    }
}

// Objeto (instanciado ou transformado em algo da vida real)
const minhaNaveJedi = new NaveJedi('Pow Pow', 'Arthur Santos');

console.log(minhaNaveJedi.voar());
console.log(minhaNaveJedi.ativarHiperespaco());
console.log("--------------------------------------------")
const minhaNaveSith = new NaveSith('Pei Pei', 'Morais Santos');
console.log(minhaNaveSith.voar());
console.log(minhaNaveSith.ativarHiperespaco());
