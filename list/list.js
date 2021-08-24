function list(){

    this.listSize = 0;
    this.pos = 0;
    this.dataStore = [] // initialization the array list element

    this.toString = toString;
    this.append = append;
    this.remove =  remove;
    this.length = length;

}

// length of the list 

function length(){
    return this.listSize;
}

//Appending the element 

function append(element){
   this.dataStore[this.listSize++] = element;

}

// toString 

function toString(){
    return this.dataStore;

}

// remove
function remove(){
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = 0;

}




var names = new list();
names.append("Abhishek");
names.append("Ram");
names.append("Ravi");
names.append("Kapish");

console.log(names);
console.log(names.toString());
console.log(names.length());
console.log(names.remove());