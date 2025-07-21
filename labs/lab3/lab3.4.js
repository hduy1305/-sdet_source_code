
let array1 = [1, 12, 16, 28, 34];
let array2 = [1, 13, 16, 27, 99];
let arrayAns = mergeArray(array1, array2);

console.log(`Merge 2 Sorted Arrays: ${arrayAns}`);


function mergeArray(arr1, arr2){
    let resultArray = [];
    let j = 0;
    let i = 0;
    resultArray.push(array2[j]);
    if(array1[i] > array2[j]){
        for(i;i<array1.length;){
            j++;
        }
        if(array1[i] <= array2[j]){
            resultArray.push(array1[i]);
            i++;
        }
    }
    return resultArray;
}

