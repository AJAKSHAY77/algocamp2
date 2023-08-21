let n = 5;
for (row = 1; row <= n; row++){
    
    let str = ""
    for (j = 1; j < row - n; j++){
        str+=" "
    }
  let counter = 1
    for (i = 1; i <= row; i++){
        str += counter;
        counter++
    }
    console.log(str);

}