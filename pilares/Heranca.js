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

// Objeto (instanciado ou transformado em algo da vida real)
const minhaNave = new NaveJedi("Piu Piu", "Arthur Morais");

console.log(minhaNave.voar());

console.log(minhaNave.ativarHiperespaco());
