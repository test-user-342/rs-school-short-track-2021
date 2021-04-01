/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const rl = matrix[0].map((it) => it !== 0);
  return matrix.reduce((ia, it) => ia + it.reduce((ja, jt, j) => {
    if (jt === 0) {
      rl[j] = false;
    }
    return rl[j] ? jt + ja : ja;
  }, 0), 0);
}

module.exports = getMatrixElementsSum;
