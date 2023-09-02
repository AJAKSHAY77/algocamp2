// const arr = [1, 2, 3, 4, 5, 5, 6, 6, 7]
// console.log(arr.reverse())


// function swap(arr, i, j) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j]=temp
// }

// let arr = [1, 3, 4, 5, 6, 7, 7, 8, 20, 40, 50]
// let i = 0;
// let j = arr.length - 1;
// while (i < j) {
//     swap(arr, i, j)
//     i += 1;
//     j -= 1;
// }
// console.log(arr);


// let arr = [10, 20, 30, 40, 50, 90]

// function swap(arr,i,j) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
// }

// let i = 0;
// let j = arr.length - 1;
// while (i < j) {
//     swap(arr, i, j)
//     i += 1;
//     j-=1
// }
// console.log(arr);


const arr = [1, 2, 3, 4, 5, 5, 6, 6]

function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j]=temp
}
let i = 0;
let j = arr.length - 1;
while (i < j) {
    swap(arr, i, j);
    i++;
    j--;
}
console.log(arr);



