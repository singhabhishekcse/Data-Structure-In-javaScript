// creating array 

const namesOfFriends = ["Abhishek","Ram","Ravi","Aman","Kapish","Saurabh","Shubham","Hari-Om","Vivek"];

//  we want to remove element form array 
// 1:- Pop();
// 2:-shift();

namesOfFriends.pop();
console.log(namesOfFriends);

  /* [
  'Dheeraj', 'Abhishek',
  'Ram',     'Ravi',
  'Aman',    'Kapish',
  'Saurabh', 'Shubham',
  'Hari-Om', 'Vivek'
] */
   
console.log(namesOfFriends.length); //10

namesOfFriends.shift();

console.log(namesOfFriends);
  /*  [
  'Abhishek', 'Ram',
  'Ravi',     'Aman',
  'Kapish',   'Saurabh',
  'Shubham',  'Hari-Om',
  'Vivek'
]*/
console.log(namesOfFriends.length);  // 9