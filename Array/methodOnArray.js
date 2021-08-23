// creating array 

const namesOfFriends = ["Abhishek","Ram","Ravi","Aman","Kapish","Saurabh","Shubham","Hari-Om","Vivek"];

// suppose we want to know the length of friends 

let lenOfFriends = namesOfFriends.length;
console.log(lenOfFriends); //9

// we want to add more friends in Array 
// 1:- Push()
// 2:-unshift()

let updatedFriendsArray = namesOfFriends.push("Vikash Dubey");
console.log(namesOfFriends);

   /*        [
     'Abhishek',
    'Ram',          'Ravi',    
    'Aman',         'Kapish',  
    'Saurabh',      'Shubham', 
    'Hari-Om',      'Vivek',   
    'Vikash Dubey'
  ]   */
  
console.log(updatedFriendsArray);  // 10

let updatedFriendsArray1 = namesOfFriends.unshift("Dheeraj");
 console.log(namesOfFriends);  
 
 /*        [
    'Dheeraj',      'Abhishek',
    'Ram',          'Ravi',    
    'Aman',         'Kapish',  
    'Saurabh',      'Shubham', 
    'Hari-Om',      'Vivek',   
    'Vikash Dubey'
  ]   */
  
 console.log(updatedFriendsArray1); //11