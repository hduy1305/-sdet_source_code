let Input = [12, 34, 1, 16, 28]

for(let i=0;i<Input.length-1;i++){
    for(let j=i+1;j<Input.length;j++){
        if(Input[i] > Input[j]){
        let tmp = Input[i];
        Input[i] = Input[j];
        Input[j] = tmp;
        }
    }   
}

console.log(`Output: ${Input}`);