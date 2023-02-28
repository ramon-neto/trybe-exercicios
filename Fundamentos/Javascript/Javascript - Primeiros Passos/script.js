/*
let a = 70;
let b = 60;
let c = 50;

 console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

if (a > b) {
    console.log(a);
} else {
    console.log(b);
}

if (a > b && a > c) {
    console.log(a);
} else if (b > a && b >c) {
    console.log(b);
} else {
    console.log(c);
}

 if (a > 0) {
    console.log('Positivo!');
} else if (a == 0) {
    console.log('Zero!');
} else {
    console.log('Negativo!');
}


if (0 > a || a > 360) {
    console.log('Error no ângulo A');
} else if (0 > b || b >360) {
    console.log('Error no ângulo B');
} else if (0 > c || c > 360) {
    console.log('Error no ângulo C');
} else if (a+b+c == 180) {
    console.log('True');
} else {
    console.log('False');
} 

const key = 'Cavalo'

switch (key.toLowerCase()) {
    case 'cavalo':
        console.log('L');
        break;
    case 'bispo':
        console.log('Diagonal');
        break;
    case 'peão':
        console.log('Frente');
        break;
    case 'torre':
        console.log('Horizontal e Lateral');
        break;
    case 'rainha':
    case 'rei':
        console.log('Horizontal, Lateral e Diagonal');
        break;

    default:
        console.log('Peça invalida');
        break;
} 

let a = 55

if (0 > a || a > 100) {
    console.log('Error!');
} else if (a >= 90) {
    console.log('A');
} else if (a >= 80) {
    console.log('B');
} else if (a >= 70) {
    console.log('C');
} else if (a >= 60) {
    console.log('D');
} else if (a >= 50) {
    console.log('E');
} else {
    console.log('F');
}


let a = 20
let b = 21
let c = 22

if (a % 2 == 0 || b % 2 == 0 || c % 2 == 0) {
    console.log(true);
} else {
    console.log(false);
}


let a = 20
let b = 24
let c = 22

if (a % 2 != 0 || b % 2 != 0 || c % 2 != 0) {
    console.log(true);
} else {
    console.log(false);
}


let custo = 20
let venda = 30


if (custo < 0 || venda < 0) {
    console.log('Error 404!');
} else {
    let custo_total = custo + custo*.2 
    let lucro = venda - custo_total
    let lucro_total = lucro*1000
    console.log('O lucro foi de R$' + lucro_total);
}  

*/


let salario_bruto = 1500.10
let salario_base

if (salario_bruto <= 1556.94) {
    salario_base = salario_bruto - salario_bruto * 0.08;
} else if (salario_bruto <= 2594.94) {
    salario_base = salario_bruto - salario_bruto * 0.09;
} else if (salario_bruto <= 5189.82) {
    salario_base = salario_bruto - salario_bruto * 0.11;
} else {
    salario_base = salario_bruto - 570.88;
}

console.log(salario_base);
let imposto_de_renda = 0

if (salario_base > 1903.98) {
    if (salario_base <= 2826.65) {
        imposto_de_renda = salario_base * 0.075 - 142.80;
    } else if (salario_base <= 3751.05) {
        imposto_de_renda = salario_base * 0.15 - 354.80;
    } else if (salario_base <= 4664.68) {
        imposto_de_renda = salario_base * 0.225 - 636.13;
    } else {
        imposto_de_renda = salario_base * 0.275 - 869.36;
    }
}

if (imposto_de_renda == 0)
    console.log('Isento');
else
    console.log(imposto_de_renda);


console.log(salario_base - imposto_de_renda);