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
    let zeros = [];
    arr.forEach(item => {
        let a = item.toString().split('');
        let b = a.map(item => {return parseInt(item)});
        zeros = b.filter(num => {return num == 0});
        counter = counter + zeros.length;
    });
    console.log(arr);
    return counter;
}

// Протестируйте решение, вызывая функцию с разными аргументами:


console.log(countZeros(342)); // 11 – 11 нулей в числах: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100
