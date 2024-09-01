/// creating an array
const fruits=["orange","apple","banana","guava"];
console.log(fruits);
fruits[4]="mango";
console.log(fruits);

//acessing the elements

console.log(fruits[3]);
console.log(fruits[0]);

///finding length of the array

console.log(fruits.length);
console.log(fruits.lastIndexOf());

//adding elements to the end of an array using the push()method

fruits.push("pineapple","custard apple");
console.log(fruits);

//remove last element  of an array using the pop()method

fruits.pop();
console.log(fruits);

//add an element to the beginning of an array using unshift() method

fruits.unshift("kiwi","Dragon fruit");
console.log(fruits);


//remove the first element from an array using shift() method

fruits.shift();
console.log(fruits);

/////
console.log(fruits.includes("kiwi"));

