// const arr = [];
// function fact(number){
//    for(let i = 1; i < number + 1 ; i++){
//        arr.push(i);
       
//    }
//     let product = 1;
//     for (let i = 1; i < arr.length ; i++){
//        product *= arr[i];
//    }
   
// //    console.log(product);
    

// }
// fact(50);
// console.log(arr);
// // console.log(product);

 function fac(n) {
    
        
        let prod = 1;
        if( n === 0 || n === 1){
            return  n;
        }else{
        for( let i = n ; i >= 1; n-- ){
            prod *= n;
        }
        console.log(prod);
        return prod;
    
}}


console.log(fac(5));
