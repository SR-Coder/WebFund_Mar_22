var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0,5, -2];

// 1. loop through the arry  [x]
// 2. determine if the number is positive. [x]
// 3. add 1 to the count positives []
    
// your code here!
for(var i=0; i < numbers.length; i++) {
    if(numbers[i] > 0){
        console.log("i did it!!!!");
        countPositives++;
    }
}
    
console.log("there are " + countPositives + " positive values");