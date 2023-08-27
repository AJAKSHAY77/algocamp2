let ar = [1, 2, 3, 4, 4, 5, 6, 7, 8]

for (const val of ar) {
    console.log(val);
}

const aj = "akshay"
for (const char of aj) {
    console.log(char);
}

const obj = {
    "name":"akshay"
}
console.log(obj["name"]);

obj.age = 23;
obj["id"] = 202;
console.log(obj);

console.log(obj);
delete obj.name
console.log(obj);