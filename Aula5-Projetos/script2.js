let celular = function(){
    this.cor = "prata";
    this.ligar = function(){
        console.log('Ligação');
    }
}


let objeto = new celular();

console.log(objeto);
console.log(objeto.cor);

console.log(objeto.ligar());