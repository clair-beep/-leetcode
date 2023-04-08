function generateMatrix(n) {
  const matrix = [];
  for (let i = 0; i < n; i++) {
    matrix.push(new Array(n));
  }

  let top = 0,
    bottom = n - 1,
    left = 0,
    right = n - 1;
  let num = 1;

  while (top <= bottom && left <= right) {
    // Traverse right
    for (let i = left; i <= right; i++) {
      matrix[top][i] = num++;
    }
    top++;

    // Traverse down
    for (let i = top; i <= bottom; i++) {
      matrix[i][right] = num++;
    }
    right--;

    // Traverse left
    for (let i = right; i >= left; i--) {
      matrix[bottom][i] = num++;
    }
    bottom--;

    // Traverse up
    for (let i = bottom; i >= top; i--) {
      matrix[i][left] = num++;
    }
    left++;
  }

  return matrix;
}
