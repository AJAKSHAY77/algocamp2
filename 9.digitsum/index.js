let a = 9.23342
// console.log(Math.floor(a));

// let x = 4136

// let sum = 0;
// while (x > 0) {
//     let lastdigit = x % 10;
//     sum = sum + lastdigit;
//     x = Math.floor(x/10)
    
// }

// console.log(sum);



function digitsum(x) {
    let sum = 0;
    while (x > 0) {
     let  lastdigit = x % 10;
      sum += lastdigit;

      x = Math.floor(x / 10);
    }
   return sum
}

console.log(digitsum(123));



