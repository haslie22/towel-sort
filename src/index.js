module.exports = function towelSort (matrix) {
return matrix = (matrix === undefined) ? [] : matrix.map((item, index) => index % 2 === 1 ? matrix[index].reverse() : matrix[index]).flat();
}
