function pattern(n) {
   
    for (let row = 1; row <= n; row++) {
      let space = row;
      let str = "";
      for (i = 1; i <= space; i++) {
        str += " ";
      }
      let num = row;
      while (num <= n) {
        str += num + " ";
        num++;
      }

      console.log(str);
    }
}

function pattern2(n) {
    for (row = 1; row < n - 1; row++) {
        let space = n - row - 1
        let str = "";
        for (i = 0; i <= space; i++) {
            str=str+" "
        }
        let num = n - row
        while (num <= n) {
            str=str+num+" "
            num++
        }
   console.log(str); 
    }
   
    
}
function result(x) {
    pattern(x);
    pattern2(x);
}
result(7)

// let n = 7;
// for (row = 1; row <= n; row++){
//     let space = row - 1;
//     let str = "";
//     for (i = 0; i <= space; i++){
//         str = str + " "
//     }
//     let num = row
//     while (num <= n) {
//         str = str + num + " ";
//         num++
//     }
//     console.log(str);
// }
