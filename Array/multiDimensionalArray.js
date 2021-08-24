const num = [[22,24,25],[33,34,35],[43,44,45]]; //declear array

var total = 0;
var avg = 0.0;
for(let row = 0 ; row < num.length ; row++){
    for(let col = 0 ; col < num[row].length ; col++){
        total += num[row][col];
        
    }
    console.log(`total marks get..${total}`);
    avg = total/num[row].length;
    console.log(`average of ${total} is ${parseInt(avg)}`);
}
