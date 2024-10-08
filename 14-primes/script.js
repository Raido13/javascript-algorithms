/*
 * Задача 14: «Простые числа»
 *
 * Напишите функцию primes(n). Её единственный аргумент — целое число n.
 * Функция должна возвращать массив простых чисел от 2 до n.
 * 
*/

function primes(num) {
    const arr = [];
    let start = 2;
    const res = [];
    while (start <= num){
        arr.push(start++);
    }
    arr.forEach(item => {
        if(item == 2) {res.push(item)}
        if(item % 2 == 0) {return}
        for(i = 3; i <= num; i = i + 2){
            if(item % i == 0 && i != item) {return}
            if(item % i == 0 && i == item && item % 1 == 0) {res.push(item)}
        }
    });
    return res;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(primes(6)); // [2, 3, 5]
console.log(primes(17)); // [2, 3, 5, 7, 11, 13, 17]