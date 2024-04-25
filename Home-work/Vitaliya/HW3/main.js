// Массив

let arr=[5, 7, 
    [4, [2], 8, [1, 3], 2], 
    [9, [] ], 
    1, 8];


// Функция, которая рассчитывает и возращает сумму всех числовых элементов массива

function treeSum (arr){
    let sum = 0;
    for (let i=0; i < arr.length; i++){
        if (Array.isArray(arr[i])){
            sum +=treeSum(arr[i]);
        } else if (typeof arr[i] === 'number'){
            sum +=arr[i];
        }
    }
    return sum; 
}

console.log(treeSum(arr));



// Вариант 2

// function treeSum (arr, sum=0){
//     for (let i = 0; i < arr.length; i +=1){
//         let item = arr[i];
//         if (Array.isArray(item)){
//             sum += treeSum(item);
//         } else if (typeof item === 'number'){
//             sum +=item;
//         }
//     }
//     return sum;
// }


// console.log(treeSum(arr));
