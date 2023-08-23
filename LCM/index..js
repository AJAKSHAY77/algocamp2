// let a = 10
// let b = 20

function GCD(a,b) {
    let ans = 1;
    for (i = 2; i < Math.min(a, b); i++){
        if (a % i == 0 && b % i == 0) {
            ans =i
        }
    }
    return ans
}
// console.log(GCD(a, b));

function LCM(a,b) {
    let G = GCD(a,b)
    return (a*b)/G    
}
console.log(LCM(10,12));


