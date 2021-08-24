function stack(){
    this.top = 0;
    this.dataStore = [];
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.clear = clear;
    this.length = length;

}

function  push(element){
    this.dataStore[this.top++] = element;
}
function pop(){
    return this.dataStore[-this.top];
}
function peek(){
    return this.dataStore[this.top - 1];
}
function length(){
    return this.top;

}

function clear(){
    this.top = 0;

}


const stack1 = new stack();
stack1.push("Abhi");
stack1.push("Ravi");
stack1.push("Ram");
stack1.push("Aman");

console.log(stack1);
console.log(stack1.length());
console.log(stack1.top);
console.log(stack1.peek());
console.log(stack1.pop());
console.log(stack1.clear());
console.log(stack1);


