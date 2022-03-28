let myArr = ["a", "b", "c", "d", "e"];

// 1. create a function (that accepts an array) [x]
// 2. create some variables [x]
// 3. loop through the array [ ]
// 4. swap the first and last [ ]
// 5. return the array [ ]

function reverseArr(arr){
    let temp = null;
    let tempArr = arr;
    console.log("OG ARR", myArr);
    for(let i = 0; i < arr.length / 2; i++){
        temp = tempArr[i];  //this is the value on the left
        tempArr[i] = tempArr[arr.length-1-i];
        tempArr[arr.length-1-i] = temp;
    }
    console.log("OG Arr", myArr);
}

// reverseArr(myArr);

function revCopy(arr){
    let newArr = [];
    for(let i=arr.length-1; i>=0; i--){
        newArr.push(arr[i])
    }
    console.log(newArr);
}

revCopy(myArr)
console.log(myArr);