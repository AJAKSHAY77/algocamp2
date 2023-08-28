// const arr = [10, 20, 30, 40, 50]

// const res  =arr.reduce((acc, curr) => {
//     return acc * curr;
// },5)
// console.log(res);


const cart = [
  { name: "mobile", price: 10000 },
  { name: "washing", price: 20000 },
  { name: "tv", price: 30000 },
];

const totalbill = cart.reduce((prev,curr) => {
    let total = prev.price + curr.price
    return {price:total,name:total}
})
console.log(totalbill.price,totalbill.name);