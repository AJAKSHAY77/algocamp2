// let a = "akshay"
// console.log(a.indexOf("h"));
// console.log(a[4]);


// for (idx = 0; idx <= a.length - 1; idx++){
//     console.log(idx,a[idx]);
// }

// let num = 12345;
// let b = "";
// console.log(typeof "" + num);
// let c = " "
// console.log(c.l);


// let num = 1234556;
// let convert = num + ""
// console.log(typeof convert);


function palindrome(num) {
    let str = "" + num;
    let i = 0;
    let j = str.length - 1;
    while (i <= j) {
        if (str[i] == str[j]) {
            i++;
            j--;
            
        }
        else {
            return false
        }
        return true;
    }
 

    

}

console.log(palindrome(12111));