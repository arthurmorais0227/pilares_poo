class NaveEspacial {
    constructor(nome) {
        this.nome = nome;
        this.estaVoando = false;
    }

    voar() {
        if (!this.estaVoando) {
            this.estaVoando = true;
        }
        return `${this.nome} está voando pelo espaço 🚀`;
    }

    pousar() {
        if (this.estaVoando) {
            this.estaVoando = false;
        }
    }
}


// Objeto (instanciando ou transformand em algo da vida real)
const minhaNave = new NaveEspacial("Moralaies");
const navinha = new NaveEspacial("celta 2011")

console.log(minhaNave);

console.log(minhaNave.voar());

console.log("-------------------------------");
console.log(navinha.voar());

console.log(`${navinha.nome} está voando? ${minhaNave.estaVoando ? "Sim" : "Não"}`);

console.log('-------------------------------');
navinha.pousar();

console.log(`${navinha.nome} está voando? ${navinha.estaVoando ? 'Sim' : 'Não'}`);
