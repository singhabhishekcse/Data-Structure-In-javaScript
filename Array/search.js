// creating array 

const namesOfFriends = ["Abhishek","Ram","Ravi","Aman","Kapish","Saurabh","Shubham","Hari-Om","Vivek"];

// 1- Use filter if you want to find all items in an array that meet a specific condition.
// 2- Use find if you want to check if that at least one item meets a specific condition.
// 3- Use includes if you want to check if an array contains a particular value.
// 4- Use indexOf if you want to find the index of a particular item in an array.



// 1- Use filter if you want to find all items in an array that meet a specific condition.


namesOfFriends.filter(nameFind);

function nameFind(namesOfFriends){
   namesOfFriends.length <= 5 ;
   console.log(namesOfFriends);

// Ram
// Ravi
// Aman
// Kapish
// Saurabh
// Shubham
// Hari-Om
// Vivek
}
console.log(namesOfFriends);


// [
//     'Abhishek', 'Ram',    
//     'Ravi',     'Aman',   
//     'Kapish',   'Saurabh',
//     'Shubham',  'Hari-Om',
//     'Vivek'
//   ]




// 2- Use find if you want to check if that at least one item meets a specific condition.

let nameFindByFind = namesOfFriends.find(nameFind2);
function nameFind2 (namesOfFriends) {
  return namesOfFriends.length >= 7;
}

console.log(nameFindByFind);




// 3- Use includes if you want to check if an array contains a particular value.


 let nameByInclude = namesOfFriends.includes("Abhishek");

console.log(nameByInclude);











// 4- Use indexOf if you want to find the index of a particular item in an array.


let nameByIndexOf = namesOfFriends.indexOf("Ravi");
console.log(nameByIndexOf);