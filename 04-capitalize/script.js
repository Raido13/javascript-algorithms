/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/

function capitalize(str) {
    if(!str || str == ' ') return str;
    const arr = str.split(' ');
    const res = arr.map(elem => {
        if(!elem || elem == ' ') return elem;
        return elem.replace(elem[0], elem[0].toUpperCase());     
    });
    return res.join(' ');
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize('молодость всё простит')); // "Молодость Всё Простит"
console.log(capitalize('afsaf '));
console.log(capitalize('молодость  всё  простит'));