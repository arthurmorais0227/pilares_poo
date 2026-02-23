class NaveEspacial {
    // Atributos
    nome;
    #estaVoando;

    // Métoo
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
        return this.#estaVoando ? "Sim" : "Não";
    }
}


// Objeto (instanciado ou transformado em algo da vida real)
const minhaNave = new NaveEspacial('Moralaies');

console.log(minhaNave);
console.log(minhaNave.voar());

console.log('----------------------------');
minhaNave.nome = "Nave lepo lepo";
console.log(minhaNave);

console.log('----------------------------');
minhaNave.pousar();
console.log(`${minhaNave.nome} está voando? ${minhaNave.estaVoando ? 'Sim' : 'Não'}`);

console.log('----------------------------');
minhaNave.voar();
console.log(`${minhaNave.nome} está voando? ${minhaNave.receberInfo()}`);
