let array1 = [1, 12, 16, 28, 34];
let array2 = [1, 13, 16, 27, 99];
let arrayAns = [];


let j = 0;
let i = 0;
for(i;i<array1.length;){
    if(array1[i] > array2[j]){
        arrayAns.push(array2[j]);
        j++;
    }
    if(array1[i] <= array2[j]){
        arrayAns.push(array1[i]);
        i++;
    }
}

console.log(`Answer: ${arrayAns}`)