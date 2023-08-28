const arr = ["abc", "hello", "c", "d", "c", "abc", "d"]

const obj = {}

// for (const val of arr) {
//     if (obj[val]){
//         obj[val]+=1
//     }
//     else {
//         obj[val]=true
//     }
// }
// console.log(obj);

for (const element of arr) {
    if (!obj[element]) {
        obj[element]=true
    }
}

for (const key in obj) {
         console.log(key);      
        
}
    

// let kk = {
//     name: "akshay",
//     name: "aditya",
//     id:101
// }
// console.log(kk);


// const words = ["abc", "hello", "c", "d", "c", "abc", "d"];

// const obj1 = {};
// for (const letters of words) {

//     if(obj1[letters]){
//         obj1[letters]+=1
//     } else {
//        obj1[letters]=1 
//     }
    
// }
// console.log(obj1);
const words = ["abc", "hello", "c", "d", "c", "abc", "d"];

const obj1 = {};
for (const letters of words) {

    if(!obj1[letters]){
        obj1[letters]=true
    }
    
}

console.log(obj1);
console.log(Object.keys(obj1));

    

