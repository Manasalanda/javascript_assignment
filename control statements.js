let array=["c","c++","python","java","javascript"];
console.log(array);
console.log(array[3]);

///iterate over an array of elements using a 'for' loop anf print each number

let numbers=[2,4,6,8,10];
for(let i=0;i<numbers.length;i++)
{
    console.log(numbers[i]);
    
}

///iterate over an array of strings using a 'for' loop anf print each string

let n=0;
let arrayName=["c","c++","python","java","javascript"];
while(n<arrayName.length)
{
    console.log(arrayName[n]);
    n++;
}


//use a for loop to find sum of all numbers in an array

const arr=[20,56,38,23,67];
let sum=0;
for(let i=0;i<arr.length;i++)
{
    sum=sum+arr[i];

}
console.log("sum:"+sum);


///break statement
for(let i=0;i<10;i++)
{
    if(i==6)
    {
        break;
    }
    console.log(i);

}

//continue statement
for(let i=0;i<10;i++)
{
    if(i==6)
    {
        continue;
    }
    console.log(i);
}