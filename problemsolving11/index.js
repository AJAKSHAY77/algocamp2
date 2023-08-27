// const obj = {
//     name: 'akshay',
//     email: "aditya",
//     Id:2020
// }

// console.log(obj.name);
// console.log(obj.email);

// obj.name = "jai ho"
// obj["email"] = "jai hind"

// console.log(obj);


// const obj = {}

// obj.name = "akshay"
// obj["email"] = "aditya"
// console.log(obj);

// obj.id = 101
// console.log(obj);
// obj.id += 1
// console.log(obj);


const string = "javascript"

const obj = {}

for (const val of string) {
    //console.log(val);
    if (obj[val]) {
        // obj[val] += 1
        obj[val]=obj[val]+1
    }
    else {
       obj[val] = 1; 
    } 
   
    
}
console.log(obj);









