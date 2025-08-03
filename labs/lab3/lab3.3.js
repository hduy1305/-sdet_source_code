let input = [12, 34, 1, 16, 28]
// bubble sort algorithm .

let currentIndex = 0;
let unsortedPosition = input.length - 1;

for(let i = unsortedPosition; i>0;i--){
    for(let j = currentIndex;j < unsortedPosition;j++){
        if(input[j] > input[j+1]){
            let tmp = input[j];
            input[j] = input[j+1];
            input[j+1] = tmp;
        }
    }
}
console.log(`Input: ${input}`);

let sortedInput = sortArray(input);
console.log(`Output: ${sortedInput}`);

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

let NonHostingFunction = function(){
    console.log("This is a non-hosting function.");
}