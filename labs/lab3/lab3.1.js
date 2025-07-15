
let intArr = [1, 2, 3, 4, 5];
let countOdd = 0;
let countEven = 0;

for(let i=0;i<intArr.length;i++){
    if(intArr[i] % 2 === 0){
        countEven++;
    }else{
        countOdd++;
    }
}
console.log("Even Numbers: " + countEven);
console.log("Odd Numbers: "+ countOdd);
