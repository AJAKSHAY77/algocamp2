const arr = [2, 4, 5, 6, 7, 9, 6, 4, 4, 3, 2]
const target = 6
function printpair(arr) {
    for (i = 0; i <= arr.length - 2; i++) {
        for (j = i + 1; j < arr.length; j++) {
            arr[i] + arr[j] == target
            return [i, j];
        }
    }
}
console.log(printpair(arr));