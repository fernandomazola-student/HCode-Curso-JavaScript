function calc(x1, x2, operator){
    return eval(`${x1} ${operator} ${x2}`);
}

var resultado = calc(2,3, '-');

console.log(resultado);


//receber argumentos, ou parametros


//Função anonima
(function (x1, x2, operator){
    return eval(`${x1} ${operator} ${x2}`);
})(2,3, '-');


//Arrow Function
calc = (x1, x2, operator) => {
    return eval(`${x1} ${operator} ${x2}`);
}




//EVENTOS

window.addEventListener('focus', event =>{
    console.log('focus');
});

document.addEventListener('click', event => {
   console.log('Click'); 
});

document.onclick = function(){
    console.log('Clicado');
}

//Window é a janela do navegador
//Document é o documento


let agora = Date.now();
console.log(agora);


let agoraNew = new Date();
console.log(agoraNew.getDate());

// Detectar localização

console.log(agoraNew.toLocaleDateString("pt-BR"));


let carros = ['palio 98', 'toro', 'uno', 10, true, new Date(), function(){}];

console.log(carros);
console.log(carros[0]);
console.log(carros[5].toLocaleDateString("pt-BR"));
console.log(carros[5].getFullYear());


carros.forEach(function(value, index){
    console.log(index,value);
});