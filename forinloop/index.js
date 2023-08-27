let obj = {
    name: "akshay",
    salary: 40000,
    age: 24,
    city: "jabalpur",
    team:"projects"
}

// for (const val in obj) {
//     console.log(val,"=",obj[val]);
// }


for (const entry of Object.entries(obj)) {
    console.log(entry);
}

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

 


// const aj = ["akshay", "aditya", "jai ho"]

// aj[0] = "jai hind"
// aj[1] = "idr aa"
// console.log(aj);