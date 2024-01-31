// Original matrix (list of lists)
const originalMatrix = [
    [3, 2, 1],
    [4, 5, 6],
    [7, 9, 8]
  ];
  
  const newMatrix = originalMatrix.map((row) => {
    // fix :
    // the row is again a reference type (list) therefore, both matrix are affected.
    // so, we create new copy of the row also, like as follows.
    return row.slice().sort(function(a,b) { return a-b});
  });
  
  // Modifying the original matrix (changing the last element of the first row)
  originalMatrix[0][2] = 99;
  
  // Displaying the original and new matrices
  console.log('Original Matrix (modified):', originalMatrix);
  console.log('New Matrix (unaffected):', newMatrix);
  