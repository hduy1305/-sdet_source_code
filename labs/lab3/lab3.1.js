
let intArr = [1, 2, 3, 4, 5];
let evenNumbers = countEven(intArr);
let oddNumbers = intArr.length - evenNumbers;

console.log(`Even Numbers: ${evenNumbers}`);
console.log(`Odd Numbers: ${oddNumbers}`);

function countEven(arr){
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            count++;
        }
    }
    return count;
};