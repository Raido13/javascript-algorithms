/*
 * Задача 9: «Простое число»
 *
 * Напишите функцию isPrime(n) для проверки, простое число n или нет.
 * Напомним, что число называют простым, если оно больше 1 и делится
 * без остатка только на 1 и на само себя.
 * 
 * На вход функция должна принимать число n и возвращать true,
 * если n простое, и false — если нет.
*/

function isPrime(n) {
    if(n == 0 || n == 1) {return false}
    if(n == 2) {return true}
    if(n % 2 == 0) {return false}
    for(i = 3; i <= n; i = i + 2){
        if(n % i == 0 && i != n) {return false}
        if(n % i == 0 && i == n && n % 1 == 0) {return true}
    }
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(isPrime(0)); // false
console.log(isPrime(1)); // false
console.log(isPrime(2));
console.log(isPrime(3)); // true
console.log(isPrime(6)); // false
console.log(isPrime(17)); // true