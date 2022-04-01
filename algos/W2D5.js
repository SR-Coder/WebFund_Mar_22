var theDojo = [ [1, 0, 1, 1, 1, 0, 4, 0, 8, 0],
                [3, 1, 0, 7, 0, 0, 6, 0, 8, 8],
                [5, 0, 7, 0, 3, 6, 6, 6, 0, 0],
                [2, 3, 0, 9, 0, 0, 6, 0, 8, 0],
                [6, 0, 3, 3, 0, 2, 0, 3, 0, 4],
                [0, 0, 3, 3, 0, 0, 2, 2, 3, 0],
                [0, 0, 0, 0, 5, 0, 1, 2, 0, 6],
                [2, 2, 2, 2, 0, 7, 1, 1, 1, 0],
                [5, 2, 0, 2, 0, 0, 0, 1, 1, 2],
                [9, 2, 2, 2, 0, 7, 0, 1, 1, 0] ];

    
// Creates the rows of buttons for this game

    
// TODO - Make this function tell us how many ninjas are hiding 
//        under the adjacent (all sides and corners) squares.
//        Use i and j as the indexes to check theDojo.
function howMany(i, j) {
  // console.log({i, j});
    /*
        [a,b,c]
        [d,e,f]
        [g,h,k]

        [(i-1,j-1), (i-1, j), (i-1, j+1)]
        [(1,j-1),   (1, j),     (i, j+1)]
        [(i+1,j-1), (i+1, j+1), (i+1, j+1)]

    */
    let subArr = [
      {"r":i-1, 'c':j-1}, 
      {"r":i-1, "c":j}, 
      {"r":i-1, "c": j+1}, 
      {"r":i, "c":j-1}, 
      // {"r":i, "c":j},
      {"r":i, "c":j+1}, 
      {"r":i+1, "c":j-1 }, 
      {"r":i+1, "c":j}, 
      {"r":i+1, "c":j+1}
    ]

    let newTot = 0;
    for(let x=0; x<subArr.length;x++){
      if(subArr[x]["r"]<0 || subArr[x]["c"]<0 || subArr[x]["r"]>9 || subArr[x]["c"]>9){
          console.log("invalid -->", subArr[x]);     
      } else {
        console.log("Valid --> ", subArr[x]);
        newTot += theDojo[subArr[x]["r"]][subArr[x]["c"]];
      }
      
    }
    console.log("NEW TOT --> ", newTot);

   let myNums = {};
   let totalVal = 0;
    // let a=0, b=0, c=0, d=0, f=0, g=0, h=0, k=0;
        if(i>0 && j>0){
          myNums["a"] = theDojo[i-1][j-1];
        }
        if(i>0){
          myNums["b"] = theDojo[i-1][j];
          if(j<9){
            myNums["c"] = theDojo[i-1][j+1];
          }
        }
        if(j>0){
          myNums["d"] = theDojo[i][j-1];
          if(i<9){
            myNums["g"] = theDojo[i+1][j-1];
          }
        }

        if(j<9){
          myNums["f"] = theDojo[i][j+1];
        }
        if(i<9){
          myNums["h"] = theDojo[i+1][j];
        }
        if(j<9 && i<9){
          myNums["k"] = theDojo[i+1][j+1]  
        }
      
        // console.log(myNums);

        for(key in myNums){
          totalVal+=myNums[key];
        }       

        return totalVal
        
   }



  

console.log(howMany(9,9));

    
  