/* 
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;



for (let index = 0; index < numbers.length; index += 1){
    sum += numbers[index];
}

let media = sum / numbers.length;

if (media > 20) {
    console.log('Valor maior que 20');
} else {
    console.log('Valor menor ou igual a 20');
}

let maior = numbers[0]; //Maior Número da Array

for (let index = 1; index < numbers.length; index +=1) {
    if (maior < numbers[index])
        maior = numbers[index];
}

console.log(maior);


let num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
let divisao = num1[0];

for (let index = 0; index < num1.length; index += 1) {
    console.log(num1[index]);
}

console.log(divisao);
 

let number = 10; 
let fat = 1;

for (let index = number; index >= 1; index -= 1){
    fat *= index;
}

console.log(fat);


let word = 'Trybe'; 
let reverse = '';

for (let index = word.length - 1; index >= 0; index -= 1){
    reverse += word[index];
}

console.log(reverse);
*/
  
let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior = '';

for (let i = 0; i < array.length; i++) {
    if (maior.length < array[i].length)
    maior = array[i];
}

console.log(maior);

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior = array[0];

for (let i = 1; i < array.length; i++) {
    if (maior.length > array[i].length)
    maior = array[i];
}

console.log(maior);


let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior = array[0];
let menor = array[0];

for (let i = 1; i < array.length; i++) {
    if (maior.length > array[i].length)
        maior = array[i];
    if (menor.length < array[i].length)
        menor = array[i];
}
console.log(maior);
console.log(menor);