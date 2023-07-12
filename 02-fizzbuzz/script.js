/*
 * Задача 2: «FizzBuzz»
 *
 * Напишите функцию fizzBuzz(n), принимающую как аргумент натуральное число.
 * Функция должна выводить в консоль числа от 1 до n, заменяя числа:
 *
 * • кратные трём — на fizz;
 * • кратные пяти — на buzz;
 * • кратные и трём, и пяти одновременно — на fizzbuzz.
 * 
*/

function fizzBuzz(n) {
    const arr = [];
    let start = 1;
    while (start <= n){
        arr.push(start++);
    }
    arr.map(item => {
       if(item % 3 == 0 && item % 5 != 0){
        return console.log('fizz');
       }
       if(item % 5 == 0 && item % 3 != 0){
        return console.log('buzz');
       }
       if(item % 3 == 0 && item % 5 == 0){
        return console.log('fizzbuzz');
       }
       return console.log(item);
    });
}
// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(fizzBuzz(1500));