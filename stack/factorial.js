function stack (){
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.length = length;
    this.peek = peek;
    this.clear = clear;

}

function push(element) {
    this.dataStore[this.top++] = element;
    
}
function pop(){
    return this.dataStore[--this.top];
}
function peek(){
        return this.dataStore[this.top - 1];

}
function clear(){
    this.top = 0;

}
function length() {
    return this.top;
}


function fact(n){
    const stack1 = new stack();
    while(n > 1){
        stack1.push(n--);
    }
    let product = 1;
    while(stack1.length() > 0){
        product *= stack1.pop();
    }
    return product;
}
console.log(fact(5));
console.log(fact(4));
console.log(fact(6));