const arr = [1, 2, 3, 4, 5, 6, 7, 8]


function evenodd(el) {
     if (el % 2 == 0) {
       return`${el}is a even number`;
     } else {
       return `${el}is a odd number`;
     }
}
const newarr = arr.map(evenodd)

console.log(newarr);
console.log(typeof newarr);
