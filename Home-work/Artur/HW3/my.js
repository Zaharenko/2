function treeSum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            total += treeSum(arr[i]);
        } else if (typeof arr[i] === 'number') {
            total += arr[i];
        }
    }
    return total;
}

// Проверка работы  массива 
let exampleArray = [5, [7, 4], [2 [8, 1,3], 7,9,10,8]];
console.log(treeSum(exampleArray)); //Вывод цифры 50 
