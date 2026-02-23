class Personagem {
    nome;
    poderAtaque;
    #hp;

    constructor(nome, poderAtaque) {
        this.nome = nome;
        this.poderAtaque = Number(poderAtaque);
        this.#hp = 100;
    }

    receberDano(valor) {
        this.#hp -= valor;
        if (this.#hp <= 0) {
            this.#hp = 0;
            return `${this.nome} tomou ${valor} de dano e morreu. HP: ${this.#hp}.`;
        } else {
            return `${this.nome} tomou ${valor} de dano. HP: ${this.#hp}.`;
        }
    }

    exibirStatus() {
        if (this.#hp <= 0) {
            return `${this.nome} foi derrotado! HP: ${this.#hp}. ☠️`;
        } else {
            return `${this.nome} está vivo! HP: ${this.#hp}. 😊`;
        }
    }
}

const personagem1 = new Personagem('Arthur', 50);


console.log('------- Sem morrer -------');
console.log(personagem1.receberDano(30));
console.log(personagem1.exibirStatus());
console.log('');

console.log('------- Morrer -------');
console.log(personagem1.receberDano(102));
console.log(personagem1.exibirStatus());
console.log('');

class Guerreiro extends Personagem {
    constructor(nome, poderAtaque, forcaFisica) {
        super(nome, poderAtaque);
        this.forcaFisica = forcaFisica;
    }

    atacar(alvo) {
        const dano = this.poderAtaque + this.forcaFisica;

        return `${this.nome} deu ${dano} de dano em ${alvo} com um golpe de espada! ⚔️`;
    }
}

const guerreiro1 = new Guerreiro('Arthur', 35, 28);
console.log('------- Dano Guerreiro -------');
console.log(guerreiro1.atacar('Murilow'));
console.log('');

class Mago extends Personagem {
    constructor(nome, poderAtaque, poderMagico) {
        super(nome, poderAtaque);
        this.poderMagico = poderMagico;
    }

    atacar(alvo) {
        const dano = this.poderAtaque + (this.poderMagico * 2);

        return `${this.nome} deu ${dano} de dano em ${alvo} com uma magia lançada! 🪄`;
    }
}

const mago1 = new Mago('Gustavo', 100, 28);
console.log('------- Dano Mago -------');
console.log(mago1.atacar('Victor'));
console.log('');

console.log('------- Batalha -------');
console.log('');

console.log('------- Antes -------');
console.log('');

console.log(mago1.exibirStatus());
console.log(guerreiro1.exibirStatus());
console.log('');


console.log('------- Durante -------');
console.log('');

console.log(guerreiro1.atacar(mago1.nome));
const danoDoGuerreiro = guerreiro1.poderAtaque + guerreiro1.forcaFisica;
console.log(mago1.receberDano(danoDoGuerreiro));
console.log(mago1.exibirStatus());
console.log('');

console.log(mago1.atacar(guerreiro1.nome));
const danoDoMago = mago1.poderAtaque + (mago1.poderMagico * 2);
console.log(guerreiro1.receberDano(danoDoMago));
console.log(guerreiro1.exibirStatus());
console.log('');


console.log('------- Final -------');
console.log('');
console.log(mago1.exibirStatus());
console.log(guerreiro1.exibirStatus());
