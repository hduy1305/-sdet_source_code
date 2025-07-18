let input = [12, 34, 1, 16, 28]

let SortedInput = sortArray(input);
console.log(`Output: ${SortedInput}`);

function sortArray(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i] >= arr[j]){
                let tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            }
        }
    }
    return arr;
}