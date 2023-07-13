/*
 * Задача 12: «Посчитать количество нулей»
 *
 * Напишите функцию countZeros(n), принимающую на вход натуральное число n.
 * Возвращать функция должна суммарное количество нулей, содержащихся во всех числах от 1 до n включительно.
 *
*/

function countZeros(n) {
    const arr = [];
    let start = 1;
    while (start <= n){
        arr.push(start++);
    }
    let counter = 0;
    arr.forEach(item => {
        const zeros = [];
        let a = item.toString().split('');
        let b = a.map(item => {return parseInt(item)});
        b.filter(num => {if(num == 0){zeros.push(num)}});
        counter = counter + zeros.length;
    });
    return counter;
}

// Протестируйте решение, вызывая функцию с разными аргументами:


console.log(countZeros(342)); // 11 – 11 нулей в числах: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100
