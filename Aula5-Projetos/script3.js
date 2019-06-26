class celular {

    constructor() {
        this.cor = "prata";
    }

    ligar(){
        console.log('Uma ligação');
        return 'Ligar';
    }
}

let objeto = new celular();

console.log(objeto.cor);

console.log(objeto.ligar());