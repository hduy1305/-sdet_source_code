
let intArr = [1, 2, 3, 4, 5];
let EvenNumbers = countEven(intArr);
let OddNumbers = intArr.length - EvenNumbers;

console.log(`Even Numbers: ${EvenNumbers}`);
console.log(`Odd Numbers: ${OddNumbers}`);

function countEven(arr){
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            count++;
        }
    }
    return count;
};