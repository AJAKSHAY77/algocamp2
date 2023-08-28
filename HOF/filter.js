const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const result = arr.filter((el) => {
    if (el > 5) {
        return el
    }
})
//console.log(typeof result, ...result);

const gang = ["akshay", "aditya", "om"]

const ans = gang.filter((el) => {
   return el.includes("a")
})

console.log(ans);
