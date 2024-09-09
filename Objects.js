///Introduction to objects
const henrryArray= [
    "henrry",
    "steven",
    2050-1990,
    "Actor",
    ["Doreamon","Nobitha","Shinchan"]
];
console.log(henrryArray);
console.log(typeof henrryArray);

///Declaring an object literal

const personArray= {
    firstName: "manasa",
    lastName:"Landa",
    age: 2024-2004,
    city:"srikakulam"
};
console.log(personArray);
console.log(typeof personArray);

////Accessing Properties
///Dot

console.log(personArray.lastName);
console.log(personArray.city)

///Bracket

console.log(personArray['firstName']);
console.log(personArray['age']);

//Add a new property to exisiting object using dot notation

personArray.occupation="Student";
console.log(personArray);

//Add a new property to exisiting object using bracket notation

personArray['hobbies']=["dancing","playing games"];
console.log(personArray);

//
const car={
    make: "maruti",
    model:"swift",
    year:1980,
    drive:function()
    {

        console.log("drive");
    },
    
}
  car.drive();

  //calculator

  const calculator={

    add:function(num1,num2){
        console.log("addition is:"(num1+num2));
    },
    sub:function(num1,num2){
        console.log("subtraction is:"(num1-num2));
    },
    mul:function(num1,num2){
        console.log("multiplication is:"(num1*num2));
    },
    div:function(num1,num2){
        if(num2==0){
            console.log("Error:divisible by Zero");
        }
        console.log("division is:"(num1/num2));
            
    
    },
}
calculator.add(20,30);
calculator.sub(40,34);
calculator.mul(50,80);
calculator.div(60,20);






