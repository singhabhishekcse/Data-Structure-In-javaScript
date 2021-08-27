function stack(){
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.clear = clear;
    this.length = length;
}


function push(element){
    this.dataStore[this.top++] = element
}
function peek(){
    return this.dataStore[this.top - 1];
}

function pop(){
    return this.dataStore[--this.top];

}
function clear(){
    this.top = 0;
}

function length(){
    return this.top;

}

// to verify if the given words is palidrome;

function isPalindrome(words){
    var s = new stack();
    for(let i = 0; i<words.length; i++){
        s.push(words[i])
    }

    var rword = "";
    while(s.length > 0){
        rword += s.pop();
    }


    if(words == rword){
        return true;

    }else{
        return false;
    }
    
   
 
}

var word1 = "hello";
if (isPalindrome(word1)){
     console.log(`my  ${word1} is palidrome`);
}else{
    console.log(`my word is not a palidrome`);
}

var word2 = "racecar";
if (isPalindrome(word2)){
     console.log(`my word ${word2} is palidrome`);
}else{
    console.log(`my word is not a palidrome`);
}



